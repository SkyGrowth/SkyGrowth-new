const PulseButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-20">
      <div className="pulse cursor-pointer
        font-base
        px-6 py-3 
        bg-blue-700
        text-white
        text-lg 
        rounded-full 
        shadow-sm
        tracking-wide
        hover:scale-105 
        transform transition-transform duration-100 
        focus:outline-none 
        focus:ring-1 focus:ring-white focus:ring-opacity-100
        active:bg-white"
        >
        Contact us
      </div>
    </div>
  )
}

export default PulseButton
