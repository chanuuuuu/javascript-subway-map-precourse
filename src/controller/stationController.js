import stations from '../model/stations.js';
import StationInput from '../view/stationInput.js';
import Table  from '../view/table.js';
import mainView from '../view/main.js';

import { makeTag } from '../view/tag.js';
import { STATION_INPUT_ID, STATION_INPUT_BUTTON_ID, STATION_DLETE_BUTTON_CLASS, STATION_MANAGE_BUTTION_ID } from '../shared.js';

// 역 관련 이벤트를 담당하는 컨트롤러 구현
export default class StationController {

  constructor() {
    // 역 리스트 생성
    this._stationList = stations;

    // 역 관리 버튼 태그
    this._menuButton = document.querySelector(`#${STATION_MANAGE_BUTTION_ID}`);

    // 역관리 버튼 클릭시 이벤트 연걸
    this._menuButton.addEventListener('click', () => this.manageStation());
    
    // 테이블 뷰 생성
    this.tableView = new Table();

    // 인풋 뷰 생성
    this.inputView = new StationInput();

    // 메인 뷰 생성
    this.mainView = mainView;
  }

  // 역 관리 버튼 클릭시
  manageStation() {

    // 현재 페이지가 역인지 확인 html 태그의 data-page
    if (this.mainView.checkPageType('station')){
      return;
    }

    // 역 리스트 조회
    const stations = this._stationList.select();
    // 테이블 데이터 생성
    const rowData = this.makeRowData(stations);

    // 태그 생성
    const input = this.inputView.makeInput();
    const table = this.tableView.makeTable(['역 이름', '설정'], rowData);

    // 태그 추가
    this.mainView.insert(input);
    this.mainView.insert(table);

    // 역 삭제 이벤트 추가
    this.appendDeleteEvent();
    this.appendInsertEvent();
  }

  // 테이블 버튼에 대한 삭제 이벤트 추가
  appendDeleteEvent() {
    const tableButtons = document.querySelectorAll(`.${STATION_DLETE_BUTTON_CLASS}`);
    for (const button of tableButtons) {
      button.addEventListener('click', (event)=> this.deleteStation(event));
    }
  }

  // 역 삭제 핸들러
  deleteStation(event) {
    const station = event.target.id;
    // 역 모델 업데이트
    const deleteResult = this._stationList.pop(station);
    if (deleteResult) {
      // 역 테이블 뷰 업데이트
      this.tableView.deleteRow(station);
    }else {
      alert('유효하지 않는 클릭입니다.');
    }
  }

  appendInsertEvent() {
    const insertButton = document.querySelector(`#${STATION_INPUT_BUTTON_ID}`);
    insertButton.addEventListener('click', ()=> this.insertStation());
  }

  // 역 추가 핸들러
  insertStation() {
    const input = document.querySelector(`#${STATION_INPUT_ID}`);
    const stationName = input.value;
    const insertResult = this._stationList.append(stationName);
    if (insertResult) {
      // 추가할 역 태그 데이터 만들기
      const insertData = this.makeRowData([stationName]);

      // 추가할 역 태그 추가하기
      const insertTag = this.tableView.makeRow(insertData[0]);

      // 추가한 역 이벤트 추가하기
      insertTag.addEventListener('click', (event)=> this.deleteStation(event));
    
    }else {
      alert('잘못된 입력이거나 이미 존재하는 역입니다. 다시 입력해주세요.');
    }
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
            'id': `${station}`,
            'text': '삭제',
            'tag': 'button',
            'class': `${STATION_DLETE_BUTTON_CLASS}`
          })
        ]
      }
      rowData.push(rowObj);
    }
    return rowData;
  }

  
}

new StationController();