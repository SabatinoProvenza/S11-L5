import img1 from "../assets/2a.png"
import img2 from "../assets/2b.png"
import img3 from "../assets/2c.png"
import img4 from "../assets/2d.png"
import img5 from "../assets/2e.png"
import img6 from "../assets/2f.png"

function RadioSection() {
  return (
    <section className="mb-5">
      <div className="container-fluid px-2 px-md-0">
        {/* TITOLO */}
        <div className="d-flex align-items-center justify-content-start gap-2 mb-3">
          <h5 className="fw-bold mb-0">Nuovi episodi radio</h5>
          <span className="text-secondary">›</span>
        </div>

        {/* GRIGLIA RESPONSIVE */}
        <div className="row g-3">
          {/* CARD 1 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="rounded-4 overflow-hidden mb-2">
              <img src={img1} className="img-fluid w-100" alt="radio 1" />
            </div>
            <small className="text-secondary d-block text-truncate">
              Prólogo con Abuelo
            </small>
          </div>

          {/* CARD 2 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="rounded-4 overflow-hidden mb-2">
              <img src={img2} className="img-fluid w-100" alt="radio 2" />
            </div>
            <small className="text-secondary d-block text-truncate">
              The Wanderer
            </small>
          </div>

          {/* CARD 3 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="rounded-4 overflow-hidden mb-2">
              <img src={img3} className="img-fluid w-100" alt="radio 3" />
            </div>
            <small className="text-secondary d-block text-truncate">
              Michael Bublé & Carly Pearce
            </small>
          </div>

          {/* CARD 4 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="rounded-4 overflow-hidden mb-2">
              <img src={img4} className="img-fluid w-100" alt="radio 4" />
            </div>
            <small className="text-secondary d-block text-truncate">
              Stephan Moccio: The Zane Lowe Interview
            </small>
          </div>

          {/* CARD 5 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="rounded-4 overflow-hidden mb-2">
              <img src={img5} className="img-fluid w-100" alt="radio 5" />
            </div>
            <small className="text-secondary d-block text-truncate">
              Chart Spotlight: Julia Michaels
            </small>
          </div>

          {/* CARD 6 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="rounded-4 overflow-hidden mb-2">
              <img src={img6} className="img-fluid w-100" alt="radio 6" />
            </div>
            <small className="text-secondary d-block text-truncate">
              Chart Spotlight: Julia Michaels
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RadioSection
