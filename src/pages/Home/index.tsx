import styled from "styled-components";
import bg from "@/assets/bg.jpg";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdLink } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { SideBarMenu, data } from "../../utils/constants";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const SideBar = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 20%;
  height: 100vh;
  padding: 100px 75px;
  box-sizing: border-box;
  background-color: ${(props) => props.bgColor || "transparent"};

  @media (max-width: 992px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 5px;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  margin: 10px 0;
`;

const SectionContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(110, 110, 110);
  font-size: 13px;
  gap: 5px;
`;

const Info = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-top: -3.5px;
  background-color: rgb(110, 110, 110);
`;

const BlueDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #0079ff;
  align-self: flex-end;
  margin-bottom: 5px;
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
`;

const InfoLinkTitle = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: white;
`;

const InfoTop = styled.div`
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

const ArticleWrapper = styled.div`
  width: 80%;
  height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 60px;

  @media (max-width: 992px) {
    width: 100%;
    padding: 10px 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 10px 20px;
  }
`;

const Article = styled.article`
  width: 80%;
  height: auto;
`;

const ArticleTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 5px solid #0079ff;
  display: flex;
  gap: 5px;
`;

const InnerArticle = styled.article`
  width: 100%;
  height: auto;
  margin-top: 50px;
  box-sizing: border-box;
`;

const InnerArticleSutTitle = styled.h4`
  font-size: 1.3rem;
`;

const InnerArticleTitle = styled.h3`
  display: inline-block;
  margin: 20px 0;
  font-size: 2rem;
  font-weight: 800;
  text-decoration: underline;
`;

const InnerArticleIcon = styled.span`
  font-size: 2rem;
  margin-left: 20px;
`;

const InnerArticleDate = styled.h4`
  font-size: 1.15rem;
`;

const InnerArticleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

const InnerArticleContent = styled.h4`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.3rem;
`;

const InnerArticleContentTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 20px 0;
`;

const InnerArticleLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.3rem;
  text-decoration: underline;
`;

const BlueAiOutlineCheck = styled(AiOutlineCheck)`
  color: #0079ff;
  margin-top: -3px;
`;

const LargeIoMdLink = styled(IoMdLink)`
  margin-top: -2.5px;
  font-size: 1.5rem;
`;

const MiddelFaPencilAlt = styled(FaPencilAlt)`
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
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          position: "relative",
          zIndex: -1,
        }}
      >
        <SideBar bgColor={"#202224"}>
          <InfoWrapper>
            <InfoTop>
              <AnimatePresence>
                <InfoLinkWrapper
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{
                    background: "linear-gradient(to right, #0079ff, #0079ff)",
                    color: "black",
                    transition: { duration: 0.5, delay: 0.2 },
                  }}
                >
                  <InfoLinkTitle>GitHub</InfoLinkTitle>
                  <BlueDot />
                </InfoLinkWrapper>
                <InfoLinkWrapper
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{
                    background: "linear-gradient(to right, #0079ff, #0079ff)",
                    color: "black",
                    transition: { duration: 0.5 },
                  }}
                >
                  <InfoLinkTitle>Velog</InfoLinkTitle>
                  <BlueDot />
                </InfoLinkWrapper>
              </AnimatePresence>
            </InfoTop>

            <InfoBottom>
              <h3>jeongh1021@naver.com</h3>
            </InfoBottom>
          </InfoWrapper>
        </SideBar>
        <div
          style={{
            width: "80%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <IntroWrapper>
            <IntroTitle>도전과 개발을 즐기는</IntroTitle>
            <IntroSubTitle>
              <span>조정훈</span>
              입니다.
            </IntroSubTitle>
            <IntroDescriptionWrapper>
              <IntroDescription>다른 사람들과 함께 협력하고 소통하는 것을 소중히 여깁니다.</IntroDescription>
              <IntroDescription>개발 능력과 열정으로 좋은 결과를 만들어내기 위해 끊임없이 노력합니다.</IntroDescription>
              <IntroDescription>새로운 도전에 기꺼이 나서는 자세를 갖추고 있습니다.</IntroDescription>
            </IntroDescriptionWrapper>
          </IntroWrapper>
        </div>
        <BackgroundImg src={`${bg}`} alt="bg" draggable={false} />
      </div>

      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
        }}
      >
        <SideBar bgColor={"#F9FAFB"}>
          {SideBarMenu.map((item, index) => {
            return (
              <Section key={index}>
                <SectionTitle>{item.section}</SectionTitle>
                {item.articles.map((item, index) => {
                  return (
                    <SectionContent key={index}>
                      <Dot />
                      <span>{item.title}</span>
                    </SectionContent>
                  );
                })}
              </Section>
            );
          })}
        </SideBar>

        <ArticleWrapper>
          {data.map((item, index) => {
            return (
              <Article key={index}>
                <ArticleTitle>
                  {item.mainTitle}
                  <BlueDot />
                </ArticleTitle>
                {item.contents.map((item, index) => {
                  return (
                    <InnerArticle key={index}>
                      <InnerArticleSutTitle>{item.subTitle}</InnerArticleSutTitle>
                      <InnerArticleTitle>{item.innerTitle}</InnerArticleTitle>
                      <InnerArticleIcon>{item.icon}</InnerArticleIcon>
                      <InnerArticleDate>{item.date}</InnerArticleDate>

                      <InnerArticleContentWrapper>
                        {item.description.map((item, index) => {
                          return (
                            <InnerArticleContent key={index}>
                              <BlueAiOutlineCheck />
                              {item}
                            </InnerArticleContent>
                          );
                        })}

                        <InnerArticleContentTitle>
                          <LargeIoMdLink /> 관련링크들
                        </InnerArticleContentTitle>

                        {item.links.map((item, index) => {
                          return (
                            <InnerArticleLink href={item.url} key={index}>
                              <BlueAiOutlineCheck />
                              {item.name}
                            </InnerArticleLink>
                          );
                        })}

                        <InnerArticleContentTitle>
                          <MiddelFaPencilAlt /> 사용기술들
                        </InnerArticleContentTitle>
                      </InnerArticleContentWrapper>
                    </InnerArticle>
                  );
                })}
              </Article>
            );
          })}
        </ArticleWrapper>
      </div>
    </div>
  );
};

export default Home;
