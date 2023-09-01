import Image from "next/image";
import { useEffect, useState } from "react";
import { MdArrowBack, MdCheck } from "react-icons/md";
import ins from '@/public/images/Insurance/background.jpg'
export default function Insurance(){

    const [level,setLevel]=useState(1);
    useEffect(()=>{},[level])
    return (
        <div className="relative max-w-6xl mx-auto my-32 rounded-md">
           <Image
                    src={ins}
                    fill
                    alt="insurance"
                    className="brightness-[0.4]  -z-10  "
                    style={{
                        maxWidth: "100%",
                        objectFit: "cover"
                    }} />
            <div className=" text-white h-full ">
                <div className="lg:flex-row flex-col flex justify-between gap-10 h-full">
                    <div className="flex flex-col justify-end h-full pr-10 lg:pr-0 pl-10 pb-6 mt-24  lg:mt-12">
                        <h2 className="text-6xl font-bold">Need Insurance <br/> Claim Help?</h2>
                        <ul className="mt-4 flex-col flex gap-4  max-w-lg">
                            <div className="flex gap-2 items-start">
                                <div className="mt-1">
                                    <MdCheck size={20} className="bg-white rounded-full text-orange-300 " />  
                                </div>                  
                                <li>Our experts will walk you through your rights as a claimant and best practices on how to file your claim.</li>
                            </div>
                            <div className="flex gap-2 items-start">
                                <div className="mt-1">
                                    <MdCheck size={20} className="bg-white rounded-full text-orange-300 " />  
                                </div>                  
                                <li>Our experts will walk you through your rights as a claimant and best practices on how to file your claim.</li>
                            </div>
                            <div className="flex gap-2 items-start">
                                <div className="mt-1">
                                    <MdCheck size={20} className="bg-white rounded-full text-orange-300 " />  
                                </div>                  
                                <li>Our experts will walk you through your rights as a claimant and best practices on how to file your claim.</li>
                            </div>
                        </ul>
                    </div>
                    <form className="flex flex-col">
                        <div className="red-gradient p-4">
                         <h2 className="text-4xl font-bold text-center">INSURANCE CLAIM?​</h2>
                         <p className="text-center">Expert guidance through,<br/> <span className="font-bold">the Insurance Claim process</span></p>
                        </div>
                        <div className="border border-dashed border-orange-300 bg-white">
                            <div className="p-4 flex flex-col gap-3">
                                <h2 className="text-center text-red-500 text-4xl font-extrabold">SPEAK WITH<br/> AN EXPERT</h2>
                                <p className="text-center text-black font-extrabold ">ON INSURANCE CLAIMS</p>
                                <p className="text-xs leading-tight text-black text-center">Find out who’s responsible <br/> for the restoration costs</p>
                            </div>
                            <div className="p-8 bg-[#eae9e9]">
                               {
                                level===1 ?
                                <div className="mb-4">
                                    <textarea  placeholder='Hi, my question is' className="block p-2 w-full border border-orange-300 text-black  "></textarea>
                                </div> 
                                :
                                <>
                                <p className="mb-4 font-medium text-gray-900 dark:text-white">Your Contact Information</p>
                                <div className="mb-6 grid grid-cols-2 gap-4  ">
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Name" />
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Phone" />
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Email" />
                                </div>
                                
                                </>
                               }
                            </div>
                        </div>
                        {
                            level ===1 ? 
                                <>
                                    
                                    <button className="golden-gradient text-black text-2xl font-bold" onClick={(e)=>{e.preventDefault();setLevel(2) }}>
                                        Next Step
                                    </button>
                            
                                </> : 
                                <div className="flex items-center gap-2">
                                   <MdArrowBack className="text-2xl text-orange-300 cursor-pointer" onClick={(e)=>{e.preventDefault(); setLevel(level-1);}} />
                                   <button className="w-full golden-gradient text-black text-2xl font-bold" onClick={(e)=>{e.preventDefault(); }}>
                                        Submit
                                    </button>
                                </div>
                        }
                        
                    </form>
                    
                </div>
            </div>
            <h2 className="text-5xl text-white red-gradient font-extrabold absolute p-2 -top-6 lg:left-10">Storm Damage</h2>

        </div>
    );
}