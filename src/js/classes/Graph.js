import { configureTooltip } from "./Tooltip";

const SVG_NS = "http://www.w3.org/2000/svg";

class CountyPoint {
  constructor(data, county, xAxis, yAxis, radiusScale, outlier, showName, plot, renderTooltip, container) {
    this.county = county;
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.radiusScale = radiusScale;
    this.outlier = outlier;
    this.showName = showName;
    this.plot = plot;
    this.container = container;
    this.renderTooltip = (elements, config) => renderTooltip(elements, this.data, this.county, config);
    [this.xs, this.ys] = this.getPositions();
    this.rs = this.getRadiis();
    this.elements = [];
    this.tooltipTriggerTargets = [];
  }

  isOutlier() {
    return this.outlier;
  }

  getPositions() {
    const xs = [], ys = [];
    this.data.forEach(data => {
      const xDiff = this.xAxis.max - this.xAxis.min;
      const yDiff = this.yAxis.max - this.yAxis.min;
      xs.push(`${(data.x - this.xAxis.min) / xDiff * 100}%`);
      // svgs start Y from the top, so subtract the percentage from 100
      ys.push(`${100 - ((data.y - this.yAxis.min) / yDiff * 100)}%`);
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
    this.tooltipTriggerTargets.push(text);

    text.addEventListener("mouseenter", () => this.onMouseEnter());
    text.addEventListener("mouseleave", () => this.onMouseLeave());
  }

  renderPoints() {
    this.data.forEach((data, i) => {
      const className = `${data.name} scatter-point${this.outlier ? " outlier" : ""}`;
      const point = document.createElementNS(SVG_NS, "circle");
      point.setAttributeNS(null, "class", className);
      point.setAttributeNS(null, "cx", this.xs[i]);
      point.setAttributeNS(null, "cy", this.ys[i]);
      point.setAttributeNS(null, "r", this.rs[i]);
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
    this.elements.forEach(element => {
      element.classList.add("hovering");
    });
  }

  onMouseLeave() {
    this.elements.forEach(element => {
      element.classList.remove("hovering");
    });
  }
}


export class ScatterPlot {
  constructor(data, xAxis, yAxis, radiusScale, tooltipConfig, container) {
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.ticks = {"x": [], "y": []};
    this.axisLabels = {"x": [], "y": []};
    this.radiusScale = radiusScale;
    this.container = container;
    this.plotContainer = this.container.getElementsByClassName("plot-container")[0];
    this.renderTooltip = configureTooltip(tooltipConfig);
    this.plot = this.container.getElementsByClassName("scatter-plot")[0];
    this.points = this.createPoints();
    this.mobileSizing = window.innerWidth < 670;
    this.showOutliers = false;
    this.setUpSearchBar();
    this.setUpOutlierButton();
    this.render();
  }

  setUpSearchBar() {
    const stateAvg = "State Average";
    const searchMenu = this.container.getElementsByClassName("menu")[0];
    const counties = Object.keys(this.data).filter(c => c !== stateAvg).sort();
    // make sure state average appears at the beginning of the search
    counties.unshift(stateAvg);
    counties.forEach(county => {
      const element = document.createElement("div");
      // state average should be bolded
      element.className = county === stateAvg ? "item bold" : "item";
      element.innerText = county;
      searchMenu.appendChild(element);
    });

    const searchInput = this.container.getElementsByTagName("input")[0];
    searchInput.addEventListener("change", e => {
      const searchValue = e.target.value;
      this.searchTerms = searchValue.split(";").filter(s => s !== "");
      this.points.forEach(point => {
        const searched = this.searchTerms.includes(point.county.toLowerCase());
        searched ? point.onMouseEnter() : point.onMouseLeave();
      });
    });
  }

  setUpOutlierButton() {
    const button = this.container.getElementsByClassName("outliers-btn")[0];
    if (this.mobileSizing) this.plot.classList.add("show-outliers");
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
      const countyInfo = [county, this.xAxis, this.yAxis, this.radiusScale, outlier, showName, this.plot, this.renderTooltip, this.container];

      const data = Object.keys(x).map(key => {
        return {
          name: key,
          x: this.getNumber(x[key]),
          y: this.getNumber(y[key]),
          r: this.getNumber(r[key]),
        };
      });
      points.push(new CountyPoint(data, ...countyInfo));
    }


    const sortedPoints = points.sort((a, b) => b.data[0].r - a.data[0].r);
    return sortedPoints;
  }

  toggleOutliers() {
    this.showOutliers = !this.showOutliers;
    return this.showOutliers || this.mobileSizing;
  }

  updateViewBox() {
    this.mobileSizing = window.innerWidth < 670;
    // rerender axes with new mobile sizing value
    this.renderAxis(this.xAxis, false);
    this.renderAxis(this.yAxis, true);


    // set viewbox based on window size (customized for specific phones)
    const iPhoneSE = window.innerWidth < 350;
    const iPhone8 = window.innerWidth < 400;
    const width = iPhoneSE ? 180 : iPhone8 ? 280 : this.mobileSizing ? 300 : 600;
    const height = this.mobileSizing ? 400 : 500;
    this.plot.setAttributeNS(null, "viewBox", `0 0 ${width} ${height}`);
  }

  render() {
    // set up svg to resize on window resize
    this.updateViewBox();
    window.addEventListener("resize", () => this.updateViewBox());

    // render axes
    this.renderAxis(this.xAxis, false);
    this.renderAxis(this.yAxis, true);

    // render plot lines before points so they don't cover them
    this.renderPlotLines(this.xAxis, false);
    this.renderPlotLines(this.yAxis, true);

    // order: lines in background, then points, then names on top
    this.points.forEach(point => point.renderLine());
    this.points.forEach(point => point.renderPoints());
    this.points.forEach(point => point.renderCountyName());

    this.points.forEach(point => {
      point.renderTooltip(point.tooltipTriggerTargets[0], {
        triggerTarget: point.tooltipTriggerTargets,
        followCursor: true,
      });
    });
  }

  renderAxis(axis, isYAxis) {
    // remove ticks from previous render
    this.ticks[isYAxis ? "y" : "x"].forEach(tick => tick.remove());

    const tickSize = (axis.max - axis.min) / axis.numTicks;
    for (let i = 0; i < axis.numTicks + 1; i++) {
      const tickValue = axis.convert(axis.min + i * tickSize);

      // calculate spacing value depending on axis
      let spacingValue = i / axis.numTicks * 100;
      if (isYAxis) spacingValue = 100 - spacingValue;
      spacingValue = `${spacingValue}%`;

      // adjust for the coordinate system starting at the top left
      const axisPlacement = isYAxis ? 0 : "100%";
      // get offset based on window size
      const dxy = this.mobileSizing ? 18 : 26;

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
    this.axisLabels[isYAxis ? "y" : "x"].forEach(label => label.remove());

    // render lower and higher labels
    this.renderAxisLabels(axis, isYAxis, true);
    this.renderAxisLabels(axis, isYAxis, false);
  }

  renderAxisLabels(axis, isYAxis, isLower) {
    // for mobile we only need one label
    if (this.mobileSizing && !isLower) return;

    // wrap axis labels in svgs to do local rotation
    const wrapper = document.createElementNS(SVG_NS, "svg");
    wrapper.setAttributeNS(null, "class", "label-wrapper");
    if (this.mobileSizing) {
      wrapper.setAttributeNS(null, "x", isYAxis ? 0 : "50%");
      wrapper.setAttributeNS(null, "y", isYAxis ? "50%" : "100%");
    } else {
      wrapper.setAttributeNS(null, "x", isLower ? 0 : isYAxis ? 0 : "100%");
      wrapper.setAttributeNS(null, "y", isLower ? "100%" : isYAxis ? 0 : "100%");
    }

    // get offset based on window size
    const dy = this.mobileSizing ? 40 : 60;

    const label = document.createElementNS(SVG_NS, "text");
    const textAnchor = this.mobileSizing ? "middle" : isLower ? "start" : "end";
    label.setAttributeNS(null, "class", "axis-label");
    label.setAttributeNS(null, "text-anchor", textAnchor);
    label.setAttributeNS(null, "dy", isYAxis ? -dy : dy);
    if (isYAxis) label.setAttributeNS(null, "transform", "rotate(-90)");
    const text = isLower ? `← Lower ${axis.name}` : `Higher ${axis.name} →`;
    label.appendChild(document.createTextNode(this.mobileSizing ? axis.name : text));
    wrapper.appendChild(label);
    this.axisLabels[isYAxis ? "y" : "x"].push(wrapper);
    this.plot.appendChild(wrapper);
  }

  renderPlotLines(axis, isYAxis) {
    for (let i = 0; i < axis.numTicks + 1; i++) {
      // calculate spacing value depending on axis
      let spacingValue = i / axis.numTicks * 100;
      if (isYAxis) spacingValue = 100 - spacingValue;
      spacingValue = `${spacingValue}%`;

      // render the line for each axis tick
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttributeNS(null, "class", "axis-line");
      line.setAttributeNS(null, "x1", isYAxis ? spacingValue : 0);
      line.setAttributeNS(null, "y1", isYAxis ? 0 : spacingValue);
      line.setAttributeNS(null, "x2", isYAxis ? spacingValue : "100%");
      line.setAttributeNS(null, "y2", isYAxis ? "100%" : spacingValue);
      this.plot.appendChild(line);
    }
  }
}


class DistributionRow {
  constructor(county, cashBailRate, unsecuredRate, nonmonetaryRate, rorRate, renderTooltip) {
    this.county = county;
    this.cashBailRate = cashBailRate;
    this.unsecuredRate = unsecuredRate;
    this.nonmonetaryRate = nonmonetaryRate;
    this.rorRate = rorRate;

    this.renderTooltip = elements => renderTooltip(elements, [{
      cashBailRate: cashBailRate["value"],
      unsecuredRate: unsecuredRate["value"],
      nonmonetaryRate: nonmonetaryRate["value"],
      rorRate: rorRate["value"]
    }], county);
  }

  render() {
    // Add county name
    const nameElement = document.createElement("div");
    nameElement.className = "dist-county-name";
    nameElement.innerText = this.county;
    // Add distribution bars
    const distBarsSegment = document.createElement("div");
    distBarsSegment.className = "dist-bars-segment";
    [this.cashBailRate, this.unsecuredRate, this.nonmonetaryRate, this.rorRate].forEach(dist  => {
      const distBarElement = document.createElement("div");
      distBarElement.classList.add("dist-column-segment");
      distBarElement.classList.add(dist["className"]);
      distBarsSegment.appendChild(distBarElement);
    });
    // Set width of bar based on distribution
    const colWidths =
      `${this.cashBailRate["value"]}% ${this.unsecuredRate["value"]}% ${this.nonmonetaryRate["value"]}% ${this.rorRate["value"]}%`;
    distBarsSegment.style.gridTemplateColumns = colWidths;

    this.renderTooltip(distBarsSegment);

    const rowElement = document.createElement("div");
    rowElement.className = "dist-row";
    rowElement.appendChild(nameElement);
    rowElement.appendChild(distBarsSegment);

    return rowElement;
  }
}

export class DistributionGraph {
  constructor(container, data) {
    this.container = container;
    this.data = data;
    this.nameIdx = 1;
    this.distributionIdx = 5;
    // Sort data by county name
    this.data.sort((a, b) =>
      a["data"][this.nameIdx] > b["data"][1] ? 1 : a["data"][this.nameIdx] < b["data"][this.nameIdx] ? -1 : 0
    );

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
    };
    const renderValue = value => `${value.toFixed(1)}%`;
    this.renderTooltip = configureTooltip({rows: [
      { rowHeader: createHeader("Cash Bail", "cash-bar"), dataKey: "cashBailRate", render: renderValue },
      { rowHeader: createHeader("Unsecured", "unsecured-bar"), dataKey: "unsecuredRate", render: renderValue },
      { rowHeader: createHeader("Nonmonetary", "nonmonetary-bar"), dataKey: "nonmonetaryRate", render: renderValue },
      { rowHeader: createHeader("ROR", "ror-bar"), dataKey: "rorRate", render: renderValue },
    ],
    placement: "top",
    followCursor: true
    });

    this.render();
  }

  render() {
    this.data.forEach(county => {
      const countyName = county["data"][1];
      const distributions = county["data"][this.distributionIdx]["values"];
      const distributionRow =  new DistributionRow(countyName, distributions[0],
        distributions[1], distributions[2], distributions[3], this.renderTooltip);
      this.container.appendChild(distributionRow.render());
    });
  }
}