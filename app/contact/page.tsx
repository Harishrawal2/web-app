"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import { useRouter } from 'next/navigation';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        contact: "",
        message: "",
    });

    const form = useRef();

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        subject: "",
        contact: "",
    });

    const router = useRouter()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear the error message when user starts typing in the field
        setFormErrors({ ...formErrors, [name]: "" });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const sendEmail = () => {
            emailjs
                .sendForm(
                    "service_rj2k9zq",
                    "template_tnfedzw",
                    form.current,
                    "oWBIy5UOeNv30sQex"
                )
                .then(
                    (result) => {
                        console.log(result);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        };
        const errors = {};

        // Check for required fields
        if (!formData.name) {
            errors.name = "Full Name is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        }
        if (!formData.subject) {
            errors.subject = "Subject is required";
        }
        if (!formData.contact) {
            errors.contact = "Contact Number is required";
        }

        // If there are errors, display them
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Simulate sending an email (for demonstration purposes)
        setTimeout(() => {
            sendEmail();
            setIsSubmitted(true);

            // Redirect to the careers page after 10 seconds
            setTimeout(() => {
                router.push("/"); // Redirect to the careers page
            }, 1000); // 10 seconds in milliseconds
        }, 1000); // Simulate a delay
    };

    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-0 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <Image className="absolute inset-0" src='/contact.jpg' alt='ContactImg' width={950} height={950} />
                        <div className="bg-gray-200 relative flex flex-wrap py-4 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Bareilly, Uttar Pradesh (India)</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">harish8126376269@gmail.com</a>
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 md:mt-0">
                        <h2 className="text-gray-900 text-2xl font-medium title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-2 text-gray-600 font-medium">If you want to buy any course and if you want to make any website and app then Send me a message</p>

                        {isSubmitted ? (
                            <div className="text-center">
                                <h2 className="text-4xl font-semibold mb-4 text-green-600">
                                    Thank you for sent Message!
                                </h2>
                                <p className="text-sm font-medium">
                                    We'll connect with you.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} ref={form} method='POST'>
                                <div className="relative">
                                    <input type="text" id="name" name="name" className={`w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-400 placeholder:font-medium ${formErrors.name ? "border-red-500" : ""
                                        }`} value={formData.name}
                                        onChange={handleInputChange} placeholder='Full Name' />
                                    {formErrors.name && (
                                        <p className="text-red-500 text-sm font-medium">
                                            {formErrors.name}
                                        </p>
                                    )}
                                </div>
                                <br />
                                <div className="relative">
                                    <input type="text" id="contact" name="contact" className={`w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-400 placeholder:font-medium ${formErrors.contact ? "border-red-500" : ""
                                        }`}
                                        value={formData.contact}
                                        onChange={handleInputChange} placeholder='Phone Number' />
                                    {formErrors.contact && (
                                        <p className="text-red-500 text-sm font-medium">
                                            {formErrors.contact}
                                        </p>
                                    )}
                                </div>
                                <br />
                                <div className="relative">
                                    <input type="email" id="email" name="email" className={`w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                                    placeholder:text-gray-400 placeholder:font-medium ${formErrors.email ? "border-red-500" : ""
                                        }`} value={formData.email}
                                        onChange={handleInputChange} placeholder='Email' />
                                    {formErrors.email && (
                                        <p className="text-red-500 text-sm font-medium">
                                            {formErrors.email}
                                        </p>
                                    )}
                                </div><br />
                                <div className="relative">
                                    <input type="subject" id="subject" name="subject" className={`w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-400 placeholder:font-medium ${formErrors.subject ? "border-red-500" : ""
                                        }`}
                                        value={formData.subject}
                                        onChange={handleInputChange} placeholder='Subject' />
                                    {formErrors.subject && (
                                        <p className="text-red-500 text-sm font-medium">
                                            {formErrors.subject}
                                        </p>
                                    )}
                                </div>
                                <div className="relative">
                                    <br />
                                    <textarea id="message" name="message" className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:text-gray-400 placeholder:font-medium"
                                        value={formData.message}
                                        onChange={handleInputChange} placeholder='Write a message...'></textarea>
                                </div>
                                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-medium">Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
