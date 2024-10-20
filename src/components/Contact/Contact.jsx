import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSendMessage = (data) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log(data);
          toast.success("Message send successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(`FAILED..., ${error.text}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div
      id="Contact"
      className="flex flex-col justify-around bg-[#465697] text-white py-10 px-5 md:p-12 items-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-200">
        Contact Me
      </h1>
      <div className="w-full md:w-2/3">
        <form
          ref={form}
          onSubmit={handleSubmit(handleSendMessage)}
          className="bg-black/65 p-5 md:p-10 rounded-lg"
        >
          <div className="mb-8">
            <h3 className="text-orange-700 text-3xl font-extrabold">
              Get in Touch
            </h3>
            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              If you have any questions, project opportunities, or just want to
              say hi, feel free to reach out using the form below. I’m always
              open to discussing new ideas and collaborations.
            </p>
          </div>

          <div>
            <label
              htmlFor="fullName"
              className="text-gray-400 font-semibold text-sm mb-2 block"
            >
              Full Name
            </label>
            <div className="relative flex items-center">
              <input
                id="fullName"
                type="text"
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600 placeholder:text-gray-600"
                placeholder="Enter your Full Name"
                {...register("user_fullName", {
                  required: "Full Name is required!",
                  minLength: {
                    value: 5,
                    message: "Full Name must be at least 3 characters",
                  },
                })}
              />
            </div>
            {errors.user_fullName && (
              <p className="mt-2 text-red-500 text-xs">
                {errors.user_fullName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mt-4 text-gray-400 font-semibold text-sm mb-2 block"
            >
              Email
            </label>
            <div className="relative flex items-center">
              <input
                id="email"
                type="email"
                autoComplete="true"
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600 placeholder:text-gray-600"
                placeholder="Enter your email"
                {...register("user_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email address!",
                  },
                })}
              />
            </div>
            {errors.user_email && (
              <p className="text-red-500 text-xs mt-2">
                {errors.user_email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="mt-4 text-gray-400 font-semibold text-sm mb-2 block"
            >
              Message
            </label>
            <div className="relative flex items-center">
              <textarea
                id="message"
                name="message"
                className="w-full h-28 text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600 placeholder:text-gray-600"
                placeholder="Enter your message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least of 10 characters",
                  },
                })}
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="!mt-8">
            <button
              type="submit"
              className="w-full uppercase shadow-xl py-3 px-4 text-sm rounded-lg text-white bg-orange-700 border border-orange-800 duration-300 hover:bg-transparent font-bold md:font-semibold tracking-wider focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
