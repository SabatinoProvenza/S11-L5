import music from "../assets/music.svg"

function Sidebar() {
  return (
    <aside
      className=" text-white p-4 d-none d-md-flex flex-column"
      style={{ width: "50rem", backgroundColor: "#1a1919ff" }}
    >
      <div className="fw-bold fs-5 mb-4">
        <img
          src={music}
          alt="logo"
          style={{ width: 80, filter: "brightness(0) invert(1)" }}
        />
      </div>

      <div className="input-group input-group mb-4">
        <span className="input-group-text bg-black border-0 text-secondary">
          <i className="bi bi-search text-danger fs-6 "></i>
        </span>
        <input
          type="text"
          className="form-control bg-black text-white border-0 input-search"
          placeholder="Cerca"
        />
      </div>

      <nav className="d-flex flex-column gap-2">
        <a className="text-white text-decoration-none" href="#">
          <i className="bi bi-house text-danger me-2"></i>
          Home
        </a>
        <a className="text-white text-decoration-none" href="#">
          <i className="bi bi-grid text-danger me-2"></i>
          Novità
        </a>
        <a className="text-white text-decoration-none" href="#">
          <i className="bi bi-broadcast-pin text-danger me-2"></i>
          Radio
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar
