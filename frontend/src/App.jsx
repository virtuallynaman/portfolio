import Header from "./components/Header"
import ScrollableContent from "./components/ScrollableContent"
import StickySidebar from "./components/StickySidebar"


function App() {

  return (
    <>
      <video autoPlay muted loop className="background-video" poster="fallback.jpg">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <Header />
      <div className="main-content">
        <StickySidebar />
        <ScrollableContent />
      </div>
    </>
  )
}

export default App
