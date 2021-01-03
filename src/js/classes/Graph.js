const POINT_RADIUS = 4;
const SVG_NS = "http://www.w3.org/2000/svg";

class CountyPoint {
  constructor(county, data, xAxis, yAxis, outlier, plot) {
    this.county = county;
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.outlier = outlier;
    this.plot = plot;
    [this.xs, this.ys] = this.getPositions();
  }

  isOutlier() {
    return this.outlier;
  }

  getPositions() {
    const xs = [], ys = [];
    for (const data of this.data) {
      xs.push(`${data.x / this.xAxis.max * 100}%`);
      // svgs start Y from the top, so subtract the percentage from 100
      ys.push(`${100 - (data.y / this.yAxis.max * 100)}%`);
    }
    return [xs, ys];
  }

  renderPoints() {
    this.data.forEach((data, i) => {
      let className = `${data.class} scatter${this.outlier ? " outlier" : ""}`;
      const point = document.createElementNS(SVG_NS, "circle");
      point.setAttributeNS(null, "class", className);
      point.setAttributeNS(null, "cx", this.xs[i]);
      point.setAttributeNS(null, "cy", this.ys[i]);
      point.setAttributeNS(null, "r", POINT_RADIUS);
      this.plot.appendChild(point)
    });
  }

  renderLine() {
    if (this.data.length != 2) return;

    const line = document.createElementNS(SVG_NS, "line");
    let className = `scatter${this.outlier ? " outlier" : ""}`;
    line.setAttributeNS(null, "class", className);
    line.setAttributeNS(null, "x1", this.xs[0]);
    line.setAttributeNS(null, "y1", this.ys[0]);
    line.setAttributeNS(null, "x2", this.xs[1]);
    line.setAttributeNS(null, "y2", this.ys[1]);
    this.plot.appendChild(line);
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
      const rate = this.data[county]["bailRate"];
      const amount = this.data[county]["bailAmount"];
      const data = ["black", "white"].map(key => {
        return {
          class: key == "black" ? "green" : "purple",
          x: rate[key],
          y: Number(amount[key].replace(/[^\d.-]/g, ""))
        };
      });
      points.push(
        new CountyPoint(county, data, this.xAxis, this.yAxis, outlier, this.plot
      ));
    }
    return points;
  }

  toggleOutliers() {
    this.showOutliers = !this.showOutliers;
    return this.showOutliers;
  }

  render() {
    // render all lines first so that points are on top
    this.points.forEach(point => point.renderLine());
    this.points.forEach(point => point.renderPoints());
  }
}
