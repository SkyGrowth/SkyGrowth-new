"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const services = [
    {
      title: "How does SkyGrowth compare to a call handling service?",
      description:"Speed is the key! Traditional call-handling services can take up to 10 minutes to relay missed call details—plenty of time for your potential customer to reach out to a competitor. Call Catchers changes the game by sending a personalized message to the caller within seconds, keeping you one step ahead and securing that lead fast."
    },
    { title: "How does the missed call text service work?", description: "The moment you miss a call, our service instantly detects it and sends a tailored text message to the caller. This message can include key details about your business, an estimated callback time, or any other information you want to share—keeping your prospects informed and engaged from the start." },
    { title: "Can I customize the text message sent to callers?", description: "Absolutely! You have full control to customize the message sent to missed callers. This lets you tailor the content to fit your business perfectly—ensuring your customers receive clear, relevant, and helpful information every time." },
    { title: "Will I be notified of missed calls and the text messages sent to callers?", description: "Absolutely! With our software, you’ll receive instant notifications for missed calls, continue SMS conversations seamlessly, let clients leave voicemails, or even answer calls directly. This makes it easy to stay on top of follow-ups and track the effectiveness of your messages—all from one place." },
  ];

  const [openService, setOpenService] = useState(null);
  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <div className="w-full bg-white px-10 md:px-20 py-18 min-h-screen flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-black mb-20 leading-tight text-left">
        Commonly asked questions, answered.<br />
      </h2>

      {/* Services - Now using flexbox instead of absolute */}
      <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col gap-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`border-b border-gray-300 pb-4 transition-all ${
              openService === index ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            {/* Service Title + Toggle Button */}
            <div
              className="flex justify-between items-center cursor-pointer py-2 px-2 rounded-md transition-all"
              onClick={() => toggleService(index)}
            >
              <span>{service.title}</span>
              <motion.span
                className="text-blue-700"
                animate={{ rotate: openService === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>

            {/* Animated Dropdown Content - Full width */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openService === index ? "auto" : 0,
                opacity: openService === index ? 1 : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full overflow-hidden text-gray-600 mt-1 px-2 text-sm"
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: openService === index ? 1 : 0,
                  y: openService === index ? 0 : -10,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
