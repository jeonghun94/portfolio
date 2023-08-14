import { useEffect } from "react";
import S from "./style";
import Content from "../../components/Content";
import Profile from "../../components/Profile";
import useStore from "../../store/state";

const Home = () => {
  const { setActiveTitle } = useStore();

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
    <S.Wrapper>
      <Profile />
      <Content />
    </S.Wrapper>
  );
};

export default Home;
