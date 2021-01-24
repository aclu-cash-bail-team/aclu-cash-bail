const SVG_NS = "http://www.w3.org/2000/svg";

class CountyPoint {
  constructor(data, county, xAxis, yAxis, radiusScale, outlier, showName, tooltipConfig, container) {
    this.county = county;
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.radiusScale = radiusScale;
    this.outlier = outlier;
    this.showName = showName;
    this.container = container;
    this.tooltipConfig = tooltipConfig;
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
    const tbody = document.createElement("tbody");

    if ("rows" in this.tooltipConfig) {
      this.tooltipConfig.rows.forEach(rowData => {
        const row = document.createElement("tr");
        const rowHeaderCell = document.createElement(rowData.isHeader ? "th" : "td");
        rowHeaderCell.className = "scatter-tooltip-col-header";
        rowHeaderCell.appendChild(document.createTextNode(rowData.header || ""));
        row.appendChild(rowHeaderCell);

        this.data.forEach(data => {
          const cell = document.createElement(rowData.isHeader ? "th" : "td");
          const dataKeyValue = data[rowData.dataKey];
          cell.appendChild(document.createTextNode(rowData.toText ? rowData.toText(dataKeyValue, data) : dataKeyValue));
          row.appendChild(cell);
        });

        if (rowData.isHeader) {
          thead.appendChild(row);
        } else {
          tbody.appendChild(row);
        }
      });
    } else if ("columns" in this.tooltipConfig) {
      const headerRow = document.createElement("tr");
      this.tooltipConfig.columns.forEach(({header}) => {
        const headerCell = document.createElement("th");
        headerCell.appendChild(document.createTextNode(header || ""));
        headerRow.appendChild(headerCell);
      });
      thead.appendChild(headerRow);
      
      this.data.forEach(data => {
        const row = document.createElement("tr");
        this.tooltipConfig.columns.forEach(columnData => {
          const cell = document.createElement("td");
          if (columnData.isHeader) cell.className = "scatter-tooltip-col-header";
          const dataKeyValue = data[columnData.dataKey];
          cell.appendChild(document.createTextNode(columnData.toText ? columnData.toText(dataKeyValue, data) : dataKeyValue));
          row.appendChild(cell);
        });
        tbody.appendChild(row);
      });
    }

    table.appendChild(thead);
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
  constructor(data, xAxis, yAxis, radiusScale, tooltipConfig, container) {
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.tooltipConfig = tooltipConfig;
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
      
      const countyInfo = [county, this.xAxis, this.yAxis, this.radiusScale, outlier, showName, this.tooltipConfig, this.container];
      const data = Object.keys(x).map((key) => ({
        name: key,
        x: this.getNumber(x[key]),
        y: this.getNumber(y[key]),
        r: this.getNumber(r[key]),
      }));

      points.push(new CountyPoint(data, ...countyInfo));
    }

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

    // order: lines in background, then points sorted by radius, then names on top
    this.renderLines();
    this.renderPointsInOrder();
    this.renderCountyNames();
  }

  renderLines() {
    this.points.forEach((point) => {
      // only draw line if we have two data points
      if (point.data.length != 2) return;

      const className = `scatter-line${point.outlier ? " outlier" : ""}`;
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttributeNS(null, "class", className);
      line.setAttributeNS(null, "x1", point.xs[0]);
      line.setAttributeNS(null, "y1", point.ys[0]);
      line.setAttributeNS(null, "x2", point.xs[1]);
      line.setAttributeNS(null, "y2", point.ys[1]);
      this.plot.appendChild(line);
      point.elements.push(line);

      const hoverLine = document.createElementNS(SVG_NS, "line");
      hoverLine.setAttributeNS(null, "class", `${className} hover-line`);
      hoverLine.setAttributeNS(null, "x1", point.xs[0]);
      hoverLine.setAttributeNS(null, "y1", point.ys[0]);
      hoverLine.setAttributeNS(null, "x2", point.xs[1]);
      hoverLine.setAttributeNS(null, "y2", point.ys[1]);
      hoverLine.setAttributeNS(null, "y2", point.ys[1]);
      this.plot.appendChild(hoverLine);

      hoverLine.addEventListener("mouseenter", () => point.onMouseEnter());
      hoverLine.addEventListener("mouseleave", () => point.onMouseLeave());
    });
  }

  renderCountyNames() {
    this.points.forEach((point) => {
      if (!point.showName) return;
      
      const className = `scatter-text${point.outlier ? " outlier" : ""}`;
      const text = document.createElementNS(SVG_NS, "text");
      const namePos = Math.sqrt(point.rs[0]);
      text.setAttributeNS(null, "class", className);
      text.setAttributeNS(null, "x", point.xs[0]);
      text.setAttributeNS(null, "y", point.ys[0]);
      text.setAttributeNS(null, "dx", namePos < 8 ? namePos + 2 : 0);
      text.setAttributeNS(null, "dy", namePos < 8 ? -namePos - 2 : 0);
      text.setAttributeNS(null, "text-anchor", namePos < 8 ? "start" : "middle");
      text.appendChild(document.createTextNode(point.county));
      this.plot.appendChild(text);

      point.elements.push(text);
      text.addEventListener("mouseenter", () => point.onMouseEnter());
      text.addEventListener("mouseleave", () => point.onMouseLeave());
    });
  }

  renderPointsInOrder() {
    const ungroupedPoints = this.points.reduce((arr, point) => {
      const newPoints = point.data.map((data, i) => ({originalPoint: point, data, x: point.xs[i], y: point.ys[i], r: point.rs[i]}));
      return arr.concat(newPoints);
    }, []);

    ungroupedPoints.sort((a, b) => b.r - a.r).forEach(ungroupedPoint => {
      const className = `${ungroupedPoint.data.name} scatter-point${
        ungroupedPoint.originalPoint.outlier ? " outlier" : ""
      }`;

      const point = document.createElementNS(SVG_NS, "circle");
      point.setAttributeNS(null, "class", className);
      point.setAttributeNS(null, "cx", ungroupedPoint.x);
      point.setAttributeNS(null, "cy", ungroupedPoint.y);
      point.setAttributeNS(null, "r", ungroupedPoint.r);
      this.plot.appendChild(point);

      ungroupedPoint.originalPoint.elements.push(point);
      point.addEventListener("mouseenter", () => ungroupedPoint.originalPoint.onMouseEnter());
      point.addEventListener("mouseleave", () => ungroupedPoint.originalPoint.onMouseLeave());
    });
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
