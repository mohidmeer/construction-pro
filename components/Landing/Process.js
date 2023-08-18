import Image from "next/image";

export default function Process() {

    return (

        <div className="relative h-[70vh] mx-auto my-40">
            <Image src={'/../assets/images/shinglework.jpg'} objectFit="cover" fill className=" brightness-50 " />
            <div className="absolute h-full w-full   ">
                <div className="mx-auto max-w-6xl h-full">
                    <div className="flex flex-col mt-40 h-full gap-20">
                        <div>
                            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr   from-orange-300 to-orange-500 mb-4">---- Our Process</p>
                            <h2 className="text-6xl font-bold text-white">5 Easy <span className="shadow-white/50 shadow-xl red-gradient px-2">steps</span></h2>
                        </div>
                        <div className="bg-white p-8 w-1/3">
                            <div className="flex gap-4">
                                <h2 className="text-red-600 text-5xl  font-bold">1</h2>
                                <p className="text-2xl font-bold">Request a free <br /> inspection</p>
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

    );

}