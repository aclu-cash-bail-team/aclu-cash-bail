const POINT_RADIUS = 4;

class CountyPoint {
  constructor(county, data, xAxis, yAxis, outlier, plot) {
    this.county = county;
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.outlier = outlier;
    this.plot = plot;
  }

  isOutlier() {
    return this.outlier;
  }

  render() {
    for (const data of this.data) {
      const point = document.createElement("div");
      let className = `${data.class} scatter-point`;
      if (this.outlier) className += " outlier";
      point.className = className;
      point.style.left = `calc(${data.x / this.xAxis.max * 100}% - ${POINT_RADIUS}px`;
      point.style.bottom = `calc(${data.y / this.yAxis.max * 100}% - ${POINT_RADIUS}px`;
      this.plot.appendChild(point);
    }
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
    this.points.forEach(point => point.render());
  }
}
