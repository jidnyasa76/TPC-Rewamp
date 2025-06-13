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
      question: "How can I register for placement assistance?",
      answer: "Students can register for placement assistance by filling out the registration form available on the student portal. Make sure to complete your profile with all the required information including academic details, skills, and projects."
    },
    {
      question: "What is the placement process?",
      answer: "The placement process typically involves registration, pre-placement talks, aptitude tests, technical interviews, HR interviews, and finally job offers. The T&P cell guides students through each step and provides necessary resources for preparation."
    },
    {
      question: "When does the placement season begin?",
      answer: "The placement season usually begins in the month of July/August for final-year students. However, internship drives for pre-final year students may begin earlier. The exact schedule is announced at the beginning of each academic year."
    },
    {
      question: "What kind of companies visit for recruitment?",
      answer: "We host companies from various sectors including IT, finance, consulting, manufacturing, analytics, and more. The companies range from startups to multinational corporations offering diverse roles and packages."
    },
    {
      question: "How can I prepare for placements?",
      answer: "The Training and Placement Cell organizes various workshops, mock interviews, aptitude training sessions, and resume building workshops. Additionally, we provide access to online resources and previous placement papers to help students prepare effectively."
    },
    {
      question: "How do I join TPC-PCE?",
      answer: "Every year we conduct interviews for second-year students. You can register for those, and then there’s a chance you may get selected and become a part of TPC-PCE."
    }
  ];

  return (
    <section id="faq" className="w-full bg-black overflow-hidden py-20 relative min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
           {/* Spotlight Background - Top */}
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-500 opacity-20 blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-green-500 opacity-20 blur-[120px] pointer-events-none z-0"></div>
        
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