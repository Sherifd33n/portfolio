import data from "../../data/index.json";
import { FaGithub } from "react-icons/fa";

export default function MyPortfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <h1 className="section-title">Portfolio</h1>
          <p className="section-label">Recent projects</p>
        </div>
        <div>
          <a href="https://github.com/sherifd33n">
            <button className="btn btn-github">
              <FaGithub /> Visit My GitHub
            </button>
          </a>
        </div>
      </div>

      <div className="portfolio-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio-section-card">
            <div className="portfolio-section-img">
              <img src={item.src} alt="" />
            </div>
            <div className="portfolio-section-card-content">
              <div>
                <h3 className="portfolio-section-title">{item.title}</h3>
              </div>{" "}
              <a href={item.link} className="text-sm portfolio-link">
                <button className="btn btn-github">See Demo</button>{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
