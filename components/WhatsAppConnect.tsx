// WhatsAppConnect.js
import Link from 'next/link';
import React from 'react';

const WhatsAppConnect = () => {
    // Your WhatsApp phone number with country code
    const phoneNumber = '+917817837369';
    const message = 'Hello! I am interested in IT Courses';

    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <div>
            <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-md inline-block mt-4"
            >
                Chat on WhatsApp
            </Link>
        </div>
    );
};

export default WhatsAppConnect;
