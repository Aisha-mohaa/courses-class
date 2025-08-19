import Navbar from "./navbar"
import img from "../image.png"
import Coursese from "./coursese"
import Footerv from "./footer"
function Home(){
    return <>
    <Navbar/>
    <div className="bg-blue-950 h-screen text-white">
        <div className="flex justify-between pt-44">
            <div className="">
                
            <h1 className="text-2xl ">HOYGA XIRFADAHA QARNIGA 21aad</h1>
            <input className="rounded-lg outline-none px-3 py-2 ml-3 mt-5" type="text" placeholder="search" />
            </div>
            <div className="">
                <img className="w-[500px] h-72 mr-24 mb-8" src={img} alt="" />
            </div>
        </div>


    </div>

    <div className=" pt-24 pb-3 text-gray-800">
        
        <h1 className="text-4xl font-serif text-center pb-">Some Facts About us</h1>
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

    <Coursese/>
    <Footerv/>
    </>
}

export default Home