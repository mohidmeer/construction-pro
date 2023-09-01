import Image from "next/image";
import Subtitle from "../Commons/Subtitle";
import { LiaBuildingSolid } from "react-icons/lia";
import { FaStore } from "react-icons/fa";
import { BiBuildingHouse, BiBuildings } from "react-icons/bi";
import comm from 'public/images/Commercial.jpg'

export default function Commercial() {
    return (
        <div className=" w-full relative ">
            <Image
                src={comm}
                fill
                alt="commercial"
                className="-z-10  brightness-[0.4] "
                style={{
                    maxWidth: "100%",
                    objectFit: "cover"
                }} />
            <div className="max-w-6xl mx-auto p-10">
                    <div className="md:w-1/2 text-white " >
                        <Subtitle text={'Commercial Roofing'}/>
                        <h2 className="text-6xl font-bold text-white ">Commercial <br/>Roofing  <span className=" ">services</span></h2>
                        <div className="flex-col flex gap-10 text-lg mt-10 text-white">
                                <p className="leading-8   ">
                                        Commercial roofing is an important consideration for any business 
                                        or property, so it’s important that you hire a professional with the experience to get the job done right.
                                </p>
                                <p className="leading-8   ">
                                With over 30 years of commercial experience. we can get the job done quickly, efficiently, and even on the weekends if necessary.
                                </p>
                                <p className="leading-8">
                                    We offer a variety of commercial roofing services including (but not limited to):
                                </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 p-4">
                            <div className="flex items-center gap-4">
                                <LiaBuildingSolid size={52} className="text-orange-200"/>
                                <p className="font-bold">Commercial Buildings</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaStore size={52} className="text-orange-200"/>
                                <p className="font-bold">Retail Stores</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <BiBuildingHouse size={52} className="text-orange-200"/>
                                <p className="font-bold">Flats</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <BiBuildings size={52} className="text-orange-200"/>
                                <p className="font-bold">Condominiums</p>
                            </div>
                           

                        </div>
                        <div>
                            <button className="w-full text-hover-effect golden-gradient text-black text-2xl p-2 border-black border font-bold" onClick={(e)=>{e.preventDefault(); }}>
                                Get A Commercial Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
} 