// 노선을 추가하는 입력
import { makeTag, insertTag } from './tag.js';
import { WAT_INPUT_ID } from '../shared.js';

export default class WayInput {

  constructor() {
    this.element = null;
  }
  
  // 전체 태그 
  makeWayInput() {
    this.element = makeTag({
      "tag" : 'div',
    });
    // title tag 추가
    this.insertTitleTag(this.element, '노선 이름');

    // insert tag 추가
    this.insertInputTag(this.element);
    
    // select tag 추가
    this.insertSelectTag(this.element);
  }
  
  insertTitleTag(parent, text) {
    insertTag(parent, {
      "tag" : 'div',
      'text': text,
      'style': 'font-weight: 700;'
    })
  }

  insertInputTag(parent) {
    insertTag(parent, {
      'tag' : 'input',
      'id' : WAT_INPUT_ID
    })
  }

  insertSelectTag(parent){
    const element = makeTag({
      "tag" : 'div',
    });

    this.insertTitleTag(element, '상행 종점');
    this.insertTitleTag(element, '하행 종점');

    parent.appendChild(element);
  }

}