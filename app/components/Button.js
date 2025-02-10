'use client';
const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
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
        active:bg-blue-600
        "
    >
      {label}
    </button>
  );
}

export default Button;
