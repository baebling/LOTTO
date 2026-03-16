document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generate');
  const numbersContainer = document.getElementById('numbers');
  const fortuneContainer = document.getElementById('fortune-container');
  const fortuneText = document.getElementById('fortune-text');
  const lunchContainer = document.getElementById('lunch-container');
  const lunchText = document.getElementById('lunch-text');
  const cloverContainer = document.getElementById('clover-container');

  // 네잎클로버 생성 함수
  function createClover() {
    const clover = document.createElement('div');
    clover.classList.add('clover');
    clover.innerHTML = '🍀';
    clover.style.left = Math.random() * 100 + 'vw';
    clover.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5~10초 사이
    clover.style.fontSize = Math.random() * 20 + 15 + 'px'; // 15~35px 사이
    
    cloverContainer.appendChild(clover);

    // 애니메이션 종료 후 제거
    setTimeout(() => {
      clover.remove();
    }, 10000);
  }

  // 주기적으로 클로버 생성
  setInterval(createClover, 500);

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

  const lunchMenus = [
    "김치찌개", "된장찌개", "비빔밥", "불고기", "제육볶음", "보쌈정식", "족발", "물냉면", "비빔냉면", "칼국수",
    "수제비", "떡볶이와 튀김", "김밥과 라면", "순대국밥", "뼈해장국", "갈비탕", "삼계탕", "육개장", "청국장", "콩나물국밥",
    "돌솥비빔밥", "잡채밥", "오징어볶음", "닭갈비", "부대찌개", "낙지볶음", "고등어구이", "갈치조림", "아구찜", "해물파전",
    "모듬 초밥", "돈코츠 라멘", "미소 라멘", "등심 돈카츠", "안심 돈카츠", "규동", "가츠동", "에비텐동", "사누끼 우동", "판모밀",
    "연어 덮밥(사케동)", "야키소바", "오코노미야키", "회덮밥", "장어 덮밥", "일본식 카레라이스", "에비후라이 카레", "치킨 가라아게동", "지라시 스시", "나가사키 짬뽕",
    "짜장면", "해물 짬뽕", "찹쌀 탕수육", "계란 볶음밥", "마파두부밥", "양장피", "팔보채", "유산슬", "깐풍기", "라조기",
    "멘보샤", "마라탕", "마라상궈", "꿔바로우", "울면", "잡탕밥", "고추잡채와 꽃빵", "샤오롱바오", "탄탄면", "우육면",
    "까르보나라", "알리오올리오", "해산물 토마토 파스타", "봉골레 파스타", "매콤 로제 파스타", "고르곤졸라 피자", "마르게리따 피자", "페퍼로니 피자", "안심 스테이크", "함박 스테이크",
    "버섯 크림 리조또", "치즈 라자냐", "바질 뇨끼", "감바스 알 아히요", "에그인헬", "시저 샐러드", "치즈 베이컨 수제버거", "클럽 샌드위치", "반숙 오므라이스", "피쉬앤칩스",
    "소고기 쌀국수", "분짜", "팟타이", "푸팟퐁커리", "나시고랭", "미고랭", "쉬림프 타코", "치킨 퀘사디아", "비프 부리또", "치킨 마크니 카레와 난"
  ];

  generateButton.addEventListener('click', () => {
    // 운세 표시
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneText.textContent = randomFortune;
    fortuneContainer.style.display = 'block';

    // 점심 메뉴 추천 표시
    const randomMenu = lunchMenus[Math.floor(Math.random() * lunchMenus.length)];
    lunchText.textContent = randomMenu;
    lunchContainer.style.display = 'block';

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