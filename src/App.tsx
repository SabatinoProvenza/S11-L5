import "./App.css"
import Sidebar from "./components/Sidebar"
import TopBar from "./components/Topbar"
import HeroSection from "./components/HeroSection"
import RadioSection from "./components/RadioSection"
import NewRealeases from "./components/NewRealeases"
import ExploreSection from "./components/ExploreSection"

function App() {
  return (
    <div className="d-flex min-vh-100 bg-dark text-white">
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column">
        <TopBar />

        <main className="flex-grow-1 p-3 p-md-4">
          <HeroSection />
          <RadioSection />
          <NewRealeases />
          <ExploreSection />
        </main>
      </div>
    </div>
  )
}

export default App
