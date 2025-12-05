import logo from "../assets/music.svg"

function TopBar() {
  return (
    <header
      className="d-flex align-items-center justify-content-between px-3 px-md-4"
      style={{
        height: "56px",
        backgroundColor: "#2b2b2b",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      {/* SINISTRA */}
      <div className="d-flex align-items-center gap-3">
        {/* HAMBURGER — SOLO MOBILE */}
        <button
          className="btn btn-link text-danger d-md-none fs-4 p-0"
          aria-label="Menu"
        >
          ☰
        </button>

        {/* CONTROLLI PLAYER — SOLO DESKTOP */}
        <div className="d-none d-md-flex align-items-center gap-3 text-secondary fs-5">
          <i className="bi bi-shuffle"></i>
          <i className="bi bi-skip-backward-fill"></i>
          <i className="bi bi-play-fill"></i>
          <i className="bi bi-skip-forward-fill"></i>
          <i className="bi bi-arrow-repeat"></i>
        </div>
      </div>

      {/* CENTRO — LOGO */}
      <div className="fw-bold text-white d-flex align-items-center gap-2 fs-5">
        <img src={logo} alt="logo" />
      </div>

      {/* DESTRA */}
      <div className="d-flex align-items-center gap-3">
        {/* VOLUME — SOLO DESKTOP */}
        <input
          type="range"
          className="form-range d-none d-md-block"
          style={{ width: "120px" }}
        />

        {/* LOGIN */}
        <button className="btn btn-danger btn-sm d-flex align-items-center gap-2">
          <i className="bi bi-person-fill"></i>
          Accedi
        </button>
      </div>
    </header>
  )
}

export default TopBar
