const POINT_RADIUS = 4;

class CountyPoint {
  constructor(county, data, xAxis, yAxis, outlier, container) {
    this.county = county;
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.outlier = outlier;
    this.container = container;
  }

  render() {
    for (const data of this.data) {
      const point = document.createElement("div");
      point.className = `${data.class} scatter-point`;
      point.style.left = `calc(${data.x / this.xAxis.max * 100}% - ${POINT_RADIUS}px`;
      point.style.bottom = `calc(${data.y / this.yAxis.max * 100}% - ${POINT_RADIUS}px`;
      this.container.appendChild(point);
    }
  }
}

export class ScatterPlot {
  constructor(data, xAxis, yAxis, container) {
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.container = container;
    this.points = this.createPoints();
    console.log(this.points);
    this.render();
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
      points.push(new CountyPoint(
        county, data, this.xAxis, this.yAxis, outlier, this.container
      ));
    }
    return points;
  }

  render() {
    this.points.forEach(point => point.render());
  }
}
