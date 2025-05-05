"use client";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import CustomHeading from "./common/CustomHeading";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const sendEmail = async (data) => {
        setLoading(true);
        try {
            await emailjs.sendForm(
                "service_6nua2fm",
                "template_z5yir3u",
                formRef.current,
                "Ggsx27iufj9XQ5N3d"
            );
            Swal.fire("✅ Message Sent!", "Thank you for contacting me!", "success");
            reset();
        } catch (err) {
            Swal.fire("❌ Failed", "Message not sent. Try again later.", "error");
        }
        setLoading(false);
    };

    return (
        <div id="contact" className="relative bg-[#e1e2db] py-20 px-4 md:px-8 overflow-hidden">
            {/* Decorative Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-12 left-0 w-full h-2 bg-gradient-to-r from-[#e1e2db] to-zinc-400 opacity-80"></div>
                <div className="absolute bottom-12 right-0 w-full h-2 bg-gradient-to-l from-[#e1e2db] to-zinc-400 opacity-80"></div>
                <div className="absolute left-2 top-0 h-full w-2 bg-gradient-to-b from-slate-200 to-zinc-400 opacity-70"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <CustomHeading titleOne="Get in " titleTwo="Touch" customClass="text-center" />
                <p className="text-center text-slate-500 mb-12 text-sm md:text-base">
                    Whether you have a question, project idea, or just want to say hello — my inbox is always open.
                </p>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Info Box */}
                    <div className="bg-white/70 border border-zinc-200 backdrop-blur-md rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-semibold text-slate-700 mb-4">📬 Contact Info</h3>
                        <ul className="text-slate-600 space-y-3 text-sm leading-relaxed">
                            <li><strong>Email:</strong> your.email@example.com</li>
                            <li><strong>Phone:</strong> +91 12345 67890</li>
                            <li><strong>Location:</strong> Singhani, India</li>
                        </ul>
                        <p className="mt-6 text-xs text-slate-400 italic">
                            I'm also active on GitHub and LinkedIn — let's connect!
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit(sendEmail)}
                        className="bg-white/80 border border-zinc-200 backdrop-blur-md rounded-xl p-6 shadow-lg space-y-5"
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-slate-600 mb-1">Name</label>
                                <input
                                    {...register("from_name", { required: "Name is required" })}
                                    name="from_name"
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-slate-300 px-4 py-2 bg-white/60 text-slate-800"
                                />
                                {errors.from_name && <p className="text-red-500 text-sm mt-1">{errors.from_name.message}</p>}
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-slate-600 mb-1">Country</label>
                                <input
                                    {...register("from_country", { required: "Country is required" })}
                                    name="from_country"
                                    placeholder="Enter your country"
                                    className="w-full rounded-lg border border-slate-300 px-4 py-2 bg-white/60 text-slate-800"
                                />
                                {errors.from_country && <p className="text-red-500 text-sm mt-1">{errors.from_country.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                            <input
                                {...register("from_email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                                })}
                                name="from_email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 bg-white/60 text-slate-800"
                            />
                            {errors.from_email && <p className="text-red-500 text-sm mt-1">{errors.from_email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Message</label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                name="message"
                                rows="4"
                                placeholder="Type your message..."
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 bg-white/60 text-slate-800 max-h-80"
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-slate-700 hover:bg-white hover:text-slate-700 border border-transparent hover:border-slate-600 cursor-pointer ease-linear duration-300 text-white py-2 px-6 rounded-md transition-all shadow-md hover:shadow-lg"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
