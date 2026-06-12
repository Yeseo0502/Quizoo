import img31 from "../assets/image31.png";
import img32 from "../assets/image32.jpg";
import img33 from "../assets/image33.jpg";
import img34 from "../assets/image34.png";
import img35 from "../assets/image35.jpg";
import img36 from "../assets/image36.jpg";
import img37 from "../assets/image37.jpg";
import img38 from "../assets/image38.jpg";
import img39 from "../assets/image39.png";
import img40 from "../assets/image40.png";
import img41 from "../assets/image41.png";
import img42 from "../assets/image42.jpg";
import img43 from "../assets/image43.png";
import img44 from "../assets/image44.png";
import img45 from "../assets/image45.png";
import img46 from "../assets/image46.png";
import img47 from "../assets/image47.png";
import img48 from "../assets/image48.png";
import img49 from "../assets/image49.jpg";
import img50 from "../assets/image50.jpg";
import img51 from "../assets/image51.jpg";
import img52 from "../assets/image52.jpg";
import img53 from "../assets/image53.png";
import img54 from "../assets/image54.jpg";
import img55 from "../assets/image55.jpg";
import img56 from "../assets/image56.jpg";
import img57 from "../assets/image57.png";
import img58 from "../assets/image58.jpg";
import img59 from "../assets/image59.jpg";
import img60 from "../assets/image60.jpg";

const animals = [
  {
    id: 1,
    name: "코알라",
    image: "",
    description1: "평균 사이즈 : 70cm | 평균 몸무게 : 9kg | 주 서식지 : 호주",
    description2:
      "유칼립투스 잎을 먹으며 하루 대부분을 나무 위에서 보내는 유대류",
    zoo: "에버랜드",
  },
  {
    id: 2,
    name: "사자",
    image: "",
    description1:
      "평균 사이즈 : 190cm | 평균 몸무게 : 190kg | 주 서식지 : 아프리카 초원",
    description2: "무리를 이루어 생활하는 대형 고양이과 동물",
    zoo: "서울대공원",
  },
  {
    id: 3,
    name: "호랑이",
    image: "",
    description1:
      "평균 사이즈 : 250cm | 평균 몸무게 : 220kg | 주 서식지 : 아시아 숲",
    description2: "강력한 힘과 줄무늬 무늬가 특징인 육식동물",
    zoo: "대전 오월드",
  },
  {
    id: 4,
    name: "치타",
    image: "",
    description1:
      "평균 사이즈 : 150cm | 평균 몸무게 : 55kg | 주 서식지 : 아프리카 초원",
    description2: "지상에서 가장 빠른 포유류",
    zoo: "에버랜드",
  },
  {
    id: 5,
    name: "표범",
    image: "",
    description1:
      "평균 사이즈 : 160cm | 평균 몸무게 : 65kg | 주 서식지 : 아프리카·아시아",
    description2: "나무를 잘 타며 적응력이 뛰어난 맹수",
    zoo: "서울대공원",
  },
  {
    id: 6,
    name: "재규어",
    image: "",
    description1:
      "평균 사이즈 : 180cm | 평균 몸무게 : 95kg | 주 서식지 : 남아메리카",
    description2: "강한 턱 힘을 가진 대형 고양이과 동물",
    zoo: "전주동물원",
  },
  {
    id: 7,
    name: "북극곰",
    image: "",
    description1:
      "평균 사이즈 : 240cm | 평균 몸무게 : 450kg | 주 서식지 : 북극",
    description2: "두꺼운 지방층과 흰 털을 가진 대형 포식자",
    zoo: "서울대공원",
  },
  {
    id: 8,
    name: "불곰",
    image: "",
    description1:
      "평균 사이즈 : 220cm | 평균 몸무게 : 350kg | 주 서식지 : 북반구 산림",
    description2: "잡식성이며 힘이 매우 강한 곰",
    zoo: "청주동물원",
  },
  {
    id: 9,
    name: "판다",
    image: "",
    description1:
      "평균 사이즈 : 150cm | 평균 몸무게 : 110kg | 주 서식지 : 중국 산악지대",
    description2: "대나무를 주식으로 하는 희귀 동물",
    zoo: "에버랜드",
  },
  {
    id: 10,
    name: "늑대",
    image: "",
    description1:
      "평균 사이즈 : 130cm | 평균 몸무게 : 45kg | 주 서식지 : 북반구",
    description2: "무리를 이루어 사냥하는 사회성 동물",
    zoo: "우치동물원",
  },
  {
    id: 11,
    name: "여우",
    image: "",
    description1: "평균 사이즈 : 90cm | 평균 몸무게 : 7kg | 주 서식지 : 북반구",
    description2: "영리하고 적응력이 뛰어난 포유류",
    zoo: "청주동물원",
  },
  {
    id: 12,
    name: "기린",
    image: "",
    description1:
      "평균 사이즈 : 550cm | 평균 몸무게 : 1200kg | 주 서식지 : 아프리카 초원",
    description2: "지구상에서 가장 키가 큰 동물",
    zoo: "에버랜드",
  },
  {
    id: 13,
    name: "코끼리",
    image: "",
    description1:
      "평균 사이즈 : 650cm | 평균 몸무게 : 5000kg | 주 서식지 : 아프리카",
    description2: "긴 코와 큰 귀를 가진 초대형 포유류",
    zoo: "서울대공원",
  },
  {
    id: 14,
    name: "얼룩말",
    image: "",
    description1:
      "평균 사이즈 : 240cm | 평균 몸무게 : 350kg | 주 서식지 : 아프리카 초원",
    description2: "독특한 흑백 줄무늬를 가진 초식동물",
    zoo: "에버랜드",
  },
  {
    id: 15,
    name: "하마",
    image: "",
    description1:
      "평균 사이즈 : 350cm | 평균 몸무게 : 1800kg | 주 서식지 : 아프리카 강가",
    description2: "물속 생활을 좋아하는 거대 포유류",
    zoo: "서울대공원",
  },
  {
    id: 16,
    name: "코뿔소",
    image: "",
    description1:
      "평균 사이즈 : 380cm | 평균 몸무게 : 2300kg | 주 서식지 : 아프리카",
    description2: "두꺼운 피부와 뿔이 특징인 초식동물",
    zoo: "에버랜드",
  },
  {
    id: 17,
    name: "낙타",
    image: "",
    description1:
      "평균 사이즈 : 300cm | 평균 몸무게 : 600kg | 주 서식지 : 사막",
    description2: "혹에 지방을 저장해 사막에 적응한 동물",
    zoo: "전주동물원",
  },
  {
    id: 18,
    name: "알파카",
    image: "",
    description1:
      "평균 사이즈 : 150cm | 평균 몸무게 : 65kg | 주 서식지 : 남아메리카",
    description2: "부드러운 털로 유명한 낙타과 동물",
    zoo: "에버랜드",
  },
  {
    id: 19,
    name: "캥거루",
    image: "",
    description1: "평균 사이즈 : 160cm | 평균 몸무게 : 85kg | 주 서식지 : 호주",
    description2: "강한 뒷다리로 점프하며 이동한다",
    zoo: "서울대공원",
  },
  {
    id: 20,
    name: "왈라비",
    image: "",
    description1: "평균 사이즈 : 100cm | 평균 몸무게 : 20kg | 주 서식지 : 호주",
    description2: "캥거루보다 작은 유대류 동물",
    zoo: "에버랜드",
  },
  {
    id: 21,
    name: "레서판다",
    image: "",
    description1:
      "평균 사이즈 : 60cm | 평균 몸무게 : 5kg | 주 서식지 : 히말라야",
    description2: "붉은 털과 긴 꼬리가 특징인 동물",
    zoo: "서울대공원",
  },
  {
    id: 22,
    name: "수달",
    image: "",
    description1:
      "평균 사이즈 : 90cm | 평균 몸무게 : 10kg | 주 서식지 : 강과 호수",
    description2: "수영을 매우 잘하는 포유류",
    zoo: "대전 오월드",
  },
  {
    id: 23,
    name: "미어캣",
    image: "",
    description1:
      "평균 사이즈 : 30cm | 평균 몸무게 : 1kg | 주 서식지 : 아프리카",
    description2: "경계를 위해 두 발로 서 있는 모습이 유명하다",
    zoo: "에버랜드",
  },
  {
    id: 24,
    name: "침팬지",
    image: "",
    description1:
      "평균 사이즈 : 100cm | 평균 몸무게 : 50kg | 주 서식지 : 아프리카 숲",
    description2: "도구를 사용할 수 있는 영리한 영장류",
    zoo: "서울대공원",
  },
  {
    id: 25,
    name: "오랑우탄",
    image: "",
    description1:
      "평균 사이즈 : 140cm | 평균 몸무게 : 80kg | 주 서식지 : 보르네오",
    description2: "나무 위 생활에 적응한 대형 유인원",
    zoo: "에버랜드",
  },
  {
    id: 26,
    name: "고릴라",
    image: "",
    description1:
      "평균 사이즈 : 170cm | 평균 몸무게 : 180kg | 주 서식지 : 아프리카",
    description2: "현존하는 가장 큰 영장류",
    zoo: "서울대공원",
  },
  {
    id: 27,
    name: "타조",
    image: "",
    description1:
      "평균 사이즈 : 250cm | 평균 몸무게 : 120kg | 주 서식지 : 아프리카",
    description2: "날지 못하지만 매우 빠르게 달리는 새",
    zoo: "전주동물원",
  },
  {
    id: 28,
    name: "홍학",
    image: "",
    description1: "평균 사이즈 : 140cm | 평균 몸무게 : 3kg | 주 서식지 : 습지",
    description2: "분홍색 깃털로 유명한 조류",
    zoo: "에버랜드",
  },
  {
    id: 29,
    name: "펭귄",
    image: "",
    description1:
      "평균 사이즈 : 70cm | 평균 몸무게 : 30kg | 주 서식지 : 남극 주변",
    description2: "헤엄을 잘 치는 날지 못하는 새",
    zoo: "서울대공원",
  },
  {
    id: 30,
    name: "공작",
    image: "",
    description1: "평균 사이즈 : 110cm | 평균 몸무게 : 5kg | 주 서식지 : 인도",
    description2: "화려한 꼬리 깃털을 가진 조류",
    zoo: "우치동물원",
  },

  //  31~ 60

  {
    id: 31,
    name: "악어",
    image: img31,
    description1:
      "평균 사이즈 : 450cm | 평균 몸무게 : 500kg | 주 서식지 : 열대 강과 습지",
    description2: "강력한 턱과 긴 꼬리를 가진 대형 파충류",
    zoo: ["서울대공원","에버랜드","대전 오월드"],
  },
  {
    id: 32,
    name: "카멜레온",
    image: img32,
    description1:
      "평균 사이즈 : 30cm | 평균 몸무게 : 0.2kg | 주 서식지 : 마다가스카르",
    description2: "주변 환경에 맞춰 몸 색깔을 바꾸는 파충류",
    zoo: ["전주동물원"],
  },
  {
    id: 33,
    name: "하이에나",
    image: img33,
    description1:
      "평균 사이즈 : 140cm | 평균 몸무게 : 60kg | 주 서식지 : 아프리카 초원",
    description2: "강한 턱 힘과 사회성을 가진 포식자",
    zoo: ["서울대공원","에버랜드 사파리월드","사천 동물원"],
  },
  {
    id: 34,
    name: "닥터피쉬",
    image: img34,
    description1:
      "평균 사이즈 : 10cm | 평균 몸무게 : 10g | 주 서식지 : 터키, 이란의 온천 및 하천",
    description2: "사람의 피부 각질을 먹는 독특한 습성을 가진 작은 물고기",
    zoo: ["주렁주렁","아쿠아플라넷"],
  },
  {
    id: 35,
    name: "바다사자",
    image: img35,
    description1:
      "평균 사이즈 : 220cm | 평균 몸무게 : 300kg | 주 서식지 : 태평양 연안",
    description2: "수영 실력이 뛰어나고 지능이 높은 해양 포유류",
    zoo: ["서울대공원","에버랜드","아쿠아플라넷"],
  },
  {
    id: 36,
    name: "물개",
    image: img36,
    description1:
      "평균 사이즈 : 170cm | 평균 몸무게 : 120kg | 주 서식지 : 한대 해역",
    description2: "유선형 몸을 가진 해양 포유류",
    zoo: ["서울대공원","에버랜드","여수 아쿠아플라넷"],
  },
  {
    id: 37,
    name: "카피바라",
    image: img37,
    description1:
      "평균 사이즈 : 130cm | 평균 몸무게 : 55kg | 주 서식지 : 남아메리카 습지",
    description2: "세계에서 가장 큰 설치류",
    zoo: ["롯데월드 아쿠아리움","청주쥬니멀동물원"],
  },
  {
    id: 38,
    name: "아르마딜로",
    image: img38,
    description1: "평균 사이즈 : 75cm | 평균 몸무게 : 6kg | 주 서식지 : 중남미",
    description2: "단단한 갑옷 같은 피부를 가진 포유류",
    zoo: ["서울대공원","아르티스 테마파크"],
  },
  {
    id: 39,
    name: "나무늘보",
    image: img39,
    description1:
      "평균 사이즈 : 65cm | 평균 몸무게 : 5kg | 주 서식지 : 남아메리카 열대우림",
    description2: "매우 느린 움직임으로 유명한 포유류",
    zoo: ["서울대공원","에버랜드"],
  },
  {
    id: 40,
    name: "라쿤",
    image: img40,
    description1:
      "평균 사이즈 : 50~70cm | 평균 몸무게 : 5~10kg | 주 서식지 : 북미 및 중미의 숲과 침엽수림",
    description2: "귀여운 외모와 달리 호기심이 많고, 먹이를 물에 씻어 먹는 버릇이 있는 잡식 동물",
    zoo: ["주렁주렁","서울대공원","에버랜드"],
  },
  {
    id: 41,
    name: "들소",
    image: img41,
    description1:
      "평균 사이즈 : 300cm | 평균 몸무게 : 900kg | 주 서식지 : 북아메리카 초원",
    description2: "거대한 어깨 혹이 특징인 초식동물",
    zoo: ["서울대공원"],
  },
  {
    id: 42,
    name: "야크",
    image: img42,
    description1:
      "평균 사이즈 : 280cm | 평균 몸무게 : 600kg | 주 서식지 : 티베트 고원",
    description2: "추위에 강한 긴 털의 소과 동물",
    zoo: ["국내 거주X"],
  },
  {
    id: 43,
    name: "순록",
    image: img43,
    description1:
      "평균 사이즈 : 180cm | 평균 몸무게 : 150kg | 주 서식지 : 북극권",
    description2: "암수 모두 뿔이 나는 사슴",
    zoo: ["국내 거주X"],
  },
  {
    id: 44,
    name: "뱀",
    image: img44,
    description1:
      "평균 사이즈 : 100~300cm | 평균 몸무게 : 1~15kg | 주 서식지 : 전 세계의 숲, 사막, 초지 (실내 사육 환경)",
    description2: "독성이 있는 파충류",
    zoo: ["서울대공원"],
  },
  {
    id: 45,
    name: "앵무새",
    image: img45,
    description1:
      "평균 사이즈 : 10~100cm | 평균 몸무게 : 60g~1.5kg | 주 서식지 : 열대 및 아열대 우림",
    description2: "사람의 말을 흉내 내며 지능이 매우 높은 화려한 깃털의 조류",
    zoo: ["서울대공원","주렁주렁"],
  },
  {
    id: 46,
    name: "사슴",
    image: img46,
    description1:
      "평균 사이즈 : 180cm | 평균 몸무게 : 120kg | 주 서식지 : 숲과 초원",
    description2: "민첩한 움직임과 뿔이 특징인 초식동물",
    zoo: ["서울대공원","서울어린이대공원","안성 팜랜드"],
  },
  {
    id: 47,
    name: "멧돼지",
    image: img47,
    description1:
      "평균 사이즈 : 150cm | 평균 몸무게 : 100kg | 주 서식지 : 산림",
    description2: "강한 주둥이로 땅을 파헤치는 잡식동물",
    zoo: [""],
  },
  {
    id: 48,
    name: "라마",
    image: img48,
    description1:
      "평균 사이즈 : 180cm | 평균 몸무게 : 140kg | 주 서식지 : 안데스 산맥",
    description2: "짐을 운반하는 데 이용되는 낙타과 동물",
    zoo: ["어린이대공원","대전 오월드"],
  },
  {
    id: 49, 
    name: "돌산양",
    image: img49,
    description1:
      "평균 사이즈 : 130~180cm | 평균 몸무게 : 45~110kg | 주 서식지 : 알래스카 및 캐나다 북서부의 험준한 고산 지대",
    description2: "험난한 바위 절벽을 민첩하게 달릴 수 있으며, 수컷의 크고 둥글게 말린 뿔이 특징인 동물",
    zoo: ["서울대공원"],
  },
  {
    id: 50,
    name: "고슴도치",
    image: img50,
    description1:
      "평균 사이즈 : 25cm | 평균 몸무게 : 1kg | 주 서식지 : 유럽·아시아",
    description2: "몸을 둥글게 말아 자신을 보호하는 포유류",
    zoo: ["대구 네이처파크"],
  },
  {
    id: 51,
    name: "토끼",
    image: img51,
    description1: "평균 사이즈 : 40cm | 평균 몸무게 : 2kg | 주 서식지 : 초원",
    description2: "긴 귀와 빠른 번식력으로 유명한 초식동물",
    zoo: ["서울대공원","어린이대공원"],
  },
  {
    id: 52,
    name: "기니피그",
    image: img52,
    description1:
      "평균 사이즈 : 25cm | 평균 몸무게 : 1kg | 주 서식지 : 남아메리카",
    description2: "온순한 성격의 설치류",
    zoo: ["에버랜드","주렁주렁"],
  },
  {
    id: 53,
    name: "친칠라",
    image: img53,
    description1:
      "평균 사이즈 : 30cm | 평균 몸무게 : 0.7kg | 주 서식지 : 안데스 산맥",
    description2: "매우 부드러운 털을 가진 설치류",
    zoo: ["주렁주렁"],
  },
  {
    id: 54,
    name: "다람쥐",
    image: img54,
    description1:
      "평균 사이즈 : 60cm | 평균 몸무게 : 6kg | 주 서식지 : 산악지대",
    description2: "겨울잠을 자는 대형 설치류",
    zoo: ["주렁주렁","서울대공원"],
  },
  {
    id: 55,
    name: "퓨마",
    image: img55,
    description1:
      "평균 사이즈 : 180cm | 평균 몸무게 : 70kg | 주 서식지 : 북·남아메리카",
    description2: "뛰어난 점프 능력을 가진 대형 고양이과 동물",
    zoo: ["서울대공원","대전 오월드"],
  },
  {
    id: 56,
    name: "스라소니",
    image: img56,
    description1:
      "평균 사이즈 : 100cm | 평균 몸무게 : 18kg | 주 서식지 : 북반구 산림",
    description2: "귀 끝의 긴 털이 특징인 야생 고양이",
    zoo: ["서울대공원","청주동물원"],
  },
  {
    id: 57,
    name: "말레이곰",
    image: img57,
    description1:
      "평균 사이즈 : 130cm | 평균 몸무게 : 50kg | 주 서식지 : 동남아시아 열대우림",
    description2: "곰 중 가장 작은 종으로 긴 혀를 가지고 있다",
    zoo: ["서울대공원"],
  },
  {
    id: 58,
    name: "프레리도그",
    image: img58,
    description1:
      "평균 사이즈 : 35cm | 평균 몸무게 : 1kg | 주 서식지 : 북아메리카 초원",
    description2: "땅굴을 파며 집단생활을 하는 설치류",
    zoo: ["에버랜드","주렁주렁"],
  },
  {
    id: 59,
    name: "사막여우",
    image: img59,
    description1:
      "사이즈 : 30cm | 몸무게 : 3kg | 서식지 : 사하라 사막",
    description2: "귀가 매우 크고 발바닥에 털이 있어 모래 위를 잘 걷는 동물",
    zoo: ["서울대공원","주렁주렁"],
  },
  {
    id: 60,
    name: "왈라루",
    image: img60,
    description1: "평균 사이즈 : 140cm | 평균 몸무게 : 45kg | 주 서식지 : 호주",
    description2: "캥거루와 왈라비의 중간 크기를 가진 유대류",
    zoo: ["서울대공원","청주동물원"],
  },
];

export default animals;
