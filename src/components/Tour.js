import Title from './Title'
import { tours } from '../data'
const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title text="featured" subText="tours"></Title>
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {tour.location}
                  </p>
                  <p>From {tour.duration}</p>
                  <p>${tour.cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tour
