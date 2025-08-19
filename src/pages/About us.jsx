import { NavLink } from "react-router-dom"
import Navbar from "../components/navbar"
import img from "../pages/image.png"
import Footerv from "../components/footer"
function AboutUs (){
    return <>
    <Navbar/>
     <div>
   <div className="pt-24">
    <h1 className="text-4xl text-center">About us</h1>
    <div className="text-center font-thin list-none">
        <h1> <NavLink to="/"><li>home</li></NavLink><NavLink to="/AboutUs"><li>About Us</li></NavLink></h1>
    </div>
   </div>

   <div className="pt-24 pl-12 text-4xl">
    <h1 className="tex-5xl font-semibold ">𝗛𝗢𝗬𝗚𝗔 𝗫𝗜𝗥𝗙𝗔𝗗𝗔𝗛𝗔 𝗤𝗔𝗥𝗡𝗜𝗚𝗔 𝟮𝟭𝗮𝗮𝗱 (𝗛𝗼𝗺𝗲 𝗼𝗳 𝟮𝟭𝘀𝘁 𝗰𝗲𝗻𝘁𝘂𝗿𝘆 𝘀𝗸𝗶𝗹𝗹𝘀)</h1>
    <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Omnis velit deserunt molestiae, nemo nisi deleniti ad dolorem maiores eum atque.</p>
    <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Omnis velit deserunt molestiae, nemo nisi deleniti ad dolorem maiores eum atque.</p>
    <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Omnis velit deserunt molestiae, nemo nisi deleniti ad dolorem maiores eum atque.</p>
    <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Omnis velit deserunt molestiae, nemo nisi deleniti ad dolorem maiores eum atque.</p>
    <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Omnis velit deserunt molestiae, nemo nisi deleniti ad dolorem maiores eum atque.</p>
    <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Omnis velit deserunt molestiae, nemo nisi deleniti ad dolorem maiores eum atque.</p>
   </div>
    </div>

    <div className=" pt-24 pb-3 text-gray-800">
        
        <h1 className="text-5xl font-serif text-center ">Some Facts About us</h1>
        <div className="flex justify-center gap-8 mt-12">
        <div className="h-56 w-72  bg-white   shadow-2xl shadow-blue-950 rounded-3xl border border-gray-300 ">
           <div className="text-center pt-12">
            <h1 className="text-3xl font-bold">📔</h1>
            <h1 className="text-5xl font-bold">50+</h1>
            <h1 className="text-xl font-thin">lactures</h1>
           </div>
        </div>
        <div className="h-56 w-72  bg-white   shadow-2xl shadow-blue-950 rounded-3xl border border-gray-300 ">
           <div className="text-center pt-12">
            <h1 className="text-3xl font-bold">🎥</h1>
            <h1 className="text-5xl font-bold">1220</h1>
            <h1 className="text-xl font-thin">studednt</h1>
           </div>
        </div>
        <div className="h-56 w-72  bg-white   shadow-2xl shadow-blue-950 rounded-3xl border border-gray-300 ">
           <div className="text-center pt-12">
            <h1 className="text-3xl font-bold">🎓</h1>
            <h1 className="text-5xl font-bold">50+</h1>
            <h1 className="text-xl font-thin">Instructors</h1>
           </div>
        </div>
        <div className="h-56 w-72  bg-white   shadow-2xl shadow-blue-950 rounded-3xl border border-gray-300 ">
           <div className="text-center pt-12">
            <h1 className="text-3xl font-bold">🧑🏿‍🏫</h1>
            <h1 className="text-5xl font-bold">440+</h1>
            <h1 className="text-xl font-thin">courses</h1>
           </div>
        </div>
        </div>
        
    </div>







  <div className="bg-sky-300 h-screen mt-16">
    <div className="flex justify-center pt-32 ">
  <div>

    <div>
        <h1 className="text-4xl text-gray-800">Why Study With Hayaat Courses</h1>
        <h3 className="text-2xl font-thin pt-3">Discover Your Perfect Program In Our Courses.</h3>
    </div>
    <div className="flex gap-12 justify-center pt-12"> 

    <div className="text-2xl">
        <img className="w-24 h-24 rounded-full" src={img} alt="" />
        <h1 className="font-bold tetx-3xl">Learn Anything</h1>
        <p className="font-thin text-2xl">You'll learn interesting courses here, We will try <br /> our best to teach you best skill</p>

    </div>
    <div className="text-2xl">
        <img className="w-24 h-24 rounded-full" src={img} alt="" />
        <h1 className="font-bold tetx-3xl">Learn Anything</h1>
        <p className="font-thin text-2xl">You'll learn interesting courses here, We will try <br /> our best to teach you best skill</p>

    </div>
    <div className="text-2xl">
        <img className="w-24 h-24 rounded-full" src={img} alt="" />
        <h1 className="font-bold tetx-3xl">Learn Anything</h1>
        <p className="font-thin text-2xl">You'll learn interesting courses here, We will try <br /> our best to teach you best skill</p>

    </div>
    </div>
    </div>
  </div>
  </div>

  <Footerv/>
    </>
}

export default AboutUs