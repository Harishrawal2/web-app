import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    contact: '',
    message: '',
  });

  // const navigate = useNavigate();
  const router = useRouter();

  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    subject: '',
    contact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error message when user starts typing in the field
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendEmail = () => {
      emailjs
        .sendForm(
          'service_4ekfx4l',
          'template_oye2jdl',
          form.current,
          '3793yB6Y4x4U23SWz'
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
    if (!formData.fullName) {
      errors.fullName = 'Full Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.subject) {
      errors.subject = 'Subject is required';
    }
    if (!formData.contact) {
      errors.contact = 'Contact Number is required';
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
        router.push('/careers'); // Redirect to the careers page
      }, 5000); // 10 seconds in milliseconds
    }, 1000); // Simulate a delay
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="xl:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            Join Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed xl:text-xl lg:text-xl text-md">
            We're looking for a telented to join our team.
          </p>
        </div>
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-4 text-green-600">
              Thank you for applying !
            </h2>
            <p className="text-lg">
              Our Recruitment team will connect with you.
            </p>
          </div>
        ) : (
          <div className="lg:w-1/2 md:w-2/3 mx-auto text-xl">
            <form
              encType="multipart/form-data"
              method="post"
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-wrap -m-2"
            >
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                      formErrors.fullName ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-sm">
                      {formErrors.fullName}
                    </p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                      formErrors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="contact"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                      formErrors.contact ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.contact && (
                    <p className="text-red-500 text-sm">{formErrors.contact}</p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                      formErrors.subject ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-red-500 text-sm">{formErrors.subject}</p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-gray-900 border-2 py-2 px-16 focus:outline hover:bg-gray-900 hover:text-white rounded-[5px] text-lg transition duration-150 ease-in-out uppercase">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Form;
