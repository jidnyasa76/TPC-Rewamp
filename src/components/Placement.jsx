import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Building2, GraduationCap } from "lucide-react";
import Companylogos from "./Companylogos";
import PDFViewer from "../PDFViewer";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const getSlideVariant = (isMobile) => ({
  hidden: { opacity: 0, y: isMobile ? 40 : 0, x: isMobile ? 0 : 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
});

export default function Placement() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full bg-black overflow-hidden py-20 min-h-screen">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500 opacity-20 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500 opacity-20 blur-[120px] pointer-events-none z-0" />
    

      {/* Main Container */}
      <div className="w-screen px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center pt-16 sm:pt-20 mb-8 sm:mb-10 px-2 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4 text-white drop-shadow-md group inline-block"
            variants={fadeInUp}
          >
            Career Excellence <span className="text-green-600">Hub</span>
            <span className="block h-[2px] bg-green-500 scale-x-50 group-hover:scale-x-75 transition-transform duration-300 origin-center mt-2"></span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-white max-w-xl sm:max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Discover our industry partnerships and comprehensive placement program designed to launch your career
          </motion.p>
        </motion.div>

        {/* Tabs Section */}
        <Tabs defaultValue="companies" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2 mb-6 sm:mb-8 max-w-md mx-auto gap-3">
  <TabsTrigger
    value="companies"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white bg-gray-800 text-gray-300 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 border-0 cursor-pointer rounded-full transition-colors duration-300 text-sm sm:text-base"
  >
    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
    Our Recruiters
  </TabsTrigger>

  <TabsTrigger
    value="brochure"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white bg-gray-800 text-gray-300 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 border-0 cursor-pointer rounded-full transition-colors duration-300 text-sm sm:text-base"
  >
    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
    <span className="block sm:hidden">Brochure</span>
    <span className="hidden sm:block">Placement Brochure</span>
  </TabsTrigger>
</TabsList>


          {/* Recruiters Tab */}
         <TabsContent
  value="companies"
  className="space-y-6 sm:space-y-8 border-0 bg-gray-800/20 px-4 sm:px-10 rounded-3xl"
>
  <motion.div
    className="text-center mb-6 sm:mb-10 px-2 sm:px-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-2 sm:mb-4">
      Trusted Industry<span className="text-white"> Partners</span>
       <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="block h-[2px] w-16 bg-green-500 mt-2 origin-center mx-auto rounded-full"
      ></motion.span>
    </h2>
    <p className="text-sm sm:text-base text-white max-w-xl sm:max-w-3xl mx-auto">
      We collaborate with leading companies across various industries to provide exceptional career opportunities for our students
    </p>
  </motion.div>

  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 px-2 sm:px-10">
    {Companylogos.map((logo, i) => (
      <motion.div
        key={i}
        variants={getSlideVariant(isMobile)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={i}
      >
        <Card className="bg-white h-[120px] flex items-center justify-center p-2 shadow-md rounded-md transition-shadow duration-300 hover:shadow-lg">
          <img
            src={logo.image}
            alt={logo.alt || `Company ${i + 1} Logo`}
            className="w-[110px] h-[70px] object-contain"
          />
        </Card>
      </motion.div>
    ))}
  </div>
</TabsContent>



          {/* Brochure Tab */}
          <TabsContent
            value="brochure"
            className="space-y-6 sm:space-y-8 border-0 bg-gray-800/20 px-4 sm:px-10 rounded-3xl"
          >
            <motion.div
              className="text-center mb-6 sm:mb-8 px-2 sm:px-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
                Placement Brochure <span className="text-green-500">2024-25</span>
                 <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="block h-[2px] w-16 bg-green-500 mt-2 origin-center mx-auto rounded-full"
                ></motion.span>
              </h2>
              <p className="text-sm sm:text-base text-white max-w-xl sm:max-w-3xl mx-auto">
                Comprehensive guide to our placement process, statistics, and success stories
              </p>
            </motion.div>

            <div className="text-center px-2 sm:px-4">
              <Card className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="pt-4 sm:pt-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                    Complete Placement Brochure
                  </h3>
                  <p className="text-black mb-4 sm:mb-6">
                    Get detailed insights into our placement statistics, company profiles, and success stories.
                  </p>

                  <div className="sm:hidden mb-4">
                    <a
                      href="/Brochure24-25.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button className="bg-green-700 text-white hover:bg-green-900 w-full">
                        View Brochure
                      </Button>
                    </a>
                  </div>

                  <div className="hidden sm:block mb-4 sm:mb-6">
                    <PDFViewer fileUrl="/Brochure24-25.pdf" />
                  </div>

                  <a href="/Brochure24-25.pdf" download className="inline-block">
                    <Button
                      size="lg"
                      className="bg-green-700 font-semibold text-white hover:bg-green-900"
                    >
                      Download PDF Brochure
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
