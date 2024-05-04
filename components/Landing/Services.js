import { Tab, Transition } from "@headlessui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { residential, commercial, exterior } from "@/staticData";
import { useEffect, useState } from "react";
import commer from '@/public/images/commercial.jpg'


export default function Services() {

    function tabClasses(selected) {
        return `outline-none bg-[#3c3c3c] px-4 py-2 font-bold border  ${selected ? 'text-black bg-orange-200 ' : 'text-white'} `
    }

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);



    return (
        <div className=" container  mx-auto rounded-md mt-6 ">
            <h2 className="text-6xl font-extrabold text-center  p-8  " draggable='false' >Services</h2>
            <div className="w-full  mx-auto px-2 py-4 sm:px-0  grid md:grid-cols-2 ">
                <div>
                    <h3 className="text-4xl font-extrabold text-center p-8 text-primary  " draggable='false' >Residentail</h3>
                    <Residential services={residential} />
                </div>

                <div>
                    <h3 className="text-4xl font-extrabold text-center p-8  text-primary  " draggable='false' >Commercial</h3>
                    <Commercial services={commercial} />
                </div>

                <div className="col-span-2   ">
                    <h3 className="text-4xl font-extrabold text-center p-8 text-primary  " draggable='false' >Exterior</h3>
                    <Exterior services={exterior} />
                </div>


                {/* <Tab.Group>
                    <Tab.List className={`flex gap-4 justify-center`}>
                        <Tab className={({ selected }) => tabClasses(selected)}>Residentail</Tab>
                        <Tab className={({ selected }) => tabClasses(selected)}>Commercial</Tab>
                        <Tab className={({ selected }) => tabClasses(selected)}> &nbsp; Exteriors  &nbsp;</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel >
                            <Residential services={residential} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Commercial services={commercial} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Exterior services={exterior} />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group> */}
            </div>
            <div className="">
                <Inspection />

            </div>

        </div>
    );
}


function Residential({ services }) {
    return (
        <div className="w-full p-8 ">
            <Slider>
                {
                    services.map((r) => {
                        return (
                            <SwiperSlide key={r.id}>
                                <div className="w-full h-[600px]">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={r.image}
                                            alt="Residential Roofing"
                                            className="rounded-md brightness-75   "
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover"
                                            }} />
                                        <div className="absolute text-white bottom-2 p-8 max-w-sm">
                                            <p className="text-3xl font-bold">
                                                <span className="text-orange-300">0{r.id}.</span> {r.name}
                                            </p>
                                            <p className=" text-sm">
                                                {r.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })

                }
            </Slider>
        </div>
    );
}
function Commercial({ services }) {

    return (
        <div className="w-full p-8 ">
            <Slider>
                {
                    services.map((r) => {
                        return (
                            <SwiperSlide key={r.id}>
                                <div className="w-full h-[600px]">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={r.image}
                                            alt="Residential Roofing"
                                            className="rounded-md brightness-75   "
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover"
                                            }} />
                                        <div className="absolute text-white bottom-2 p-8 max-w-sm">
                                            <p className="text-3xl font-bold">
                                                <span className="text-orange-300">0{r.id}.</span> {r.name}
                                            </p>
                                            <p className=" text-sm">
                                                {r.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })

                }
            </Slider>
        </div>
    );
}
function Exterior({ services }) {

    return (
        <div className="w-full p-8 ">
            <Slider>
                {
                    services.map((r) => {
                        return (
                            <SwiperSlide key={r.id}>
                                <div className="w-full h-[600px]">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={r.image}
                                            alt="Residential Roofing"
                                            className="rounded-md brightness-75   "
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover"
                                            }} />
                                        <div className="absolute text-white bottom-2 p-8 max-w-sm">
                                            <p className="text-3xl font-bold">
                                                <span className="text-orange-300">0{r.id}.</span> {r.name}
                                            </p>
                                            <p className=" text-sm">
                                                {r.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })

                }
            </Slider>
        </div>
    );
}

function Slider({ children }) {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="whitespace-nowrap !bg-orange-300 gap-4 ' + className + '">' + '</span>';
        },
    };

    return (
        <Swiper pagination={pagination} modules={[Pagination]}>
            {children}
        </Swiper>

    )

}


function Inspection() {

    const reasons = [
        {
            id: 1,
            title: 'Know the condition of your roof',
            description: 'Most homeowners are completely unaware of the condition of their roof, and are caught off guard when roofing issues occur that can be costly.'

        },
        {
            id: 2,
            title: ' Assess if any damage exists',
            description: 'Weather and storm damage frequently cause minor issues, that go unnoticed, and cause big issues over time. Catch any potential issues early!'

        },
        {
            id: 3,
            title: 'Protect your home from pests',
            description: 'Small holes or rot in fascia boards and roofing underlayment is an invitation for pests, rodents, birds, and squirrels. Ensure that your roof is fully secure.'

        },
        {
            id: 4,
            title: 'Ensure proper drainage',
            description: 'Most homeowners are completely unaware of the condition of their roof, and are caught off guard when roofing issues occur that can be costly.'

        },
        {
            id: 5,
            title: 'Keep your family safe',
            description: 'A leaky roof can affect your home interior. Dripping water in ceilings and behind walls can lead to mold growth, electrical short circuits, or worse.'

        },

    ]


    return (
        <div className="text-white p-8">
            <div className=" relative w-full ">
                <Image
                    src={commer}
                    fill
                    alt="no"
                    className="brightness-[0.4]   "
                    style={{
                        maxWidth: "100%",
                        objectFit: "cover"
                    }} />
                <div className="p-8">

                    <div className="lg:flex-row flex-col flex">
                        <div className="flex flex-col gap-6 mt-10 ">
                            <div className="z-30">
                                <p className="font-semibold "><span className="text-orange-300 ">5 REASONS</span> TO GET A ROOF INSPECTION</p>
                                <h2 className="text-6xl font-extrabold underline z-40"><span className="text-orange-300">Roof</span> Inspection</h2>
                            </div>
                            {
                                reasons.map((r) => {
                                    return (
                                        <div key={r.id} className="flex flex-col gap-4 z-20">
                                            <p className="font-extrabold text-2xl max-w-md"><span className="text-orange-300">0{r.id}.</span>{r.title}</p>
                                            <p className="text-lg">{r.description}</p>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        <div className="border-2 border-orange-300 rounded-lg    w-full  border-dashed    mt-auto p-6 z-20">
                            <p className="text-2xl">Get Your <br /><span className="font-bold">Free Roof Inspection</span></p>
                            <form className="p-2 flex gap-4">
                                <input className="bg-gray-50 border border-gray-300 w-full  text-gray-900 text-sm rounded-sm  outline-none focus:border-orange-300 p-2" placeholder="Your Phone" />
                                <button className="golden-gradient border border-black  text-black px-4 rounded-md " onClick={(e) => { e.preventDefault(); }}>
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


