import Image from "next/image";
import q1 from 'public/images/quotes/1.webp'
import q2 from 'public/images/quotes/2.webp'

export default function Quotes(){

    return (
        <div className="max-w-6xl mx-auto my-20 ">
            <div className="flex lg:flex-row flex-col justify-between gap-20 ">
                <div className="flex-col flex  w-full">
                    <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr   from-orange-300 to-orange-500 mb-4">New Roof Install</p>
                    <h2 className="text-6xl font-extrabold leading-[1.2]    ">Accurate <br/> Aerial <span className="red-gradient text-white px-2">Quotes</span> </h2>
                    <p  className="font-semibold text-xl my-8">Our Aerial Quote system saves time and stress, delivering accurate quotes, in the quickest time.</p>
                    <div className="p-8 bg-[#f3f3f3] rounded-xl flex flex-col gap-4 ">
                        <div>
                            <p className="text-2xl font-bold">01. Measurements you can trust</p>
                            <p className="font-semibold mt-2 text-lg  ">Aerial quotes are the most accurate because they are the only way to see the roof from above.</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">02. Price quote in hours, not days</p>
                            <p className="font-semibold mt-2 text-lg  ">Our reports are guaranteed in 24 hours. Gone are the days of waiting for days for a price quote.</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">03. Accurate, fast roof report</p>
                            <p className="font-semibold mt-2 text-lg  ">The combination of accuracy and speed make our aerial quote method the most efficient option.</p>
                        </div>

                    </div>
                </div>
                <div className="relative w-full">
                    <div>
                        <Image
                            src={q1}
                            width={600}
                            height={400}
                            alt="sizing"
                            style={{
                                maxWidth: "100%",
                               
                            }} />
                    </div>
                    <div className="absolute w-full h-96 top-44 lg:left-24">
                    <Image
                        src={q2}
                        fill
                        alt="sizing"
                        style={{
                            maxWidth: "100%",
                    
                            objectFit: "cover"
                        }} />
                    </div>


                </div>
            </div>




            <div className="flex justify-center gap-10 items-center my-10  max-w-2xl mx-auto lg:flex-row flex-col mt-[300px] lg:mt-10     ">
                <p className="font-bold text-2xl text-left w-1/2">
                Get your<br/> <span className="font-extrabold">Aerial Quote</span> 
                </p>
                <form className="p-4 flex gap-4 shadow-lg shadow-black/30 rounded-lg w-full">
                    <input className="text-lg text-gray-700 font-semibold bg-gray-50 border border-gray-300 w-full   rounded-sm  outline-none focus:border-orange-300 p-2" placeholder="Address" />
                        <button className="golden-gradient border border-black  text-black px-4 rounded-md " onClick={(e)=>{e.preventDefault();}}>
                            Submit
                        </button>
                </form>
            </div>

        </div>
    );
}