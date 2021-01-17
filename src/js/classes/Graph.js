/* eslint-disable no-console */
const SVG_NS = "http://www.w3.org/2000/svg";

class CountyPoint {
  constructor(county, data, xAxis, yAxis, radiusScale, outlier, showName, plot, container) {
    this.county = county;
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.radiusScale = radiusScale;
    this.outlier = outlier;
    this.showName = showName;
    this.plot = plot;
    this.container = container;
    [this.xs, this.ys] = this.getPositions();
    this.rs = this.getRadiis();
    this.elements = [];
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

  getRadiis() {
    const rs = [];
    this.data.forEach((data) => {
      if (!this.radiusScale) return rs.push(4);
      if (this.radiusScale.min === this.radiusScale.max) return rs.push(this.radiusScale.min);
      const rValueDiff = this.radiusScale.maxValue - this.radiusScale.minValue;
      const rCircleSizeDiff = this.radiusScale.max - this.radiusScale.min;
      const scaledR = Math.min(((data.r - this.radiusScale.minValue) * rCircleSizeDiff / rValueDiff) + this.radiusScale.min, this.radiusScale.max);

      rs.push(Math.min(Math.max(scaledR, this.radiusScale.min), this.radiusScale.max));
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
      point.setAttributeNS(null, "r", this.rs[i]);
      this.plot.appendChild(point);

      this.elements.push(point);
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
    line.addEventListener("mouseenter", () => this.onMouseEnter());
    line.addEventListener("mouseleave", () => this.onMouseLeave());
  }

  onMouseEnter() {
    this.renderTooltip();
    this.elements.forEach((element) => {
      element.classList.add("hovering");
    });
  }

  onMouseLeave() {
    this.tooltip.remove();
    this.elements.forEach((element) => {
      element.classList.remove("hovering");
    });
  }

  renderTooltip() {
    const tooltip = document.createElement("div");
    tooltip.className = "scatter-tooltip";
    const countyName = document.createElement("h4");
    countyName.appendChild(document.createTextNode(this.county));
    tooltip.appendChild(countyName);

    // render data in a table
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const filler = document.createElement("th");
    const xHeader = document.createElement("th");
    xHeader.appendChild(document.createTextNode(this.data[0].xHeader));
    const yHeader = document.createElement("th");
    yHeader.appendChild(document.createTextNode(this.data[0].yHeader));
    headerRow.appendChild(filler);
    headerRow.appendChild(xHeader);
    headerRow.appendChild(yHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // render cells from data
    const tbody = document.createElement("tbody");
    this.data.forEach((data) => {
      const row = document.createElement("tr");
      const name = document.createElement("td");
      name.className = "scatter-tooltip-name";
      name.appendChild(document.createTextNode(data.name));
      const xText = document.createElement("td");
      xText.appendChild(document.createTextNode(data.xText));
      const yText = document.createElement("td");
      yText.appendChild(document.createTextNode(data.yText));
      row.appendChild(name);
      row.appendChild(xText);
      row.appendChild(yText);
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tooltip.appendChild(table);

    // set tooltip placement based on first point
    tooltip.style.top = this.ys[0];
    tooltip.style.left = this.xs[0];
    this.container.appendChild(tooltip);
    this.tooltip = tooltip;
  }
}

export class ScatterPlot {
  constructor(data, xAxis, yAxis, toText, radiusScale, container) {
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.toText = toText;
    this.container = container;
    this.radiusScale = radiusScale;
    this.plotContainer = this.container.getElementsByClassName(
      "plot-container"
    )[0];
    this.plot = this.container.getElementsByClassName("scatter-plot")[0];
    this.points = this.createPoints();
    this.showOutliers = false;
    this.setUpOutlierButton();
    this.render();
  }

  setUpOutlierButton() {
    const button = this.container.getElementsByClassName("outliers-btn")[0];
    if (button) {
      button.addEventListener("click", (e) => {
        if (this.toggleOutliers()) {
          e.target.classList.add("showing");
          this.plot.classList.add("show-outliers");
        } else {
          e.target.classList.remove("showing");
          this.plot.classList.remove("show-outliers");
        }
      });
    }
  }

  getNumber(val) {
    return typeof val === "string"
      ? Number(val.replace(/[^\d.-]/g, ""))
      : val;
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

      const data = Object.keys(x).map((key) => ({
        name: key,
        x: this.getNumber(x[key]),
        y: this.getNumber(y[key]),
        r: this.getNumber(r[key]),
        xText: this.toText.x(x[key]),
        yText: this.toText.y(y[key]),
        xHeader: this.toText.xHeader,
        yHeader: this.toText.yHeader,
      }));

      points.push(
        new CountyPoint(
          county,
          data,
          this.xAxis,
          this.yAxis,
          this.radiusScale,
          outlier,
          showName,
          this.plot,
          this.plotContainer
        )
      );
    }
    // eslint-disable-next-line no-console
    console.log(points);
    return points;
  }

  toggleOutliers() {
    this.showOutliers = !this.showOutliers;
    return this.showOutliers;
  }

  render() {
    // render axes and graph lines
    this.renderAxis(this.xAxis, false);
    this.renderAxis(this.yAxis, true);

    // order: lines in background, then points, then names on top
    this.points.forEach((point) => point.renderLine());
    this.points.forEach((point) => point.renderPoints());
    this.points.forEach((point) => point.renderCountyName());
  }

  renderAxis(axis, isYAxis) {
    const tickSize = (axis.max - axis.min) / axis.numTicks;
    for (let i = 0; i < axis.numTicks + 1; i++) {
      const tickValue = axis.convert(axis.min + i * tickSize);

      // calculate spacing value depending on axis
      let spacingValue = (i / axis.numTicks) * 100;
      if (isYAxis) spacingValue = 100 - spacingValue;
      spacingValue = `${spacingValue}%`;

      // adjust for the coordinate system starting at the top left
      const axisPlacement = isYAxis ? 0 : "100%";
      const offset = isYAxis ? -26 : 26;

      const tick = document.createElementNS(SVG_NS, "text");
      tick.setAttributeNS(null, "class", "axis-tick");
      tick.setAttributeNS(null, "text-anchor", "middle");
      tick.setAttributeNS(null, "x", isYAxis ? axisPlacement : spacingValue);
      tick.setAttributeNS(null, "y", isYAxis ? spacingValue : axisPlacement);
      tick.setAttributeNS(null, isYAxis ? "dx" : "dy", offset);
      // vertically center y-axis ticks
      if (isYAxis) tick.setAttributeNS(null, "dy", 4);
      tick.appendChild(document.createTextNode(tickValue));
      this.plot.appendChild(tick);

      // render the line for each axis tick
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttributeNS(null, "class", "axis-line");
      line.setAttributeNS(null, "x1", isYAxis ? spacingValue : 0);
      line.setAttributeNS(null, "y1", isYAxis ? 0 : spacingValue);
      line.setAttributeNS(null, "x2", isYAxis ? spacingValue : "100%");
      line.setAttributeNS(null, "y2", isYAxis ? "100%" : spacingValue);
      this.plot.appendChild(line);
    }

    // wrap axis labels in svgs to do local rotation
    const wrapperLower = document.createElementNS(SVG_NS, "svg");
    wrapperLower.setAttributeNS(null, "class", "label-wrapper");
    wrapperLower.setAttributeNS(null, "x", 0);
    wrapperLower.setAttributeNS(null, "y", "100%");

    const labelLower = document.createElementNS(SVG_NS, "text");
    labelLower.setAttributeNS(null, "class", "axis-label");
    labelLower.setAttributeNS(null, "text-anchor", "start");
    labelLower.setAttributeNS(null, "dy", isYAxis ? -60 : 60);
    if (isYAxis) labelLower.setAttributeNS(null, "transform", "rotate(-90)");
    labelLower.appendChild(document.createTextNode(`← Lower ${axis.name}`));
    wrapperLower.appendChild(labelLower);
    this.plot.appendChild(wrapperLower);

    const wrapperHigher = document.createElementNS(SVG_NS, "svg");
    wrapperHigher.setAttributeNS(null, "class", "label-wrapper");
    wrapperHigher.setAttributeNS(null, "x", isYAxis ? 0 : "100%");
    wrapperHigher.setAttributeNS(null, "y", isYAxis ? 0 : "100%");

    const labelHigher = document.createElementNS(SVG_NS, "text");
    labelHigher.setAttributeNS(null, "class", "axis-label");
    labelHigher.setAttributeNS(null, "text-anchor", "end");
    labelHigher.setAttributeNS(null, "dy", isYAxis ? -60 : 60);
    if (isYAxis) labelHigher.setAttributeNS(null, "transform", "rotate(-90)");
    labelHigher.appendChild(document.createTextNode(`Higher ${axis.name} →`));
    wrapperHigher.appendChild(labelHigher);
    this.plot.appendChild(wrapperHigher);
  }
}
