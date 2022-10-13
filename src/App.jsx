import { Link, Route, Routes } from 'react-router-dom'
import { useRoutes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css'
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';
import {BookLayout} from './pages/BookLayout';
import {BookRoutes} from './pages/BookRoutes';
import './styles.css';

export default function App() {

  // let element = useRoutes([
  //   {
  //     path:"/",
  //     element:<Home />
  //   },
  //   {
  //     path:"*",
  //     element:<NotFound />
  //   }
  // ]);

  
  return (
 <>
   {/*<Routes location='/books'>
    <Route path='/books' element={<h1>Extra Content</h1>}/>
  </Routes>*/}
   <nav>
     <ul>
       <li>
         <NavLink to='/' >Home</NavLink>
       </li>
       <li>
         <NavLink end to='/books'>Books</NavLink>
       </li>
     </ul>
   </nav>
   {/*{element}*/}
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/books/*' element={<BookRoutes />}/>
    <Route path='*' element={<NotFound />}/>
  </Routes>
 </>
    
  )
    
  
  
}
