
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
    
    const title = makeTag({
      "tag" : 'div',
      'text': '역 이름',
      'style': 'font-weight: 700;'
    })

    const innerDiv = makeTag({
      'tag': 'div',
      'style': 'margin-bottom: 10px;'
    })

    const input = makeTag({
      'tag' : 'input',
      'id' : STATION_INPUT_ID
    })

    const button = makeTag({
      'tag': 'button',
      'text' : '역 추가',
      'id' : STATION_INPUT_BUTTON_ID,
      'style': 'font-size: 15px;'
    })

    innerDiv.appendChild(input);
    innerDiv.appendChild(button);

    this.element.appendChild(title);
    this.element.appendChild(innerDiv)

    return this.element;
  }


}