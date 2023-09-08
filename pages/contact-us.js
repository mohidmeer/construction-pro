import { Footer, Hero, NavBar, Services, TopBar } from "@/components/Landing";
import About from "./about-us";
import Head from "next/head";
import { Md30Fps, MdBook, MdMail, MdPhone } from "react-icons/md";
const locale = await import(`../locales/en.json`);
export default function Contact() {
    return (
        <>
            <Head>
                <title>{'Contact Us'}</title>
                <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta property="og:image" content={ogimgurl} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" /> */}
                <meta property="og:title" content={'Contact Us'} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'Contact Us'} />
                <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta name="twitter:image" content={ogimgurl} /> */}
            </Head>
            <div className='md:p-0 p-2'>
                <TopBar locale={locale} />
                <Hero locale={locale} form={false}  >
                    <NavBar locale={locale} />
                </Hero>
                <ContactForm />
                <Footer form={false} />
            </div>
        </>
    );
}


function ContactForm() {

    return (
        <div className="mx-auto max-w-6xl  flex   lg:flex-row md:flex-row flex-col  ">
            <section className="flex flex-col justify-center gap-8">
                <div className="flex justify-center items-center">
                   <div className=" p-4 rounded-lg border">
                        <div className="flex flex-col items-center">
                            <MdPhone size={50} className="bg-green-900 rounded-full text-white p-2"/>
                            <p className="font-bold">0345383369</p>
                        </div>
                   </div>
                </div>
                <div className="flex justify-center items-center">
                   <div className=" p-4 rounded-lg border">
                        <div className="flex flex-col items-center">
                            <MdMail size={50} className="bg-green-900 rounded-full text-white p-2"/>
                            <p className="font-bold">0345383369</p>
                        </div>
                   </div>
                </div>
                
                <div className="flex justify-center items-center">
                   <div className=" p- rounded-lg border">
                        <div className="flex flex-col items-center justify-center text-center">
                            <MdBook size={50} className="bg-green-900 rounded-full text-white p-2"/>
                            <p className="font-bold">South Florida Palm Beach County</p>
                        </div>
                   </div>
                </div>
            </section>
            <section class="bg-white dark:bg-gray-900 w-full">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Let’s chat and get a quote!.</p>
                    <form action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder="name@gmail.com" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder="Let us know how we can help you" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                    </form>
                </div>
            </section>

        </div>
    );
}