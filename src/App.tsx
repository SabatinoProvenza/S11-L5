import "./App.css"
import Sidebar from "./components/Sidebar"
import TopBar from "./components/Topbar"
import HeroSection from "./components/HeroSection"
import RadioSection from "./components/RadioSection"
import NewRealeases from "./components/NewRealeases"
import ExploreSection from "./components/ExploreSection"
import Footer from "./components/Footer"
import Player from "./components/Player"

function App() {
  return (
    <div className="d-flex min-vh-100 bg-dark text-white">
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column">
        <TopBar />

        <main className="flex-grow-1 p-2 p-md-3 pb-3">
          <HeroSection />
          <RadioSection />
          <NewRealeases />
          <ExploreSection />
        </main>

        <Footer />
        <Player />
      </div>
    </div>
  )
}

export default App
