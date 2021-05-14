// main tag를 관리하는 뷰
class MainView {
  constructor(){
    this.htmlTag = document.querySelector('html');
    this.element = document.querySelector('#main');
  }

  // 페이지 리렌더링 방지를 위한 
  checkPageType = (newPageType) => {
    const exPageType = this.htmlTag.dataset.pageType;
      // 동일 페이지라면 그대로 유지한다.
      if (exPageType === newPageType) {
        return true;
      } 
      else {
        // 동일 페이지가 아니라면 메인 태그의 데이터를 지운다.
        this.htmlTag.dataset.pageType = newPageType;
        this.reset();
        return false;
      }
  }

  reset() {
    this.element.innerHTML = '';
  }

  insert(tag) {
    this.element.appendChild(tag);
  }
}


const mainView = new MainView();

export default mainView;