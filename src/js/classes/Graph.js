const POINT_RADIUS = 4;
const SVG_NS = "http://www.w3.org/2000/svg";

class CountyPoint {
  constructor(county, data, xAxis, yAxis, outlier, showName, plot) {
    this.county = county;
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.outlier = outlier;
    this.showName = showName;
    this.plot = plot;
    [this.xs, this.ys] = this.getPositions();
  }

  isOutlier() {
    return this.outlier;
  }

  getPositions() {
    const xs = [], ys = [];
    for (const data of this.data) {
      const xDiff = this.xAxis.max - this.xAxis.min;
      const yDiff = this.yAxis.max - this.yAxis.min;
      xs.push(`${(data.x - this.xAxis.min) / xDiff * 100}%`);
      // svgs start Y from the top, so subtract the percentage from 100
      ys.push(`${100 - ((data.y - this.yAxis.min) / yDiff * 100)}%`);
    }
    return [xs, ys];
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

    this.text = text;
    text.addEventListener("mouseenter", () => this.onMouseEnter());
    text.addEventListener("mouseleave", () => this.onMouseLeave());
  }

  renderPoints() {
    this.points = [];
    this.data.forEach((data, i) => {
      const className = `${data.class} scatter-point${this.outlier ? " outlier" : ""}`;
      const point = document.createElementNS(SVG_NS, "circle");
      point.setAttributeNS(null, "class", className);
      point.setAttributeNS(null, "cx", this.xs[i]);
      point.setAttributeNS(null, "cy", this.ys[i]);
      point.setAttributeNS(null, "r", POINT_RADIUS);
      this.plot.appendChild(point);

      this.points.push(point);
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

    this.line = line;
    line.addEventListener("mouseenter", () => this.onMouseEnter());
    line.addEventListener("mouseleave", () => this.onMouseLeave());
  }

  onMouseEnter() {
    console.log(this.county);
    this.points.forEach(point => {
      point.classList.add("hovering");
    });
    this.line.classList.add("hovering");
    if (this.text) this.text.classList.add("hovering");
  }

  onMouseLeave() {
    this.points.forEach(point => {
      point.classList.remove("hovering");
    });
    this.line.classList.remove("hovering");
    if (this.text) this.text.classList.remove("hovering");
  }

  rerenderPoints() {
    this.data.forEach(data => {
      const use = document.createElementNS(SVG_NS, "use");
      use.setAttributeNS(null, "href", `#${this.county}-${data.class}`);
      this.plot.appendChild(use);
    });
  }
}

export class ScatterPlot {
  constructor(data, xAxis, yAxis, container) {
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.container = container;
    this.plot = this.container.getElementsByClassName("scatter-plot")[0];
    this.points = this.createPoints();
    this.showOutliers = false;
    this.setUpOutlierButton();
    this.render();
  }

  setUpOutlierButton() {
    const button = this.container.getElementsByClassName("outliers-btn")[0];
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

  createPoints() {
    const points = [];
    for (const county in this.data) {
      const outlier = this.data[county]["outlier"];
      const showName = this.data[county]["showName"];
      const rate = this.data[county]["bailRate"];
      const amount = this.data[county]["bailAmount"];
      const data = ["black", "white"].map(key => {
        return {
          class: key == "black" ? "green" : "purple",
          x: rate[key],
          y: Number(amount[key].replace(/[^\d.-]/g, ""))
        };
      });
      points.push(new CountyPoint(
          county, data, this.xAxis, this.yAxis, outlier, showName, this.plot
      ));
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
    
    // order: lines in background, then points, then names on top
    this.points.forEach(point => point.renderLine());
    this.points.forEach(point => point.renderPoints());
    this.points.forEach(point => point.renderCountyName());
  }

  renderAxis(axis, isYAxis) {
    const xAxis = document.createElementNS(SVG_NS, "g");
    xAxis.setAttributeNS(null, "class", "scatter-axis");

    const tickSize = (axis.max - axis.min) / axis.numTicks;
    for (let i = 0; i < axis.numTicks + 1; i++) {
      // create value string per axis transform and unit
      let tickValue = axis.min + i * tickSize;
      if (axis.transformFunc) tickValue = axis.transformFunc(tickValue);
      tickValue = `${String(tickValue)}${axis.unit}`;

      // calculate spacing value depending on axis
      let spacingValue = i / axis.numTicks * 100;
      if (isYAxis) spacingValue = 100 - spacingValue;
      spacingValue = `${spacingValue}%`;

      // adjust for the coordinate system starting at the top left
      const axisPlacement = isYAxis ? 0 : "100%";
      const offset = isYAxis ? -26 : 26;

      const tick = document.createElementNS(SVG_NS, "text");
      tick.setAttributeNS(null, "text-anchor", "middle");
      tick.setAttributeNS(null, "x", isYAxis ? axisPlacement : spacingValue);
      tick.setAttributeNS(null, "y", isYAxis ? spacingValue : axisPlacement);
      tick.setAttributeNS(null, isYAxis ? "dx" : "dy", offset);
      // vertically center y-axis ticks
      if (isYAxis) tick.setAttributeNS(null, "dy", 4);

      tick.appendChild(document.createTextNode(tickValue));
      xAxis.appendChild(tick);
    }
    this.plot.appendChild(xAxis);
  }
}
