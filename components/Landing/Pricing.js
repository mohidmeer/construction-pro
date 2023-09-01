import { useState } from "react";

export default function Pricing() {


    const [sliderValue, setSliderValue] = useState(6000);
    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };



    return (
        <div className="max-w-6xl mx-auto mt-20 text-center">
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr   from-orange-300 to-orange-500 mb-4">New Roof Installation</p>
            <h2 className="text-5xl font-extrabold mb-4 ">Affordable Pricing <span className="red-gradient text-white">Options</span></h2>
            <p className="text-xl text-gray-600">Get the high-quality roof your family deserves, with <br />a low, affordable monthly commitment.</p>
            <div>
                <div className="lg:w-1/2 w-4/5   mx-auto mt-4">
                    <label for="range" className="font-bold text-gray-600">Swipe in estimated cost</label>
                    <div className="flex gap-4 items-center">
                        <p className="font-bold text-3xl text-red-500">$5K</p>
                        <input type="range" min="5000" max="40000" value={sliderValue} onChange={handleSliderChange}
                            className="w-full h-3 bg-gray-200 rounded-lg  cursor-pointer range-lg dark:bg-gray-700 accent-red-500  " />
                        <p className="font-bold text-3xl text-red-500">{'$' + sliderValue}</p>
                    </div>
                    <div className="mt-4 p-2 shadow-black flex justify-center">
                        <p className="font-bold text-3xl shadow-black/20 shadow-xl p-4 rounded-md text-red-500">{'$' + sliderValue}</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    <div className="p-4 border-2 border-dotted relative rounded-xl">
                        <div className="flex justify-center absolute -top-3 w-full">
                            <p className=" bg-[#d9d9d9] px-4 -translate-x-4 inline  rounded-full ">Option 1</p>
                        </div>
                        <h2 className="text-5xl font-extrabold text-red-500 mt-6">
                            PAY IN FULL
                        </h2>
                        <p className="text-4xl  font-extrabold">and SAVE 10%!</p>
                        <div className="mt-4 p-2 shadow-black flex justify-center">
                            <p className="font-bold text-3xl shadow-black/20 shadow-xl py-4 px-10 rounded-lg  text-green-500">{'$' + (sliderValue - Math.ceil(sliderValue * 0.10))}</p>
                        </div>
                        <hr className="my-6" />
                        <p className="text-2xl font-bold" >Save <span className="text-red-500 font-extrabold">{'$' + Math.ceil(sliderValue * 0.10)}</span> </p>

                    </div>
                    <div className="p-4 border-2 border-dotted relative rounded-xl">
                        <div className="flex justify-center absolute -top-3 w-full">
                            <p className=" bg-[#d9d9d9] px-4 -translate-x-4 inline  rounded-full ">Option 2</p>
                        </div>
                        <h2 className="text-5xl font-extrabold text-red-500 mt-6">
                            1 YEAR
                        </h2>
                        <p className="text-4xl  font-extrabold">0% INTEREST</p>
                        <div className="mt-4 p-2 shadow-black flex justify-center">
                            <p className="font-bold text-3xl shadow-black/20 shadow-xl py-4 px-10 rounded-lg  text-green-500">{'$' + (Math.ceil(sliderValue / 12))}<span className="text-black">/mo.</span> </p>
                        </div>
                        <hr className="my-6" />
                        <p className="text-2xl font-bold" >1 Year, $0 Down</p>
                    </div>
                    <div className="p-4 border-2 border-dotted relative rounded-xl">
                        <div className="flex justify-center absolute -top-3 w-full">
                            <p className=" bg-[#d9d9d9] px-4 -translate-x-4 inline  rounded-full ">Option 3</p>
                        </div>
                        <h2 className="text-5xl font-extrabold text-red-500 mt-6">
                            10 YEAR
                        </h2>
                        <p className="text-4xl  font-extrabold">PAYMENT PLAN</p>
                        <div className="mt-4 p-2 shadow-black flex justify-center">
                            <p className="font-bold text-3xl shadow-black/20 shadow-xl py-4 px-10 rounded-lg  text-green-500">{'$' + (Math.ceil(sliderValue / (120)))}<span className="text-black">/mo.</span> </p>
                        </div>
                        <hr className="my-6" />
                        <p className="text-2xl font-bold" >10 Year, $0 Down</p>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center gap-10 items-center my-10  max-w-2xl mx-auto">
                <p className="font-bold text-2xl text-left w-1/2">
                Check if,<br/> <span className="font-extrabold">you’re qualified</span> 
                </p>
                <form className="p-4 flex gap-4 shadow-lg shadow-black/30 rounded-lg w-full">
                    <input className="bg-gray-50 border border-gray-300 w-full  text-gray-900 text-sm rounded-sm  outline-none focus:border-orange-300 p-2" placeholder="Address" />
                        <button className="golden-gradient border border-black  text-black px-4 rounded-md " onClick={(e)=>{e.preventDefault();}}>
                            Submit
                        </button>
                </form>
            </div>
        </div>
    );
}