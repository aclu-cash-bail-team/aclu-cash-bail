import * as d3 from "d3";
import { feature } from "topojson";
import { COUNTY_MAP_DATA } from "../data.js";

// TODO: Support mobile sizings
const MAP_WIDTH = 600;
const MAP_HEIGHT = 400;

const TOOLTIP_WIDTH = 100;
const TOOLTIP_HEIGHT = 70;

class ColorScaleLegend {
  constructor(id, colorDomain, labels, color, averages, onMouseOver, onMouseOut, title = "") {
    this.colorDomain = colorDomain;
    this.labels = labels;
    this.color = color;
    this.averages = averages;
    this.title = title;
    this.onMouseOver = onMouseOver;
    this.onMouseOut = onMouseOut;

    this.sectionWidth = 50;
    this.sectionHeight = 10;
    this.offsetX = 5;
    this.offsetY = 85;
    this.labelOffsetX = this.offsetX - 4;
    this.labelOffsetY = this.offsetY + 22;
    this.legendWidth = this.sectionWidth * this.colorDomain.length;

    // TODO: Support mobile sizings
    const svgWidth = this.legendWidth + 20;
    const svgHeight = this.sectionHeight + this.labelOffsetY + 10;
    this.svg = d3.select(`#${id} .legend`).append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);
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
      .attr("x", (_, i) => this.offsetX + i*this.sectionWidth)
      .attr("y", this.offsetY)
      .attr("width", this.sectionWidth)
      .attr("height", this.sectionHeight)
      .attr("data-bucket", (_, i) => this.labels[i + 1])
      .style("fill", d => this.color(d))
      .on("mouseover", event => {
        this.onMouseOver(event);
      })
      .on("mouseout", () => {
        this.onMouseOut();
      });
    // Add labels
    const legendTextClassName = "legend-text";
    legend.append("text")
      .attr("x", (_, i) => this.labelOffsetX + i*this.sectionWidth)
      .attr("y", this.labelOffsetY)
      .attr("class", legendTextClassName)
      .attr("data-bucket", d => {
        const color = this.color(d);
        const [start, end] = this.color.invertExtent(color);
        return `${start}-${end}`;
      })
      .text((_, i) => `${this.labels[i]}`);
    // Set up legend max label
    this.svg.select(`g[data-label="${this.labels[this.labels.length - 2]}"]`)
      .append("text")
      .attr("x", this.labelOffsetX  + (this.labels.length-1)*this.sectionWidth)
      .attr("y", this.labelOffsetY)
      .attr("class", legendTextClassName)
      .attr("data-bucket", this.labels[this.labels.length - 1])
      .text(this.labels[this.labels.length - 1]);
    // Set up average label
    const maxValue = this.colorDomain[this.colorDomain.length - 1];
    this.averages.forEach(avg => {
      const avgOffsetX = this.offsetX + this.legendWidth * avg.value / maxValue;
      const legendLineClassName ="legend-avg-line";
      this.svg.append("line")
        .attr("x1", avgOffsetX)
        .attr("x2", avgOffsetX)
        .attr("y1", this.offsetY + 10)
        .attr("y2", this.offsetY - 5)
        .attr("class", legendLineClassName);
      this.svg.append("text")
        .attr("x", avgOffsetX - 10)
        .attr("y", this.offsetY - 20)
        .attr("class", legendTextClassName)
        .text(avg.label);
      this.svg.append("text")
        .attr("x", avgOffsetX - 10)
        .attr("y", this.offsetY - 10)
        .attr("class", legendTextClassName)
        .text(`${avg.value}%`);
      // Add title, if any
      this.svg.append("text")
        .attr("x", this.legendWidth/2 - 25)
        .attr("y", this.offsetY + 40)
        .attr("class", legendTextClassName)
        .text(this.title);
    });
  }
}

class SpikeLegend {
  constructor(id, title, values, getSpike) {
    this.title = title;
    this.values = values;
    this.getSpike = getSpike;

    this.spikeOffsetY = 110;
    this.spikeOffsetX = 25;
    this.spikeSpacingX = 30;

    this.svg = d3.select(`#${id} .spike-legend`).append("svg")
      .attr("width", 125)
      .attr("height", this.spikeOffsetY + 25);
  }

  render() {
    this.svg.append("g")
      .selectAll("path")
      .data(this.values).enter()
      .append("path")
      .attr("d", this.getSpike)
      .attr("transform", (_, i) => {
        return `translate(${i * this.spikeSpacingX + this.spikeOffsetX}, ${this.spikeOffsetY})`;
      })
      .attr("fill", "#404040")
      .attr("stroke", "#1a1a1a")
      .attr("opacity", 1);
    // Add spike labels
    this.svg.append("g")
      .selectAll("path")
      .data(this.values)
      .join("text")
      .attr("x", (_, i) => i * this.spikeSpacingX + this.spikeOffsetX/2)
      .attr("y", (_, i) => (this.values.length - i - 1) * 30 + 15)
      .attr("class", "legend-text")
      .text(d => d);
    // Add title
    this.svg.append("text")
      .attr("x", 10)
      .attr("y", this.spikeOffsetY + 20)
      .attr("class", "legend-text")
      .text(this.title);
  }
}

class Map {
  constructor(selector) {
    this.svg = d3.select(selector).append("svg")
      .attr("width", MAP_WIDTH)
      .attr("height", MAP_HEIGHT);

    this.projection = d3.geoMercator().scale(5500).center([-75.75, 40.5]);
  }

  renderCity(name, coords, labelCoords) {
    this.svg.append("circle")
      .attr("transform", `translate(${this.projection(coords)})`)
      .attr("r", 4)
      .attr("fill", "white");
    this.svg.append("text")
      .attr("transform", `translate(${this.projection(labelCoords)})`)
      .attr("class", "city-label")
      .text(name);
  }

  renderCities() {
    this.renderCity("Philadelphia", [-75.4, 39.9], [-75.75, 40]);
    this.renderCity("Harrisburg", [-76.9, 40.3], [-77.15, 40.375]);
    this.renderCity("Pittsburgh", [-80, 40.44], [-80.25, 40.3]);
  }

  renderPA(features, path) {
    return this.svg.append("g")
      .attr("class", "county")
      .selectAll("path")
      .data(features)
      .enter().append("path")
      .attr("d", path)
      .attr("class", "county-path")
      .on("mouseover", this.onMouseOver.bind(this))
      .on("mouseout", this.onMouseOut.bind(this));
  }

  onMouseOver(event) {
    this.showTooltip(event.pageX, event.pageY);
  }

  onMouseOut() {
    this.hideTooltip();
  }

  showTooltip(pageX, pageY) {
    this.tooltip.style("opacity", 1);
    this.tooltip
      .style("left", `${pageX - 100}px`)
      .style("top", `${pageY - 70}px`);
  }

  hideTooltip() {
    this.tooltip.style("opacity", 0);
  }

  render() {
    const path = d3.geoPath().projection(this.projection);

    const countyTopoJson = JSON.parse(JSON.stringify(COUNTY_MAP_DATA));
    const features = feature(countyTopoJson, countyTopoJson.objects["cb_2015_pennsylvania_county_20m"]).features;

    this.tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);


    this.renderPA(features, path);
  }
}

export class BailRateMap extends Map {
  constructor(id, data, average) {
    super(`#${id} .map`);
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

    this.legend = new ColorScaleLegend(id,
      colorDomain,
      [0, 10, 20, 30, 40, 50, 60],
      this.color,
      [{
        value: average,
        label: "Avg:"
      }],
      onLegendMouseOver,
      onLegendMouseOut
    );

    this.render();
  }

  onMouseOver(event) {
    this.showTooltip(event.pageX, event.pageY, event.srcElement);
    d3.select(event.srcElement).style("stroke-width", "2px");
    this.highlightBar(event);
  }

  onMouseOut(event) {
    super.onMouseOut();
    d3.select(event.srcElement).style("stroke-width", "0.5px");
    this.resetHighlight();
  }

  showTooltip(pageX, pageY, srcElement) {
    super.showTooltip(pageX, pageY);
    const countyElement = srcElement;
    const countyName = countyElement.getAttribute("data-county-name");
    const countyRate = countyElement.getAttribute("data-rate");
    this.tooltip
      .style("left", `${pageX - TOOLTIP_WIDTH}px`)
      .style("top", `${pageY - TOOLTIP_HEIGHT}px`)
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
  constructor(selector, data, color, dataIdx, race, parent) {
    super(selector);
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

  showTooltip(countyName, countyRate, pageX, pageY) {
    super.showTooltip(pageX, pageY);
    this.tooltip
      .style("left", `${pageX - TOOLTIP_WIDTH}px`)
      .style("top", `${pageY - TOOLTIP_HEIGHT}px`)
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
    const colorDomain = [20, 40, 60, 80, 100];
    const color = d3.scaleThreshold().domain(colorDomain).range([
      "#CC2FFF", "#B08CF0", "#7AC7DF", "#5DDAB5", "#00ED89"
    ]);

    this.black = new BailRaceMap(`#${id} #black.map`, data, color, 2, "black", this);
    this.white = new BailRaceMap(`#${id} #white.map`, data, color, 3, "white", this);

    const onLegendMouseOver = (event) => {
      this.highlightBar(event);
      this.highlightMap(event);
    };
    const onLegendMouseOut = () => this.resetHighlight();
    onLegendMouseOver.bind(this);
    onLegendMouseOut.bind(this);

    this.legend = new ColorScaleLegend(id,
      colorDomain,
      [0, 20, 40, 60, 80, 100],
      color,
      [{
        value: whiteAverage,
        label: "White:"
      },
      {
        value: blackAverage,
        label: "Black:"
      }
      ],
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
      this.white._onMouseOver(countyName, event.pageX + MAP_WIDTH, event.pageY);
    } else if (race == "white") {
      this.black._onMouseOver(countyName, event.pageX - MAP_WIDTH, event.pageY);
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
  constructor(id, data, average, upperBound) {
    super(`#${id} .map`);
    this.data = data;

    const colorDomain = [20, 40, 60, 80, 100];
    this.color = d3.scaleThreshold().domain(colorDomain).range([
      "#CC2FFF", "#B08CF0", "#7AC7DF", "#5DDAB5", "#00ED89"
    ]);

    this.spikeScale = d3.scaleLinear([0, upperBound], [0, 100]);

    const onLegendMouseOver = (event) => {
      this.highlightBar(event);
      this.highlightMap(event);
    };
    const onLegendMouseOut = () => this.resetHighlight();
    onLegendMouseOver.bind(this);
    onLegendMouseOut.bind(this);

    this.legend = new ColorScaleLegend(id,
      colorDomain,
      [0, 20, 40, 60, 80, 100],
      this.color,
      [{
        value: average,
        label: "Avg:"
      }],
      onLegendMouseOver,
      onLegendMouseOut,
      "Non-Posting Rate"
    );

    const spike = this.spikeShape.bind(this);
    this.spikeLegend = new SpikeLegend(id, "Average Bail Amount", ["$20K", "$40K", "$60K"], spike);
    this.spikeLegend.render();

    this.render();
  }

  onMouseOver(event) {
    this.showTooltip(event.pageX, event.pageY, event.srcElement);
    d3.select(event.srcElement).style("stroke-width", "2px");
    this.highlightBar(event);
  }

  onMouseOut(event) {
    super.onMouseOut();
    d3.select(event.srcElement).style("stroke-width", "0.5px");
    this.resetHighlight();
  }

  showTooltip(pageX, pageY, srcElement) {
    super.showTooltip(pageX, pageY);
    const countyElement = srcElement;
    const countyName = countyElement.getAttribute("data-county-name");
    const countyAmount = countyElement.getAttribute("data-bail-amount");
    this.tooltip
      .style("left", `${pageX - TOOLTIP_WIDTH}px`)
      .style("top", `${pageY - TOOLTIP_HEIGHT}px`)
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
    this.svg.selectAll("path").style("opacity", "0.2");
    this.svg.selectAll(`path.spike[data-bucket="${bucket}"`).style("opacity", "1");
  }

  resetHighlight() {
    this.legend.resetHighlight();
    this.svg.selectAll("path").style("opacity", "1");
  }

  spikeShape(bailAmount) {
    const length = this.spikeScale(Number(bailAmount.replace(/[^\d.-]/g, "")));
    const width = 5;
    return `M${-width / 2},0L0,${-length}L${width / 2},0`;
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

    // Render spikes
    this.svg.append("g")
      .selectAll("path")
      .data(features
        .sort((a, b) => d3.ascending(a.properties.position[1], b.properties.position[1])
            || d3.ascending(a.properties.position[0], b.properties.position[0])))
      .join("path")
      .attr("transform", feature => {
        return `translate(${feature.properties.position})`;
      })
      .attr("d", feature => this.spikeShape(feature.properties.amount))
      .attr("fill", feature => feature.properties.color)
      .attr("stroke", feature => feature.properties.color)
      .attr("class", "spike")
      .attr("data-bucket", feature => feature.properties.bucket);

    this.legend.render();
  }
}