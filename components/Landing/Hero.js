import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {MdArrowBack} from "react-icons/md"

export default function Hero({ children ,locale}) {
    return (
        <div className="relative h-[800px]  lg:h-[600px]  bg-center bg-cover bg-no-repeat p-4">
            <div className="absolute  inset-0 bg-[url('../public/assets/images/hero.jpg')] bg-center bg-cover bg-no-repeat brightness-50"></div>
            <div className="relative h-full">
                {children}
                <div className=" max-w-6xl mx-auto my-16 ">
                    <div className="flex flex-col lg:flex-row justify-between w-full ">
                        <div >
                            <Cta locale={locale}/>
                        </div>
                        <div className="flex-col gap-4 flex" >
                            <div>
                                <p className="text-white font-bold text-3xl text-left lg:text-center my-10">0% interest <br/>  & Easy payment</p>
                            </div>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Cta({locale}){
    return (
        <div className="flex flex-col gap-4 max-w-[450px] ">
            <p className="text-transparent bg-clip-text golden-gradient font-bold ml-auto ">New Jersey Trusted Roofing Contractor</p>
            <p className="text-white text-4xl leading-snug lg:text-5xl font-extrabold lg:leading-snug">Protecting what<br/> matters <span className="red-gradient"> the most</span> </p>
            <p className="text-white mt-2 md:block hidden">Whether you&#39;re in need of a full roof replacement or a roof  repair, you can count on our expert team to get the job done.</p>
            <div className="flex justify-center md:justify-between">
                <Link href={'#cta'} className="p-4 golden-gradient w-1/2 rounded-lg text-center hidden  md:block  ">
                    <span className="font-extrabold text-2xl">GET A QUOTE</span>
                    <p className="text-xs font-bold">Within 15 minutes</p>
                </Link>
                <div className="text-white">
                    <p>Or Just <span className="font-extrabold">Text Or Call</span> </p>
                    <div className="flex gap-2 items-center mt-2 cursor-pointer group relative ">
                        <FaPhoneAlt className='text-2xl text-white group-hover:text-orange-300 font-bold '/>
                        <p className="golden-gradient bg-clip-text group-hover:text-transparent font-bold text-2xl ">{locale.contactNumber}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

function Form(){

    const [level,setLevel]=useState(1);
    useEffect(()=>{},[level])

    return (
        <div>
            <div className="max-w-sm shadow-md relative ">
               
                <p className="text-white font-bold text-center red-gradient p-1 ">Get a new roof now <br/> & <span className="underline">delay the payments!</span></p>
                <form className="bg-white p-8">
                {level ===1 ?  
                    <>
                    <label  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">What type of roof project are you interested in?</label>
                    <select id="countries" className="mb-2 border border-gray-300  text-sm rounded-md focus:border-orange-300  block w-full p-2 outline-none  ">
                        <option defaultValue={'New Roof'}>New Roof</option>
                        <option value="US">Roof Replacement</option>
                        <option value="CA">Roof Repair</option>
                        <option value="FR">Strom Damange</option>
                        <option value="DE">Siding</option>
                        <option value="rE">Gutter Replacement</option>
                        <option value="rE">Others</option>
                    </select>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Would you like to get financing?</label> 
                    <div className="flex items-center mb-4">
                        <input defaultChecked  type="radio" value="" name="default-radio" className="w-4 h-4 accent-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 "/>
                        <div className="ml-2 ">
                            <label  className="text-sm font-medium text-gray-900 dark:text-gray-300">Yes, please</label>
                            <p className="text-gray-400 text-sm  ">(we’ll send you financing info)</p>
                        </div>                        
                    </div>
                    <div className="flex items-center mb-4">
                        <input  type="radio" value="" name="default-radio" className="w-4 h-4 accent-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 "/>
                        <div className="ml-2">
                            <label  className="text-sm font-medium text-gray-900 dark:text-gray-300">No, I just need an estimate</label>
                            <p className="text-gray-400 text-sm  ">(speak with a roofing pro)</p>
                        </div>                      
                    </div>
                    <p className="border-b-2 border-dashed   border-gray-300 mb-4"></p>
                    <button className="golden-gradient border border-black w-full text-xl font-extrabold rounded-md p-2" onClick={(e)=>{e.preventDefault();setLevel(level+1)}}>
                        Get Your Roof Offer
                    </button>
                    </> :
                    <>
                    <p className="mb-4 font-medium text-gray-900 dark:text-white">Your Contact Information</p>
                    <div className="mb-6 grid grid-cols-2 gap-4  ">
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Name" />
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Phone" />
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Any Comments About your project</label>
                        <textarea  className="block p-2 w-full border border-orange-300 "></textarea>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                    <MdArrowBack className="text-2xl text-orange-300 cursor-pointer" onClick={(e)=>{e.preventDefault(); setLevel(level-1);}} />
                    <button className="golden-gradient border border-black w-full text-xl font-extrabold rounded-md p-2" onClick={(e)=>{e.preventDefault();}}>
                        Submit
                    </button>
                    </div>

                    </>
                }
               
                </form>
                

            </div>
        </div>
    )
}