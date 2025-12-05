import logo from "../assets/apple.svg"

function TopBar() {
  return (
    <header
      className="d-flex align-items-center justify-content-between px-4"
      style={{
        height: "56px",
        backgroundColor: "#2b2b2b",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      {/* SINISTRA — CONTROLLI */}
      <div className="d-flex align-items-center gap-3 text-secondary">
        <i className="bi bi-shuffle text-secondary"></i>
        <i className="bi bi-skip-backward-fill text-secondary"></i>
        <i className="bi bi-play-fill text-secondary fs-3"></i>
        <i className="bi bi-skip-forward-fill text-secondary"></i>
        <i className="bi bi-shuffle text-secondary"></i>
      </div>

      {/* CENTRO — LOGO */}
      <div className="fw-bold text-white">
        <img src={logo} alt="logo" />
      </div>

      {/* DESTRA — VOLUME + LOGIN */}
      <div className="d-flex align-items-center gap-3">
        <input type="range" className="form-range" style={{ width: "120px" }} />

        <button className="btn btn-danger btn-sm d-flex align-items-center gap-2">
          <i className="bi bi-person-fill"></i>
          Accedi
        </button>
      </div>
    </header>
  )
}

export default TopBar
