import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 5px;
  `,
  Title: styled.h3`
    font-size: 1.1rem;
    font-weight: 800;
    margin: 10px 0;
  `,
  Content: styled.h3<{ isActive: boolean }>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => (props.isActive ? "#0079FF" : "rgb(110, 110, 110)")};
    font-size: 13px;
    gap: 5px;
    cursor: pointer;

    :hover {
      color: #0079ff;
    }
  `,
};

export default S;
