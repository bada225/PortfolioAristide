import Footer from "../Footer"

const Contact = ({ dark }) => {
  return (
    <div id="contact"> 
    <div className='mt-19 flex flex-col items-center mb-[50px]'>
      <p className=' text-4xl md:text-8xl text-center font-bold mb-6'>parlons-en !</p> 

      <a
        href="mailto:badaaristide02@gmail.com"
        className={`
          mt-3 flex justify-center p-7 text-xl rounded-full transition
          ${dark 
            ? 'bg-white text-black hover:bg-gray-200' 
            : 'bg-black text-white hover:bg-gray-800'}
        `}
      >
        badaaristide02@gmail.com
      </a>
    </div>
    <div className="w-full h-1 bg-gray-300 mt-5"></div>
    <Footer/>
    </div>
  )
}

export default Contact
