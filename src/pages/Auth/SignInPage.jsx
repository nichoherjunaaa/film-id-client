import React, { useState } from 'react';

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tambahkan logic autentikasi di sini
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white font-['Inter']">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-stretch border-6 rounded-xl border-primary">
                {/* Left Side Form */}
                <div className="w-full md:w-3/5 px-8 md:px-20 py-12 md:py-24">
                    <h1 className="text-2xl font-semibold text-[#d07f9e] mb-2">Logo Here</h1>
                    <p className="text-sm text-black mb-4">Welcome back !!!</p>
                    <h2 className="text-3xl font-extrabold text-black mb-8">Log In</h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="login@gmail.com"
                                className="w-full rounded-md bg-[#bdd5e5] text-sm text-black px-3 py-2 focus:outline-none"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label htmlFor="password" className="text-sm font-medium text-black">Password</label>
                                <button
                                    type="button"
                                    className="text-xs text-primary underline focus:outline-none"
                                >
                                    Forgot Password ?
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
                                    className="w-full rounded-md bg-[#bdd5e5] text-sm text-black px-3 py-2 pr-8 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    aria-label="Toggle password visibility"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#d07f9e] text-sm focus:outline-none"
                                >
                                    <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-32 bg-[#d07f9e] text-white text-sm font-semibold rounded-full py-2 flex items-center justify-center gap-2 hover:bg-[#b46f8a] transition"
                        >
                            LOG IN <i className="fas fa-arrow-right" />
                        </button>
                    </form>

                    <p className="text-xs text-primary text-center mt-6 mb-4">or continue with</p>
                    <div className="flex justify-center gap-6 mb-6">
                        <button aria-label="Continue with Google" className="w-16 h-8 border border-[#7a9dbd] rounded-full flex items-center justify-center hover:bg-[#e7f0f9] transition">
                            <img src="https://storage.googleapis.com/a1aa/image/f327ccdb-048b-4b98-876c-888a2b584074.jpg" alt="Google" className="w-5 h-5" />
                        </button>
                        <button aria-label="Continue with GitHub" className="w-16 h-8 border border-[#7a9dbd] rounded-full flex items-center justify-center hover:bg-[#e7f0f9] transition">
                            <img src="https://storage.googleapis.com/a1aa/image/c81f509a-d213-4ab8-f84f-e1b62185bf1a.jpg" alt="GitHub" className="w-5 h-5" />
                        </button>
                        <button aria-label="Continue with Facebook" className="w-16 h-8 border border-[#7a9dbd] rounded-full flex items-center justify-center hover:bg-[#e7f0f9] transition">
                            <img src="https://storage.googleapis.com/a1aa/image/cd0e70e8-f800-49d6-4c61-2c62a631c96e.jpg" alt="Facebook" className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-xs text-center text-black">
                        Don't have an account yet? <a href="#" className="text-[#d07f9e] hover:underline">Sign up for free</a>
                    </p>
                </div>

                {/* Right Side Image */}
                <div className="hidden md:flex md:w-2/5 bg-primary justify-center items-center relative overflow-hidden">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/f0a0f533-7db1-4ee8-6771-2628d71eada4.jpg"
                        alt="3D illustration"
                        className="max-w-full max-h-full object-contain"
                        width="400"
                        height="400"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
