import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

function Navbar(){
  const items = useSelector((state)=>state.cart.items)
    return <div className="flex justify-between  bg-sky-400 shadow  shadow-blue-600 px-2 py-4">
        <h1 className="text-white font-semibold text-3xl">🎓Hayaat <span className="text-red-400">Courses</span> web</h1>
        <ul className="flex gap-10 text-xl mr-10">
         <NavLink to="/"><li>home</li></NavLink>
         <NavLink to="/Allcourses"><li>All courses</li></NavLink>
         <NavLink to="/Diplomas"><li>Deplems</li></NavLink>
         <NavLink to="/AboutUs"><li>About Us</li></NavLink>
         <NavLink to="/Contact"><li>Contact Us</li></NavLink>
         <NavLink><li>Dashbord</li></NavLink>
            <li className="relative flex items-center hover:text-red-500 cursor-pointer">
         <NavLink to="/Cartpage"><i className="fas fa-shopping-cart text-4xl text-white"></i></NavLink>
           <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
             {items.length}
           </span>
         </li>
        </ul>
    </div>
}

export default Navbar