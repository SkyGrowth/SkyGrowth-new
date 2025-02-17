const SectionLine = ({ text }) => {
  return (
    <div className="flex items-center space-x-2 py-24">
      <div className="w-10 h-[2px] bg-black"></div>
      <h1 className="text-black text-2xl font-light">
        {text}
      </h1>
    </div>
  );
};

export default SectionLine;
