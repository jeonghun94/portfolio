import styled from "styled-components";
import { motion } from "framer-motion";
import bg from "@/assets/bg.jpg";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdLink } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { containerVariants, linkVariants } from "../../utils/constants";
import { infoLinks } from "../../db/infoLink";
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import Content from "../../components/Content";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const ProfileIntroduceWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;

const IntroWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 2rem;
  color: white;

  @media (max-width: 992px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const IntroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
`;

const IntroSubTitle = styled.h3`
  margin: 50px 0;

  span {
    border-bottom: 5px solid #0079ff;
    margin-right: 5px;
    font-size: 3.5rem;
  }
`;

const IntroDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

const IntroDescription = styled.h5`
  font-size: 1.5rem;

  @media (max-width: 992px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-top: -3.5px;
  background-color: rgb(110, 110, 110);
`;

export const BlueDot = styled.div<{ size?: number; marginBottom?: number }>`
  width: ${(props) => (props.size ? props.size : "10")}px;
  height: ${(props) => (props.size ? props.size : "10")}px;
  border-radius: 50%;
  background-color: #0079ff;
  align-self: flex-end;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 5)}px;
`;

const InfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoLinkWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px 20px;

  background: linear-gradient(to right, transparent 50%, #0079ff 50%);
  background-size: 200%;
  background-position: 0 0;

  transition: 0.25s ease;

  :hover {
    background-position: -100% 0;
  }
`;

const InfoLinkTitle = styled.a`
  font-size: 30px;
  font-weight: 800;
  margin-right: 3px;
  color: white;
`;

const InfoTop = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: white;
`;

export const BlueAiOutlineCheck = styled(AiOutlineCheck)`
  color: #0079ff;
  margin-top: -3px;
`;

export const LargeIoMdLink = styled(IoMdLink)`
  margin-top: -2.5px;
  font-size: 1.5rem;
`;

export const MiddelFaPencilAlt = styled(FaPencilAlt)`
  margin-top: -4px;
  font-size: 1.15rem;
`;

const BackgroundImg = styled.img`
  position: fixed;
  top: 0;
  left: 20%;
  width: 80vw;
  height: 100vh;
  opacity: 0.3;
  object-fit: cover;
`;

const Home = () => {
  const [activeTitle, setActiveTitle] = useState<string>("");

  const handleScroll = () => {
    const articleWrapper = document.querySelector(".articleWrapper");
    if (!articleWrapper) return;
    const innerArticleTitles = document.querySelectorAll(".innerArticleTitle");
    let closestTitle: string | null = null;
    let closestDistance = Number.POSITIVE_INFINITY;

    innerArticleTitles.forEach((titleElement) => {
      const innerTitle = titleElement.textContent?.trim();
      if (innerTitle) {
        const distance = Math.abs(titleElement.getBoundingClientRect().top);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestTitle = innerTitle;
        }
      }
    });

    if (closestTitle !== null) {
      setActiveTitle(closestTitle);
    }
  };

  useEffect(() => {
    const articleWrapper = document.querySelector(".articleWrapper");
    if (articleWrapper) {
      articleWrapper.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (articleWrapper) {
        articleWrapper.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <Wrapper>
      <ProfileWrapper>
        <SideBar bgColor={"#202224"}>
          <InfoWrapper>
            <InfoTop variants={containerVariants} initial="start" animate="end">
              {infoLinks.map((infoLink, index) => {
                return (
                  <InfoLinkWrapper variants={linkVariants} key={index}>
                    <InfoLinkTitle href={infoLink.link} target="_blank">
                      {infoLink.title}
                    </InfoLinkTitle>
                    <BlueDot size={8} marginBottom={3} />
                  </InfoLinkWrapper>
                );
              })}
            </InfoTop>

            <InfoBottom>
              <h3>jeongh1021@naver.com</h3>
            </InfoBottom>
          </InfoWrapper>
        </SideBar>

        <ProfileIntroduceWrapper>
          <IntroWrapper>
            <IntroTitle>도전과 개발을 즐기는</IntroTitle>
            <IntroSubTitle>
              <span>조정훈</span> 입니다.
            </IntroSubTitle>
            <IntroDescriptionWrapper>
              <IntroDescription>다른 사람들과 함께 협력하고 소통하는 것을 소중히 여깁니다.</IntroDescription>
              <IntroDescription>개발 능력과 열정으로 좋은 결과를 만들어내기 위해 끊임없이 노력합니다.</IntroDescription>
              <IntroDescription>새로운 도전에 기꺼이 나서는 자세를 갖추고 있습니다.</IntroDescription>
            </IntroDescriptionWrapper>
          </IntroWrapper>
        </ProfileIntroduceWrapper>
        <BackgroundImg src={`${bg}`} alt="bg" draggable={false} />
      </ProfileWrapper>

      <Content activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
    </Wrapper>
  );
};

export default Home;
