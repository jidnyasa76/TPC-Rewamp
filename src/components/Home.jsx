import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';



function Home() {
  const recruiters = [
    { id: 1, logo: "/logos/capgemini.jpg" },
    { id: 2, logo: "/logos/Q SPIDER.png" },
    { id: 3, logo: "/logos/GODEREJ.png" },
    { id: 4, logo: "/logos/TCS.png" },
  ];

  const testimonials = [
    {
      quote: 'I am grateful to TPC for mock tests, workshops, and training that boosted my skills and confidence for quality placements.',
      name: 'Srushti Jagtap ',
      title: 'Flipkart',
      batch: 'Batch of 2023',
      image: "/Pillai.png",
    },
    {
      quote: 'The TPC at PCE transformed my anxious beginning into a confident journey with structured sessions and continuous mentorship.',
      name: 'Sumant Dusane ',
      title: 'Grexa Al PVT LTD',
      batch: 'COMPS',
      image: "/Pillai.png",
    },
    {
      quote: 'Thanks to TPC-PCE, the transition to the corporate world was smooth with valuable sessions, mentorship, and placement drives.',
      name: 'Sayali Patil',
      title: 'TCS',
      batch: 'COMPS',
      image: "/Pillai.png",
    },
    {
      quote: 'TPC nurtured my growth with training, support, and consistency, making me industry-ready.',
      name: 'Pranav Rajeevan ',
      title: 'TCS',
      batch: 'IT',
      image: "/Pillai.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const testimonial = testimonials[index];

  return (
    <div className="w-screen font-poppins overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <img
          src="https://ik.imagekit.io/nifjlz5x5/Pillai.png?updatedAt=1748357579939"
          alt="College"
          className="w-full h-full object-cover absolute z-0"
        />
        <motion.div
          className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center px-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-[300px] h-[300px] bg-green-400 blur-[200px] rounded-full opacity-40 mix-blend-screen z-0 pointer-events-none" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>

          <motion.p
            className="mb-4 bg-[#111827] text-white px-4 py-1 rounded-full text-sm border border-gray-600 relative z-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-green-400">🔗</span> Connecting Talent with Opportunities
          </motion.p>

         <motion.h1
  className="text-white text-4xl sm:text-4xl md:text-5xl font-bold mb-4 z-20 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.7)]"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  <span className="block sm:inline">Training & Placement</span>
  <span className="block sm:inline text-green-500"> Committee PCE</span>
</motion.h1>



          <motion.p
            className="text-base sm:text-2xl md:text-3xl text-gray-200 max-w-2xl mb-6 mt-6 z-20 uppercase drop-shadow-lg font-bold"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
           		unlocking potential, building career
          </motion.p>
        </motion.div>
      </section>

      {/* Placement Insights */}
      <section className="py-24 w-full bg-black text-white">
        <motion.div
          className="max-w-screen-xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold mt-6 mb-6 relative inline-block">
            Placement <span className="text-green-500">Insights</span>
            <span className="block h-[3px] bg-green-500 mt-2 w-1/3 mx-auto rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: '🎓', title: '950+', desc: 'Students Placed' },
              { icon: '🏢', title: '120+', desc: 'Recruiting Companies' },
              { icon: '🏆', title: '18 LPA', desc: 'Highest Package' },
              { icon: '📈', title: '92%', desc: 'Placement Rate' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#060c14e8] p-6 shadow-lg rounded-lg backdrop-blur-sm"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl text-green-500 mb-3">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-green-400">{item.title}</h3>
                <p className="text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recruiters Carousel */}
      <section className="py-24 w-full bg-black text-white relative overflow-hidden">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-green-500 opacity-10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <motion.div
          className="text-center mb-10 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold">
            Top <span className="text-green-400">Recruiters</span>
            <span className="block h-[3px] bg-green-500 mt-2 w-10 mx-auto rounded-full"></span>
          </h2>
          <p className="text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            We partner with leading companies across various industries to provide excellent career opportunities for our students.
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden max-w-6xl mx-auto px-4 z-10 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex w-max animate-scroll space-x-10">
            {[...Array(2)].map((_, i) => (
              <div className="flex space-x-10" key={i}>
                {recruiters.map((company) => (
                  <div
                    key={`${company.id}-${i}`}
                    // className="min-w-[150px] sm:min-w-[100px] h-[100px] flex items-center justify-center bg-[#0d1624] rounded-md shadow-md"
                  >
                    <img
                      src={company.logo}
                      alt={`Recruiter ${company.id}`}
                      className="w-[130px] sm:w-[160px] h-[80px] object-contain aspect-[3/2]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </section>


{/* Company Testimonials */}

<section className="py-24 w-full bg-black text-white relative overflow-hidden">
  <div className="absolute left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-green-500 opacity-20 blur-[120px] rounded-full pointer-events-none z-0"></div>

  <motion.div
    className="text-center mb-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl sm:text-4xl font-semibold">
      Companies <span className="text-green-400">Testimonials</span>
      <span className="block h-[3px] bg-green-500 mt-2 w-20 mx-auto rounded-full"></span>
    </h2>
    <p className="text-sm sm:text-base mt-4 max-w-2xl mx-auto">
      See what our recruiting partners say about our talented students.
    </p>
  </motion.div>

  {/* Testimonials Data */}
  {(() => {
    const testimonials = [
      {
        company: "CAPGEMINI",
        logo: "/logos/capgemini.jpg",
        quote:
          "Candidates from PCE show great enthusiasm, clear communication, and strong analytical thinking. It reflects the college's solid academic and training standards.",
      },
      {
        company: "GODEREJ",
        logo: "/logos/GODEREJ.png",
        quote:
          "The recruits from PCE are well-trained and skilled professionals. Their performance is commendable and well-aligned with industry expectations.",
      },
      {
        company: "TCS",
        logo: "/logos/TCS.png",
        quote:
          "PCE students exhibit professionalism, problem-solving skills, and strong teamwork. We value our association with the institute for consistently providing quality talent.",
      },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 3500);
      return () => clearInterval(interval);
    }, []);

    return (
      <>
        {/* Desktop View - Static Layout */}
        <motion.div
          className="hidden md:flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-6 z-10 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="w-full md:w-[30%] p-6 bg-[#02060e] shadow-lg border border-gray-800 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:border-gray-400"
              style={{
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "0px",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={testimonial.logo}
                alt={`${testimonial.company} Logo`}
                className="w-20 h-20 rounded-full mx-auto object-contain mb-4 border-2 border-green-400 bg-white"
              />
              <h4 className="text-lg font-bold text-[#09c35a] mb-3 text-center">
                {testimonial.company}
              </h4>
              <div className="relative max-w-xl mx-auto px-4 min-h-[150px] flex flex-col justify-center">
                <span className="text-[#09c35a] text-5xl absolute -left-4 top-2 select-none font-serif">
                  &#8220;
                </span>
                <p className="italic text-white text-sm leading-relaxed text-center  relative z-10 py-4 px-2">
                  {testimonial.quote}
                </p>
                <span
                  className="text-[#09c35a] text-5xl absolute -right-4 bottom-2 select-none font-serif"
                  style={{ transform: "rotate(180deg)" }}
                >
                  &#8220;
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View - Auto Carousel */}
        <div className="block md:hidden relative w-full max-w-sm mx-auto overflow-hidden h-[340px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${testimonials.length * 100}%`,
              transform: `translateX(-${current * (100 / testimonials.length)}%)`,
            }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 px-4"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div
                  className="bg-[#02060e] p-6 shadow-lg border border-gray-800 w-full h-full flex flex-col justify-center"
                  style={{
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "0px",
                  }}
                >
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.company} Logo`}
                    className="w-20 h-20 rounded-full mx-auto object-contain mb-4 border-2 border-green-400 bg-white"
                  />
                  <h4 className="text-lg font-bold text-[#09c35a] mb-3 text-center">
                    {testimonial.company}
                  </h4>
                  <div className="relative max-w-xl mx-auto px-4 min-h-[120px] flex flex-col justify-center">
                    <span className="text-[#09c35a] text-5xl absolute -left-4 top-2 select-none font-serif">
                      &#8220;
                    </span>
                    <p className="italic text-white text-sm leading-relaxed text-center relative z-10 py-4 px-2">
                      {testimonial.quote}
                    </p>
                    <span
                      className="text-[#09c35a] text-5xl absolute -right-4 bottom-2 select-none font-serif"
                      style={{ transform: "rotate(180deg)" }}
                    >
                      &#8220;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  })()}
</section>





 {/* {student testimonals} */}

      <section className="py-24 w-full bg-black text-white">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-green-500 opacity-20 blur-[120px] rounded-full pointer-events-none z-0"></div>

  <motion.div
    className="text-center mb-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl sm:text-4xl font-semibold">
      Student <span className="text-green-400">Testimonials</span>
      <span className="block h-[3px] bg-green-500 mt-2 w-20 mx-auto rounded-full"></span>
    </h2>
    <p className="text-sm sm:text-base mt-4 max-w-2xl mx-auto">
      Hear what our students have to say about their placement experience with us.
    </p>
  </motion.div>

  <motion.div
    className={`transition-opacity duration-700 ease-in-out max-w-2xl mx-auto text-center p-8 rounded-lg bg-[#02060e] shadow-lg ${fade ? 'opacity-100' : 'opacity-0'}`}
    key={index}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Student Image */}
    <img
      src={testimonial.image}
      alt={`${testimonial.name} photo`}
      className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-green-400"
    />

    {/* Stylized quote block */}
    <div className="relative max-w-xl mx-auto px-6 sm:px-12">
      {/* Opening quote */}
      <span className="text-[#09c35a] text-6xl font-bold leading-none absolute -left-4 -top-6 select-none" style={{ fontFamily: 'Georgia, serif' }}>
        &#8220;
      </span>

      <p className="italic text-gray-200 text-xs sm:text-sm leading-relaxed z-10 relative">
        {testimonial.quote}
      </p>

      {/* Closing quote */}
      <span
        className="text-[#09c35a] text-6xl font-bold leading-none absolute -right-4 -bottom-6 select-none"
        style={{ fontFamily: 'Georgia, serif', transform: 'rotate(180deg)' }}
      >
        &#8220;
      </span>
    </div>

    {/* Student Info */}
    <div className="mt-8">
      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
      <p className="text-green-400 text-sm">{testimonial.title}</p>
      <p className="text-gray-400 text-xs">{testimonial.batch}</p>
    </div>
  </motion.div>
</section>

    </div>
  );
}

export default Home;
