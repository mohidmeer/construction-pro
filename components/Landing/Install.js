import Image from "next/legacy/image";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import {BiPurchaseTag } from "react-icons/bi";
import {GrInstall } from "react-icons/gr";
import { MdCategory, MdRoofing, MdUpdate } from "react-icons/md";

export default function Install(){
    return(
        <div className="w-full brown-gradient my-20 max-w-6xl mx-auto">
            <div className="flex justify-between  p-8 ">
                <div className="w-full">
                    <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr   from-orange-300 to-orange-500 mb-4">---- Install to protect</p>
                    <h2 className="text-6xl font-bold text-white">Install <span className="red-gradient px-2">to protect</span></h2>
                   <div className="flex flex-col gap-4 text-white text-xl mt-4">
                    <p>As your local roofing professionals, we are licensed and certified. We install the best rated roofing shingle system to protect your home with high-level quality and performance over the years.</p>
                        <p>That’s why our roofing services come with a lifetime warranty.</p>
                        <p>Here are a few common signs that it may be time to upgrade to a new roof:</p>
                        <p>
                            – Water Spots<br/>
                            – Damp or Rotted Areas<br/>
                            – Missing Shingles<br/>
                            – Blackish Algae<br/>
                            – Defective Shingles
                        </p>
                   </div>
                </div>
                <div className="w-full relative">
                        <Image src={'/../assets/images/shingle.webp'} width={1000} height={1000} alt="shingle" className="absolute left-24 top-16 "/>
                </div>
            </div>
            <div className="p-8 bg-[#eff3f7] ">
                <div className="flex items-center justify-center mt-20 gap-4 mb-10">
                    <h2 className="text-6xl font-bold text-center">Install... </h2>
                    <h2 className=" text-6xl font-bold text-center red-gradient p-2 text-white -skew-y-3 ">to Impress!</h2>
                </div>
                <div className="flex mt-8 gap-20 ">
                    <div className="w-full">
                        <Slider/>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <h4 className="font-bold text-2xl">New Roof Installation</h4>
                        <p className="text-lg   font-extralight">John A. bought a new home in a great area, however the roof had not been replaced in a few decades!</p>
                        <p className="text-lg font-extralight">It was showing severe signs of age, and he noticed some water stains on the ceilings, so he knew it was time for a new roof. Our crew started removing the old roofing shingles at 8am ,<span className="font-bold"> and were finished installing the new roof by 3pm.</span> </p>
                        <div className="p-8  bg-[#f1f1f1] shadow-2xl rounded-md">
                            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr   from-orange-300 to-orange-500 mb-4">JOB DETAILS</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex gap-2 items-center">
                                     <BiPurchaseTag className="text-orange-300" size={20} />
                                    <div>
                                        <p className="font-bold">APRX. COST</p>
                                        <p>$8-11K</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                     <MdCategory className="text-orange-300" size={20} />
                                    <div>
                                        <p className="font-bold">Type</p>
                                        <p>Open Gable</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                     <MdUpdate className="text-orange-300"  size={20} />
                                    <div>
                                        <p className="font-bold">INSTALL TIME</p>
                                        <p>1 Day</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                     <MdRoofing className="text-orange-300" size={20} />
                                    <div>
                                        <p className="font-bold">SHINGLES</p>
                                        <p>GAF Architectual</p>
                                    </div>
                                </div>
                               

                            </div>

                        </div>
                    </div>
                    
                </div>
                <div className="flex gap-20  mt-20 ">
                    <div className="relative">
                        <div className=" h-[300px] w-[600px]">
                             <Image src={'/../assets/images/shingleGuide.webp'} className=""  height={300} width={700} alt="guide"/>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h3 className="text-2xl">Download our free<br/><span className="font-bold">Roofing Shingles Guide </span> </h3>
                        <button className="p-4 golden-gradient font-bold text-xl border border-black hover:brightness-90">
                            Download 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Slider(){

    return(
    
         <ReactCompareSlider 
         itemOne={<ReactCompareSliderImage src="/../assets/images/before-2.webp" srcSet="/../assets/images/before-2.webp" alt="Image one" />}
         itemTwo={<ReactCompareSliderImage src="/../assets/images/after-2.webp" srcSet="/../assets/images/after-2.webp" alt="Image two" />}
                    
    />

    )
}