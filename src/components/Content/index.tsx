import Section from "../Section";
import SideBar from "../SideBar";
import { sections } from "../../db/section";
import { data } from "../../db/contents/index";
import S from "./style";
import { BlueAiOutlineCheck, BlueDot, LargeIoMdLink, MiddelFaPencilAlt } from "../../pages/Home";
import { FaImages } from "react-icons/fa";
import Skills from "../Skill";

interface ContentProps {
  activeTitle: string;
  setActiveTitle: (activeTitle: string) => void;
}

const Content = ({ activeTitle, setActiveTitle }: ContentProps) => {
  return (
    <S.Wrapper>
      <SideBar bgColor={"#F9FAFB"}>
        <Section sections={sections} activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
      </SideBar>

      <S.ArticleWrapper className="articleWrapper">
        {data.map((item, index) => {
          return (
            <S.Article key={index}>
              <S.ArticleTitle>
                {item.mainTitle}
                <BlueDot />
              </S.ArticleTitle>

              {item.contents.map((content, index) => {
                return (
                  <S.InnerArticle key={index}>
                    <S.InnerArticleSutTitle>{content.subTitle}</S.InnerArticleSutTitle>
                    <S.InnerArticleTitle
                      id={content.id}
                      className="innerArticleTitle"
                      style={{
                        marginTop: !content.subTitle ? "-10px" : "",
                      }}
                    >
                      {content.innerTitle}
                    </S.InnerArticleTitle>
                    <S.InnerArticleIcon>{content.icon}</S.InnerArticleIcon>
                    <S.InnerArticleDate>{content.date}</S.InnerArticleDate>

                    <S.InnerArticleContentWrapper>
                      {content.description.length > 0 &&
                        content.description.map((item, index) => {
                          return (
                            <S.InnerArticleContent key={index}>
                              <BlueAiOutlineCheck />
                              {item}
                            </S.InnerArticleContent>
                          );
                        })}

                      {content.images.length > 0 && (
                        <>
                          <S.InnerArticleContentTitle>
                            <FaImages /> 관련이미지
                          </S.InnerArticleContentTitle>

                          <S.InnerArticleImageWrapper>
                            {content.images.map((image, index) => {
                              return (
                                <S.InnerArticleImage
                                  key={index}
                                  src={image.src}
                                  alt="image"
                                  draggable={false}
                                  isVertical={image?.isVertical}
                                />
                              );
                            })}
                          </S.InnerArticleImageWrapper>
                        </>
                      )}

                      {content.links.length > 0 && (
                        <>
                          <S.InnerArticleContentTitle>
                            <LargeIoMdLink /> 관련링크
                          </S.InnerArticleContentTitle>
                          {content.links.map((link, index) => (
                            <S.InnerArticleLink key={index} href={link.url} target="_blank">
                              <BlueAiOutlineCheck />
                              <h3>{link.name}</h3>
                            </S.InnerArticleLink>
                          ))}
                        </>
                      )}

                      {content.skills.length > 0 && (
                        <>
                          <S.InnerArticleContentTitle>
                            <MiddelFaPencilAlt /> 사용기술
                          </S.InnerArticleContentTitle>

                          <Skills skills={content.skills} />
                        </>
                      )}
                    </S.InnerArticleContentWrapper>
                  </S.InnerArticle>
                );
              })}
            </S.Article>
          );
        })}
      </S.ArticleWrapper>
    </S.Wrapper>
  );
};

export default Content;
