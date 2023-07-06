import photo from '../images/about.jpeg'
import Title from './Title'
const About = () => {
  return (
    <section className="section" id="about">
      <Title text="about" subText="us"></Title>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={photo} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Traveling brings cultural exposure, personal growth, and a broader
            worldview, while creating lasting memories and connections that
            enrich our lives.
          </p>
          <p>
            Exploration expands horizons, fosters growth, and creates cherished
            memories, while offering an escape, relaxation, and appreciation for
            diverse cultures, history, and cuisine.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
