import styled from "styled-components";

const S = {
  SideBar: styled.div<{ bgColor?: string }>`
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
  `,
};

export default S;
