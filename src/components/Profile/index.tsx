import { containerVariants, linkVariants } from "../../utils/constants";
import SideBar from "../SideBar";
import S from "./style";
import { infoLinks } from "../../db/infoLink";
import bg from "@/assets/bg.jpg";
import { BlueDot } from "../Icons";
const Profile = () => {
  return (
    <S.Wrapper>
      <SideBar bgColor={"#202224"}>
        <S.InfoWrapper>
          <S.InfoTop variants={containerVariants} initial="start" animate="end">
            {infoLinks.map((infoLink, index) => {
              return (
                <S.InfoLinkWrapper variants={linkVariants} key={index}>
                  <S.InfoLinkTitle href={infoLink.link} target="_blank">
                    {infoLink.title}
                  </S.InfoLinkTitle>
                  <BlueDot size={8} marginBottom={3} />
                </S.InfoLinkWrapper>
              );
            })}
          </S.InfoTop>
          <S.InfoBottom>
            <h3>jeongh1021@naver.com</h3>
          </S.InfoBottom>
        </S.InfoWrapper>
      </SideBar>

      <S.ProfileIntroduceWrapper>
        <S.IntroWrapper>
          <S.IntroTitle>도전과 개발을 즐기는</S.IntroTitle>
          <S.IntroSubTitle>
            <span>조정훈</span> 입니다.
          </S.IntroSubTitle>
          <S.IntroDescriptionWrapper>
            <S.IntroDescription>다른 사람들과 함께 협력하고 소통하는 것을 소중히 여깁니다.</S.IntroDescription>
            <S.IntroDescription>
              개발 능력과 열정으로 좋은 결과를 만들어내기 위해 끊임없이 노력합니다.
            </S.IntroDescription>
            <S.IntroDescription>새로운 도전에 기꺼이 나서는 자세를 갖추고 있습니다.</S.IntroDescription>
          </S.IntroDescriptionWrapper>
        </S.IntroWrapper>
      </S.ProfileIntroduceWrapper>
      <S.BackgroundImg src={`${bg}`} alt="bg" draggable={false} />
    </S.Wrapper>
  );
};

export default Profile;
