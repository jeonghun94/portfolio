import styled from "styled-components";
import { motion } from "framer-motion";

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
  `,
  ArticleWrapper: styled.div`
    width: 80%;
    height: 100vh;
    padding: 60px;
    overflow-y: scroll;
    box-sizing: border-box;
    background-color: white;
    scroll-behavior: smooth;
    z-index: 1;

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
  `,
  Article: styled.article`
    width: 80%;
    height: auto;
    &:not(:first-child) {
      margin-top: 30px;
    }
  `,
  ArticleTitle: styled.h2`
    font-size: 3.5rem;
    font-weight: 800;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 5px solid #0079ff;
    display: flex;
    gap: 5px;
  `,
  InnerArticle: styled.article`
    width: 100%;
    height: auto;
    margin-top: 50px;
    box-sizing: border-box;
  `,
  InnerArticleSutTitle: styled.h4`
    font-size: 1.3rem;
  `,
  InnerArticleTitle: styled.h3`
    display: inline-block;
    margin: 20px 0;
    font-size: 2rem;
    font-weight: 800;
    padding-bottom: 3px;
    border-bottom: 3px solid black;
  `,
  InnerArticleIcon: styled.span`
    font-size: 2rem;
    margin-left: 20px;
  `,
  InnerArticleDate: styled.h4`
    font-size: 1.15rem;
  `,
  InnerArticleContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0;
  `,
  InnerArticleContent: styled.h4`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.3rem;

    @media (max-width: 992px) {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  `,
  InnerArticleContentTitle: styled.h3`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.5rem;
    font-weight: 800;
    margin-top: 20px;
  `,
  InnerArticleLink: styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.3rem;
    text-decoration: underline;
    width: fit-content;

    &:hover {
      color: white;
      text-decoration-color: white;
    }

    h3 {
      background: linear-gradient(to right, transparent 50%, #0079ff 50%);
      background-size: 200%;
      background-position: 0 0;
      transition: 0.25s ease;

      :hover {
        background-position: -100% 0;
      }
    }
  `,
  InnerArticleImageWrapper: styled.div`
    width: 100vw;
    display: flex;
    align-items: flex-start;
    margin-top: -20px;
    gap: 20px;

    @media (max-width: 992px) {
      overflow-x: scroll;
    }

    // @media (max-width: 768px) {
    //   overflow-x: scroll;
    // }

    // @media (max-width: 576px) {
    //   overflow-x: scroll;
    // }
  `,
  InnerArticleImage: styled(motion.img)<{ isVertical?: boolean }>`
    width: ${(props) => (props.isVertical ? "225" : "335")}px;
    height: ${(props) => (props.isVertical ? "380" : "225")}px;
    margin-right: ${(props) => (props.isVertical ? "10" : "0")}px;
    object-fit: "fill";
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `,
};

export default S;
