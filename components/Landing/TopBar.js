import { FaPhoneAlt } from "react-icons/fa";


export default function TopBar({locale}) {
    return (
      <div className='blue-gradient hidden lg:block'>
        <div className='max-w-6xl flex justify-between items-center mx-auto  '>
          <p className='text-white font-bold text-hover-effect p-3  '>
            {locale.topBarMessage}
          </p>
          <div className='golden-gradient py-2 px-10 '>
            <button className='flex items-center justify-center gap-2 text-black hover:text-white transition-all duration-300  '>
              <FaPhoneAlt className='text-2xl' />
              <p className='font-bold text-2xl'>{locale.contactNumber}</p>
            </button>
          </div>
        </div>
      </div>
    )
  }

