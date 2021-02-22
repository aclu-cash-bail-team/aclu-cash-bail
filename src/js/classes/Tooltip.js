/********************
  configureTooltip ({rows, columns, ...options}) => renderTooltip
  =========================================================
  - rows?: ROW[] (function accepts either rows or columns, not both)
  - columns?: COLUMNS[] (function accepts either rows or columns, not both)
  - options?: TippyJSOptions https://atomiks.github.io/tippyjs/v6/all-props/#allowhtml
*********************/

/********************
  renderTooltip (element, data, title, customConfig) => TooltipInstance | [Tooltip Instances]
  =========================================================
  - element: CSS selector string | Element | Element[] | NodeList (to attach tooltip to)
  - data: Object[]
  - title?: string | Element
  - customConfig?: TippyJSOptions https://atomiks.github.io/tippyjs/v6/all-props/#allowhtml
*********************/

/********************
  ROW
  =========================================================
  - isColumnHeader?: boolean; render each cell in the row as a header for the column
  - rowHeader?: Element | string | ((data: Object[]) = Element | string); how to render first cell in the row
  - dataKey: keyof data; 
  - render?: ((dataKeyValue: data[i][dataKey], data[i], i) => Element | string) | Element | string
*********************/

/********************
  COLUMN
  =========================================================
  - isRowHeader?: boolean; render each cell in the column as a header for the row
  - columnHeader?: Element | string | ((data: Object[]) = Element | string);  how to render first cell in the column
  - dataKey: keyof data; 
  - render: ((dataKeyValue: data[i][dataKey], data[i], i) => Element | string) | Element | string
*********************/
const tippy = window.tippy;

function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument || element && [1, 3].includes(element.nodeType);
}

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function rowsToTable(rows, data) {
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  rows.forEach(rowConfig => {
    //render row's header column
    const row = document.createElement("tr");
    const rowHeaderCell = document.createElement(rowConfig.isColumnHeader ? "th" : "td");
    rowHeaderCell.className = rowConfig.isColumnHeader ? "col-header" : "row-header";
    const rowHeaderCellValue = isFunction(rowConfig.rowHeader) ? rowConfig.rowHeader(data) : rowConfig.rowHeader;
    const rowHeaderCellEl = isElement(rowHeaderCellValue) ? rowHeaderCellValue : document.createTextNode(rowHeaderCellValue || "");
    rowHeaderCell.appendChild(rowHeaderCellEl);
    row.appendChild(rowHeaderCell);

    //render rest of the rows
    data.forEach((rowData, i) => {
      const cell = document.createElement(rowConfig.isColumnHeader ? "th" : "td");
      cell.className = rowConfig.isColumnHeader ? "col-header" : "";
      const dataKeyValue = rowData[rowConfig.dataKey];
      const renderedCellValue = rowConfig.render ? (isFunction(rowConfig.render) ? rowConfig.render(dataKeyValue, rowData, i) : rowConfig.render): dataKeyValue;
      const renderedCellEl = isElement(renderedCellValue) ? renderedCellValue : document.createTextNode(renderedCellValue);
      cell.appendChild(renderedCellEl);
      row.appendChild(cell);
    });

    if (rowConfig.isColumnHeader) {
      thead.appendChild(row);
    } else {
      tbody.appendChild(row);
    }
  });

  return [thead, tbody];
}

function columnsToTable(columns, data) {
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headerRow = document.createElement("tr");

  //render table's header row
  columns.forEach(({columnHeader}) => {
    const columnHeaderCell = document.createElement("th");
    columnHeaderCell.className = "col-header";
    const columnHeaderCellValue = isFunction(columnHeader) ? columnHeader(data) : columnHeader;
    const columnHeaderCellEl = isElement(columnHeaderCellValue) ? columnHeaderCellValue : document.createTextNode(columnHeaderCellValue || "");
    columnHeaderCell.appendChild(columnHeaderCellEl);
    headerRow.appendChild(columnHeaderCell);
  });
  thead.appendChild(headerRow);

  //render rest of the table  
  data.forEach((columnData, i) => {
    const row = document.createElement("tr");
    columns.forEach(columnConfig => {
      const cell = document.createElement("td");
      if (columnConfig.isRowHeader) cell.className="row-header";
      const dataKeyValue = columnData[columnConfig.dataKey];

      const renderedCellValue = columnConfig.render ? (isFunction(columnConfig.render) ? columnConfig.render(dataKeyValue, columnData, i) : columnConfig.render): dataKeyValue;
      const renderedCellEl = isElement(renderedCellValue) ? renderedCellValue : document.createTextNode(renderedCellValue);
      cell.appendChild(renderedCellEl);
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  return [thead, tbody];
}

function createTooltipTable(rows, columns, data) {
  //create table
  const table = document.createElement("table");
  table.className = "tooltip-table";

  //create content
  const [thead, tbody] = rows ? rowsToTable(rows, data) : columnsToTable(columns, data);

  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
}

function createTooltipContent(title, rows, columns, data) {
  const tooltipContent = document.createElement("div");
  tooltipContent.className = "tooltip-content";

  //create title
  if (title) {
    const tooltipTitle = document.createElement("div");
    const titleElement = isElement(title) ? title : document.createElement("h4").appendChild(document.createTextNode(title));
    tooltipTitle.className = "tooltip-title";
    tooltipTitle.appendChild(titleElement);
    tooltipContent.appendChild(tooltipTitle);
  }

  //create table
  if (!!(rows || columns) && !!data) {
    const tooltipTable = createTooltipTable(rows, columns, data);
    tooltipContent.appendChild(tooltipTable);
  }

  return () => tooltipContent.cloneNode(true);
}

tippy.setDefaultProps({
  arrow: false,
  placement: "right",
  delay: 0,
  duration: 0,
  flip: false,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: true,
        padding: 4
      },
    }
  }
});


export function configureTooltip(options) {
  const { rows, columns, ...config } = options;

  function renderTooltip(elements, data, title, customConfig = {}) {
    const tooltipConfig = {
      ...config,
      ...customConfig,
      content: 
          customConfig.content || 
          config.content || 
          createTooltipContent( 
            title, 
            rows, 
            columns, 
            data
          )
    };
    return tippy(elements, tooltipConfig);
  }

  return renderTooltip;
}