import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is TPC-PCE, and what role does it play at Pillai College of Engineering?",
      answer: "TPC-PCE is the Training and Placement Committee of Pillai College of Engineering. It is committed to acting as a bridge between students and the corporate world. It is responsible for organising placement drives, training programs, and career-oriented events that prepare students for professional success."
    },
    {
      question: "What are the main objectives and vision of TPC-PCE?",
      answer: "The primary objective of TPC-PCE is to ensure every student is industry-ready by the time they graduate. With a vision to align academic knowledge with corporate requirements, TPC-PCE focuses on soft skills, technical training, interview preparation, and industry exposure through continuous interaction with recruiters and alumni."
    },
    {
      question: "What kind of training and development programs are conducted by TPC-PCE?",
      answer: "TPC-PCE conducts various training programs throughout the academic year, including aptitude training, mock interviews, resume and LinkedIn workshops, technical skill sessions, and expert talks. These initiatives strive to improve technical and soft skills, increase student confidence and prepare them for industry demands."
    },
    {
      question: "How does TPC-PCE coordinate with companies during placement drives?",
      answer: "We host companies from various sectors including IT, finance, consulting, manufacturing, analytics, and more. The companies range from startups to multinational corporations offering diverse roles and packages."
    },
    {
      question: "How can I prepare for placements?",
      answer: "TPC-PCE serves as a bridge between recruiters and students, managing pre-placement talks, schedules, and communication. The team ensures smooth coordination and professional assistance during campus visits and handles all logistics to provide a seamless placement experience for companies and students."
    },
    {
      question: "How can students become a part of TPC-PCE? What are the benefits?",
      answer: "TPC-PCE recruits second-year students through a structured selection process involving registration, interviews, and skill assessments. Being a member of the committee offers numerous benefits, including improved leadership and communication skills, networking opportunities with companies and alumni, hands-on experience in events, and valuable exposure that strengthens your resume."
    }
  ];

  return (
    <section id="faq" className="w-full bg-black overflow-hidden py-20 relative min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
           {/* Spotlight Background - Top */}
       
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-green-500 opacity-25 blur-[120px] pointer-events-none z-0"></div>
        
        {/* Header */}

        
        <div className="flex items-center justify-center mb-12">
          <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-2 rounded-full flex items-center">
            <HelpCircle size={20} className="text-primary mr-2" />
            <span className="text-gray-200 text-sm font-medium">Common Questions</span>
          </div>
        </div>

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Frequently Asked <span className="text-green-500"> Questions</span>
           <span className="block h-[2px] bg-green-500 mt-2 mx-auto w-[25%]"></span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-white max-w-3xl mx-auto">
            Find answers to the most common questions about our placement process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-800 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 bg-[#121a29] text-left hover:no-underline data-[state=open]:text-green-500">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-base py-4 pb-2 text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;