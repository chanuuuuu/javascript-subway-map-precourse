class Ways {

  constructor() {
    this._wayList = [
      {
        'name' : '1호선',
        'start' : '금호',
        'end': '범어사'
      }
    ];
  }

  // 노선 리스트 조회하기
  select() {
    const wayList = this._wayList.map((x) => [
      x.name, x.start, x.end
    ]) 
    return wayList;
  }

  // 노선 리스트 추가하기
  append() {  
    const names = this._wayList.map((x) => x.name);
    console.log(names);
  }

}


const way = new Ways();
