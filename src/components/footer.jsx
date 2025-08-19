function Footerv(){
    return <div>
         <div className="flex justify-between  bg-sky-400 shadow  shadow-blue-600 px-4 py-12 mt-24">
        <h1 className="text-white font-semibold text-3xl">🎓Hayaat <span className="text-red-400">Courses</span> web</h1>
        <div className="flex justify-around text-2xl">
    <div>

        <ul className=" mr-10">
            <li>home</li>
            <li>All courses</li>
            <li>Deplems</li>
            <li>Blog</li>

        </ul>
    </div>

    <ul>
        <li>About Us</li>
         <li>Contact Us</li>
       <li>Dashbord</li>
    </ul>
        </div>


        <div>
              <div className="flex gap-4 text-2xl MR-12">
            <a
              href="#"
              className="bg-blue-500 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              className="bg-blue-500 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="bg-blue-500 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>                        
            <h1 className="text-3xl mt-6">252619689961</h1>
            <div>
                <label className="text-3xl pr-3 text-slate-600">Email</label>
                <input className="w-72 h-12 text-2xl rounded-lg  pl-3 border border-gray-300 outline-none  focus:ring-2 focus:ring-blue-400" type="text" placeholder="email" />
            </div>
        </div>
    </div>
    </div>
}

export default Footerv