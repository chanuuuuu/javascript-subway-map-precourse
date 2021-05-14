
// 특정 format에 따라서 tag를 만드는 js
const makeTag = (tagData) => {
  const { tag } = tagData;
  
  const element = document.createElement(`${tag}`);

  // 내부 텍스트 
  if ('text' in tagData) {
    element.innerText = tagData.text;
  }

  // 내부 스타일
  if ('style' in tagData) {
    element.style = tagData.style;
  }

  // id 정의
  if ('id' in tagData) {
    element.id = tagData.id;
  }

  if ('class' in tagData) {
    element.className = tagData.class;
  }

  return element;
}

const insertTag = (parent, tagData) => {
  const tag = makeTag(tagData)
  parent.appendChild(tag);
}

export {
  makeTag,
  insertTag
};