
export default class Stations {

  constructor() {
    // 현재까지 추가한 역 리스트 저장
    // this._stationSet = new Set([]);
    this._stationSet = new Set(['노포', '범어사', '장전', '부산대']);
  }

  // 역 리스트 조회하기
  select() {
    const  stationList = Array.from(this._stationSet.values());
    return stationList;
  }

  // 역 리스트에 역을 추가한다.
  append(inputStationNames) {
    
    // 유일성 확인
    if (!this.validate_unique(inputStationNames)){ 
      return false;
    }

    // 역 이름 길이 확인
    if (!this.validate_length(inputStationNames)){
      return false;
    }

    // 데이터 추가
    this._stationSet.add(inputStationNames);
    return true;
  }

  // 역에 대한 이름 유일성 확인
  validate_unique(inputStationNames) {
    if(this._stationSet.has(inputStationNames)){
      return false;
    }
    return true;
  }

  // 역에 대한 이름 길이 유효성 확인
  validate_length(inputStationNames) {
    if(inputStationNames.length < 2) {
      return false;
    }
    return true;
  }

  // 역에 대한 이름 삭제
  pop(stationName){
    // 존재여부 확인
    return this._stationSet.delete(stationName);
  }

  // 로컬 스토리지에서 데이터 들고오기 -> constructor 내부에서 수행되도록

}

