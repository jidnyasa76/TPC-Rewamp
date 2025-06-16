import { Star, Book, Video, Target, Eye, Activity } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
  viewport: { once: true },
});

const AboutSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div id="about" className="py-24 w-screen bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Spotlight 1 */}
        <div className="absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-500 opacity-30 blur-[120px] pointer-events-none z-0"></div>

        {/* About Title */}
        <motion.div
          className="text-center mb-16 px-4 mt-20 relative z-10"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4 text-white drop-shadow-md group inline-block">
            About Our <span className="text-green-500">Committee</span>
            <span className="block h-[2px] bg-green-500 scale-x-50 group-hover:scale-x-100 transition-transform duration-300 origin-center mt-2"></span>
          </h2>
          <p className="text-white font-poppins max-w-3xl mx-auto text-sm sm:text-base mt-4">
            A team committed and focused on making students industry-ready, helping them shine and connect with top recruiters.
          </p>
        </motion.div>

        {/* Mission + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 px-4 relative z-10">
          <motion.div
            className="md:order-1 order-1 relative rounded-lg overflow-hidden shadow-xl"
            {...fadeIn(0.2)}
          >
            <img
              src="/Pillai.png"
              alt="Committee Group Photo"
              className="w-full h-64 sm:h-72 md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="absolute bottom-0 left-0 p-4 z-20">
              <p className="text-sm font-poppins font-medium text-white">TEAM TPC-PCE</p>
              <h3 className="text-lg sm:text-xl font-bold font-poppins text-white mt-1">Working Together For Success</h3>
            </div>
          </motion.div>

          <motion.div className="md:order-2 order-2" {...fadeIn(0.3)}>
            <div className="inline-block">
  <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-2 text-white flex items-center gap-2">
    <Target className="text-green-500" size={24} />
    <span>Our</span>
    <span className="text-green-500">Mission</span>
  </h3>
  <div className="w-24 h-1 bg-green-500 mb-6 ml-12"></div>
</div>

          <p className="text-white font-poppins mb-6 leading-relaxed text-sm sm:text-base sm:text-center" style={{ textAlign: "justify" }}>
  The Training and Placement Committee is to empower students to become industry-ready professionals. We strive to bridge the gap between academia and the corporate world by providing structured training, industry collaboration, and strategic placement opportunities.
</p>

            <div className="space-y-4">
              {[
                {
                  icon: <Star size={18} className="text-green-500" />,
                  title: "Industry Connections",
                  desc: "We connect students with top companies to ensure real-world exposure and industry-aligned placement opportunities.",
                },
                {
                  icon: <Book size={18} className="text-green-500" />,
                  title: "Career Development",
                  desc: "We enhance student potential through focused technical training and soft skill development for career readiness.",
                },
              ].map((item, idx) => (
                <motion.div key={idx} className="flex items-start" {...fadeIn(0.4 + idx * 0.1)}>
                  <div className="mt-1 mr-4 bg-gray-800 p-2 rounded-full">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-base sm:text-lg text-white font-poppins mb-2">{item.title}</h4>
                    <p className="text-white text-sm sm:text-base font-poppins">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Spotlight 2 */}
          <div className="absolute top-[1000px] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-green-500 opacity-20 blur-[120px] pointer-events-none z-0"></div>

        {/* TPO Section */}
        <motion.div className="mt-20 px-4 relative z-10" {...fadeInUp}>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-white font-poppins">
            Message from <span className="text-green-500">Our TPO</span>
            <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>
          </h3>
          <motion.div
            className="max-w-3xl mx-auto bg-black rounded-lg border border-gray-800 overflow-hidden shadow-xl"
            {...fadeIn(0.2)}
          >
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsVideoPlaying(true)}
              onMouseLeave={() => setIsVideoPlaying(false)}
            >
              <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden">
                {!isVideoPlaying ? (
                  <>
                    <img
                      src="/Pillai.png"
                      alt="TPO Officer"
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <div className="relative z-10 text-center p-8">
                      <Video size={48} className="mx-auto mb-4 text-green-500" />
                      <p className="text-base sm:text-lg font-medium text-white font-poppins">Hover to play message</p>
                      <p className="text-sm text-white font-poppins mt-2">Dr. Prashant Lokhande, TPO Officer</p>
                    </div>
                  </>
                ) : (
                  <video
                    src=""
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 px-4 relative z-10">
  {/* Vision Card */}
  <motion.div {...fadeIn(0.2)}>
    <Card className="bg-[#0d0d0d] border border-gray-800 shadow-xl h-full flex flex-col">
      <CardContent className="p-4 sm:p-8 flex-1 flex flex-col justify-between">
        <div className="flex flex-col items-center md:items-start relative w-full">
          <h3 className="text-xl sm:text-2xl font-semibold text-white font-poppins mb-2 mt-3 flex items-center gap-2 justify-center md:justify-start w-full max-w-max mx-auto md:mx-0">
            <Eye className="text-green-500 mr-0 md:mr-2" size={24} />
            <span className="relative inline-block text-center">
              <span className="text-green-500">Our</span> Vision
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-20 h-1 bg-green-500" />
            </span>
          </h3>

          <p className="text-white font-poppins leading-relaxed text-sm sm:text-base mt-4 text-center md:text-left max-w-prose mx-auto md:mx-0">
            To nurture student potential and prepare them for global careers, ensuring every PCE graduate leaves with a degree, confidence, skills, and industry-ready guidance.
          </p>
        </div>
      </CardContent>
    </Card>
  </motion.div>

  {/* Approach Card */}
  <motion.div {...fadeIn(0.4)}>
    <Card className="bg-[#0d0d0d] border border-gray-800 shadow-xl h-full flex flex-col">
      <CardContent className="p-4 sm:p-8 flex-1 flex flex-col justify-between">
        <div className="flex flex-col items-center md:items-start relative w-full">
          <h3 className="text-xl sm:text-2xl font-semibold text-white font-poppins mb-2 mt-3 flex items-center gap-2 justify-center md:justify-start w-full max-w-max mx-auto md:mx-0">
            <Activity className="text-green-500 mr-0 md:mr-2" size={24} />
            <span className="relative inline-block text-center">
              <span className="text-green-500">Our</span> Approach
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-20 h-1 bg-green-500" />
            </span>
          </h3>

          <p className="text-white font-poppins leading-relaxed text-sm sm:text-base mt-4 text-center md:text-left max-w-prose mx-auto md:mx-0">
            We empower students through career-focused training, industry connections, skill enhancement, and personalized mentoring, ensuring they are well-prepared for professional careers.
          </p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
</div>

      </div>
    </div>
  );
};

export default AboutSection;
