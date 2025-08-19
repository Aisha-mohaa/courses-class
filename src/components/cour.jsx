function Cor(props){
    return <div>
        <div className="grid grid-cols-3 gap-8 pt-20">
             <div className="w-96 h-80 bg-white shadow-lg shadow-blue-800 rounded-2xl text-center">
                        <div className="flex gap-5 pt-3 pr-3  ">
                            <div>
                                <h1 className="text-2xl mt-3 pl-3 font-semibold">{props.name}</h1>
                            </div>
                            <div>
                           <img className="w-38 h-36" src={props.img} alt="" />
            
                            </div>
            
                        </div>
                        <div>
                            <h1 className="font-thin ">{props.star}</h1>
                            <h1 className="text-xl">{props.name2}</h1>
            
                        </div>
                        <hr  className="font-bold text-gray-900 px-3 py-2  mt-3"/>
            
                        <div className="w-96 h-12 shadow-2xl mt-5 ">
                            <div className="flex justify-between">
                             <div>
            
                              <h1 className="font-bold tex-3xl pl-3">${props.price}</h1>
                                </div>
                                <div>
                                    <button className="bg-blue-600 text-white rou nded-xl px-6 py-2 pr-3 mr-3">{props.btn}</button>
                                </div>
            
                            </div>
                        </div>
            
                    </div>
        </div>
    </div>
}


export default Cor