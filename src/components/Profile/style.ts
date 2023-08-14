import styled from "styled-components";
import { motion } from "framer-motion";

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    @media (max-width: 992px) {
      display: none;
    }

    @media (max-width: 768px) {
      display: none;
    }

    @media (max-width: 576px) {
      display: none;
    }
  `,
  InfoWrapper: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  InfoTop: styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  InfoLinkWrapper: styled(motion.div)`
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
  `,
  InfoLinkTitle: styled.a`
    font-size: 30px;
    font-weight: 800;
    margin-right: 3px;
    color: white;
  `,
  InfoBottom: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    color: white;
  `,

  ProfileIntroduceWrapper: styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
  `,
  IntroWrapper: styled.div`
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
  `,
  IntroTitle: styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
  `,
  IntroSubTitle: styled.h3`
    margin: 50px 0;

    span {
      border-bottom: 5px solid #0079ff;
      margin-right: 5px;
      font-size: 3.5rem;
    }
  `,
  IntroDescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  `,
  IntroDescription: styled.h5`
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
  `,
  BackgroundImg: styled.img`
    position: fixed;
    top: 0;
    left: 20%;
    width: 80vw;
    height: 100vh;
    opacity: 0.3;
    object-fit: cover;

    @media (max-width: 992px) {
      display: none;
    }

    @media (max-width: 768px) {
      display: none;
    }

    @media (max-width: 576px) {
      display: none;
    }
  `,
};

export default S;
