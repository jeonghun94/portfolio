import S from "./style";
import { skills as dada } from "../../db/skill";

interface SkillProps {
  skillId: number;
}

const Skills = ({ skills }: { skills: SkillProps[] }) => {
  return (
    <S.Wrapper>
      {skills.map((skill, index) => {
        const skillData = dada.find((item) => item.id === skill.skillId);
        return (
          <img
            key={index}
            height="25"
            src={`https://img.shields.io/badge/${skillData?.url || ""}&style=flat-square&logoColor=white`}
          />
        );
      })}
    </S.Wrapper>
  );
};

export default Skills;
