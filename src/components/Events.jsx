import { Card, CardContent, CardHeader } from "../components/ui/card";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: Math.min(delay, 0.4) } },
  viewport: { once: true },
});

const events = [
  { id: 1, name: "Mock Placement", description: "Join industry leaders for cutting-edge technology discussions and networking opportunities.", image: "/Pillai.png" },
  { id: 2, name: "Inspiria", description: "Explore sustainable energy solutions and environmental innovations for a better future.", image: "/Pillai.png" },
  { id: 3, name: "TIA Expo", description: "Discover the latest trends in digital marketing and social media strategies.", image: "/Pillai.png" },
  { id: 4, name: "Education Fair", description: "Hands-on workshop covering artificial intelligence and machine learning fundamentals.", image: "/Pillai.png" },
  { id: 5, name: "Job Fair", description: "Watch innovative startups pitch their ideas to investors and industry experts.", image: "/Pillai.png" },
  { id: 6, name: "Cybersecurity Summit", description: "Learn about the latest cybersecurity threats and protection strategies.", image: "/Pillai.png" },
];

const yearlyEvents = [
  { year: "2023-24", highlight: ["Education Fair", "Live At Campus", "CAT Credential", "Mock Placement"] },
  { year: "2022-23", highlight: ["Victors of TCS", "Seminar on Defence Forces", "Victors of Capgemini", "Victors of Jio", "AI and Data Science in FinTech Summit", "Seminar on Defence Forces"] },
  { year: "2021-22", highlight: ["Victors of LTI", "Victors of Capgemini", "Mapping Placement 2023", "The Placement Treasure Hunt", "Awareness of Defence Entries", "All about TCS NQT", "Campus Recruitment Training", "CV Building Workshop", "Placement Training by Ekeeda"] },
  { year: "2020-21", highlight: ["Gateway to Success Webinar", "Career in Indian Armed Forces", "Overseas Education – SUNY/Stevens", "Mega Job Fair", "Interview Prep Webinar", "CV Building Webinar by Dr. Lokhande"] },
  { year: "2019-20", highlight: ["Maha Entrepreneur Summit", "Indian Navy Seminar", "Campus to Corporate", "INSPIRIA", "CII Job Fair", "Mega Job Fair"] },
];

const EventsSection = () => {
  return (
    <section id="events" className="w-full bg-black py-24 font-poppins relative">
      {/* Glowing background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-500 opacity-20 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="w-screen px-4 relative z-10">
        {/* Main Heading */}
        <motion.div className="text-center mb-16 px-4 mt-20 relative z-10" {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white inline-block group">
            Events by <span className="text-green-500">TPC</span>
            <span className="block h-[2px] w-1/2 bg-green-500 mx-auto mt-2 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </h2>
        </motion.div>

        {/* Featured Highlights Heading */}
        <motion.div className="text-center mb-10" {...fadeIn(0.1)}>
          <h3 className="text-2xl font-semibold text-white inline-block relative pb-2">
            Featured <span className="text-green-500">Highlights</span>
            <span className="block h-[2px] bg-green-500 mt-2 mx-auto w-[80%]"></span>
          </h3>
        </motion.div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, idx) => (
            <motion.div key={event.id} {...fadeIn(0.2 + idx * 0.1)}>
              <Card className="bg-[#0d0d0d] border border-gray-800 hover:shadow-green-500/20 transition-shadow duration-300 h-full">
                <CardHeader className="p-0">
                  <img
                    src={event.image}
                    alt={event.name}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-t"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-green-400 mb-2">{event.name}</h4>
                  <p className="text-sm text-gray-300">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 2nd Spotlight glow */}
        <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-500 opacity-20 blur-[100px] pointer-events-none z-0"></div>

        {/* Yearly Events Heading */}
        <motion.div className="text-center mb-10" {...fadeIn(0.2)}>
          <h3 className="text-2xl font-semibold text-white inline-block relative pb-2">
            Events by <span className="text-green-500">Year</span>
            <span className="block h-[2px] bg-green-500 mt-2 mx-auto w-[80%]"></span>
          </h3>
        </motion.div>

        {/* Year-wise Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yearlyEvents.map((yearData, idx) => (
            <motion.div key={yearData.year} {...fadeIn(0.3 + idx * 0.1)}>
              <Card className="bg-[#0d0d0d] border border-gray-800 p-4 text-white h-full">
                <h4 className="text-lg font-semibold text-green-400 mb-3">{yearData.year}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  {yearData.highlight.map((eventName, i) => (
                    <li key={i}>{eventName}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
