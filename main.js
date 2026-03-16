document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generate');
  const numbersContainer = document.getElementById('numbers');

  generateButton.addEventListener('click', () => {
    // 기존 내용 삭제
    numbersContainer.innerHTML = '';
    
    // 6세트 생성
    for(let i = 0; i < 6; i++) {
      const numbers = new Set();
      while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
      }
      
      // 각 번호에 가상의 확률 부여 (20% ~ 99% 사이로 조금 더 현실감 있게 조정)
      const numbersWithProb = Array.from(numbers).map(num => {
        return {
          value: num,
          prob: Math.random() * 79 + 20 
        };
      });
      
      // 확률이 높은 순서대로 내림차순 정렬
      numbersWithProb.sort((a, b) => b.prob - a.prob);
      
      const setContainer = document.createElement('div');
      setContainer.classList.add('number-set');
      // 애니메이션 지연 효과
      setContainer.style.animationDelay = `${i * 0.1}s`;
      
      numbersWithProb.forEach((item, index) => {
        const numberContainer = document.createElement('div');
        numberContainer.classList.add('number-wrapper');
        
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = item.value;
        
        // 프리미엄 그라데이션 (금색/은색 느낌 혹은 보라/핑크)
        // 확률 상위권은 따뜻한 색, 하위권은 차가운 색
        const hue = Math.floor((index / 5) * 260); // 0 (Red) to 260 (Purple/Blue)
        numberElement.style.background = `linear-gradient(135deg, hsl(${hue}, 80%, 60%), hsl(${hue}, 80%, 40%))`;
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
});