import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black w-full font-poppins text-white py-12 px-6 overflow-hidden">
      {/* Gradient Line */}
      <motion.div
        className="h-[1px] w-full mb-8 bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Logo */}
        <motion.div
          className="flex sm:block justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/TPCLogo.svg"
            alt="TPC PCE Logo"
            className="w-32 mb-4"
          />
        </motion.div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-medium mb-3 underline underline-offset-4">Links</h3>
          <ul className="text-gray-400 text-base space-y-2">
            {["Home", "Contact", "About"].map((text, i) => (
              <motion.li key={i} whileHover={{ scale: 1.05 }}>
                <a
                  href={`/${text.toLowerCase()}`}
                  className="text-white/60 hover:text-green-500 hover:underline hover:underline-offset-4"
                >
                  {text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Team */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-medium mb-3 underline underline-offset-4">Team</h3>
          <ul className="text-gray-400 text-base space-y-2">
            {["Committee", "Faculty"].map((text, i) => (
              <motion.li key={i} whileHover={{ scale: 1.05 }}>
                <a
                  href="/team"
                  className="text-white/60 hover:text-green-500 hover:underline hover:underline-offset-4"
                >
                  {text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Other Services */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-medium mb-3 underline underline-offset-4">Other services</h3>
          <ul className="text-gray-400 text-base space-y-2">
            {[
              { name: "LinkTree", href: "https://linktr.ee/TPCPCE" },
              { name: "PCE", href: "https://www.pce.ac.in/" },
              { name: "Social-Media", href: "https://www.instagram.com/tpc.pce/" }
            ].map((link, i) => (
              <motion.li key={i} whileHover={{ scale: 1.05 }}>
                <a
                  href={link.href}
                  className="text-white/60 hover:text-green-500 hover:underline hover:underline-offset-4"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-medium mb-3 underline underline-offset-4">Contact</h3>
          <ul className="text-white/60 text-base space-y-2 mb-4">
            <li>022-27456100</li>
            <li>022-27482400</li>
            <li>studenttpc@mes.ac.in</li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6">
            <motion.a
              href="https://www.instagram.com/tpc.pce/"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fa-brands fa-instagram text-3xl" style={{ color: '#df2020' }}></i>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/tpc.pce"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fa-brands fa-facebook text-3xl" style={{ color: '#125bd9' }}></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/tpc-pce"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fa-brands fa-linkedin text-3xl" style={{ color: '#206497' }}></i>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
