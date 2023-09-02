import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Fade, Slide,} from "react-awesome-reveal";
import proc from '@/public/images/shinglework.jpg'
import res from '@/public/images/residentialRoofing.jpg'
export default function Process() {

    return <>
    <div className="relative h-[70vh] mx-auto my-40">
        <Image
            src={proc}
            fill
            alt="process"
            className=" brightness-50 "
            style={{
                maxWidth: "100%",
                objectFit: "cover"
            }} />
        <div className="absolute h-full w-full   ">
            <div className="mx-auto max-w-6xl h-full">
                <div className="flex flex-col mt-40 h-full gap-20">
                    <div>
                        <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr   from-orange-300 to-orange-500 mb-4">---- Our Process</p>
                        <h2 className="text-6xl font-bold text-white whitespace-nowrap">5 Easy <span className="shadow-white/50 shadow-xl red-gradient px-2">steps</span></h2>
                    </div>
                    <div className="bg-white p-8 lg:w-1/3">
                        <div className="flex gap-4">
                            <h2 className="text-red-600 text-6xl  font-bold">1</h2>
                            <p className="text-2xl font-bold whitespace-nowrap">Request a free <br /> inspection</p>
                        </div>
                        <form>
                            <div className="my-4">
                                <textarea placeholder='I need Help With' className="block p-2 w-full border border-orange-300 text-black  "></textarea>
                            </div>
                            <p className="mb-4 font-medium text-gray-900 dark:text-white">Your Contact Information</p>
                            <div className="mb-6 grid grid-cols-2 gap-4  ">
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Name" />
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Phone" />
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-orange-300    p-2" placeholder="Your Email" />
                            </div>
                            <p className="mb-4 font-medium text-gray-900 dark:text-white">Attach Photos If any</p>
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" class="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0  file:text-sm file:font-semibold
                                    file:bg-orange-100 file:text-or hover:file:bg-orange-200"/>
                            </label>
                            <button className="border border-black text-black golden-gradient w-full p-2 rounded-md font-bold mt-4">
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div className="flex justify-center mx-auto max-w-6xl mt-32">
            <Animation/>
        </div>
    </div>
    </>;

}



function Animation(){

    return(
        <div className="flex flex-col w-full mt-20 ">
            <div className="rounded-full bg-gray-100 flex flex-col items-center relative mr-auto ">
                <Slide >
                    <AnimationItem/>
                </Slide>
            </div>
            <div className="rounded-full bg-gray-100 flex flex-col items-center relative mx-auto ">
                <Slide direction="right">
                    <AnimationItem textAlign="lg:-left-52 -left-32   top-8" number={3} text="Proposal"/>
                </Slide>
            </div>
            <div className="rounded-full bg-gray-100 flex flex-col items-center relative ml-auto   ">
                <Slide>
                    <AnimationItem textAlign="lg:-left-56 -left-36     top-8" number={4} text="Remove Old Shingles"/>
                </Slide>
            </div>
            <div className="rounded-full bg-gray-100 flex flex-col items-center relative mx-auto ">
                <Slide>
                    <AnimationItem textAlign="-left-36 lg:-left-52 top-8" number={5} text="Install New"/>
                </Slide>
            </div>
           
            

        </div>
    );
}



// function Animation(){
//     return(
//     <div className={`h-[70vh] w-full p-2 mt-10 relative `}>
//         <Fade>
//             <AnimationItem/>
//         </Fade>
//         <Fade>
//             <AnimationItem alignment="right-10 top-10" textAlign="-bottom-64 -left-10" text="Proposal" number={3}/>
//         </Fade>
//         <Fade>
//             <AnimationItem alignment="left-10 bottom-10" textAlign="-right-56 -bottom-32" text="Remove Old Shingles" number={4}/>
//         </Fade>
//         <Fade>
//             <AnimationItem alignment="right-32 bottom-1" textAlign="-left-52" text="Install New Roof" number={5}/>
//         </Fade>
//     </div>
//     );
// }

// function AnimationItem({alignment = 'top-28 left-72',textAlign='-top-28',text='Roof Inspection',number=2}){
//     return(
//         <div className={`${alignment} absolute  bg-black p-8 rounded-full h-52 w-52 shadow-xl shadow-black/30`} >
//             <Image src={'/../assets/images/residentialRoofing.jpg'} fill objectFit="cover" className="rounded-full" />
//             <div className="relative">
//                 <div className={`absolute ${textAlign} `}>
//                     <div className="flex gap-2 items-center">
//                         <h2 className="text-6xl font-bold text-secondary">{number}</h2>
//                         <h2 className="text-2xl font-bold text-black w-36 ">
//                             {text}
//                         </h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
function AnimationItem({textAlign='-right-56',text='Roof Inspection',number=2}){
    return (
        <div className={` bg-black p-8 rounded-full lg:h-52 lg:w-52 w-36 h-36   shadow-xl shadow-black/30`} >
        <Image
            src={res}
            fill
            className="rounded-full"
            alt="res"
            style={{
                maxWidth: "100%",
                objectFit: "cover"
            }} />
        <div className="relative">
            <div className={`absolute ${textAlign} `}>
                <div className="flex gap-2 items-center">
                    <h2 className="lg:text-6xl font-bold text-secondary">{number}</h2>
                    <h2 className="lg:text-2xl font-bold text-black w-36 ">
                        {text}
                    </h2>
                </div>
            </div>
        </div>
    </div>
    );
}