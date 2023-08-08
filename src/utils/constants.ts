export const infoData = [
  {
    title: "Github",
    subTitle: "깃허브",
    link: "https://github.com/jeonghun94",
  },
  {
    title: "LinkedIn",
    subTitle: "블로그",
    link: "https://www.linkedin.com/in/jeonghun-cho-6387ab23b/",
  },
];

export const sideData = [
  {
    id: "section1",
    section: "Work",
    articles: [
      {
        id: "section1",
        title: "청명씨앤아이",
      },
      {
        id: "section2",
        title: "파크로",
      },
    ],
  },
  {
    id: "section2",
    section: "Project",
    articles: [
      {
        id: "section3",
        title: "테오의 스프린트",
      },
      {
        id: "section4",
        title: "연차/당직 신청",
      },
      {
        id: "section5",
        title: "나만의 포토폴리오(현재 페이지)",
      },
    ],
  },
  {
    id: "section3",
    section: "Clone-Coding",
    articles: [
      {
        id: "section6",
        title: "당근마켓",
      },
      {
        id: "section7",
        title: "아이파킹(주차 관리 웹)",
      },
      {
        id: "section8",
        title: "마블(MARVLE) 페이지",
      },
      {
        id: "section9",
        title: "트위터",
      },
      {
        id: "section10",
        title: "인스타그램",
      },
    ],
  },
  {
    id: "section4",
    section: "Education",
    articles: [
      {
        id: "section11",
        title: "코스타(KOSTA) 자바 & 웹 교육 과정",
      },
    ],
  },
  {
    id: "section5",
    section: "Study",
    articles: [
      {
        id: "section12",
        title: "노마드 코더 웹기초 10주 챌린지",
      },
      {
        id: "section13",
        title: "노마드 코더 리액트 10주 챌린지",
      },
    ],
  },
];

export const data = [
  {
    mainTitle: "Work",
    contents: [
      {
        id: "section1",
        subTitle: "정규직",
        innerTitle: "청명씨앤아이",
        icon: "🅿️",
        date: "2018년 9월 ~ 2022년 4월",
        description: [
          "웹 개발자로서 주차 관리 시스템 제공",
          "할인 시스템 및 주차 현황 관리 시스템 개발.",
          "아파트 방문자 관리 시스템 개발.",
          "PG사와의 연동을 통한 주차 할인 및 정기권 결제 시스템 개발.",
          "대전광역시 주차 현황 시스템 유지보수.",
          "대전광역시 주차 통합 시스템 개발.",
          "행안부 즉시감면 및 각 종 api 연동.",
        ],
        links: [
          {
            name: "청명씨앤아이",
            url: "https://www.cmni.co.kr/",
          },
        ],
        techStack: [
          ["Java", "Spring", "Oracle"],
          ["JavaScript", "Vue.js"],
        ],
      },
      {
        id: "section2",
        subTitle: "정규직",
        innerTitle: "파크로",
        icon: "🅿️",
        date: "2022년 6월 ~ 2022년 11월",
        description: [
          "청명씨앤아이는 주차 관리 시스템을 제공하는 회사입니다.",
          "주차 관리 시스템을 제공하는 회사로서, 주차 관리 시스템을 개발하고 유지보수를 담당하고 있습니다.",
        ],
        links: [
          {
            name: "파크로",
            url: "https://www.cmni.co.kr/",
          },
        ],
        techStack: [
          ["Java", "Spring", "Oracle"],
          ["JavaScript", "Vue.js"],
        ],
      },
    ],
  },
  {
    mainTitle: "Project",
    contents: [
      {
        id: "section3",
        subTitle: "정규직",
        innerTitle: "청명씨앤아이",
        icon: "🅿️",
        date: "2018년 9월 ~ 2022년 4월",
        description: ["주차 관리 시스템을 제공하는 회사입니다.", "대전광역시 주차 현황 시스템 유지보수"],
        links: [
          {
            name: "청명씨앤아이",
            url: "https://www.cmni.co.kr/",
          },
        ],
        techStack: [
          ["Java", "Spring", "Oracle"],
          ["JavaScript", "Vue.js"],
        ],
      },
      {
        id: "section4",
        subTitle: "정규직",
        innerTitle: "파크로",
        icon: "🅿️",
        date: "2022년 6월 ~ 2022년 11월",
        description: [
          "청명씨앤아이는 주차 관리 시스템을 제공하는 회사입니다.",
          "주차 관리 시스템을 제공하는 회사로서, 주차 관리 시스템을 개발하고 유지보수를 담당하고 있습니다.",
        ],
        links: [
          {
            name: "파크로",
            url: "https://www.cmni.co.kr/",
          },
        ],
        techStack: [
          ["Java", "Spring", "Oracle"],
          ["JavaScript", "Vue.js"],
        ],
      },
    ],
  },
];

export const containerVariants = {
  start: { opacity: 1, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const linkVariants = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
  },
};
