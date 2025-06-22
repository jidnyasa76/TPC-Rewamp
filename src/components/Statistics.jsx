import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fadeInUp } from "./About";

// Updated ChartContainer component with flexible responsive sizing
const ChartContainer = ({ children, className }) => {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: "600px",        // Adjust max width as needed
        aspectRatio: "16 / 10",   // Responsive aspect ratio
        margin: "0 auto",         // Center horizontally
      }}
    >
      {children}
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const chartVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ScrollAnimatedSection = ({ children, variants, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Statistics = () => {
  const placedStudentsData = [
    { year: "2020", students: 357 },
    { year: "2021", students: 425 },
    { year: "2022", students: 315 },
    { year: "2023", students: 256 },
    { year: "2024", students: 47 },
    { year: "2025", students: 220 },
  ];

  const highestPackageData = [
    { year: "2020", package: 12 },
    { year: "2021", package: 9 },
    { year: "2022", package: 10 },
    { year: "2023", package: 7 },
    { year: "2024", package: 7 },
    { year: "2025", package: 32 },
  ];

  const companiesVisitedData = [
    { year: "2020", companies: 116 },
    { year: "2021", companies: 144 },
    { year: "2022", companies: 116 },
    { year: "2023", companies: 102 },
    { year: "2024", companies: 36 },
    { year: "2025", companies: 35 },
  ];

  const sectionData = [
    {
      title: "Students Placed",
      description:
        "Pillai College of Engineering continues to uphold a strong placement record, with noticeable trends across the years, as shown in the adjacent graph. The highest placement count was recorded in 2021, with nearly 425 students securing job offers. 2019 and 2020 also reflected solid performance, each crossing the 250 mark. While 2024 experienced a temporary dip, 2025 has shown a positive rise again, exceeding 220 students and still counting. This upward momentum showcases the institute’s consistent efforts in preparing students for recruitment, ensuring they are ready to enter the corporate world through academic excellence, soft skills, and extracurricular achievements.",
      chart: (
        <BarChart data={placedStudentsData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={{ stroke: "#444" }}
            tick={{ fill: "#ccc", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={{ stroke: "#444" }}
            tick={{ fill: "#ccc", fontSize: 12 }}
            label={{
              value: "No. of Students",
              angle: -90,
              position: "insideLeft",
              fill: "#ccc",
              fontSize: 12,
            }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "#333", fontSize: 12 }}
            labelStyle={{ color: "#ccc", fontSize: 12 }}
          />
          <Legend wrapperStyle={{ color: "#ccc", fontSize: 12 }} iconSize={12} />
          <Bar
            dataKey="students"
            name="Students Placed"
            fill="#00FF7F"
            radius={[4, 4, 0, 0]}
            isAnimationActive={true}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </BarChart>
      ),
    },
    {
      title: "Highest Package",
      description:
        "The graph of the highest placement packages at Pillai College of Engineering from 2019 to 2025 highlights a remarkable upward trend, especially in the current year. After maintaining steady figures around 8 to 14 LPA in previous years, 2025 has witnessed an outstanding and record-breaking package of 32 LPA, the highest ever achieved by the college. This significant achievement demonstrates the growing recognition of Pillai College of Engineering among top recruiters but also reflects the institution’s commitment to enhancing student opportunities and industry partnerships. The outstanding placement results in 2025 highlight the college’s academic excellence and the growing demand for its graduates in today’s competitive job market.",
      chart: (
        <LineChart data={highestPackageData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={{ stroke: "#444" }}
            tick={{ fill: "#ccc", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={{ stroke: "#444" }}
            tick={{ fill: "#ccc", fontSize: 12 }}
            label={{
              value: "Package (LPA)",
              angle: -90,
              position: "insideLeft",
              fill: "#ccc",
              fontSize: 12,
            }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "#333", fontSize: 12 }}
            labelStyle={{ color: "#ccc", fontSize: 12 }}
            formatter={(value) => [`${value} LPA`, "Highest Package"]}
          />
          <Legend wrapperStyle={{ color: "#ccc", fontSize: 12 }} iconSize={12} />
          <Line
            type="monotone"
            dataKey="package"
            name="Highest Package (LPA)"
            stroke="#00FF7F"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </LineChart>
      ),
    },
    {
      title: "Companies Visited",
      description:
        "The recruitment process at Pillai College of Engineering has seen impressive engagement from reputed companies over the years. In 2019 and 2021, the number of companies visiting the campus peaked, hosting over 140 tech firms. Even during challenging times, such as 2020 and 2022, the campus maintained strong industry connections, welcoming over 116 companies. Although 2023 showed a slight dip, with nearly 102 visitors, the number of companies visiting in 2024 and 2025 is gradually stabilising. This consistent interest from top recruiters highlights the institute's growing industry reputation, credibility in the job market and its sustained efforts in building strong ties with top-tier companies.",
      chart: (
        <BarChart data={companiesVisitedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={{ stroke: "#444" }}
            tick={{ fill: "#ccc", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={{ stroke: "#444" }}
            tick={{ fill: "#ccc", fontSize: 12 }}
            label={{
              value: "No. of Companies",
              angle: -90,
              position: "insideLeft",
              fill: "#ccc",
              fontSize: 12,
            }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "#333", fontSize: 12 }}
            labelStyle={{ color: "#ccc", fontSize: 12 }}
          />
          <Legend wrapperStyle={{ color: "#ccc", fontSize: 12 }} iconSize={12} />
          <Bar
            dataKey="companies"
            name="Companies Visited"
            fill="#00FF7F"
            radius={[4, 4, 0, 0]}
            isAnimationActive={true}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </BarChart>
      ),
    },
  ];

  return (
    <div className="py-12 md:py-24 w-full bg-black overflow-hidden relative ">
       <div className="w-screen px-4 relative z-10">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-500 opacity-40 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] max-w-[400px] aspect-square rounded-full bg-green-500 opacity-20 blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] max-w-[400px] aspect-square rounded-full bg-green-500 opacity-20 blur-[80px] md:blur-[120px] pointer-events-none"></div>

      {/* Title and subtitle */}
      <motion.div className="text-center mb-16 px-4 mt-20 relative z-10" {...fadeInUp}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4 text-white drop-shadow-md group inline-block">
          Placement <span className="text-green-500">statistics</span>
          <span className="block h-[2px] bg-green-500 scale-x-50 group-hover:scale-x-75 transition-transform duration-300 origin-center mt-2"></span>
        </h2>
        <p className="text-white font-poppins max-w-3xl mx-auto text-sm sm:text-base mt-4">
          Our dedicated team works tirelessly to prepare students for industry challenges and connect them with leading recruiters.
        </p>
      </motion.div>

      {/* Sections with charts */}
      <div className="space-y-12 md:space-y-24">
        {sectionData.map((section, idx) => (
          <ScrollAnimatedSection
            key={idx}
            variants={itemVariants}
            className={`flex flex-col md:gap-10 gap-6 md:space-x-0 bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <ScrollAnimatedSection
              variants={textVariants}
              className="w-full md:w-[50%] lg:w-[50%] order-1 text-center md:text-left"
            >
              <p className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
                {section.title.split(" ")[0]}{" "}
                <span className="text-green-500">{section.title.split(" ")[1]}</span>
                <motion.span
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="block h-[2px] w-24 bg-green-500 mt-2 origin-center mx-auto rounded-full"
></motion.span>
              </p>
              <p className="text-base sm:text-sm md:text-base text-white/90 leading-relaxed text-justify">
                {section.description}
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection
              variants={chartVariants}
              className="w-full md:w-[50%] lg:w-[50%] order-2"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-white">
                {section.title} vs Year
              </h2>
              <ChartContainer className="p-2 sm:p-4 md:p-6">
                <ResponsiveContainer width="100%" height="100%">
                  {section.chart}
                </ResponsiveContainer>
              </ChartContainer>
            </ScrollAnimatedSection>
          </ScrollAnimatedSection>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Statistics;
