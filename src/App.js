import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'
import Alert from './Components/layout/Alert'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import User from './Pages/User'
import { GithubProvider } from './Context/github/GithubContext'
import { AlertProvider } from './Context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'> 
          <Navbar/>

            {/* main tag represents the main content of website generally used once*/}
            <main className='container mx-auto px-3 pb-12'>
              <Alert/>
              <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/about' element = {<About/>}/>
                <Route exact path = '/user/:login' element = {<User/>}/>
                <Route path = '/notfound' element = {<NotFound/>}/>
                <Route path = '/*' element = {<NotFound/>}/>
              </Routes>
            </main>
            
          <Footer/>
        </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  )
}
export default App