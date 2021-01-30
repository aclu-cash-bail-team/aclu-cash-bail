import * as d3 from "d3";
import { feature } from "topojson";
import { COUNTY_MAP_DATA } from "../data.js";

const MAP_SCALE_FACTOR = 40;
const MAP_TRANSFORM = {
  "scale":[
    0.0016 * MAP_SCALE_FACTOR,
    0.0013 * MAP_SCALE_FACTOR
  ],
  "translate":[
    -135,
    -50
  ]
};

const PHILADELPHIA_X = 643;
const PHILADELPHIA_Y = 359;
const HARRISBURG_X = 477;
const HARRISBURG_Y = 319;
const PITTSBURGH_X = 170;
const PITTSBURGH_Y = 310;
const CITY_LABEL_OFFSET_Y = 15;

class Legend {
  constructor(id, colorDomain, labels, color, averages, title, onMouseOver, onMouseOut) {
    this.colorDomain = colorDomain;
    this.labels = labels;
    this.color = color;
    this.averages = averages;
    this.title = title;
    this.onMouseOver = onMouseOver;
    this.onMouseOut = onMouseOut;

    this.legendSectionWidth = 50;
    this.legendSectionHeight = 10;
    this.legendOffsetX = 5;
    this.legendOffsetY = 20;
    this.legendLabelOffsetX = this.legendOffsetX - 4;
    this.legendLabelOffsetY = this.legendOffsetY + 22;

    this.svg = d3.select(`#${id} .legend`).append("svg")
      .attr("width", this.legendSectionWidth * this.colorDomain.length + 20)
      .attr("height", 70);
  }

  highlightBar(bucket) {
    // darken other legend bars
    this.svg.selectAll(`rect:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
    // darken other legend labels, except for the start & end of highlighted bar
    this.svg.selectAll(`.legend-text:not([data-bucket*="${bucket}"])`).style("opacity", "0.4");
  }

  resetHighlight() {
    this.svg.selectAll("rect").style("opacity", "1");
    this.svg.selectAll("text").style("opacity", "1");
  }

  render() {
    const legend = this.svg.selectAll("g")
      .data(this.labels.slice(0, this.labels.length - 1))
      .enter().append("g")
      .attr("class", "legend")
      .attr("data-label", d => d);
    // Add colored bars
    legend.append("rect")
      .attr("x", (_, i) => this.legendOffsetX + i*this.legendSectionWidth)
      .attr("y", this.legendOffsetY)
      .attr("width", this.legendSectionWidth)
      .attr("height", this.legendSectionHeight)
      .attr("data-bucket", (_, i) => this.labels[i + 1])
      .style("fill", d => this.color(d))
      .on("mouseover", event => {
        this.onMouseOver(event);
      })
      .on("mouseout", () => {
        this.onMouseOut();
      });
    // Add labels
    legend.append("text")
      .attr("x", (_, i) => this.legendLabelOffsetX + i*this.legendSectionWidth)
      .attr("y", this.legendLabelOffsetY)
      .attr("class", "legend-text")
      .attr("data-bucket", d => {
        const color = this.color(d);
        const [start, end] = this.color.invertExtent(color);
        return `${start}-${end}`;
      })
      .text((_, i) => `${this.labels[i]}`);
    // Set up legend max label
    this.svg.select(`g[data-label="${this.labels[this.labels.length - 2]}"]`)
      .append("text")
      .attr("x", this.legendLabelOffsetX  + (this.labels.length-1)*this.legendSectionWidth)
      .attr("y", this.legendLabelOffsetY)
      .attr("class", "legend-text")
      .attr("data-bucket", this.labels[this.labels.length - 1])
      .text(this.labels[this.labels.length - 1]);
    // Set up average label
    const legendWidth = this.legendSectionWidth * this.colorDomain.length;
    const maxValue = this.colorDomain[this.colorDomain.length - 1];
    this.averages.forEach(avg => {
      const avgOffsetX = this.legendOffsetX + legendWidth * avg.value / maxValue;
      this.svg.append("line")
        .attr("x1", avgOffsetX)
        .attr("x2", avgOffsetX)
        .attr("y1", this.legendOffsetY + 10)
        .attr("y2", this.legendOffsetY - 5)
        .attr("class", "legend-avg-line");
      this.svg.append("text")
        .attr("x", avgOffsetX - 20)
        .attr("y", this.legendOffsetY - 10)
        .attr("class", "legend-avg-label")
        .text(avg.label);
      // Add title, if any
      this.svg.append("text")
        .attr("x", legendWidth/2 - 25)
        .attr("y", this.legendOffsetY + 40)
        .attr("class", "legend-text")
        .text(this.title);
    });
  }

}

class Map {
  constructor(selector, width, height) {
    this.svg = d3.select(selector).append("svg")
      .attr("width", width)
      .attr("height", height);
  }

  renderCities() {
    // Philadelphia
    this.svg.append("circle")
      .attr("cx", PHILADELPHIA_X)
      .attr("cy", PHILADELPHIA_Y)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("x", PHILADELPHIA_X - 43)
      .attr("y", PHILADELPHIA_Y - CITY_LABEL_OFFSET_Y)
      .attr("class", "city-label")
      .text("Philadelphia");

    // Harrisburg
    this.svg.append("circle")
      .attr("cx", HARRISBURG_X)
      .attr("cy", HARRISBURG_Y)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("x", HARRISBURG_X - 29)
      .attr("y", HARRISBURG_Y - CITY_LABEL_OFFSET_Y)
      .attr("class", "city-label")
      .text("Harrisburg");

    // Pittsburgh
    this.svg.append("circle")
      .attr("cx", PITTSBURGH_X)
      .attr("cy", PITTSBURGH_Y)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("x", PITTSBURGH_X - 27)
      .attr("y", PITTSBURGH_Y - CITY_LABEL_OFFSET_Y)
      .attr("class", "city-label")
      .text("Pittsburgh");
  }

  renderPA(features, path) {
    return this.svg.append("g")
      .attr("class", "county")
      .selectAll("path")
      .data(features)
      .enter().append("path")
      .attr("d", path)
      .on("mouseover", this.onMouseOver.bind(this))
      .on("mouseout", this.onMouseOut.bind(this));
  }

  onMouseOver(event) {
    this.showTooltip(event);
  }

  onMouseOut() {
    this.hideTooltip();
  }

  showTooltip(event) {
    this.tooltip.style("opacity", 1);
    this.tooltip
      .style("left", `${event.pageX - 100}px`)
      .style("top", `${event.pageY - 70}px`);
  }

  hideTooltip() {
    this.tooltip.style("opacity", 0);
  }

  render() {
    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);

    const countyTopoJson = JSON.parse(JSON.stringify(COUNTY_MAP_DATA));
    countyTopoJson.transform = MAP_TRANSFORM;
    const features = feature(countyTopoJson, countyTopoJson.objects["cb_2015_pennsylvania_county_20m"]).features;

    this.tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);


    this.renderPA(features, path);
  }
}

export class BailRateMap extends Map {
  constructor(id, data, average) {
    super(`#${id} .map`, 800, 500);
    this.data = data;

    const colorDomain = [10, 20, 30, 40, 50, 60];
    this.color = d3.scaleThreshold().domain(colorDomain).range([
      "#182935", "#215f5d", "#1b9b88", "#0fc59b", "#0fda92", "#00ed89"
    ]);

    const onLegendMouseOver = (event) => {
      this.highlightBar(event);
      this.highlightMap(event);
    };
    const onLegendMouseOut = () => this.resetHighlight();
    onLegendMouseOver.bind(this);
    onLegendMouseOut.bind(this);

    this.legend = new Legend(id,
      colorDomain,
      [0, 10, 20, 30, 40, 50, 60],
      this.color,
      [{
        value: average,
        label: `Avg: ${average}%`
      }],
      "",
      onLegendMouseOver,
      onLegendMouseOut
    );

    this.render();
  }

  onMouseOver(event) {
    super.onMouseOver(event);
    d3.select(event.srcElement).style("stroke-width", "2px");
    this.highlightBar(event);
  }

  onMouseOut(event) {
    super.onMouseOut();
    d3.select(event.srcElement).style("stroke-width", "0.5px");
    this.resetHighlight();
  }

  showTooltip(event) {
    super.showTooltip(event);
    const countyElement = event.srcElement;
    const countyName = countyElement.getAttribute("data-county-name");
    const countyRate = countyElement.getAttribute("data-rate");
    this.tooltip
      .style("left", `${event.pageX - 100}px`)
      .style("top", `${event.pageY - 70}px`)
      .html(`
        <h3 class="tooltip-name">${countyName}</h3>
        <table>
          <tbody>
            <tr>
              <td>Cash Bail Rate</td>
              <td style="text-align: right; font-weight: 700;">${`${Math.round(countyRate * 100) / 100}%`}</td>
            </tr>
          </tbody>
        </table>
      `);
  }


  highlightBar(event) {
    const bucket = Number(event.srcElement.getAttribute("data-bucket"));
    this.legend.highlightBar(bucket);
  }

  highlightMap(event) {
    const bucket = event.srcElement.getAttribute("data-bucket");
    this.svg.selectAll(`path:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
  }

  resetHighlight() {
    this.legend.resetHighlight();
    this.svg.selectAll("path").style("opacity", "1");
  }

  renderPA(features, path) {
    this.data.forEach(row => {
      const countyName = row.data[0];
      const cashBailRate = row.data[2];
      const feature = features.find(f => f.properties["NAME"] === countyName);
      feature.properties.rate = cashBailRate;
      feature.properties.color = this.color(cashBailRate);
      feature.properties.bucket = this.color.invertExtent(feature.properties.color)[1];
    });
    const paths = super.renderPA(features, path);
    paths.style("fill", feature => feature.properties.color)
      .attr("data-bucket", feature => feature.properties.bucket)
      .attr("data-county-name", feature => feature.properties["NAME"])
      .attr("data-rate", feature => feature.properties.rate);

    this.legend.render();

    this.renderCities();
  }
}

class BailRaceMap extends Map {
  constructor(selector, width, height, data, color, dataIdx, race, parent) {
    super(selector, width, height);
    this.data = data;
    this.dataIdx = dataIdx;
    this.race = race;
    this.parent = parent;
    this.color = color;
  }

  // Called by parent
  _onMouseOver(countyName, x, y) {
    const element = document.querySelector(`path[data-county-name="${countyName}"][data-race="${this.race}"]`);
    this.svg.selectAll(`path[data-county-name="${countyName}"]`).style("stroke-width", "2px");
    this.showTooltip(countyName, element.getAttribute("data-rate"), x, y);
  }
  _onMouseOut(countyName) {
    super.onMouseOut();
    this.svg.selectAll(`path[data-county-name="${countyName}"]`).style("stroke-width", "0.5px");
  }

  showTooltip(countyName, countyRate, x, y) {
    // Requires subclass to know about superclass, making superclass harder to change
    // TODO: See if this can be done better
    super.showTooltip({
      pageX: x,
      pageY: y
    });
    this.tooltip
      .style("left", `${x - 100}px`)
      .style("top", `${y - 70}px`)
      .html(`
        <h3 class="tooltip-name">${countyName}</h3>
        <table>
          <tbody>
            <tr>
              <td>Cash Bail Race</td>
              <td style="text-align: right; font-weight: 700;">${`${Math.round(countyRate * 100) / 100}%`}</td>
            </tr>
          </tbody>
        </table>
      `);
  }

  highlightMap(bucket) {
    this.svg.selectAll(`path:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
  }

  resetHighlight() {
    this.svg.selectAll("rect").style("opacity", "1");
    this.svg.selectAll("text").style("opacity", "1");
    this.svg.selectAll("path").style("opacity", "1");
  }

  onMouseOver(event) {
    this.parent.onChildMouseOver(event, this.race);
  }

  onMouseOut(event) {
    this.parent.onChildMouseOut(event);
  }

  renderPA(features, path) {
    this.data.forEach(row => {
      const countyName = row.data[0];
      const cashBailRate = row.data[this.dataIdx];
      const feature = features.find(f => f.properties["NAME"] === countyName);
      feature.properties.rate = cashBailRate;
      feature.properties.color = this.color(cashBailRate);
      if (row.outlier) {
        feature.properties.color = "#303030";
      }
      feature.properties.bucket = this.color.invertExtent(feature.properties.color)[1];
    });
    const paths = super.renderPA(features, path);
    paths.style("fill", feature => feature.properties.color)
      .attr("data-bucket", feature => feature.properties.bucket)
      .attr("data-county-name", feature => feature.properties["NAME"])
      .attr("data-rate", feature => feature.properties.rate)
      .attr("data-race", () => this.race);

    this.renderCities();
  }
}


export class RaceMapContainer {
  constructor(id, data, whiteAverage, blackAverage) {
    this.width = 800;
    this.height = 500;

    const colorDomain = [20, 40, 60, 80, 100];
    const color = d3.scaleThreshold().domain(colorDomain).range([
      "#CC2FFF", "#B08CF0", "#7AC7DF", "#5DDAB5", "#00ED89"
    ]);

    this.black = new BailRaceMap(`#${id} #black.map`, this.width, this.height, data, color, 2, "black", this);
    this.white = new BailRaceMap(`#${id} #white.map`, this.width, this.height, data, color, 3, "white", this);

    const onLegendMouseOver = (event) => {
      this.highlightBar(event);
      this.highlightMap(event);
    };
    const onLegendMouseOut = () => this.resetHighlight();
    onLegendMouseOver.bind(this);
    onLegendMouseOut.bind(this);

    this.legend = new Legend(id,
      colorDomain,
      [0, 20, 40, 60, 80, 100],
      color,
      [{
        value: whiteAverage,
        label: `White: ${whiteAverage}%`
      },
      {
        value: blackAverage,
        label: `Black: ${blackAverage}%`
      }
      ],
      "",
      onLegendMouseOver,
      onLegendMouseOut
    );

    this.render();
  }

  onChildMouseOver(event, race) {
    const countyName = event.srcElement.getAttribute("data-county-name");
    // TODO: Fix this awful hack
    if (race == "black") {
      this.black._onMouseOver(countyName, event.pageX, event.pageY);
      this.white._onMouseOver(countyName, event.pageX + this.width, event.pageY);
    } else if (race == "white") {
      this.black._onMouseOver(countyName, event.pageX - this.width, event.pageY);
      this.white._onMouseOver(countyName, event.pageX, event.pageY);
    }
    this.highlightBar(event);
  }

  onChildMouseOut(event) {
    const countyName = event.srcElement.getAttribute("data-county-name");
    this.black._onMouseOut(countyName);
    this.white._onMouseOut(countyName);
    this.resetHighlight();
  }


  highlightBar(event) {
    const bucket = Number(event.srcElement.getAttribute("data-bucket"));
    this.legend.highlightBar(bucket);
  }

  highlightMap(event) {
    const bucket = event.srcElement.getAttribute("data-bucket");
    this.black.highlightMap(bucket);
    this.white.highlightMap(bucket);
  }

  resetHighlight() {
    this.black.resetHighlight();
    this.white.resetHighlight();
    this.legend.resetHighlight();
  }

  render() {
    this.legend.render();
    this.black.render();
    this.white.render();
  }
}

export class BailPostingMap extends Map {
  constructor(id, data, average) {
    super(`#${id} .map`, 800, 500);
    this.data = data;

    const colorDomain = [20, 40, 60, 80, 100];
    this.color = d3.scaleThreshold().domain(colorDomain).range([
      "#CC2FFF", "#B08CF0", "#7AC7DF", "#5DDAB5", "#00ED89"
    ]);

    this.spikeScale = d3.scaleLinear([0, 70], [0, 100]);

    const onLegendMouseOver = (event) => {
      this.highlightBar(event);
      this.highlightMap(event);
    };
    const onLegendMouseOut = () => this.resetHighlight();
    onLegendMouseOver.bind(this);
    onLegendMouseOut.bind(this);

    this.legend = new Legend(id,
      colorDomain,
      [0, 20, 40, 60, 80, 100],
      this.color,
      [{
        value: average,
        label: `Avg: ${average}%`
      }],
      "Non-Posting Rate",
      onLegendMouseOver,
      onLegendMouseOut
    );

    this.render();
  }

  onMouseOver(event) {
    super.onMouseOver(event);
    d3.select(event.srcElement).style("stroke-width", "2px");
    this.highlightBar(event);
  }

  onMouseOut(event) {
    super.onMouseOut();
    d3.select(event.srcElement).style("stroke-width", "0.5px");
    this.resetHighlight();
  }

  showTooltip(event) {
    super.showTooltip(event);
    const countyElement = event.srcElement;
    const countyName = countyElement.getAttribute("data-county-name");
    const countyAmount = countyElement.getAttribute("data-bail-amount");
    this.tooltip
      .style("left", `${event.pageX - 100}px`)
      .style("top", `${event.pageY - 70}px`)
      .html(`
        <h3 class="tooltip-name">${countyName}</h3>
        <table>
          <tbody>
            <tr>
              <td>Bail Amount</td>
              <td style="text-align: right; font-weight: 700;">${countyAmount}</td>
            </tr>
          </tbody>
        </table>
      `);
  }


  highlightBar(event) {
    const bucket = Number(event.srcElement.getAttribute("data-bucket"));
    this.legend.highlightBar(bucket);
  }

  highlightMap(event) {
    const bucket = event.srcElement.getAttribute("data-bucket");
    this.svg.selectAll(`path:not([data-bucket="${bucket}"])`).style("opacity", "0.2");
  }

  resetHighlight() {
    this.legend.resetHighlight();
    this.svg.selectAll("path").style("opacity", "1");
  }

  renderPA(features, path) {
    this.data.forEach(row => {
      const countyName = row.data[0];
      const bailAmount = row.data[1];
      const nonPostingRate = row.data[2];
      const feature = features.find(f => f.properties["NAME"] === countyName);
      feature.properties.rate = nonPostingRate;
      feature.properties.amount = bailAmount;
      feature.properties.color = this.color(nonPostingRate);
      feature.properties.bucket = this.color.invertExtent(feature.properties.color)[1];
      feature.properties.position = path.centroid(feature);
    });

    const paths = super.renderPA(features, path);
    paths.style("fill", "#1a1a1a")
      .attr("data-county-name", feature => feature.properties["NAME"])
      .attr("data-rate", feature => feature.properties.rate)
      .attr("data-bail-amount", feature => feature.properties.amount)
      .attr("data-bucket", feature => feature.properties.bucket);


    const spike = (length, width = 5) => `M${-width / 2},0L0,${-length}L${width / 2},0`;
    this.svg.append("g")
      .selectAll("path")
      .data(features
        .sort((a, b) => d3.ascending(a.properties.position[1], b.properties.position[1])
            || d3.ascending(a.properties.position[0], b.properties.position[0])))
      .join("path")
      .attr("transform", feature => {
        return `translate(${feature.properties.position})`;
      })
      .attr("d", feature => spike(this.spikeScale(Number(feature.properties.amount.replace(/[^\d.-]/g, "")))))
      .attr("fill", feature => feature.properties.color)
      .attr("stroke", feature => feature.properties.color)
      .attr("data-bucket", feature => feature.properties.bucket);

    this.legend.render();

    this.renderCities();
  }
}