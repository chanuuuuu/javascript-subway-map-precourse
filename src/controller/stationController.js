import Stations from '../model/stations.js';
import stationInput from '../view/stationInput.js';
import Table  from '../view/table.js';
import makeTag from '../view/tag.js';

// 역 관련 이벤트를 담당하는 컨트롤러 구현
export default class StationController {

  constructor() {
    // 역 리스트 생성
    this._stationList = new Stations();

    // 역 관리 버튼 태그
    this._menuButton = document.querySelector('#station-manager-button');

    // 역 관리 내용 태그
    this._mainArea = document.querySelector('#main');

    // 역관리 버튼 클릭시 이벤트 연걸
    this._menuButton.addEventListener('click', () => this.manageStation());

    // 테이블 뷰 생성
    this.tableView = new Table();
  }

  // 역 관리 버튼 클릭시
  manageStation() {
    // 역 리스트 조회
    const stations = this._stationList.select();
    const rowData = this.makeRowData(stations);
    const input = stationInput();
    const table = this.tableView.makeTable(['역 이름', '설정'], rowData);

    this._mainArea.appendChild(input);
    this._mainArea.appendChild(table);

    this.appendDeleteEvent();
  }

  // 테이블 버튼에 대한 삭제 이벤트 추가
  appendDeleteEvent() {
    const tableButtons = document.querySelectorAll('table button');
    for (const button of tableButtons) {
      button.addEventListener('click', (event)=> this.deleteStation(event));
    }
  }

  // 역 삭제 핸들러
  deleteStation(event) {
    console.log(event.target.id);

    // 모델 갱신

    // view갱신
    tableView.deleteRow();

  }

  // 테이블로 전달하기 위한 데이터 전처리
  makeRowData(stations) {
    const rowData = []
    for (const station of stations) {
      const rowObj = {
        'id': `${station}-row`,
        'cell' : [
          makeTag({
            'text': `${station}`,
            'tag': 'div',
          }),
          makeTag({
            'text': '삭제',
            'tag': 'button',
            'style': 'border: 1px solid black;'
          })
        ]
      }
      rowData.push(rowObj);
    }
    return rowData;
  }

  
}

new StationController();