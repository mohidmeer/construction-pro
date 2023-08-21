export default function Repair() {

   return(

    <div className=" max-w-6xl mx-auto mt-20 flex gap-8 md:flex-row flex-col ">
        <div className="flex-col flex gap-4 p-8 w-full">
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr   from-orange-300 to-orange-500 mb-4">---- Repair Services</p>
            <h2 className="text-5xl font-bold ">Roof <span className="shadow-white/50 text-white shadow-xl red-gradient px-2">Repair</span></h2>
            <p className="text-lg font-semibold">We can repair any roofing issues This will extend the life of your roof and keep it from deteriorating further.<br/>
                Our team at Herts Roofing & Construction has the experience, and equipment to bring you the roofing
                solution you deserve.</p>
            <div className="p-10 border border-dashed border-orange-300 rounded-xl">
                <p className="font-bold text-2xl text-left ml-4">
                    Get your<br/> <span className="font-extrabold">Free Roof Inspection</span> 
                </p>
                <form className="p-4 flex gap-4  rounded-lg w-full">
                    <input className="text-lg text-gray-700 font-semibold bg-gray-50 border border-gray-300 w-full   rounded-sm  outline-none focus:border-orange-300 p-2" placeholder="Your Address" />
                        <button className="golden-gradient border border-black font-bold text-black px-4 rounded-md " onClick={(e)=>{e.preventDefault();}}>
                            Submit
                        </button>
                </form>

            </div>
        </div>
        <div className="flex-col flex gap-4 bg-[#1e1e1e] p-8 w-full rounded-2xl ">
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr   from-orange-300 to-orange-500 mb-4">---- Emergency Repair</p>
            <h2 className="text-5xl font-bold  ">
            
            <span className=" text-white  red-gradient px-2">Emergency</span>     
            <span className="text-white">Repair</span></h2>
            <p className="text-lg font-semibold text-white">Sometimes unexpected events require the immediate attention of a professional roofer.If you require immediate attention call us now.
                Herts Roofing & Construction has an emergency response crew that is attentive 24/7. With years of experience to solve any roofing emergency..</p>
            <div className="p-10 border border-dashed border-orange-300 rounded-xl">
                <p className="font-bold text-2xl ml-4 text-white">
                    Get your<br/> <span className="font-extrabold">Free Roof Inspection</span> 
                </p>
                <form className="p-4 flex gap-4  rounded-lg w-full">
                    <input className="text-lg text-gray-700 font-semibold bg-gray-50 border border-gray-300 w-full   rounded-sm  outline-none focus:border-orange-300 p-2" placeholder="Your Address" />
                        <button className="golden-gradient border border-black font-bold text-black px-4 rounded-md " onClick={(e)=>{e.preventDefault();}}>
                            Submit
                        </button>
                </form>

            </div>
        </div>
    </div>
   );
}