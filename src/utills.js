 // 페이지 리렌더링 방지를 위한 
const checkPageType = (newPageType) => {
  const htmlTag = document.querySelector('html');
  const exPageType = htmlTag.dataset.pageType;
  // 동일 페이지라면 그대로 유지한다.
  if (exPageType === newPageType) {
    return true;
  } 
  else {
    // 동일 페이지가 아니라면 메인 태그의 데이터를 지운다.
    htmlTag.dataset.pageType = newPageType;
    
    // 메인 태그 내용 지우기
    const mainArea = document.querySelector('#main');
    mainArea.innerHTML = '';
    return false;
  }
}