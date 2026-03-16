const generateButton = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');

generateButton.addEventListener('click', () => {
  numbersContainer.innerHTML = '';
  
  // 6세트 생성
  for(let i = 0; i < 6; i++) {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    
    // 각 번호에 가상의 확률 부여 (10% ~ 99% 사이)
    const numbersWithProb = Array.from(numbers).map(num => {
      return {
        value: num,
        prob: Math.random() * 89 + 10 
      };
    });
    
    // 확률이 높은 순서대로 내림차순 정렬
    numbersWithProb.sort((a, b) => b.prob - a.prob);
    
    const setContainer = document.createElement('div');
    setContainer.classList.add('number-set');
    
    numbersWithProb.forEach((item, index) => {
      const numberContainer = document.createElement('div');
      numberContainer.classList.add('number-wrapper');
      
      const numberElement = document.createElement('div');
      numberElement.classList.add('number');
      numberElement.textContent = item.value;
      
      // 그라데이션 색상 계산 (히트맵 스타일: 빨강 -> 파랑)
      // index 0 (확률 제일 높음) -> Hue 0 (빨강)
      // index 5 (확률 제일 낮음) -> Hue 240 (파랑)
      const hue = Math.floor((index / 5) * 240);
      numberElement.style.backgroundColor = `hsl(${hue}, 85%, 55%)`;
      numberElement.style.color = '#fff';
      
      const probElement = document.createElement('div');
      probElement.classList.add('probability');
      probElement.textContent = `${item.prob.toFixed(1)}%`;
      
      numberContainer.appendChild(numberElement);
      numberContainer.appendChild(probElement);
      setContainer.appendChild(numberContainer);
    });
    
    numbersContainer.appendChild(setContainer);
  }
});