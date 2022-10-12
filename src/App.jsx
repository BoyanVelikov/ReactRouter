import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';
import {BookLayout} from './pages/BookLayout';
import {BookRoutes} from './pages/BookRoutes';

export default function App() {
  return (
 <>
   {/*<Routes location='/books'>
    <Route path='/books' element={<h1>Extra Content</h1>}/>
  </Routes>*/}
   <nav>
     <ul>
       <li>
         <Link to='/'>Home</Link>
       </li>
       <li>
         <Link to='/books'>Books</Link>
       </li>
     </ul>
   </nav>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/books/*' element={<BookRoutes />}/>
    <Route path='*' element={<NotFound />}/>
  </Routes>
 </>
    
  )
    
  
  
}
