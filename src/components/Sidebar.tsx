import music from "../assets/music.svg"

function Sidebar() {
  return (
    <aside className="bg-black text-white p-4" style={{ width: "240px" }}>
      <div className="fw-bold fs-5 mb-3">
        <img
          src={music}
          alt="logo"
          style={{ width: 80, filter: "brightness(0) invert(1)" }}
        />
      </div>

      <input
        type="text"
        className="form-control form-control-sm bg-dark text-white border-1 border-secondary  mb-4"
        placeholder="Cerca"
      />

      <nav className="d-flex flex-column gap-2">
        <a className="text-secondary text-decoration-none" href="#">
          Home
        </a>
        <a className="text-secondary text-decoration-none" href="#">
          Novità
        </a>
        <a className="text-secondary text-decoration-none" href="#">
          Radio
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar
