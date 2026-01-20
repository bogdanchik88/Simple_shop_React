import MainRouter from './pages/MainRouter'
import NavBar from './elements/NavBar'
import Footer from './elements/Footer'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-[#EAEAEA] font-Montserrat">

      {/* Навбар всегда сверху */}
      <NavBar />

      {/* Основной контент растягивается */}
      <main className="flex-1 w-full flex justify-center">
        <div className="flex flex-col w-full max-w-[1440px] px-4">
          <MainRouter />
        </div>
      </main>

      {/* Футер */}
      <Footer />
    </div>
  )

}

export default App
