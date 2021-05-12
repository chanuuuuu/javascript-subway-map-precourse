// 테이블을 구현하는 뷰
// let element = document.createElement(tag);

// 동적으로 구현하기 위해서는 반드시 style을 태그에 적용행햐ㅏㅁ
// 반드시 헤더 - data의 shape가 동일해야함
const makeTable = (header, data) => {
  let element = document.createElement('table');
  element.id = 'data-table';
  element.style='border: 1px solid black;';
  
  let tableHeader = document.createElement('tr');
  for (const head of header) {
    let tableCell = document.createElement('th');
    tableCell.style='border: 1px solid black;';
    tableCell.innerHTML = 
      `<div style="font-weight: bold; border: 1px solid black;">${head}</div>`;
    tableHeader.appendChild(tableCell);
  }
  element.appendChild(tableHeader);

  return element;
};

export default makeTable;
