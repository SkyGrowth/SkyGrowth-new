import ROICalculator from "./RoiCalc";

const RoiSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center p-3 bg-white"> {/* <-- Reduced gap between left and right section */}
      
      {/* Left Side - Calculator */}
      <div className="flex-1 p-4 mt-2 flex justify-center">
        <div className="w-[90%] max-w-[450px]"> {/* <-- Controls calculator width */}
          <ROICalculator />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="flex-1 p-4 mt-20 max-w-[900px] mr-12 font-light text-xl"> {/* <-- Adjusted padding on right section */}
        <h2 className="text-3xl font-bold text-gray-800 leading-tight">
          Don’t miss out on what’s rightfully yours
        </h2>
        <p className="mt-3 text-lg text-gray-700 leading-loose">
          Every missed call is{" "}
          <span className="font-semibold text-gray-900">
            potential revenue slipping through the cracks
          </span>
          —but it doesn’t have to be. See exactly how much those unanswered
          calls are costing you in lost sales.
        </p>
        <div className="mt-5 text-left space-y-4">
          <p className="flex items-start text-gray-700 text-lg">
            ✅{" "}
            <span className="ml-2">
              Enter the{" "}
              <span className="font-semibold">average lifetime value</span> of a
              customer.
            </span>
          </p>
          <p className="flex items-start text-gray-700 text-lg">
            ✅{" "}
            <span className="ml-2">
              Estimate how many{" "}
              <span className="font-semibold">calls you miss per month.</span>
            </span>
          </p>
          <p className="flex items-start text-gray-700 text-lg">
            ✅{" "}
            <span className="ml-2">
              Input your{" "}
              <span className="font-semibold">close rate on new sales.</span>
            </span>
          </p>
          <p className="flex items-start text-gray-700 text-lg">
            ✅{" "}
            <span className="ml-2">
              <span className="font-semibold">Hit Calculate</span>—and see how
              much revenue your leaving behind!
            </span>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default RoiSection;
