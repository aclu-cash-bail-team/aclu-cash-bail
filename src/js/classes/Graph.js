import { configureTooltip } from "./Tooltip";
import { getSizing } from "../helpers";
import {
  SVG_NS,
  SMALL_PHONE,
  LARGE_PHONE,
  SMALL_BROWSER,
  REGULAR_WIDTH
} from "../constants";

class CountyPoint {
  constructor(
    data,
    county,
    xAxis,
    yAxis,
    radiusScale,
    outlier,
    showName,
    plot,
    renderTooltip,
    container
  ) {
    this.county = county;
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.radiusScale = radiusScale;
    this.outlier = outlier;
    this.showName = showName;
    this.plot = plot;
    this.container = container;
    this.renderTooltip = (elements, config) =>
      renderTooltip(elements, this.data, this.county, config);
    [this.xs, this.ys] = this.getPositions();
    this.rsDesktop = this.getRadiis(radiusScale?.desktop || radiusScale);
    this.rsMobile = this.getRadiis(radiusScale?.mobile || radiusScale);
    this.elements = [];
    this.tooltipTriggerTargets = [];
  }

  isOutlier() {
    return this.outlier;
  }

  getPositions() {
    const xs = [],
      ys = [];
    this.data.forEach((data) => {
      const xDiff = this.xAxis.max - this.xAxis.min;
      const yDiff = this.yAxis.max - this.yAxis.min;
      xs.push(`${((data.x - this.xAxis.min) / xDiff) * 100}%`);
      // svgs start Y from the top, so subtract the percentage from 100
      ys.push(`${100 - ((data.y - this.yAxis.min) / yDiff) * 100}%`);
    });
    return [xs, ys];
  }

  getRadiis(radiusScale) {
    const rs = [];
    this.data.forEach((data) => {
      if (!radiusScale) return rs.push(4);
      rs.push(Math.max(radiusScale(data.r), 0));
    });
    return rs;
  }

  renderCountyName() {
    if (!this.showName) return;

    const className = `scatter-text${this.outlier ? " outlier" : ""}`;
    const text = document.createElementNS(SVG_NS, "text");
    text.setAttributeNS(null, "class", className);
    text.setAttributeNS(null, "x", this.xs[0]);
    text.setAttributeNS(null, "y", this.ys[0]);
    text.setAttributeNS(null, "dx", 11);
    text.setAttributeNS(null, "dy", 3);
    text.appendChild(document.createTextNode(this.county));
    this.plot.appendChild(text);

    this.elements.push(text);
    this.tooltipTriggerTargets.push(text);

    text.addEventListener("mouseenter", () => this.onMouseEnter());
    text.addEventListener("mouseleave", () => this.onMouseLeave());
  }

  renderPoints() {
    this.data.forEach((data, i) => {
      const className = `${data.name} scatter-point${
        this.outlier ? " outlier" : ""
      }`;
      const point = document.createElementNS(SVG_NS, "circle");
      point.setAttributeNS(null, "class", className);
      point.setAttributeNS(null, "cx", this.xs[i]);
      point.setAttributeNS(null, "cy", this.ys[i]);
      this.plot.appendChild(point);

      this.elements.push(point);
      this.tooltipTriggerTargets.push(point);
      point.addEventListener("mouseenter", () => this.onMouseEnter());
      point.addEventListener("mouseleave", () => this.onMouseLeave());
    });
  }

  renderLine() {
    // only draw line if we have two data points
    if (this.data.length != 2) return;
    const className = `scatter-line${this.outlier ? " outlier" : ""}`;
    const line = document.createElementNS(SVG_NS, "line");
    line.setAttributeNS(null, "class", className);
    line.setAttributeNS(null, "x1", this.xs[0]);
    line.setAttributeNS(null, "y1", this.ys[0]);
    line.setAttributeNS(null, "x2", this.xs[1]);
    line.setAttributeNS(null, "y2", this.ys[1]);
    this.plot.appendChild(line);
    this.elements.push(line);

    const hoverLine = document.createElementNS(SVG_NS, "line");
    hoverLine.setAttributeNS(null, "class", `${className} hover-line`);
    hoverLine.setAttributeNS(null, "x1", this.xs[0]);
    hoverLine.setAttributeNS(null, "y1", this.ys[0]);
    hoverLine.setAttributeNS(null, "x2", this.xs[1]);
    hoverLine.setAttributeNS(null, "y2", this.ys[1]);
    this.plot.appendChild(hoverLine);

    this.tooltipTriggerTargets.push(hoverLine);
    hoverLine.addEventListener("mouseenter", () => this.onMouseEnter());
    hoverLine.addEventListener("mouseleave", () => this.onMouseLeave());
  }

  onMouseEnter() {
    this.plot.classList.add("hovering");
    this.elements.forEach((element) => {
      element.classList.add("hovering");
    });
  }

  onMouseLeave() {
    this.plot.classList.remove("hovering");
    this.elements.forEach((element) => {
      element.classList.remove("hovering");
    });
  }
}

export class ScatterPlot {
  constructor(data, xAxis, yAxis, radiusScale, tooltipConfig, container) {
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.ticks = { x: [], y: [] };
    this.axisLabels = { x: [], y: [] };
    this.radiusScale = radiusScale;
    this.container = container;
    this.plotContainer =
      this.container.getElementsByClassName("plot-container")[0];
    this.renderTooltip = configureTooltip(tooltipConfig);
    this.plot = this.container.getElementsByClassName("scatter-plot")[0];
    this.points = this.createPoints();
    this.sizing;
    this.setUpSearchBar();
    this.render();
  }

  setUpSearchBar() {
    const stateAvg = "State Average";
    const searchMenu = this.container.getElementsByClassName("menu")[0];
    const counties = Object.keys(this.data)
      .filter((c) => c !== stateAvg)
      .sort();
    // make sure state average appears at the beginning of the search
    counties.unshift(stateAvg);
    counties.forEach((county) => {
      const element = document.createElement("div");
      // state average should be bolded
      element.className = county === stateAvg ? "item bold" : "item";
      element.innerText = county;
      searchMenu.appendChild(element);
    });

    const searchInput = this.container.getElementsByTagName("input")[0];
    searchInput.addEventListener("change", (e) => {
      const searchValue = e.target.value;
      this.searchTerms = searchValue.split(";").filter((s) => s !== "");

      if (this.searchTerms.length) this.plot.classList.add("searched");
      else this.plot.classList.remove("searched");

      this.points.forEach((point) => {
        const searched = this.searchTerms.includes(point.county.toLowerCase());
        point.elements.forEach((element) => {
          if (searched) element.classList.add("searched");
          else element.classList.remove("searched");
        });
      });
    });
  }

  getNumber(val) {
    return typeof val === "string" ? Number(val.replace(/[^\d.-]/g, "")) : val;
  }

  createPoints() {
    const points = [];
    for (const county in this.data) {
      const outlier = this.data[county]["outlier"];
      const showName = this.data[county]["showName"];
      let x = this.data[county]["x"];
      let y = this.data[county]["y"];
      let r = this.data[county]["r"];
      x = typeof x !== "object" ? { total: x } : x;
      y = typeof y !== "object" ? { total: y } : y;
      r = typeof r !== "object" ? { total: r } : r;
      const countyInfo = [
        county,
        this.xAxis,
        this.yAxis,
        this.radiusScale,
        outlier,
        showName,
        this.plot,
        this.renderTooltip,
        this.container
      ];

      const data = Object.keys(x).map((key) => {
        return {
          name: key,
          x: this.getNumber(x[key]),
          y: this.getNumber(y[key]),
          r: this.getNumber(r[key])
        };
      });
      points.push(new CountyPoint(data, ...countyInfo));
    }

    const sortedPoints = points.sort((a, b) => b.data[0].r - a.data[0].r);
    return sortedPoints;
  }

  updateViewBox() {
    const prevSizing = this.sizing;
    this.sizing = getSizing(window.innerWidth);

    // set viewbox based on window size (customized for specific phones)
    const width = this.sizing === SMALL_PHONE
      ? 180
      : this.sizing === LARGE_PHONE
      ? 280
      : this.sizing === SMALL_BROWSER
      ? 300
      : 600;
    const height = this.sizing === REGULAR_WIDTH ? 500 : 400;
    this.plot.setAttributeNS(null, "viewBox", `0 0 ${width} ${height}`);
    if (prevSizing !== this.sizing) {
      // rerender axes with mobile sizing value
      this.renderAxis(this.xAxis, false);
      this.renderAxis(this.yAxis, true);
      //set radii with mobile sizing value
      this.points.forEach((point) => {
        const circles = point.elements.filter(
          (el) => el instanceof SVGCircleElement
        );
        circles.forEach((_, i) => {
          circles[i].setAttributeNS(
            null,
            "r",
            this.sizing === REGULAR_WIDTH ? point.rsDesktop[i] : point.rsMobile[i]
          );
        });
      });
    }
  }

  render() {
    // set up svg to resize on window resize
    window.addEventListener("resize", () => this.updateViewBox());

    // render axes
    this.renderAxis(this.xAxis, false);
    this.renderAxis(this.yAxis, true);

    // render plot lines before points so they don't cover them
    this.renderPlotLines(this.xAxis, false);
    this.renderPlotLines(this.yAxis, true);

    // order: lines in background, then points, then names on top
    this.points.forEach((point) => point.renderLine());
    this.points.forEach((point) => point.renderPoints());
    this.points.forEach((point) => point.renderCountyName());

    this.points.forEach((point) => {
      point.renderTooltip(point.tooltipTriggerTargets[0], {
        triggerTarget: point.tooltipTriggerTargets,
        followCursor: true
      });
    });
    this.updateViewBox();
  }

  renderAxis(axis, isYAxis) {
    // remove ticks from previous render
    this.ticks[isYAxis ? "y" : "x"].forEach((tick) => tick.remove());

    const tickSize = (axis.max - axis.min) / axis.numTicks;
    for (let i = 0; i < axis.numTicks + 1; i++) {
      const tickValue = axis.convert(axis.min + i * tickSize);

      // calculate spacing value depending on axis
      let spacingValue = (i / axis.numTicks) * 100;
      if (isYAxis) spacingValue = 100 - spacingValue;
      spacingValue = `${spacingValue}%`;

      // adjust for the coordinate system starting at the top left
      const axisPlacement = isYAxis ? 0 : "100%";
      // get offset based on window size
      const dxy = this.sizing === REGULAR_WIDTH ? 26 : 18;

      const tick = document.createElementNS(SVG_NS, "text");
      tick.setAttributeNS(null, "class", "axis-tick");
      tick.setAttributeNS(null, "text-anchor", "middle");
      tick.setAttributeNS(null, "x", isYAxis ? axisPlacement : spacingValue);
      tick.setAttributeNS(null, "y", isYAxis ? spacingValue : axisPlacement);
      tick.setAttributeNS(null, isYAxis ? "dx" : "dy", isYAxis ? -dxy : dxy);
      // vertically center y-axis ticks
      if (isYAxis) tick.setAttributeNS(null, "dy", 4);
      tick.appendChild(document.createTextNode(tickValue));
      this.ticks[isYAxis ? "y" : "x"].push(tick);
      this.plot.appendChild(tick);
    }

    // remove axis labels from previous render
    this.axisLabels[isYAxis ? "y" : "x"].forEach((label) => label.remove());

    // render lower and higher labels
    this.renderAxisLabels(axis, isYAxis, true);
    this.renderAxisLabels(axis, isYAxis, false);
  }

  renderAxisLabels(axis, isYAxis, isLower) {
    // for mobile we only need one label
    if (this.sizing !== REGULAR_WIDTH && !isLower) return;

    // wrap axis labels in svgs to do local rotation
    const wrapper = document.createElementNS(SVG_NS, "svg");
    wrapper.setAttributeNS(null, "class", "label-wrapper");
    if (this.sizing === REGULAR_WIDTH) {
      wrapper.setAttributeNS(null, "x", isLower ? 0 : isYAxis ? 0 : "100%");
      wrapper.setAttributeNS(
        null,
        "y",
        isLower ? "100%" : isYAxis ? 0 : "100%"
      );
    } else {
      wrapper.setAttributeNS(null, "x", isYAxis ? 0 : "50%");
      wrapper.setAttributeNS(null, "y", isYAxis ? "50%" : "100%");
    }

    // get offset based on window size
    const dy = this.sizing === REGULAR_WIDTH ? 60 : 40;

    const label = document.createElementNS(SVG_NS, "text");
    label.setAttributeNS(null, "class", "axis-label");
    label.setAttributeNS(null, "text-anchor", "middle");
    label.setAttributeNS(null, "dy", isYAxis ? -dy : dy);
    if (isYAxis) label.setAttributeNS(null, "transform", "rotate(-90)");
    label.appendChild(document.createTextNode(axis.name));
    wrapper.appendChild(label);
    this.axisLabels[isYAxis ? "y" : "x"].push(wrapper);
    this.plot.appendChild(wrapper);
  }

  renderPlotLines(axis, isYAxis) {
    for (let i = 0; i < axis.numTicks + 1; i++) {
      // calculate spacing value depending on axis
      let spacingValue = (i / axis.numTicks) * 100;
      if (isYAxis) spacingValue = 100 - spacingValue;
      spacingValue = `${spacingValue}%`;

      // render the line for each axis tick
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttributeNS(null, "class", "axis-line");
      line.setAttributeNS(null, "x1", !isYAxis ? spacingValue : 0);
      line.setAttributeNS(null, "y1", !isYAxis ? 0 : spacingValue);
      line.setAttributeNS(null, "x2", !isYAxis ? spacingValue : "100%");
      line.setAttributeNS(null, "y2", !isYAxis ? "100%" : spacingValue);
      this.plot.appendChild(line);
    }
  }
}

class DistributionRow {
  constructor(county, distributions, renderTooltip) {
    this.county = county;
    this.distributions = distributions;
    this.renderTooltip = renderTooltip;
  }

  createTooltip(elements) {
    return this.renderTooltip(
      elements,
      [
        this.distributions.reduce((acc, dist) => ({
          ...acc, [dist["className"]]: dist["value"]
        }), {})
      ],
      this.county
    );
  }

  render() {
    // Add county name
    const nameElement = document.createElement("div");
    nameElement.className = "dist-county-name";
    nameElement.innerText = this.county;
    // Add distribution bars
    const distBarsSegment = document.createElement("div");
    distBarsSegment.className = "dist-bars-segment";
    this.distributions.forEach((dist) => {
      const distBarElement = document.createElement("div");
      distBarElement.classList.add("dist-column-segment");
      distBarElement.classList.add(dist["className"]);
      distBarsSegment.appendChild(distBarElement);
    });
    // Set width of bar based on distribution
    const cols = this.distributions.map((dist) => `${dist["value"] * 100}%`);
    distBarsSegment.style.gridTemplateColumns = cols.join(" ");

    this.createTooltip(distBarsSegment);

    const rowElement = document.createElement("div");
    rowElement.className = "dist-row";
    rowElement.appendChild(nameElement);
    rowElement.appendChild(distBarsSegment);
    return rowElement;
  }
}

export class DistributionGraph {
  constructor(container, data, headerConfig) {
    this.container = container;
    this.data = data;
    this.headerConfig = headerConfig;
    this.nameIdx = 0;
    this.distributionIdx = 1;
    // Sort data by county name
    this.data.sort((a, b) =>
      a["data"][this.nameIdx] > b["data"][this.nameIdx]
        ? 1
        : a["data"][this.nameIdx] < b["data"][this.nameIdx]
        ? -1
        : 0
    );
    this.render();
  }

  renderTooltip(headerConfig) {
    const createHeader = (hdr, colorClassName) => {
      const container = document.createElement("div");
      container.style.display = "flex";
      container.style.alignItems = "center";
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box");
      colorBox.classList.add(colorClassName);
      colorBox.style.marginRight = "10px";
      const text = document.createElement("div");
      text.innerText = hdr;
      container.appendChild(colorBox);
      container.appendChild(text);
      return container;
    }

    // configureTooltip returns a render function to which we'll pass the data
    return configureTooltip({
      rows: headerConfig.map((header) => ({
        rowHeader: createHeader(header.title, header.className),
        dataKey: header.className,
        render: header.render
      })),
      placement: "top",
      followCursor: true
    });
  }

  render() {
    this.data.forEach((county) => {
      const countyName = county["data"][this.nameIdx];
      const distributions = county["data"][this.distributionIdx]["values"];
      const distributionRow = new DistributionRow(
        countyName,
        distributions,
        // closure since we always want the header config to be the same
        this.renderTooltip(this.headerConfig)
      );
      this.container.appendChild(distributionRow.render());
    });
  }
}

class Row {
  constructor(data, minValue, maxValue, renderTooltip) {
    this.data = data;
    this.renderTooltip = (elements) => renderTooltip(
      elements, [data], this.data.name
    );
    this.barWidth = ((data.x - minValue) * 100) / (maxValue - minValue);
  }

  render() {
    // Add county name
    const nameElement = document.createElement("div");
    nameElement.className = "county-name";
    nameElement.innerText = this.data.name;

    // Add bar
    const barContainer = document.createElement("div");
    barContainer.className = "county-bar-chart-bar-container";
    const bar = document.createElement("div");
    bar.classList.add("county-bar-chart-bar");
    if (this.data.highlighted) bar.classList.add("highlighted");
    bar.style.width = `${this.barWidth}%`;
    barContainer.appendChild(bar);

    const rowElement = document.createElement("div");
    rowElement.className = "bar-chart-row";
    rowElement.appendChild(nameElement);
    rowElement.appendChild(barContainer);

    rowElement.setAttribute("name", this.data.name);
    rowElement.setAttribute("x", this.data.x);
    rowElement.setAttribute("y", this.data.y);

    this.renderTooltip(barContainer);

    return rowElement;
  }
}

export class CountyBarChart {
  constructor(data, xAxis, tooltipConfig, container) {
    this.data = data;
    this.xAxis = xAxis;
    this.container = container;
    this.plot = document.createElement("div");
    this.plot.className = "bar-chart-plot";

    this.rows = document.createElement("div");
    this.rows.className = "bar-chart-rows";

    this.renderTooltip = configureTooltip(tooltipConfig);

    // Sort data by county name
    this.data.sort((a, b) =>
      a.name.toString().localeCompare(b.name.toString())
    );
    this.render();
  }

  render() {
    this.renderAxis(this.xAxis);
    this.renderPlotLines(this.xAxis);

    this.data.forEach((county) => {
      const row = new Row(
        county,
        this.xAxis.min,
        this.xAxis.max,
        this.renderTooltip
      );
      this.rows.appendChild(row.render());
    });
    this.plot.appendChild(this.rows);
    this.container.appendChild(this.plot);
  }

  renderPlotLines(xAxis) {
    const plotLines = document.createElement("div");
    plotLines.className = "bar-chart-plotlines";
    for (let i = 0; i < xAxis.numTicks; i++) {
      const plotLine = document.createElement("div");
      plotLine.className = "bar-chart-plotline";
      plotLines.appendChild(plotLine);
    }

    this.plot.appendChild(plotLines);
  }

  renderAxis(xAxis) {
    const axis = document.createElement("div");
    axis.className = "bar-chart-xaxis";

    const sortButtonWrapper = document.createElement("div");
    sortButtonWrapper.className = "bar-chart-sort-button";
    const sortButton = document.createElement("button");
    sortButton.innerHTML = "SORT";

    let sortIndex = 0;
    const sortFunctions = [
      (a, b) => a.getAttribute("name").localeCompare(b.getAttribute("name")),
      (a, b) => b.getAttribute("x").localeCompare(a.getAttribute("x"))
    ];

    sortButton.onclick = () => {
      sortIndex = (sortIndex + 1) % sortFunctions.length;

      [...this.rows.children]
        .sort(sortFunctions[sortIndex])
        .forEach((node) => this.rows.appendChild(node));
    };

    sortButtonWrapper.appendChild(sortButton);
    axis.appendChild(sortButtonWrapper);

    const tickSize = (xAxis.max - xAxis.min) / xAxis.numTicks;
    for (let i = 0; i < xAxis.numTicks + 1; i++) {
      const tickValue = xAxis.convert(xAxis.min + i * tickSize);
      const tickWrapper = document.createElement("div");
      tickWrapper.className = "tick";
      const tickSpan = document.createElement("p");
      const tickNode = document.createTextNode(tickValue);
      tickSpan.appendChild(tickNode);
      tickWrapper.appendChild(tickSpan);
      axis.appendChild(tickWrapper);
    }
    this.container.appendChild(axis);
  }
}
