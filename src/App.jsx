import { Route, Routes} from "react-router-dom"
import Header from './components/header';
import { Outlet } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import About from "./pages/about";
import AddUser from "./pages/add_user";
import { useNavigate } from "react-router-dom";
import Edit from "./pages/edit";
import Users from "./pages/users";

const App = () => {  
  const navigate = useNavigate()  
  const handleActionLogin = (formData) => {        
    const email = formData.get("email")
    const password = formData.get("password")        
    if(email === 'admin@gmail.com' && password === 'admin') {      
      navigate('/')
    }        
  }

  return(
    <>    
      <Header/>
      < Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login action={handleActionLogin}/>} />
        <Route path="/add_user" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/users" element={<Users/>}/>        
      </Routes>

      <Outlet/>      
      
    </>
  )
}

export default App;