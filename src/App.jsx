import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import {Home} from './pages/Home';
import {BookList} from './pages/BookList';

export default function App() {
  return (
 <>
   <nav>
     <ul>
       <li>
         <Link to='/'>Home</Link>
       </li>
       <li>
         <Link to='/books'>BookList</Link>
       </li>
     </ul>
   </nav>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='books' element={<BookList />}/>
  </Routes>
 </>
    
  )
    
  
  
}
