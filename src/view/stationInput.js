const stationInput = () =>{ 
  const element = document.createElement('div');
  const htmlText= `
    <div>역 이름</div>
    <div>
      <input></input>
      <button> 역 추가 </button>
    </div>
  `;
  element.innerHTML = htmlText;
  element.style = 'margin-top: 10px; margin-bottom: 10px'; 
  return element;
;}

export default stationInput;