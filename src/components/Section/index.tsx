import { Dot } from "../../pages/Home";
import S from "./style";

interface ItemProps {
  id: string;
  title: string;
}

interface SectionProps {
  id: string;
  title: string;
  items: ItemProps[];
}

interface Props {
  sections: SectionProps[];
  activeTitle: string;
  setActiveTitle: (title: string) => void;
}

const Section = ({ sections, activeTitle, setActiveTitle }: Props) => {
  const handletTitleClick = (e: React.MouseEvent<HTMLHeadingElement>, title: string) => {
    const {
      currentTarget: { id },
    } = e;
    setActiveTitle(title);

    const innerArticleTitle = document.querySelectorAll(".innerArticleTitle");
    const innerArticleTitleArray = Array.from(innerArticleTitle);
    const innerArticleTitleArrayMap = innerArticleTitleArray.map((item) => item.id);
    innerArticleTitleArrayMap.forEach((item, index) => {
      if (item === id) {
        innerArticleTitleArray[index].scrollIntoView();
      }
    });
  };
  return (
    <>
      {sections.map((section, index) => {
        return (
          <S.Wrapper key={index}>
            <S.Title>{section.title}</S.Title>
            {section.items.map((item, index) => {
              return (
                <S.Content
                  id={item.id}
                  key={index}
                  isActive={activeTitle === item.title}
                  onClick={(e) => handletTitleClick(e, item.title)}
                >
                  <Dot />
                  <span>{item.title}</span>
                </S.Content>
              );
            })}
          </S.Wrapper>
        );
      })}
    </>
  );
};

export default Section;
