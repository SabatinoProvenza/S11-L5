import "./App.css"
import Sidebar from "./components/Sidebar"
import TopBar from "./components/Topbar"

function App() {
  return (
    <div className="d-flex min-vh-100 bg-dark text-white">
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column">
        <TopBar />

        <main className="flex-grow-1 p-4">
          <h1 className="fw-bold">Novità</h1>
          <hr />
        </main>
      </div>
    </div>
  )
}

export default App
