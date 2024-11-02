import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input type="text" className="mt-1 p-2 border w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" className="mt-1 p-2 border w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea className="mt-1 p-2 border w-full" rows="4"></textarea>
      </div>
      <button type="submit" className="bg-black text-white py-2 px-4 rounded-md">Send Message</button>
    </form>
  );
};

export default ContactForm;
