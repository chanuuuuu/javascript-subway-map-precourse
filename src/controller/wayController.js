import stations from '../model/stations.js';
import WayInputView from '../view/wayInput.js';

export default class WayController {
  constructor() {
    
    // 역 관리 버튼 태그
    this._menuButton = document.querySelector('#station-manager-button');
    
    // 역 관리 내용 태그
    this._mainArea = document.querySelector('#main');
    
    // 인풋 뷰 생성
    this.inputView = new WayInputView();
  }

  // 리렌더링 방지
  checkPageType() {
    const htmlTag = document.querySelector('html');
    if (htmlTag.dataset.pageType === 'station') {
      return true;
    } 
    else {
      htmlTag.dataset.pageType = 'station';
      return false;
    }
  }

  // 노선 관리 버튼 클릭시
  manageWay() {
    const input = this.inputView.makeWayInput();

    this._mainArea.appendChild(input);
  }

}