import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Series from './pages/Series'
import Comics from './pages/Comics'
import Error404 from './pages/Error404'
import Header from './components/Header/Header'
//import useFetch from './hooks/useFetch'

function App() {
  // const exampleAPI = useFetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=169feb3e823493bc7066eeb8dc1cdcfa&hash=fbe2468aae202a449e4e4e006ffa90ad");
  // console.log(exampleAPI);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/inicio' element={<Home />} />
          <Route path='/series' element={<Series />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
