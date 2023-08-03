import "./App.css";

function App() {
  const skills = [
    {
      skill: "HTML",
      level: "advanced",
      color: "#ffeeff",
    },
    {
      skill: "JS",
      level: "advanced",
      color: "#fff888",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#88ff",
    },
    {
      skill: "Next.js",
      level: "intermediate",
      color: "#99ffff",
    },
    {
      skill: "flutter",
      level: "beginner",
      color: "#99ffff",
    },
  ];
  return (
    <div className="App">
      <div className="card__container">
        <Avatar imageSource="https://picsum.photos/380/300" />
        <Intro
          introHeading="Johan"
          introDescription="Front End Developer in Global Data and forever learner of programming languages"
        />
        <div className="skill-list__container">
          {skills.map((skill) => {
           return <SkillSet skillData={skill} />;
          })}

     
        </div>
      </div>
    </div>
  );
}

function Intro({ introHeading, introDescription }) {
  return (
    <div className="intro__container">
      <h3>{introHeading}</h3>
      <p>{introDescription}</p>
    </div>
  );
}

function Avatar({ imageSource }) {
  return (
    <div className="image__container">
      <img src={imageSource} alt="avatar" />
    </div>
  );
}

function SkillSet({ skillData }) {
  const skillName = skillData.skill;
  const skillLevel = skillData.level;
  const skillColor = skillData.color;
  return (
    <div
      className="skillset__container"
      style={{ backgroundColor: `${skillColor}` }}
    >
      <p>
        {skillName}
        {skillLevel === "advanced" ? (
          <span>👌</span>
        ) : skillLevel === "intermediate" ? (
          <span>👍</span>
        ) : skillLevel === "beginner" ? (
          <span>🤷‍♂️</span>
        ) : null}
      </p>
    </div>
  );
}

export default App;
