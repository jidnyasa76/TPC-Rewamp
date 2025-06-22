import FAQSection from "./FAQSection";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-black overflow-hidden py-20 relative min-h-screen">
      <div className="w-screen px-4 relative z-10">
        {/* Spotlight Background - Top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-500 opacity-30 blur-[120px] pointer-events-none z-0"></div>

        {/* Header */}
        <motion.div
          className="text-center pt-16 sm:pt-20 mb-8 sm:mb-10 px-2 sm:px-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4 text-white drop-shadow-md group inline-block">
            Get in <span className="text-green-600">Touch</span>
            <span className="block h-[2px] bg-green-500 scale-x-50 group-hover:scale-x-75 transition-transform duration-300 origin-center mt-2"></span>
          </h1>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Message Form */}
          <motion.div
            className="rounded-lg bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
           <div className="text-center md:text-left mb-6">
  <h3 className="text-2xl font-semibold text-white font-poppins">
    Send us a <span className="text-green-500">Message</span>
  </h3>

  <motion.span
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="block h-[2px] w-16 bg-green-500 mt-2 origin-center mx-auto md:ml-0 md:mx-0 rounded-full"
  ></motion.span>
</div>

            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">Your Name</label>
                  <Input id="name" placeholder="John Doe" className="w-full bg-gray-800 text-white" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">Your Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full bg-gray-800 text-white" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="w-full bg-gray-800 text-white" required />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">Message</label>
                <Textarea id="message" placeholder="Your message here..." className="min-h-[150px] w-full bg-gray-800 text-white" required />
              </div>
              <Button type="submit" className="w-full font-medium text-white bg-green-500/70 hover:bg-emerald-600/70">Send Message</Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-between rounded-lg bg-black/50 p-8 text-white shadow-lg backdrop-blur-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
     

             <div className="text-center md:text-left mb-6">
  <h3 className="text-2xl font-semibold text-white font-poppins">
    Contact <span className="text-green-500">Information</span>
  </h3>

  <motion.span
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="block h-[2px] w-16 bg-green-500 mt-2 origin-center mx-auto md:mx-0 md:ml-0 rounded-full"
  ></motion.span>
</div>

              <p className="mb-8 text-gray-300">
                Have questions about our placement process or want to recruit from our institution?
                Reach out to us using the contact information below.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Address</h4>
                    <p className="mt-1 text-gray-300">
                      Pillai College of Engineering, New Panvel, Dr. K.M.V.<br />
                       Pillai Campus, Plot No. 10, Sec. 16, Triveni Society, <br />
                       Navi Mumbai, Maharashtra 410206
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Phone</h4>
                    <p className="mt-1 text-gray-300">+022-27456100 / 27482400</p>
                  
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="mt-1 text-gray-300">studenttpc@mes.ac.in</p>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <motion.div
              className="mt-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="mb-4 text-lg font-medium text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/tpc.pce/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram text-2xl text-[#df2020] hover:text-emerald-400 duration-200"></i>
                </a>
                <a href="https://www.facebook.com/tpc.pce" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook text-2xl text-[#125bd9] hover:text-emerald-400 duration-200"></i>
                </a>
                <a href="https://www.linkedin.com/company/tpc-pce" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin text-2xl text-[#206497] hover:text-emerald-400 duration-200"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <FAQSection />
        </motion.div>
      </div>
    </section>
  );
}
