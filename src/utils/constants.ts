export const data = [
  {
    mainTitle: "Work",
    contents: [
      {
        id: "work1",
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
        skills: [
          {
            skillId: 1,
          },
          {
            skillId: 2,
          },
          {
            skillId: 3,
          },
          {
            skillId: 4,
          },
          {
            skillId: 5,
          },
          {
            skillId: 6,
          },
          {
            skillId: 7,
          },
          {
            skillId: 8,
          },
          {
            skillId: 9,
          },
          {
            skillId: 10,
          },
          {
            skillId: 11,
          },
        ],
      },
      {
        id: "work2",
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
