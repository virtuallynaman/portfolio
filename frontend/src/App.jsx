import Header from "./components/Header"
import ScrollableContent from "./components/ScrollableContent"
import StickySidebar from "./components/StickySidebar"


function App() {

  return (
    <>
      <video autoPlay muted loop className="-z-10 fixed h-screen object-cover w-screen" poster="fallback.jpg">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <Header />
      <div className="lg:flex lg:w-4/6 lg:mx-auto md:mx-52 sm:mx-20 gap-52 justify-center">
        <StickySidebar />
        <ScrollableContent />
      </div>
    </>
  )
}

export default App
