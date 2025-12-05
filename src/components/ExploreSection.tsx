function ExploreSection() {
  return (
    <section className="mb-5">
      <div className="container-fluid px-2 px-md-0">
        {/* TITOLO */}
        <h5 className="fw-bold mb-3">Altro da esplorare</h5>

        {/* GRIGLIA */}
        <div className="row g-3">
          {/* CARD 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-secondary bg-opacity-25 rounded-4 p-3 d-flex justify-content-between align-items-center">
              <span className="text-danger fw-semibold">
                Esplora per genere
              </span>
              <span className="text-danger">›</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-secondary bg-opacity-25 rounded-4 p-3 d-flex justify-content-between align-items-center">
              <span className="text-danger fw-semibold">Worldwide</span>
              <span className="text-danger">›</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-secondary bg-opacity-25 rounded-4 p-3 d-flex justify-content-between align-items-center">
              <span className="text-danger fw-semibold">Video musicali</span>
              <span className="text-danger">›</span>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-secondary bg-opacity-25 rounded-4 p-3 d-flex justify-content-between align-items-center">
              <span className="text-danger fw-semibold">Decenni</span>
              <span className="text-danger">›</span>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-secondary bg-opacity-25 rounded-4 p-3 d-flex justify-content-between align-items-center">
              <span className="text-danger fw-semibold">Classifiche</span>
              <span className="text-danger">›</span>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-secondary bg-opacity-25 rounded-4 p-3 d-flex justify-content-between align-items-center">
              <span className="text-danger fw-semibold">Nuovi artisti</span>
              <span className="text-danger">›</span>
            </div>
          </div>

          {/* CARD 7 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-secondary bg-opacity-25 rounded-4 p-3 d-flex justify-content-between align-items-center">
              <span className="text-danger fw-semibold">
                Attività e stati d'animo
              </span>
              <span className="text-danger">›</span>
            </div>
          </div>

          {/* CARD 8 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-secondary bg-opacity-25 rounded-4 p-3 d-flex justify-content-between align-items-center">
              <span className="text-danger fw-semibold">Audio spaziale</span>
              <span className="text-danger">›</span>
            </div>
          </div>

          {/* CARD 9 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-secondary bg-opacity-25 rounded-4 p-3 d-flex justify-content-between align-items-center">
              <span className="text-danger fw-semibold">Hit del passato</span>
              <span className="text-danger">›</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
