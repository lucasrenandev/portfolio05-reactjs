import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

export default function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}