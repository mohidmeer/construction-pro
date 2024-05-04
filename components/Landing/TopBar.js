import { FaPhoneAlt } from "react-icons/fa";


export default function TopBar() {
    return (
      <div className='blue-gradient hidden lg:block'>
        <div className='max-w-6xl flex justify-between items-center mx-auto  '>
          <p className='text-white font-bold text-hover-effect p-3  '>
          Proud Installer of GAF Timberline Shingles - Click Here to See our Shingle Guide
          </p>
          <div className='golden-gradient py-2 px-10 '>
            <button className='flex items-center justify-center gap-2 text-black hover:text-white transition-all duration-300  '>
              <FaPhoneAlt className='text-2xl' />
              <p className='font-bold text-2xl'>561-830-8252</p>
            </button>
          </div>
        </div>
      </div>
    )
  }

