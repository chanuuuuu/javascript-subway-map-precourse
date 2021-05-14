class Lines {

  constructor() {
    this._lineList = [
      {
        'name' : '1호선',
        'start' : '금호',
        'end': '범어사'
      }
    ];
  }

  // 노선 리스트 조회하기
  select() {
    const lineList = this._lineList.map((x) => [
      x.name, x.start, x.end
    ]) 
    return lineList;
  }

  // 노선 리스트 추가하기
  append() {  
    const names = this._lineList.map((x) => x.name);
    console.log(names);
  }

}


const line = new Lines();
