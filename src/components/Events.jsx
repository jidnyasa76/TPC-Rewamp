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
  { id: 1, name: "Mock Placement", description: "Mock Placements 2025, organized by the Training and Placement Committee of PCE, offered third-year students a real-time simulation of campus recruitment. Through aptitude tests, technical rounds, group discussions, and mock interviews, enhanced placement readiness for students.  It concluded with rewards for top performers, boosting student confidence and preparation for future opportunities.", image: "/Pillai.png" },
  { id: 2, name: "Inspiria", description: "Inspiria 4.0, the flagship event of TPC-PCE, provided a powerful platform to bridge academics with industry insights. Day 1 featured Professor Dinesh Kumar Gupta, who emphasised holistic growth and corporate readiness. Day 2 featured Mr. Gaurav Sharma and Mr. Aryan Singh, who provided sessions on cybersecurity and entrepreneurship, which inspired students to upskill, innovate, and confidently shape their professional paths.", image: "/Pillai.png" },
  { id: 3, name: "TIA Expo", description: "The TIA Expo, organised by the Taloja Main Office with us as Knowledge Partners, aimed to promote companies' marketing strategies. Startups and Industrialists of MIDC and Taloja set up booths while we volunteered as anchors, managers, and support staff. Newly elected cabinet ministers were the special guests. Along with officials from central, state, and local authorities. It was the 4th consecutive year of the expo, and a key highlight was the presence of newly elected cabinet ministers.", image: "/Pillai.png" },
  { id: 4, name: "Education Fair", description: "The Education Fair 2025 was a two-day celebration of innovation, learning, and academic excellence, featuring 30 stalls showcasing student projects, research, and departmental innovations. The event promoted academic excellence, interdisciplinary learning, and industry awareness. It offered a vibrant platform for collaboration, curiosity, and real-world application.", image: "/Pillai.png" },
  { id: 5, name: "Job Fair", description: "The Job Fair 2024, organized by Pillai College, brought together 58 companies and startups, creating valuable career opportunities for final-year students. It enabled direct interaction with industry professionals and insights into emerging roles and technologies. The event successfully fostered recruitment, networking, and real-world exposure.", image: "/Pillai.png" },
  { id: 6, name: "Cybersecurity Summit", description: "PCE organized a boot camp on “Cyber Security: Safeguarding the Digital Future with AI” in collaboration with ISEA Phase-III, for UG and PG students from Engineering and Science backgrounds. The event provided hands-on training in Web Application Pentesting, AI-driven security tools, and the CTF (Capture The Flag) challenge, along with informative sessions by eminent speakers from IITs and top industries.", image: "/Pillai.png" },
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-500 opacity-30 blur-[100px] rounded-full z-0 pointer-events-none" />
      

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
              <Card className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:shadow-green-500/20 transition-shadow duration-300 h-full">
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
                  <p className="text-sm text-gray-300 text-justify">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 2nd Spotlight glow */}
        <div className="absolute top-[73%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-500 opacity-20 blur-[100px] pointer-events-none z-0"></div>

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
