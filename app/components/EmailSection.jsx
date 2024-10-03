import React from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I`m currently looking for new opportunites, my inbox is always open.
          Whether you have a question or just want to say hi, I`ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/merveyyildiz">
            <Image src={LinkedinIcon} alt="linkedin-icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/merve-y%C4%B1ld%C4%B1z-sert-6a486913a/">
            <Image src={GithubIcon} alt="github-icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              className="text-white block text-sm font-medium"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="doe@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              className="text-white block mb-2 text-sm font-medium"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Just say hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;