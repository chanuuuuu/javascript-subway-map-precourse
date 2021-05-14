import stations from '../model/stations.js';
import LineInputView from '../view/lineInput.js';
import mainView from '../view/main.js';
import {
  LINE_MANAGE_BUTTION_ID,
  LINE_INPUT_ID,
  
} from '../shared.js';

export default class LineController {
  constructor() {
    
    // 노선 관리 버튼 태그
    this._menuButton = document.querySelector(`#${LINE_MANAGE_BUTTION_ID}`);

    // 노선 관리 버튼 이벤트 연결
    this._menuButton.addEventListener('click', () => this.manageLine());

    // 인풋 뷰 생성
    this.inputView = new LineInputView();

    // 메인 뷰 객체 호출 -> 공유하고 있는 것이 좋다? 상태를 가지고 있으면 안된다.
    this.mainView = mainView;
  }

  // 노선 관리 버튼 클릭시
  manageLine() {
    const input = this.inputView.makeLineInput();

     // 현재 페이지가 역인지 확인 html 태그의 data-page
     if (this.mainView.checkPageType('line')){
      return;
    }
    
    this.mainView.insert(input);
  }

}

new LineController();