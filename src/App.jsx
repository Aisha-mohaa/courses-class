import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import Allcourses from "./pages/All courses"
import Diplomas from "./pages/Diplomas"
import AboutUs from "./pages/About us"
import Contact from "./pages/contac"
import Dashboard from "./pages/dashbord"
import Cartpage from "./components/cartPge"

function App(){
    return <div>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="Allcourses" element = {<Allcourses/>}/>
            <Route path="Diplomas" element = {<Diplomas/>}/>
            <Route path="AboutUs" element = {<AboutUs/>}/>
            <Route path="Contact Us" element = {<Contact/>}/>
            <Route path="Dshboard" element = {<Dashboard/>}/>
            <Route path="Cartpage" element = {<Cartpage/>}/>
        </Routes>
 
    </div>
}

export default App