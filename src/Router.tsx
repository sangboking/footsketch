import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detail from './Routes/Detail'
import Home from './Routes/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
