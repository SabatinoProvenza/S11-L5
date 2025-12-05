import img from "../assets/immagine-musica.png"

function Player() {
  return (
    <div
      className="d-block d-md-none position-fixed bottom-0 start-0 w-100 px-3 py-0"
      style={{
        zIndex: 100,
      }}
    >
      {/* BARRA PLAYER */}
      <div
        className="d-flex align-items-center justify-content-between p-3 rounded-4"
        style={{
          backgroundColor: "#1f1f1f",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.5)",
          height: "90px",
        }}
      >
        {/* SINISTRA — COVER */}
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-3 d-flex align-items-center justify-content-center"
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#2b2b2b",
            }}
          >
            <img
              src={img}
              alt="track"
              className="img-fluid"
              style={{ maxHeight: "24px", opacity: 0.6 }}
            />
          </div>
        </div>

        {/* DESTRA — CONTROLLI */}
        <div className="d-flex align-items-center gap-4 fs-4 text-white">
          <i className="bi bi-play-fill"></i>
          <i className="bi bi-skip-forward-fill"></i>
        </div>
      </div>
    </div>
  )
}

export default Player
