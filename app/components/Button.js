'use client';
const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-blue-700 text-white px-4 py-3 md:text-base hover:brightness-125 rounded-lg flex items-center space-x-2 transition-all tracking-tight duration-300 font-body"
    >
      {label}
    </button>
  );
}

export default Button;

{/* <div className="mt-5 flex gap-4">
        <button className="flex px-8 py-5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Free 7 Day Trial
          <div className="py-1 pl-2">
          </div>  */}
