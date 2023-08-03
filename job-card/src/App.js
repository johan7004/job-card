import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card__container">
        <Avatar imageSource="https://picsum.photos/380/300" />
        <Intro
          introHeading="Johan"
          introDescription="Front End Developer in Global Data and forever learner of programming languages"
        />
        <div className="skill-list__container">
          
          <SkillSet skillSetName="Git and Github" skillSetColor="red" />
          <SkillSet skillSetName="JavaScript" skillSetColor="yellow" />
          <SkillSet skillSetName="HTML + CSS" skillSetColor="blue" />
          <SkillSet skillSetName="Python" skillSetColor="#DBDBDB" />
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

function SkillSet({ skillSetName, skillSetColor }) {
  return (
    <div
      className="skillset__container"
      style={{ backgroundColor: `${skillSetColor}` }}
    >
      <p>{skillSetName}</p>
    </div>
  );
}

export default App;
