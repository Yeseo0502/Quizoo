import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.png";
import image21 from "../assets/image21.png";
import image22 from "../assets/image22.png";
import image23 from "../assets/image23.png";
import image24 from "../assets/image24.png";
import image25 from "../assets/image25.png";
import image26 from "../assets/image26.png";
import image27 from "../assets/image27.png";
import image28 from "../assets/image28.png";
import image29 from "../assets/image29.png";
import image30 from "../assets/image30.png";
import image31 from "../assets/image31.png";
import image32 from "../assets/image32.png";
import image33 from "../assets/image33.png";
import image34 from "../assets/image34.png";
import image35 from "../assets/image35.png";
import image36 from "../assets/image36.png";
import image37 from "../assets/image37.png";
import image38 from "../assets/image38.png";
import image39 from "../assets/image39.png";
import image40 from "../assets/image40.png";
import image41 from "../assets/image41.png";
import image42 from "../assets/image42.png";
import image43 from "../assets/image43.png";
import image44 from "../assets/image44.png";
import image45 from "../assets/image45.png";
import image46 from "../assets/image46.png";
import image47 from "../assets/image47.png";
import image48 from "../assets/image48.png";
import image49 from "../assets/image49.png";
import image50 from "../assets/image50.png";
import image51 from "../assets/image51.png";
import image52 from "../assets/image52.png";
import image53 from "../assets/image53.png";
import image54 from "../assets/image54.png";
import image55 from "../assets/image55.png";
import image56 from "../assets/image56.png";
import image57 from "../assets/image57.png";
import image58 from "../assets/image58.png";
import image59 from "../assets/image59.png";
import image60 from "../assets/image60.png";
const animals = [
 {
    id: 1,
    name: "코알라",
    image: image1,
    description1: "평균 사이즈 : 60~85cm | 평균 몸무게 : 4~15kg | 주 서식지 : 호주",
    description2: "유칼립투스 잎을 주식으로 먹으며 하루 대부분을 나무 위에서 보내는 느린 움직임의 유대류 동물",
    zoo: ["국내 거주X"],
  },
  {
    id: 2,
    name: "사자",
    image: image2,
    description1: "평균 사이즈 : 170~250cm | 평균 몸무게 : 120~250kg | 주 서식지 : 아프리카 초원",
    description2: "무리를 이루어 생활하며 강한 힘과 뛰어난 사냥 능력을 가진 대표적인 대형 고양이과 동물",
    zoo: ["에버랜드", "서울대공원", "청주동물원","대전 오월드","우치공원","전주동물원", "달성공원","강릉쌍둥이동물농장","네이처 파크","대구동물원","부산어린이대공원"],
  },
  {
    id: 3,
    name: "호랑이",
    image: image3,
    description1: "평균 사이즈 : 180~250cm | 평균 몸무게 : 100~230kg | 주 서식지 : 아시아의 숲과 초원",
    description2: "강력한 사냥 능력과 선명한 줄무늬 무늬가 특징인 아시아 대표 대형 고양이과 동물",
    zoo: ["에버랜드", "서울대공원", "청주동물원","대전 오월드","우치공원","전주동물원", "달성공원","진양호동물원","국립백두대간수목원","강릉쌍둥이동물농장","네이처 파크","대구동물원","부산어린이대공원"],
  },
  {
    id: 4,
    name: "치타",
    image: image4,
    description1: "평균 사이즈 : 110~150cm | 평균 몸무게 : 35~70kg | 주 서식지 : 아프리카 초원",
    description2: "짧은 시간에 매우 빠른 속도로 달릴 수 있으며 날렵한 몸을 가진 대형 고양이과 동물",
    zoo: ["서울대공원"],
  },
  {
    id: 5,
    name: "표범",
    image: image5,
    description1: "평균 사이즈 : 100~190cm | 평균 몸무게 : 40~90kg | 주 서식지 : 아프리카·아시아",
    description2: "나무를 자유롭게 오르고 뛰어난 적응력을 가진 민첩한 대형 고양이과 동물",
    zoo: ["서울대공원","대전 오월드","전주동물원","네이처 파크","부산어린이대공원"],
  },
  {
    id: 6,
    name: "재규어",
    image: image6,
    description1: "평균 사이즈 : 150~180cm | 평균 몸무게 : 50~100kg | 주 서식지 : 남아메리카",
    description2: "강한 턱 힘과 독특한 무늬를 가지고 있는 남아메리카의 대형 고양이과 동물",
    zoo: ["서울대공원","대전 오월드","우치공원","전주동물원"],
  },
  {
    id: 7,
    name: "북극곰",
    image: image7,
    description1: "평균 사이즈 : 180~250cm | 평균 몸무게 : 350~700kg | 주 서식지 : 북극",
    description2: "두꺼운 지방층과 하얀 털로 추운 환경에 적응한 북극의 대형 포유류 동물",
    zoo: ["에버랜드", "서울대공원"],
  },
  {
    id: 8,
    name: "불곰",
    image: image8,
    description1: "평균 사이즈 : 150~280cm | 평균 몸무게 : 80~600kg | 주 서식지 : 북반구 산림",
    description2: "강한 힘과 뛰어난 생존력을 가지고 다양한 먹이를 먹는 곰과 동물",
    zoo: ["에버랜드", "서울대공원","대전 오월드","전주동물원", "달성공원","진양호동물원","대구동물원"],
  },
  {
    id: 9,
    name: "판다",
    image:image9,
    description1: "평균 사이즈 : 120~180cm | 평균 몸무게 : 70~120kg | 주 서식지 : 중국 산악지대",
    description2: "대나무를 주식으로 하며 둥근 얼굴과 검은 무늬가 특징인 희귀한 곰과 동물",
    zoo: ["에버랜드", "청주동물원"],
  },
  {
    id: 10,
    name: "늑대",
    image: image10,
    description1: "평균 사이즈 : 100~160cm | 평균 몸무게 : 30~60kg | 주 서식지 : 북반구",
    description2: "무리를 이루어 협력하며 사냥하는 사회성이 높은 갯과 동물",
    zoo: ["서울대공원", "청주동물원","대전 오월드","전주동물원","대구동물원","부산어린이대공원","부산어린이대공원"],
  },
  {
    id: 11,
    name: "여우",
    image: image11,
    description1: "평균 사이즈 : 45~90cm | 평균 몸무게 : 5~14kg | 주 서식지 : 북반구",
    description2: "뛰어난 지능과 빠른 적응력으로 다양한 환경에서 살아가는 갯과 동물",
    zoo: ["서울대공원", "청주동물원","우치공원","전주동물원","울산대공원","강릉쌍둥이동물농장","네이처 파크","대구동물원"],
  },
  {
    id: 12,
    name: "기린",
    image: image12,
    description1: "평균 사이즈 : 400~600cm | 평균 몸무게 : 700~1200kg | 주 서식지 : 아프리카 초원",
    description2: "긴 목과 높은 키를 이용해 나무 위의 먹이를 먹는 초식 포유류 동물",
    zoo: ["에버랜드", "서울대공원","부산어린이대공원"],
  },
  {
    id: 13,
    name: "코끼리",
    image: image13,
    description1: "평균 사이즈 : 300~750cm | 평균 몸무게 : 2700~6000kg | 주 서식지 : 아프리카",
    description2: "긴 코와 큰 귀가 특징이며 강한 힘을 가진 지구 최대급 육상 포유류 동물",
    zoo: ["에버랜드", "서울대공원","대전 오월드","우치공원","전주동물원", "달성공원","대구동물원","부산어린이대공원"],
  },
  {
    id: 14,
    name: "얼룩말",
    image: image14,
    description1: "평균 사이즈 : 200~250cm | 평균 몸무게 : 200~450kg | 주 서식지 : 아프리카 초원",
    description2: "검은색과 흰색의 독특한 줄무늬가 몸 전체에 있는 초식 말과 동물",
    zoo: ["에버랜드", "서울대공원", "청주동물원","대전 오월드","전주동물원", "달성공원","대구동물원","부산어린이대공원"],
  },
  {
    id: 15,
    name: "하마",
    image: image15,
    description1: "평균 사이즈 : 280~350cm | 평균 몸무게 : 1300~3200kg | 주 서식지 : 아프리카 강가",
    description2: "큰 몸집과 강한 턱을 가지고 물속 생활에 적응한 대형 포유류 동물",
    zoo: ["서울대공원","전주동물원"],
  },
  {
    id: 16,
    name: "코뿔소",
    image: image16,
    description1: "평균 사이즈 : 300~400cm | 평균 몸무게 : 800~2300kg | 주 서식지 : 아프리카",
    description2: "두꺼운 피부와 뿔을 이용해 자신을 보호하는 대형 초식 포유류 동물",
    zoo: ["에버랜드", "서울대공원"],
  },
  {
    id: 17,
    name: "낙타",
    image: image17,
    description1: "평균 사이즈 : 220~300cm | 평균 몸무게 : 300~600kg | 주 서식지 : 사막",
    description2: "혹에 에너지를 저장하며 건조한 사막 환경에 적응한 낙타과 동물",
    zoo: ["에버랜드", "서울대공원","대전 오월드","진양호동물원","부산어린이대공원"],
  },
  {
    id: 18,
    name: "알파카",
    image: image18,
    description1: "평균 사이즈 : 80~150cm | 평균 몸무게 : 45~80kg | 주 서식지 : 남아메리카",
    description2: "부드럽고 풍성한 털을 가지고 사람과 함께 생활해온 낙타과 동물",
    zoo: ["에버랜드", "서울대공원","대전 오월드","우치공원","강릉쌍둥이동물농장","네이처 파크","부산어린이대공원"],
  },
  {
    id: 19,
    name: "캥거루",
    image: image19,
    description1: "평균 사이즈 : 100~180cm | 평균 몸무게 : 30~90kg | 주 서식지 : 호주",
    description2: "강한 뒷다리와 꼬리를 이용해 뛰어다니는 호주의 대표 유대류 동물",
    zoo: ["서울대공원", "서울대공원","전주동물원","부산어린이대공원"],
  },
  {
    id: 20,
    name: "왈라비",
    image: image20,
    description1: "평균 사이즈 : 120~180cm | 평균 몸무게 : 70~200kg | 주 서식지 : 호주",
    description2: "작은 몸집과 뛰어난 점프 능력을 가진 캥거루과 유대류 동물",
    zoo: ["에버랜드","강릉쌍둥이동물농장"],
  },
  {
    id: 21,
    name: "레서판다",
    image: image21,
    description1: "평균 사이즈 : 50~65cm | 평균 몸무게 : 3~6kg | 주 서식지 : 히말라야",
    description2: "붉은 털과 긴 꼬리가 특징이며 나무 위에서 생활하는 판다과 동물",
    zoo: ["에버랜드", "서울대공원"],
  },
  {
    id: 22,
    name: "수달",
    image: image22,
    description1: "평균 사이즈 : 80~120cm | 평균 몸무게 : 5~12kg | 주 서식지 : 강과 호수",
    description2: "물속에서 빠르게 움직이며 뛰어난 수영 능력을 가진 족제비과 동물",
    zoo: ["에버랜드", "서울대공원", "청주동물원","대전 오월드", "국립생태원","우치공원","전주동물원","부산어린이대공원","서울어린이대공원"],
  },
  {
    id: 23,
    name: "미어캣",
    image: image23,
    description1: "평균 사이즈 : 25~35cm | 평균 몸무게 : 0.6~1.5kg | 주 서식지 : 아프리카",
    description2: "주변을 살피기 위해 두 발로 서 있는 모습으로 유명한 족제비과 동물",
    zoo: ["에버랜드", "서울대공원", "청주동물원","인천대공원","대전 오월드","우치공원","전주동물원","진양호동물원","울산대공원","강릉쌍둥이동물농장","네이처 파크","부산어린이대공원","서울어린이대공원","주렁주렁"],
  },
  {
    id: 24,
    name: "침팬지",
    image: image24,
    description1: "평균 사이즈 : 100~170cm | 평균 몸무게 : 30~70kg | 주 서식지 : 아프리카 숲",
    description2: "도구를 사용할 정도로 높은 지능을 가지고 있는 영장류 동물",
    zoo: ["에버랜드", "서울대공원","대전 오월드", "달성공원","대구동물원"],
  },
  {
    id: 25,
    name: "오랑우탄",
    image: image25,
    description1: "평균 사이즈 : 100~150cm | 평균 몸무게 : 30~100kg | 주 서식지 : 보르네오",
    description2: "긴 팔과 강한 힘으로 나무 위 생활에 적응한 대형 유인원 동물",
    zoo: ["서울대공원", ""],
  },
  {
    id: 26,
    name: "고릴라",
    image: image26,
    description1: "평균 사이즈 : 120~180cm | 평균 몸무게 : 70~200kg | 주 서식지 : 아프리카",
    description2: "큰 몸집과 강한 힘을 가진 현존하는 가장 큰 영장류 동물",
    zoo: ["서울대공원", "서울대공원"],
  },
  {
    id: 27,
    name: "타조",
    image: image27,
    description1: "평균 사이즈 : 200~280cm | 평균 몸무게 : 90~160kg | 주 서식지 : 아프리카",
    description2: "날개는 있지만 날지 못하며 빠른 달리기 능력을 가진 대형 조류 동물",
    zoo: ["에버랜드", "서울대공원", "청주동물원","인천대공원","대전 오월드","전주동물원", "달성공원","진양호동물원","강릉쌍둥이동물농장","대구동물원","부산어린이대공원"],
  },
  {
    id: 28,
    name: "홍학",
    image: image28,
    description1: "평균 사이즈 : 100~150cm | 평균 몸무게 : 2~4kg | 주 서식지 : 습지",
    description2: "분홍색 깃털과 긴 다리가 특징인 아름다운 습지 조류 동물",
    zoo: ["에버랜드", "서울대공원", "청주동물원"],
  },
  {
    id: 29,
    name: "펭귄",
    image: image29,
    description1: "평균 사이즈 : 40~120cm | 평균 몸무게 : 5~40kg | 주 서식지 : 남반구 해안 지역",
    description2: "뛰어난 수영 능력을 가지고 추운 바다 환경에 적응한 조류 동물",
    zoo: ["에버랜드","대전 오월드", "국립생태원","우치공원","부산어린이대공원","서울어린이대공원"],
  },
  {
    id: 30,
    name: "공작",
    image: image30,
    description1: "평균 사이즈 : 100~120cm | 평균 몸무게 : 3~6kg | 주 서식지 : 인도",
    description2: "화려하게 펼쳐지는 꼬리 깃털이 특징인 아름다운 조류 동물",
    zoo: ["에버랜드", "서울대공원", "청주동물원","인천대공원","전주동물원","아산시생태곤충원", "달성공원","진양호동물원","울산대공원","강릉쌍둥이동물농장","네이처 파크","대구동물원","부산어린이대공원"],
  },


  //  31~ 60

  {
    id: 31,
    name: "악어",
    image: image31,
    description1:
      "평균 사이즈 : 300~500cm | 평균 몸무게 : 200~700kg | 주 서식지 : 열대 강과 습지",
    description2: "강력한 턱과 단단한 피부를 가지고 물과 육지에서 살아가는 대형 파충류 동물",
    zoo: ["서울대공원","에버랜드","대전 오월드","부산어린이대공원"],
  },
  {
    id: 32,
    name: "카멜레온",
    image: image32,
    description1:
      "평균 사이즈 : 10~60cm | 평균 몸무게 : 0.05~0.5kg | 주 서식지 : 마다가스카르",
    description2: "주변 환경에 맞춰 몸 색깔을 바꾸며 긴 혀를 가진 독특한 파충류 동물",
    zoo: ["전주동물원"],
  },
  {
    id: 33,
    name: "하이에나",
    image: image33,
    description1:
      "평균 사이즈 : 100~180cm | 평균 몸무게 : 40~80kg | 주 서식지 : 아프리카 초원",
    description2: "강한 턱 힘과 뛰어난 사회성을 가지고 무리를 이루는 육식 포유류 동물",
    zoo: ["서울대공원","에버랜드","사천 동물원","대전 오월드","우치공원","강릉쌍둥이동물농장","네이처 파크","부산어린이대공원"],
  },
  {
    id: 34,
    name: "닥터피쉬",
    image: image34,
    description1:
      "평균 사이즈 : 8~15cm | 평균 몸무게 : 5~20g | 주 서식지 : 터키, 이란의 온천 및 하천",
    description2: "사람의 피부 각질을 먹는 특이한 습성을 가지고 온천 지역에 사는 작은 물고기 동물",
    zoo: ["주렁주렁","아쿠아플라넷","아산시생태곤충원"],
  },
  {
    id: 35,
    name: "바다사자",
    image: image35,
    description1:
      "평균 사이즈 : 150~250cm | 평균 몸무게 : 50~300kg | 주 서식지 : 태평양 연안",
    description2: "뛰어난 수영 능력과 높은 지능을 가지고 바다에서 생활하는 해양 포유류 동물",
    zoo: ["서울대공원","에버랜드","아쿠아플라넷","진양호동물원"],
  },
  {
    id: 36,
    name: "물개",
    image: image36,
    description1:
      "평균 사이즈 : 120~200cm | 평균 몸무게 : 50~150kg | 주 서식지 : 한대 해역",
    description2: "유선형 몸과 뛰어난 잠수 능력을 가지고 차가운 바다에 적응한 해양 포유류 동물",
    zoo: ["서울대공원","에버랜드","여수 아쿠아플라넷","대전 오월드","우치공원", "달성공원","대구동물원"],
  },
  {
    id: 37,
    name: "카피바라",
    image: image37,
    description1:
      "평균 사이즈 : 100~130cm | 평균 몸무게 : 35~70kg | 주 서식지 : 남아메리카 습지",
    description2: "세계에서 가장 큰 설치류이며 물가 주변에서 무리를 이루어 살아가는 포유류 동물",
    zoo: ["롯데월드 아쿠아리움","청주쥬니멀동물원", "에버랜드","네이처 파크","주렁주렁"],
  },
  {
    id: 38,
    name: "아르마딜로",
    image: image38,
    description1: "평균 사이즈 : 40~100cm | 평균 몸무게 : 1~10kg | 주 서식지 : 중남미",
    description2: "단단한 갑옷 같은 피부와 둥근 몸 형태로 자신을 보호하는 독특한 포유류 동물",
    zoo: ["서울대공원","아르티스 테마파크"],
  },
  {
    id: 39,
    name: "나무늘보",
    image: image39,
    description1:
      "평균 사이즈 : 50~80cm | 평균 몸무게 : 3~9kg | 주 서식지 : 남아메리카 열대우림",
    description2: "느린 움직임과 나무 위 생활에 적응하며 열대우림에서 살아가는 포유류 동물",
    zoo: ["서울대공원","에버랜드", "청주동물원"],
  },
  {
    id: 40,
    name: "라쿤",
    image: image40,
    description1:
      "평균 사이즈 : 50~70cm | 평균 몸무게 : 5~10kg | 주 서식지 : 북미 및 중미의 숲과 침엽수림",
    description2: "호기심이 많고 먹이를 물에 씻어 먹는 행동으로 유명한 잡식성 포유류 동물",
    zoo: ["주렁주렁","서울대공원","에버랜드","인천대공원","우치공원","전주동물원","진양호동물원","강릉쌍둥이동물농장","네이처 파크","부산어린이대공원"],
  },
  {
    id: 41,
    name: "들소",
    image: image41,
    description1:
      "평균 사이즈 : 250~380cm | 평균 몸무게 : 400~1200kg | 주 서식지 : 북아메리카 초원",
    description2: "거대한 몸집과 높은 어깨가 특징이며 넓은 초원에서 생활하는 대형 초식동물",
    zoo: ["서울대공원"],
  },
  {
    id: 42,
    name: "야크",
    image: image42,
    description1:
      "평균 사이즈 : 250~300cm | 평균 몸무게 : 300~1000kg | 주 서식지 : 티베트 고원",
    description2: "긴 털과 강한 체력을 가지고 추운 고산 지역에 적응한 소과 동물",
    zoo: ["국내 거주X"],
  },
  {
    id: 43,
    name: "순록",
    image: image43,
    description1:
      "평균 사이즈 : 150~220cm | 평균 몸무게 : 60~300kg | 주 서식지 : 북극권",
    description2: "추운 지역에서 살아가며 암수 모두 뿔이 자라는 특징을 가진 사슴과 동물",
    zoo: ["국내 거주X"],
  },
  {
    id: 44,
    name: "뱀",
    image: image44,
    description1:
      "평균 사이즈 : 50~300cm | 평균 몸무게 : 1~15kg | 주 서식지 : 전 세계의 숲, 사막, 초지 (실내 사육 환경)",
    description2: "긴 몸과 비늘로 덮인 피부를 가지고 다양한 환경에서 살아가는 파충류 동물",
    zoo: ["서울대공원", "청주동물원","대전 오월드", "국립생태원","아산시생태곤충원","네이처 파크","서울어린이대공원"],
  },
  {
    id: 45,
    name: "앵무새",
    image: image45,
    description1:
      "평균 사이즈 : 10~100cm | 평균 몸무게 : 60g~1.5kg | 주 서식지 : 열대 및 아열대 우림",
    description2: "화려한 깃털과 뛰어난 학습 능력을 가지고 사람의 말을 흉내 내는 조류 동물",
    zoo: ["서울대공원","주렁주렁", "에버랜드", "청주동물원","인천대공원","우치공원","전주동물원","아산시생태곤충원", "달성공원","진양호동물원","울산대공원","강릉쌍둥이동물농장","네이처 파크","대구동물원"],
  },
  {
    id: 46,
    name: "사슴",
    image: image46,
    description1:
      "평균 사이즈 : 100~200cm | 평균 몸무게 : 30~200kg | 주 서식지 : 숲과 초원",
    description2: "빠른 움직임과 아름다운 뿔이 특징이며 숲과 초원에서 살아가는 초식 포유류 동물",
    zoo: ["서울대공원","서울어린이대공원","안성 팜랜드","인천대공원","우치공원","전주동물원", "달성공원","진양호동물원","강릉쌍둥이동물농장","대구동물원","부산어린이대공원"],
  },
  {
    id: 47,
    name: "멧돼지",
    image: image47,
    description1:
      "평균 사이즈 : 90~180cm | 평균 몸무게 : 50~200kg | 주 서식지 : 산림",
    description2: "강한 주둥이와 뛰어난 후각을 이용해 땅속 먹이를 찾는 잡식성 포유류 동물",
    zoo: ["국내 거주X"],
  },
  {
    id: 48,
    name: "라마",
    image:image48,
    description1:
      "평균 사이즈 : 120~200cm | 평균 몸무게 : 90~160kg | 주 서식지 : 안데스 산맥",
    description2: "높은 산악 지역에서 생활하며 털과 체력이 발달한 낙타과 동물",
    zoo: ["어린이대공원","대전 오월드", "에버랜드","전주동물원","진양호동물원"],
  },
  {
    id: 49, 
    name: "돌산양",
    image: image49,
    description1:
      "평균 사이즈 : 130~180cm | 평균 몸무게 : 45~110kg | 주 서식지 : 알래스카 및 캐나다 북서부의 험준한 고산 지대",
    description2: "험난한 바위 절벽을 민첩하게 달릴 수 있으며, 수컷의 크고 둥글게 말린 뿔이 특징인 동물",
    zoo: ["서울대공원"],
  },
  {
    id: 50,
    name: "고슴도치",
    image: image50,
    description1:
      "평균 사이즈 : 20~30cm | 평균 몸무게 : 0.5~1.5kg | 주 서식지 : 유럽·아시아",
    description2: "몸 전체를 덮은 가시로 자신을 보호하고 위험할 때 몸을 마는 포유류 동물",
    zoo: ["대구 네이처파크","강릉쌍둥이동물농장"],
  },
  {
    id: 51,
    name: "토끼",
    image:image51,
    description1: "평균 사이즈 : 30~50cm | 평균 몸무게 : 1~3kg | 주 서식지 : 초원",
    description2: "긴 귀와 빠른 번식력이 특징이며 초원에서 생활하는 초식 포유류 동물",
    zoo: ["서울대공원","어린이대공원","에버랜드", "청주동물원","인천대공원","대전 오월드","전주동물원","아산시생태곤충원", "달성공원","진양호동물원","울산대공원","강릉쌍둥이동물농장","네이처 파크","대구동물원","서울어린이대공원"],
  },
  {
    id: 52,
    name: "기니피그",
    image: image52,
    description1:
      "평균 사이즈 : 20~30cm | 평균 몸무게 : 0.7~1.2kg | 주 서식지 : 남아메리카",
    description2: "온순한 성격과 작은 몸집을 가지고 다양한 환경에서 살아가는 설치류 동물",
    zoo: ["에버랜드","주렁주렁","인천대공원","전주동물원","아산시생태곤충원","진양호동물원","강릉쌍둥이동물농장","네이처 파크"],
  },
  {
    id: 53,
    name: "친칠라",
    image:image53,
    description1:
      "평균 사이즈 : 25~35cm | 평균 몸무게 : 0.5~1kg | 주 서식지 : 안데스 산맥",
    description2: "매우 부드러운 털과 작은 체구가 특징인 남아메리카의 설치류 동물",
    zoo: ["주렁주렁","대전 오월드","진양호동물원","강릉쌍둥이동물농장","네이처 파크"],
  },
  {
    id: 54,
    name: "다람쥐",
    image: image54,
    description1:
      "평균 사이즈 : 15~60cm | 평균 몸무게 : 0.1~6kg | 주 서식지 : 산악지대",
    description2: "나무를 잘 타고 먹이를 저장하는 습성을 가진 민첩한 설치류 동물",
    zoo: ["주렁주렁","서울대공원","인천대공원","진양호동물원","울산대공원","네이처 파크","부산어린이대공원"],
  },
  {
    id: 55,
    name: "퓨마",
    image: image55,
    description1:
      "평균 사이즈 : 150~230cm | 평균 몸무게 : 40~100kg | 주 서식지 : 북·남아메리카",
    description2: "강한 점프 능력과 뛰어난 사냥 기술을 가진 북아메리카 대형 고양이과 동물",
    zoo: ["서울대공원","대전 오월드"],
  },
  {
    id: 56,
    name: "스라소니",
    image: image56,
    description1:
      "평균 사이즈 : 80~130cm | 평균 몸무게 : 15~30kg | 주 서식지 : 북반구 산림",
    description2: "귀 끝의 긴 털과 날카로운 감각을 가진 추운 지역의 야생 고양이과 동물",
    zoo: ["서울대공원","청주동물원","우치공원","전주동물원"],
  },
  {
    id: 57,
    name: "말레이곰",
    image: image57,
    description1:
      "평균 사이즈 : 100~140cm | 평균 몸무게 : 25~65kg | 주 서식지 : 동남아시아 열대우림",
    description2: "곰 중 가장 작은 크기이며 긴 혀와 나무 타기 능력이 특징인 곰과 동물",
    zoo: ["서울대공원"],
  },
  {
    id: 58,
    name: "프레리도그",
    image: image58,
    description1:
      "평균 사이즈 : 30~40cm | 평균 몸무게 : 0.7~1.5kg | 주 서식지 : 북아메리카 초원",
    description2: "땅굴을 파고 무리를 이루어 생활하는 사회성이 높은 설치류 동물",
    zoo: ["에버랜드","주렁주렁", "국립생태원","우치공원","아산시생태곤충원","진양호동물원","강릉쌍둥이동물농장","부산어린이대공원"],
  },
  {
    id: 59,
    name: "사막여우",
    image: image59,
    description1:
      "평균 사이즈 : 30~40cm | 평균 몸무게 : 1~3kg | 주 서식지 : 사하라 사막",
    description2: "큰 귀와 털이 난 발바닥으로 뜨거운 사막 환경에 적응한 갯과 동물",
    zoo: ["서울대공원","주렁주렁", "에버랜드", "청주동물원","인천대공원","대전 오월드", "국립생태원","우치공원","전주동물원","아산시생태곤충원","울산대공원","네이처 파크","부산어린이대공원"],
  },
  {
    id: 60,
    name: "왈라루",
    image: image60,
    description1: "평균 사이즈 : 100~140cm | 평균 몸무게 : 20~50kg | 주 서식지 : 호주",
    description2: "캥거루와 왈라비의 중간 크기를 가진 유대류 동물",
    zoo: ["서울대공원","청주동물원","인천대공원","대전 오월드","주렁주렁"],
  },
];

export default animals;
