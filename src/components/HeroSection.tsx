import img1 from "../assets/1a.png"
import img2 from "../assets/1b.png"

function HeroSection() {
  return (
    <section className="mb-5">
      <div className="container-fluid px-0">
        <h2 className="fw-bold mb-4">Novità</h2>
        <hr />

        <div className="row g-4">
          {/* CARD 1 */}
          <div className="col-12 col-md-6">
            <div className="mb-2 text-white">
              <small className="text-uppercase text-secondary fw-semibold d-block mb-1">
                Nuova stazione radio
              </small>
              <p className=" mb-3 text-truncate">
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </p>
            </div>

            <div className="rounded-4 overflow-hidden">
              <img src={img1} className="img-fluid w-100" alt="chill" />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-12 col-md-6">
            <div className="mb-2 text-white">
              <small className="text-uppercase text-secondary fw-semibold d-block mb-1">
                Nuova stazione radio
              </small>
              <p className=" mb-3">Ecco la nuova casa della musica latina</p>
            </div>

            <div className="rounded-4 overflow-hidden">
              <img src={img2} className="img-fluid w-100" alt="latina" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
