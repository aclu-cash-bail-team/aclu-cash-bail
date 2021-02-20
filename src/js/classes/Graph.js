const SVG_NS = "http://www.w3.org/2000/svg";

class CountyPoint {
  constructor(county, data, xAxis, yAxis, outlier, showName, plot, container) {
    this.county = county;
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.outlier = outlier;
    this.showName = showName;
    this.plot = plot;
    this.container = container;
    [this.xs, this.ys] = this.getPositions();
    this.elements = [];
    this.tooltipFixed = true;
  }

  setTooltipFixed(isFixed) {
    this.tooltipFixed = isFixed;
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
      const className = `${data.name} scatter-point${this.outlier ? " outlier" : ""}`;
      const point = document.createElementNS(SVG_NS, "circle");
      point.setAttributeNS(null, "class", className);
      point.setAttributeNS(null, "cx", this.xs[i]);
      point.setAttributeNS(null, "cy", this.ys[i]);
      point.setAttributeNS(null, "r", 4);
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
    if (!this.tooltip) this.renderTooltip();
    this.elements.forEach(element => {
      element.classList.add("hovering");
    });
  }

  onMouseLeave() {
    if (this.tooltip) this.tooltip.remove();
    this.tooltip = undefined;
    this.elements.forEach(element => {
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
    this.data.forEach(data => {
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
    if (!this.tooltipFixed) {
      tooltip.style.top = this.ys[0];
      tooltip.style.left = this.xs[0];
    }
    this.tooltip = tooltip;
    this.container.appendChild(this.tooltip);
  }
}


export class ScatterPlot {
  constructor(data, xAxis, yAxis, toText, container) {
    this.data = data;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.ticks = {"x": [], "y": []};
    this.axisLabels = {"x": [], "y": []};
    this.toText = toText;
    this.container = container;
    this.plotContainer = this.container.getElementsByClassName("plot-container")[0];
    this.plot = this.container.getElementsByClassName("scatter-plot")[0];
    this.points = this.createPoints();
    this.mobileSizing = window.innerWidth < 640;
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
      const x = this.data[county]["x"];
      const y = this.data[county]["y"];
      const data = Object.keys(x).map(key => {
        return {
          name: key,
          x: x[key],
          y: Number(y[key].replace(/[^\d.-]/g, "")),
          xText: this.toText.x(x[key]),
          yText: this.toText.y(y[key]),
          xHeader: this.toText.xHeader,
          yHeader: this.toText.yHeader
        };
      });
      points.push(new CountyPoint(
        county,
        data,
        this.xAxis,
        this.yAxis,
        outlier,
        showName,
        this.plot,
        this.plotContainer
      ));
    }
    return points;
  }

  toggleOutliers() {
    this.showOutliers = !this.showOutliers;
    return this.showOutliers || this.mobileSizing;
  }

  updateViewBox() {
    this.mobileSizing = window.innerWidth < 640;
    // rerender axes with new mobile sizing value
    this.renderAxis(this.xAxis, false);
    this.renderAxis(this.yAxis, true);

    // set points to use fixed positioning for mobile or on point for not
    this.points.forEach(point => point.setTooltipFixed(this.mobileSizing));

    // set viewbox based on window size
    const innerWidth = window.innerWidth;
    const width = innerWidth < 425 ? 280 : innerWidth < 640 ? 300 : 600;
    const height = window.innerWidth < 640 ? 400 : 500;
    this.plot.setAttributeNS(null, "viewBox", `0 0 ${width} ${height}`);
  }

  render() {
    // set up svg to resize on window resize
    this.updateViewBox();
    window.addEventListener("resize", e => this.updateViewBox());

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
    // wrap axis labels in svgs to do local rotation
    const wrapper = document.createElementNS(SVG_NS, "svg");
    wrapper.setAttributeNS(null, "class", "label-wrapper");
    wrapper.setAttributeNS(null, "x", isLower ? 0 : isYAxis ? 0 : "100%");
    wrapper.setAttributeNS(null, "y", isLower ? "100%" : isYAxis ? 0 : "100%");

    // get offset based on window size
    const dy = this.mobileSizing ? 40 : 60;

    const label = document.createElementNS(SVG_NS, "text");
    label.setAttributeNS(null, "class", "axis-label");
    label.setAttributeNS(null, "text-anchor", isLower ? "start" : "end");
    label.setAttributeNS(null, "dy", isYAxis ? -dy : dy);
    if (isYAxis) label.setAttributeNS(null, "transform", "rotate(-90)");
    const text = isLower ? `← Lower ${axis.name}` : `Higher ${axis.name} →`;
    label.appendChild(document.createTextNode(text));
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
