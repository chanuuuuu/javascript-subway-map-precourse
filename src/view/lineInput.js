// 노선을 추가하는 입력
import { makeTag, insertTag } from './tag.js';
import {
   LINE_INPUT_ID,
   LINT_INPUT_BUTTON_ID
 } from '../shared.js';

export default class LineInput {

  constructor() {
    this.element = null;
  }
  
  // 전체 태그 
  makeLineInput() {
    this.element = makeTag({
      "tag" : 'div',
    });
    // title tag 추가
    this.insertTitleTag(this.element, '노선 이름');

    // insert tag 추가
    this.insertInputTag(this.element);
    
    // select tag 추가
    this.insertSelectTag(this.element);

    this.insertButtonTag(this.element);
    return this.element;
  }
  
  insertTitleTag(parent, text) {
    insertTag(parent, {
      "tag" : 'div',
      'text': text,
      'style': 'font-weight: 700; margin-bottom: 5px; margin-top: 5px;'
    })
  }

  insertInputTag(parent) {
    insertTag(parent, {
      'tag' : 'input',
      'id' : LINE_INPUT_ID
    })
  }

  insertButtonTag(parent) {
    insertTag(parent, {
      'tag' : 'button',
      'text': '노선 추가',
      'id' : LINT_INPUT_BUTTON_ID
    })
  }

  insertSelectTag(parent){
    const element = makeTag({
      "tag" : 'div',
    });

    this.insertTitleTag(element, '상행 종점');
    // select 추가
    this.insertTitleTag(element, '하행 종점');
    // select 추가
    

    parent.appendChild(element);
  }

}