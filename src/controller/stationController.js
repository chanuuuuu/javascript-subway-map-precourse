import Stations from '../model/stations.js';

import stationInput from '../view/stationInput.js';
import makeTable from '../view/table.js';

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
  }

  // 역 관리 버튼 클릭시
  manageStation() {
    // 역 리스트 조회
    const stations = this._stationList.select();
    console.log(stations);

    const input = stationInput();
    const table = makeTable(['안녕', '삭제'], ['안녕']);

    this._mainArea.appendChild(input);
    this._mainArea.appendChild(table);


    console.log(table);

    // 역 추가 뷰 
  }
  
}

new StationController();