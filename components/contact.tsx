"use client";
import { FaPaperPlane } from "react-icons/fa"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
    const {ref} = useSectionInView("Contact")
  return (
     <section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center p-10 rounded-xl shadow-xl dark:shadow-cyan-400/20 scroll-mt-20">
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me directly at{""} <a className="underline" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=luvchaudharyjat@gmail.com">example@gmail.com</a>{" "} or through this form.</p>
        <form className="mt-10 flex flex-col dark:text-black" action={async (formData) => {
            await sendEmail(formData)
        }}>
            <input name="senderEmail" placeholder="Your Email" required maxLength={500} className="px-4 h-14 rounded-lg border border-black/30 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all" type="email" />
            <textarea name="message" placeholder="Your Message" required maxLength={5000} className="h-52 my-3 rounded-lg border border-black/30 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all" />
            <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 " type="submit">Submit <FaPaperPlane className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /> </button>
        </form>
     </section>
  )
}

export default Contact