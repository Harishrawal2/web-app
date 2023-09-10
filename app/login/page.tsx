"use client"

import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');


    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
        validateForm(value, password);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value);
        validateForm(email, value);
    };

    const validateForm = (emailValue: string, passwordValue: string) => {
        // Check if both email and password are not empty
        if (emailValue.trim() !== '' && passwordValue.trim() !== '') {
            setIsSubmitDisabled(false);
            setEmailError('');
            setPasswordError('');
        } else {
            setIsSubmitDisabled(true);
            setEmailError(emailValue.trim() === '' ? 'Email is required' : '');
            setPasswordError(passwordValue.trim() === '' ? 'Password is required' : '');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
                    <form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0" onSubmit={handleSubmit}>
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                        <div className={`relative mb-4 ${emailError ? 'text-red-500' : ''}`}>
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${emailError ? 'border-red-500' : ''}`} value={email}
                                onChange={handleEmailChange} />
                            {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type={showPassword ? 'text' : 'password'} id="password" name="password" className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${passwordError ? 'border-red-500' : ''}`} value={password}
                                onChange={handlePasswordChange} />
                            <button
                                type="button"
                                className="absolute top-0 right-0 mt-9 mr-2 p-1 text-xl"
                                onClick={handleTogglePassword}
                            >
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </button>
                            {passwordError && <p className="text-xs text-red-500 mt-1">{passwordError}</p>}
                        </div>
                        <button className={`text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSubmitDisabled}
                        >Login</button>

                        <div className='flex items-center justify-center gap-4'>
                            <p className="text-lg text-gray-500">Don't have an Account</p>
                            <p className='text-lg'>Sign Up</p>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

