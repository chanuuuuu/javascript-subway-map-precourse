import makeTag from './tag.js';

class Table {

  constructor() {
    this._element =  null;
  }

  makeTable(header, rowData) {
    this.element = makeTag({
      "id" : 'data-table',
      "tag" : 'table',
      'style': 'border: 1px solid black;'
    });

    // headerList
    const headerTags = this.makeHeader(header);
    this.makeRow(headerTags); 

    // rowList
    rowData.forEach((row)=> this.makeRow(row));

    return this.element;
  }

  makeRow(rowData) {
    const row = makeTag({ 
      'tag' : 'tr',
      'id' : rowData.id
     });
    
    for (const element of rowData.cell) {
      const cell = makeTag({ 
        'tag' : 'th',
        'style': 'border: 1px solid black;'
       });
      cell.appendChild(element);
      row.appendChild(cell);
    }

    this.element.appendChild(row);
  }

  deleteRow(rowId) {
    const row = document.querySelector(`#${rowId}`);
    row.parentNode.removeChild(row);
  }

  // 헤더리스트를 태그로 만드는 작업
  makeHeader(headerList) {
    const headerElements = headerList.map((header)=> makeTag({
      'tag' : 'div',
      'text': header,
      'style' : "font-weight: bold;"
    }))

    return {
      'id' : 'table-header',
      'cell': headerElements
    }
  }
 
}

export default  Table;