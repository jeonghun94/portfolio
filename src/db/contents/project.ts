import chu from "@/assets/project/chu.png";
import chu2 from "@/assets/project/chu2.png";
import chu3 from "@/assets/project/chu3.png";

export const projects = [
  {
    mainTitle: "Project",
    contents: [
      {
        id: "project1",
        subTitle: "팀 프로젝트",
        innerTitle: "츄카드",
        icon: "🎉",
        date: "2023년 6월 21일 ~ 2023년 6월 26일",
        description: [
          "테오의 스프린트 15기 참가",
          "디자인 1명, 개발자 4명이 참여",
          "온보딩, 생성, 작성 컴포넌트 중 온보딩 컴포넌트 개발 담당",
        ],
        links: [
          {
            name: "Vercel 배포 링크",
            url: "https://chu-card-client.vercel.app/",
          },
          {
            name: "해당 GitHub Repository",
            url: "https://github.com/Sprint15th/chu_card-client",
          },
        ],
        images: [
          {
            id: 1,
            src: chu,
            isVertical: true,
          },
          {
            id: 2,
            src: chu2,
            isVertical: true,
          },
          {
            id: 3,
            src: chu3,
            isVertical: true,
          },
        ],
        skills: [
          {
            skillId: 12,
          },
          {
            skillId: 18,
          },
          {
            skillId: 19,
          },
          {
            skillId: 20,
          },
          {
            skillId: 32,
          },
        ],
      },
      {
        id: "project2",
        subTitle: "개인 프로젝트",
        innerTitle: "나만의 포트폴리오",
        icon: "💼",
        date: "2023년 8월 ~ 8월",
        description: ["나만의 포트폴리오를 가지기 위해서 개발"],
        links: [
          {
            name: "해당 GitHub Repository",
            url: "https://github.com/jeonghun94/portfolio",
          },
        ],
        images: [],
        skills: [
          {
            skillId: 12,
          },
          {
            skillId: 14,
          },
          {
            skillId: 19,
          },
          {
            skillId: 35,
          },
          {
            skillId: 17,
          },
        ],
      },
    ],
  },
];
