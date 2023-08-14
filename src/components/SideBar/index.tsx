import S from "./style";
import { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
  bgColor?: string;
}

const SideBar = ({ children, bgColor }: SideBarProps) => {
  return <S.SideBar bgColor={bgColor}>{children}</S.SideBar>;
};

export default SideBar;
