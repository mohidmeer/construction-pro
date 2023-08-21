import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { BiPurchaseTag } from "react-icons/bi";
import { MdCategory, MdRoofing, MdUpdate } from "react-icons/md";

export default function EmergencyRepair(){
    return(
        <div className="max-w-6xl mx-auto mt-20">
            <div className="flex mt-8 gap-20 ">
                    <div className="w-full">
                        <Slider/>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <h4 className="font-extrabold text-2xl">New Roof Installation</h4>
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

        </div>
    );
}



function Slider(){

    return(
    
         <ReactCompareSlider 
         itemOne={<ReactCompareSliderImage src="/../assets/images/before-2.webp" srcSet="/../assets/images/before-2.webp" alt="Image one" />}
         itemTwo={<ReactCompareSliderImage src="/../assets/images/after-2.webp" srcSet="/../assets/images/after-2.webp" alt="Image two" />}
                    
    />

    )
}