import Image from "next/image";
import Subtitle from "../Commons/Subtitle";
import fimg from '@/public/images/commercial.jpg'
import Link from "next/link";

export default function Footer({form=true}){
    return (
        <div className=" w-full relative ">
            <Image
                src={fimg}
                fill
                alt="footerimage"
                className="-z-10  brightness-[0.4] "
                style={{
                    maxWidth: "100%",
                    objectFit: "cover"
                }} />
            <div className="flex flex-col  justify-center">
                <div className="mx-auto max-w-5xl flex lg:flex-row flex-col justify-between">
                    <div className="text-white mt-32 ">
                        <Subtitle text={'Host Building Group & Construction'}/>
                        <h2 className="text-6xl font-bold text-white">Our <span className=" red-gradient px-2">Promise</span></h2>
                        <p className="w-2/3 mt-10 text-lg">At Host Building Group & Construction, our mission is to provide the highest level of professionalism and customer service to all of our customers. We stay on budget, and complete projects on time.</p>
                    </div>
                  {form ? 
                  <form className="flex-col  w-full bg-white p-10 rounded-2xl lg:mt-8 mt-20">
                        <p className="text-3xl font-bold my-8">Drop a Line</p>
                        <div className="mb-6 grid grid-cols-2 gap-4  ">
                                <textarea  placeholder='Message' className="block p-2 w-full border border-orange-300 text-black col-span-2  "></textarea>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="First Name" />
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Last Name" />
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Phone" />
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Email" />
                                <input className="bg-gray-50 border col-span-2 border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Address" />
                              
                        </div>
                            <button className="w-full golden-gradient text-black text-2xl p-2 border-black border font-bold" onClick={(e)=>{e.preventDefault(); }}>
                                Submit
                            </button>
                    </form> : <div className="flex-col  w-full h-[500px]" ></div>}
                </div>
            </div>
            <footer className="shadow mt-4 bg-green-900  dark:bg-gray-800 text-white">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center ">© 2023 <Link href={'/'}  className="hover:underline">HostbuildingGroup</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0">
                    <li>
                        <Link href={'/'}  className="mr-4 hover:underline md:mr-6 ">Home</Link>
                    </li>
                    <li>
                        <Link href="/Linkbout-us" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link href="/contact-us" className="hover:underline">Contact</Link>
                    </li>
                    
                </ul>
                </div>
            </footer>
        </div>
    );
}