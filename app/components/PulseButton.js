
const PulseButton = () => {
  return (
    <div className="fixed bottom-[90px] right-0 mb-8 ml-8 z-20">
      <div className="pulse cursor-pointer
        font-bold
        px-6 py-3 
        bg-black
        text-white
        text-lg 
        rounded-lg 
        shadow-lg
        hover:scale-105 
        transform transition-transform duration-200 
        focus:outline-none 
        focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50
        active:bg-blue-600">
        Contact us
      </div>
    </div>
  )
}

export default PulseButton