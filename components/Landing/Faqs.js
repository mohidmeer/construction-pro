export default function Faqs() {
    return (
        <div className="max-w-6xl blue-gradient mx-auto rounded-xl mt-20 ">
            <div className="py-20 w-3/4 mx-auto ">
                <div className="flex gap-8 text-white items-center">
                    <div className="border-r px-10 border-dashed border-orange-200">
                        <h2 className="font-bold text-[80px] text-orange-200 ">FAQs</h2>
                    </div>
                    <p>
                        Here you’ll find a compilation of the most frequently asked questions. If there’s something you want to know which isn’t here, please send an email to <span className="underline">info@hertsroofingnj.com</span>
                    </p>
                </div>
                <div className="flex flex-col gap-4 mt-20">
                    <Question className='mr-auto'/>
                    <Question className='ml-auto'/>
                    <Question className='mr-auto'/>
                    <Question className='ml-auto'/>
                    <Question className='mr-auto'/>
                    
                </div>
                <div className="flex justify-center mt-20 text-white items-center gap-4">
                    <p className="font-bold">Have Another Question</p>
                    <button className="golden-gradient text-black font-bold px-4 py-2">Send Message</button>

                </div>
            </div>

        </div>
    )
}

function Question({className}) {
    return (
        <div className={`${className} border border-dashed border-orange-200 border-orange p-4 lg:w-1/2 rounded-xl flex flex-col gap-4`}>
            <p className="font-bold text-orange-200">HOW LONG DOES A ROOF INSTALLATION TAKE?</p>
            <p className="text-white">A complete roof installation including removing the old roof, reparing any damaged areas, and installing the new roofing system typiclly takes one to two days from start to finish Click here.</p>
        </div>
    )
}