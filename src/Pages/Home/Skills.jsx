import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills-section" id="mySkills">
      <h1 className="section-title">My Skills</h1>

      <div className="skills-section-container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills-section-card">
            <div className="skills-section-img">
              <img src={item.src} alt="" />
            </div>
            <div className="skills-section-card-content">
              <h3 className="skills-section-title">{item.title}</h3>
              <p className="skills-section-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
