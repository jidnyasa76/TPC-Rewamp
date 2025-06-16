import { useState } from "react";
import { motion } from "framer-motion";
import studentCommitteeData from "./StudentData";

const facultyCoordinators = [
  {
    name: "Dr. Prashant Lokhande",
    role: "Training and Placement Officer",
    image: "/Pillai.png",
    message:
      "Dr. Prashant Lokhande is the Head and Professor of the Training and Placement Cell at Pillai College of Engineering (TPC-PCE). With a strong dedication to academic excellence and professional development, he spearheads initiatives that connect students with industry opportunities. Under his leadership, the Placement Cell ensures holistic student development by enhancing their technical and soft skills, aligning them with current industry standards. His vision reflects a strong focus on nurturing talent, supporting recruitment processes, and building lasting partnerships with leading organisations.",
    linkedin: "https://www.linkedin.com/in/prashantlokhande",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Faculty Coordinator",
    image: "/Pillai.png",
    message:
      "Pillai College of Engineering is an exciting place to study and grow professionally. It is a place where thinkers become leaders...",
    linkedin: "https://www.linkedin.com/in/rajeshkumar",
  },
  {
    name: "Prof. Anita Desai",
    role: "Training Head",
    image: "/Pillai.png",
    message:
      "TPC establishes the link between students and prospective employers to facilitate training and placement of students...",
    linkedin: "https://www.linkedin.com/in/anitadesai",
  },
  {
    name: "Dr. Sunil Mehta",
    role: "Placement Officer",
    image: "/Pillai.png",
    message:
      "Training and placement cell of Pillai college of Engineering is the most active and crucial part of college...",
    linkedin: "https://www.linkedin.com/in/sunilmehta",
  },
  {
    name: "Dr. Sunil Mehta",
    role: "Placement Officer",
    image: "/Pillai.png",
    message:
      "Training and placement cell of Pillai college of Engineering is the most active and crucial part of college...",
    linkedin: "https://www.linkedin.com/in/sunilmehta",
  },
  {
    name: "Dr. Sunil Mehta",
    role: "Placement Officer",
    image: "/Pillai.png",
    message:
      "Training and placement cell of Pillai college of Engineering is the most active and crucial part of college...",
    linkedin: "https://www.linkedin.com/in/sunilmehta",
  },
];

export default function Team() {
  const [activeTab, setActiveTab] = useState("faculty");
  const [selectedYear, setSelectedYear] = useState("2025");

  const currentStudents = studentCommitteeData[selectedYear];

  return (
    <section className="w-full bg-black overflow-hidden py-20 relative">
      <div className="w-screen px-4 relative z-10">

        {/* Top Spotlight */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-500 opacity-25 blur-[80px] pointer-events-none z-0"></div>

        {/* Title */}
        <motion.div
          className="text-center mb-16 px-4 mt-20 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white drop-shadow-md group inline-block">
            Our <span className="text-green-500">Team</span>
            <span className="block h-[2px] bg-green-500 scale-x-50 group-hover:scale-x-100 transition-transform duration-300 origin-center mt-2"></span>
             
          </h2>
          <p className="text-white font-poppins max-w-3xl mx-auto text-sm sm:text-base mt-6">
              United by vision, driven by mutual support.
            </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 flex justify-center z-10 relative">
          <div className="inline-flex rounded-md p-2 backdrop-blur-sm space-x-2">
            <button
              onClick={() => setActiveTab("faculty")}
              className={`rounded-md border-0 px-6 py-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === "faculty"
                  ? "bg-green-500 text-white"
                  : "text-gray-300 hover:bg-gray-900/80 hover:text-white"
              }`}
            >
              Faculty Coordinators
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`rounded-md border-0 px-4 py-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === "students"
                  ? "bg-green-500 text-white"
                  : "text-gray-300 hover:bg-gray-900/80 hover:text-white"
              }`}
            >
              Student Committee
            </button>
          </div>
        </div>

        {/* Faculty Section */}
        {activeTab === "faculty" && (
          <>
            <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-green-500 opacity-30 blur-[80px] pointer-events-none z-0"></div>
              {/* <div className="absolute top-[35%] left-1/8 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-green-500 opacity-20 blur-[100px] pointer-events-none z-0"></div>

              <div className="absolute top-[65%] left-[100%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-green-500 opacity-20 blur-[100px] pointer-events-none z-0"></div>
              <div className="absolute top-[85%] left-[100%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-500 opacity-10 blur-[100px] pointer-events-none z-0"></div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {facultyCoordinators.map((member, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30  border border-gray-800 shadow-xl p-6 backdrop-blur-sm flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.07, 0.4),
                  }}
                  whileHover={{ scale: 0.97 }}
                >
                  <div className="w-full h-64 sm:h-72 overflow-hidden rounded-lg mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-between gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {member.name}
                      </h3>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-emerald-400 duration-200"
                        >
                          <i className="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                      )}
                    </div>
                    <p className="text-emerald-400 mb-2 text-sm sm:text-base">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm text-justify">
                      {member.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Student Section */}
        {activeTab === "students" && (
          <div className="transition-opacity duration-500 relative z-10">
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-green-500 opacity-20 blur-[80px] pointer-events-none z-0"></div>
            

             
            <div className="mb-6 flex justify-center items-center gap-6">
              <button
                onClick={() =>
                  setSelectedYear((prev) =>
                    Math.max(2018, parseInt(prev) - 1).toString()
                  )
                }
                disabled={selectedYear === "2018"}
                className="w-14 h-14 rounded-full bg-black text-green-500 text-2xl flex items-center justify-center hover:bg-gray-900 disabled:opacity-50"
              >
                &lt;
              </button>
              <span className="text-green-500 text-xl font-semibold">
                {selectedYear}
              </span>
              <button
                onClick={() =>
                  setSelectedYear((prev) =>
                    Math.min(2025, parseInt(prev) + 1).toString()
                  )
                }
                disabled={selectedYear === "2025"}
                className="w-14 h-14 rounded-full bg-gray-800 text-green-500 text-2xl flex items-center justify-center hover:bg-gray-700 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentStudents.map((member, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-800/30 backdrop-blur-sm  shadow-lg p-4  flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.07, 0.4),
                  }}
                  whileHover={{ scale: 0.97 }}
                >
                  <div className="w-64 h-74 overflow-hidden rounded-lg mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="object-contain object-center w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center">
                    {member.name}
                  </h3>
                  <p className="text-emerald-400 text-sm mb-1">{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-emerald-400 duration-200 mt-2"
                    >
                      <i className="fa-brands fa-linkedin text-2xl"></i>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
