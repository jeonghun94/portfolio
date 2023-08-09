const SkillBadge = ({ skill }: { skill: string }) => {
  return <img height="25" src={`https://img.shields.io/badge/${skill}&style=flat-square&logoColor=white`} />;
};

export default SkillBadge;
