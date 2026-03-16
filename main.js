document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generate');
  const numbersContainer = document.getElementById('numbers');
  const fortuneContainer = document.getElementById('fortune-container');
  const fortuneText = document.getElementById('fortune-text');

  const fortunes = [
    "오늘은 금전운이 매우 좋은 날입니다! 자신감을 가지세요.",
    "작은 행운이 큰 기쁨으로 다가오는 하루가 될 거예요.",
    "동쪽에서 귀인이 나타나 당신의 선택을 도와줄 것입니다.",
    "직관을 믿어보세요. 평소와 다른 선택이 행운을 가져다줍니다.",
    "꾸준한 노력이 드디어 빛을 발하는 날입니다. 기대를 가져보세요.",
    "마음속에 품고 있던 꿈에 한 걸음 더 가까워지는 하루입니다.",
    "뜻밖의 장소에서 기분 좋은 소식을 듣게 될 확률이 높습니다.",
    "오늘은 당신이 주인공인 날! 밝은 에너지가 주변에 가득합니다.",
    "새로운 시작을 하기에 최적의 기운이 감돌고 있습니다.",
    "인내심을 가지고 기다리면 더 큰 수확을 얻을 수 있는 날입니다."
  ];

  generateButton.addEventListener('click', () => {
    // 운세 표시
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneText.textContent = randomFortune;
    fortuneContainer.style.display = 'block';

    // 기존 번호 삭제
    numbersContainer.innerHTML = '';
    
    // 6세트 생성
    for(let i = 0; i < 6; i++) {
      const numbers = new Set();
      while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
      }
      
      const numbersWithProb = Array.from(numbers).map(num => {
        return {
          value: num,
          prob: Math.random() * 79 + 20 
        };
      });
      
      numbersWithProb.sort((a, b) => b.prob - a.prob);
      
      const setContainer = document.createElement('div');
      setContainer.classList.add('number-set');
      setContainer.style.animationDelay = `${i * 0.1}s`;
      
      numbersWithProb.forEach((item, index) => {
        const numberContainer = document.createElement('div');
        numberContainer.classList.add('number-wrapper');
        
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = item.value;
        
        const hue = Math.floor((index / 5) * 260);
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