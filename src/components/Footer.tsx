function Footer() {
  return (
    <footer
      className="container-fluid mt-3 mb-5 mb-md-0 py-4 pb-5 px-4"
      style={{
        backgroundColor: "#464646ff",
      }}
    >
      {/* LINGUE */}
      <div className="d-flex flex-wrap gap-2 mb-3 text-secondary small">
        <span className="text-white">Italia</span>
        <span>|</span>
        <span>English (UK)</span>
      </div>

      {/* COPYRIGHT */}
      <div className="text-secondary small mb-2">
        Copyright © 2024 <span className="text-white">Apple Inc.</span> Tutti i
        diritti riservati.
      </div>

      {/* LINK */}
      <div className="d-flex flex-wrap gap-2 small">
        <a href="#" className="text-white text-decoration-none">
          Condizioni dei servizi internet
        </a>
        <span className="text-secondary">|</span>
        <a href="#" className="text-white text-decoration-none">
          Apple Music e privacy
        </a>
        <span className="text-secondary">|</span>
        <a href="#" className="text-white text-decoration-none">
          Avviso sui cookie
        </a>
        <span className="text-secondary">|</span>
        <a href="#" className="text-white text-decoration-none">
          Supporto
        </a>
        <span className="text-secondary">|</span>
        <a href="#" className="text-white text-decoration-none">
          Feedback
        </a>
      </div>
    </footer>
  )
}

export default Footer
