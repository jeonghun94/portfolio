import { ReactNode } from "react";
import S from "./style";

interface SideBarProps {
  children: ReactNode;
  bgColor?: string;
}

const SideBar = ({ children, bgColor }: SideBarProps) => {
  return <S.SideBar bgColor={bgColor}>{children}</S.SideBar>;
};

export default SideBar;
