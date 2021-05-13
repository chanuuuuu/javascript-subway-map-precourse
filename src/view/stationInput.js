
import { STATION_INPUT_ID, STATION_INPUT_BUTTON_ID } from '../shared.js';
import makeTag from './tag.js';

export default class StationInput {
  
  constructor(){
    this.element =  null;
  }

  makeInput() {
    this.element = makeTag({
      "tag" : 'div',
    });

    const innerDiv = makeTag({
      'tag': 'div',
      'style': 'margin-bottom: 10px;'
    })

    this.insertTitleTag(this.element);
    this.insertInputTag(innerDiv);
    this.insertButtonTag(innerDiv);

    this.element.appendChild(innerDiv)

    return this.element;
  }

  insertTitleTag(parent) {
    const title = makeTag({
      "tag" : 'div',
      'text': '역 이름',
      'style': 'font-weight: 700;'
    })
    parent.appendChild(title);
  }

  insertInputTag(parent) {
    const input = makeTag({
      'tag' : 'input',
      'id' : STATION_INPUT_ID
    })
    parent.appendChild(input);
  }

  insertButtonTag(parent) {
    const button = makeTag({
      'tag': 'button',
      'text' : '역 추가',
      'id' : STATION_INPUT_BUTTON_ID,
      'style': 'font-size: 15px;'
    })
    parent.appendChild(button);
  }

}