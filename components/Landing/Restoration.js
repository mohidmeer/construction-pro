import Image from "next/image";
import {BsFillHouseFill, BsTools} from 'react-icons/bs'
import {GiWindow} from 'react-icons/gi'
import { MdBathtub, MdCheck } from "react-icons/md";


export default function Restoration() {

    return (
        <>
        <div className=" w-full relative mt-20">
            <Image src={'/../assets/images/Image-Fixed.webp'} fill objectFit="cover" />
            <div className="w-full">
                <div className="max-w-6xl mx-auto  p-20 ">
                    <div className="flex lg:flex-row flex-col ">
                        <div className="w-full flex flex-col justify-end z-10">
                            <SectionTwo/>
                        </div>
                        <div className="w-full flex flex-col gap-8 z-10">
                            <SectionOne/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <div className="flex items-center gap-4">
                        <h1 className="text-[8rem] font-bold text-orange-200 z-10 ">
                            32000000
                        </h1>
                        <p className="text-2xl font-bold text-white z-10">
                             Nails Used* <br/><span className="text-lg ">Guesstimate* <br/> We dont count</span> 
                        </p>
                    </div>

                    </div>
                    
                </div>
            </div>
        </div>
        <Second/>
        </>
    );


}



export function SectionOne() {
    return (
        <>
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr   from-orange-300 to-orange-500 mb-4">---- Repair Services</p>
            <h3 className="text-white font-bold text-4xl text-center">Herts Construction Storm Restoration</h3>
            <p className="text-white text-lg">
                Herts Roofing & Construction has over 10 years of experience in roofing and home renovation. We are a company that specializes in restoring the interior and exterior of your home. We provide homeowners with peace of mind and effectively guide homeowners through the process of improving their homes. You can also count on our team to be here for you in the midst of a storm.<br />

                We are one of the only roofing companies in Cranford, NJ that specializes in insurance claims for natural disasters. We’re here to help you use your homeowner’s insurance to protect you to the fullest extent. You will never have to get caught off guard in an emergency situation because we are here for you!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="w-full relative h-20">
                    <Image src={'/../assets/awards/1.webp'} alt={'award'} layout='fill' objectFit='contain' />
                </div>
                <div className="w-full relative h-20">
                    <Image src={'/../assets/awards/2.webp'} alt={'award'} layout='fill' objectFit='contain' />
                </div>
                <div className="w-full relative h-20">
                    <Image src={'/../assets/awards/3.webp'} alt={'award'} layout='fill' objectFit='contain' />
                </div>

                <div className="w-full relative h-20">
                    <Image src={'/../assets/awards/5.webp'} alt={'award'} layout='fill' objectFit='contain' />
                </div>

            </div>
        </>

    )
}
export function SectionTwo() {
    return (
        <>
        <div className="flex items-center gap-4">
            <h1 className="text-[8rem] font-bold text-orange-200  ">
                10
            </h1>
            <p className="text-2xl font-bold text-white">
                % <br/> Increase in <br/> Property Value
            </p>
        </div>
        <div className="flex items-center gap-4 ml-24">
            <h1 className="text-[8rem] font-bold text-orange-200  ">
                2600
            </h1>
            <p className="text-2xl font-bold text-white">
                Happy <br/> Owners
            </p>
        </div>
            
        </>

    )
}

export function Second(){
    return(    
    <div className=" w-full relative ">
        <Image src={'/../assets/images/Image-Fixed2.webp'} fill objectFit="cover" className="-z-10   "  />
        <div className="w-full ">
                <div className="max-w-6xl mx-auto  ">      
                    <div className="flex flex-col p-20 h-full text-white border-b border-dashed border-orange-200  ">
                        <div className="w-full flex flex-col gap-10 justify-end ">
                            <h2 className="text-4xl font-bold mt-10">More Than Roofing..</h2>
                            <p className="max-w-2xl text-lg">In addition to being your local Roofing experts, we also pride ourselves on offering all types of home renovation & repair services. We are a full-service contractor, and can help you realize your remodeling aspirations!
                            <br/> We offer a wide variety of home remodeling services, including (but not limited to):</p>
                            <div className="grid grid-cols-7 gap-4">
                                <div className="border-r  border-orange-200 justify-center flex ">
                                   <div className="flex gap-2 flex-col ">
                                        <BsFillHouseFill size={64} className="text-orange-200" />
                                        <p className="font-bold text-center">Siding</p>
                                   </div>
                                </div>
                                <div className="border-r  border-orange-200 justify-center flex ">
                                   <div className="flex gap-2 flex-col ">
                                        <GiWindow size={64} className="text-orange-200" />
                                        <p className="font-bold text-center">Windows</p>
                                   </div>
                                </div>
                                <div className="border-r  border-orange-200 justify-center flex ">
                                   <div className="flex gap-2 flex-col ">
                                   <svg  className="fill-orange-200 text-[64px]" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z"></path><path fill-rule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clip-rule="evenodd"></path></svg>
                                        <p className="font-bold text-center">Gutters</p>
                                   </div>
                                </div>
                                <div className="border-r  border-orange-200 justify-center flex ">
                                   <div className="flex gap-2 flex-col ">
                                   <MdBathtub size={64} className="text-orange-200" />
                                        <p className="font-bold text-center">Interior</p>
                                   </div>
                                </div>
                                <div className="border-r  border-orange-200 justify-center flex ">
                                   <div className="flex gap-2 flex-col ">
                                   <BsTools size={64} className="text-orange-200" />
                                        <p className="font-bold text-center">Others</p>
                                   </div>
                                </div>
                                

                            </div>
                        
                        </div>
                    </div>
                    <div className="flex mt-10 text-white gap-20 ">
                        <div className="flex flex-col gap-4 justify-end h-full pl-10 w-full ">
                            <h2 className="text-3xl font-bold">How our team keeps you safe</h2>
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
                        <div className="p-8 bg-white w-full rounded-xl">
                            <h4 className="text-black text-3xl font-bold text-center">Book Your Free Inspection</h4>
                            <form className="flex-col mt-8">
                                <div className="mb-6 grid grid-cols-2 gap-4  ">
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="First Name" />
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Last Name" />
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Phone" />
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Email" />
                                        <input className="bg-gray-50 border col-span-2 border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Address" />
                                        <textarea  placeholder='Additional Comments' className="block p-2 w-full border border-orange-300 text-black col-span-2  "></textarea>
                                </div>
                                   <button className="w-full golden-gradient text-black text-2xl p-2 border-black border font-bold" onClick={(e)=>{e.preventDefault(); }}>
                                        Submit
                                    </button>
                            </form>

                        </div>
                        
                    </div> 
                                     
                </div>
            </div>
    </div>
    

    );
}