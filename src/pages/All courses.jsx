import Cor from "../components/cour"
import car from "../components/cor.png"
import { NavLink } from "react-router-dom"
import Footerv from "../components/footer"
import Navbar from "../components/navbar"

function Allcourses (){
    return <>
   <Navbar/>

    <div >
    <div className="flex gap-16">
    <div className="text-2xl mt-24 ml-3 space-y-3">
    <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
    <input className="w-8 h-8 accent-blue-500" type="radio" name="category" value="all" />All</label>
    <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
    <input className="w-8 h-8 accent-blue-500" type="radio" name="category" value="ict" />ICT</label>
     <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
    <input className="w-8 h-8 accent-blue-500" type="radio" name="category" value="business" />Business</label>
    <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
   <input className="w-8 h-8 accent-blue-500" type="radio" name="category" value="economic" />Economic</label>

    <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
    <input className="w-8 h-8 accent-blue-500" type="radio" name="category" value="web" />Web Developers</label>

    <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
    <input className="w-8 h-8 accent-blue-500" type="radio" name="category" value="data" />Data Science</label>
</div>


      <div className="grid grid-cols-4 pl-8 ">
     <Cor name= "Foundemental Softwer " img = {car} name2= "foundemental softwer" star = "⭐⭐⭐⭐⭐⭐"  price = "30.00" btn = "Add Cart"/>
     <Cor name= "Foundemental ICT" img = {car} name2= "foundemental ICT" star = "⭐⭐⭐⭐⭐⭐"  price = "20.00" btn = "Add Cart"/>
     <Cor name= " full stack developer" img = {car} name2= "full satck Developer" star = "⭐⭐⭐⭐⭐⭐"  price = "35.00" btn = "Add Cart"/>
     <Cor name= "english" img = {car} name2= " englis" star = "⭐⭐⭐⭐⭐⭐"  price = "30.00" btn = "Add Cart"/>
     <Cor name= " Economic  " img = {car} name2= " Economic" star = "⭐⭐⭐⭐⭐⭐"  price = "40.00" btn = "Add Cart"/>
     <Cor name= " Bussines" img = {car} name2= " Bissiness" star = "⭐⭐⭐⭐⭐⭐"  price = "30.00" btn = "Add Cart"/>
     <Cor name= " Data science" img = {car} name2= "Data Science " star = "⭐⭐⭐⭐⭐⭐"  price = "20.00" btn = "Add Cart"/>
     <Cor name= " CyberSecurety " img = {car} name2= "CeyberSecurity " star = "⭐⭐⭐⭐⭐⭐"  price = "50.00" btn = "Add Cart"/>
     <Cor name= " Web devoloper" img = {car} name2= " wEBDEVELOPER" star = "⭐⭐⭐⭐⭐⭐"  price = "40.00" btn = "Add Cart"/>
     <Cor name= "  Bussines" img = {car} name2= " Bussines " star = "⭐⭐⭐⭐⭐⭐"  price = "30.00" btn = "Add Cart"/>
     <Cor name= "  ICT" img = {car} name2= "  ICT" star = "⭐⭐⭐⭐⭐⭐"  price = "30.00" btn = "Add Cart"/>
     <Cor name= "Softwer Developers " img = {car} name2= " Softwer Develepors" star = "⭐⭐⭐⭐⭐⭐"  price = "20.00" btn = "Add Cart"/>
    </div>
    </div>
        </div>

        <Footerv/>
    </>
}
export default Allcourses