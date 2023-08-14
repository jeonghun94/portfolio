import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdLink } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-top: -3.5px;
  background-color: rgb(110, 110, 110);
`;

export const BlueDot = styled.div<{ size?: number; marginBottom?: number }>`
  width: ${(props) => (props.size ? props.size : "10")}px;
  height: ${(props) => (props.size ? props.size : "10")}px;
  border-radius: 50%;
  background-color: #0079ff;
  align-self: flex-end;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 5)}px;
`;

export const BlueAiOutlineCheck = styled(AiOutlineCheck)`
  color: #0079ff;
  margin-top: -3px;
`;

export const LargeIoMdLink = styled(IoMdLink)`
  margin-top: -2.5px;
  font-size: 1.5rem;
`;

export const MiddelFaPencilAlt = styled(FaPencilAlt)`
  margin-top: -4px;
  font-size: 1.15rem;
`;
