import React from 'react';
import ContentContainer from './TextContent';
import ContactForm from './ContactForm';
import { FaEnvelope, FaLocationDot, FaPhone, FaSquarePhone, faPhone} from 'react-icons/fa6';

const ContactSection = () => {
  return (
    <div className="flex bg-white px-32 overflow-hidden">
      <div className='max-w-[700px] px-14 py-14 mt-10'>
        <ContentContainer
          topperText="CONTACT US"
          titleText="Get in touch"
          paragraphText="Ready to get started? Simply give us a call, and if we’re unable to pick up, we’ll automatically send you a text to follow up. We’ll make sure to get back to you as soon as possible—usually within the same day. Whether it’s an urgent question or just to connect, we’re here to help!"
        />
         
        <div className="space-y-6 pl-8 mt-1 text-lg flex flex-col">
          {/* Phone Section */}
          <div className="flex items-center gap-3">
            <FaPhone className='size-9 border border-black rounded-full p-2 transition-transform duration-300 hover:scale-110'/>
            <div className="flex flex-col">
              <span className='font-bold text-sm font-body'>PHONE</span>
              <span className='text-gray-600 text-sm font-light'>07456554489</span>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center gap-3">
            <FaEnvelope className='size-9 border border-black rounded-full p-2 transition-transform duration-300 hover:scale-110'/>
            <div className="flex flex-col">
              <span className='font-bold text-sm font-body'>EMAIL</span>
              <span className='text-gray-600 text-sm font-light'>skygrowthdesign@gmail.com</span>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex items-center gap-3">
            <FaLocationDot className='size-9 border border-black rounded-full p-2 transition-transform duration-300 hover:scale-110'/>
            <div className="flex flex-col">
              <span className='font-bold text-sm font-body'>AREAS SERVED</span>
              <span className='text-gray-600 text-sm font-light'>UK & Ireland</span>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
