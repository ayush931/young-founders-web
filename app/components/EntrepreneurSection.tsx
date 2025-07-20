"use client";

import { RefObject, useRef, useState } from "react";
import {
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  PieChart,
  Target,
} from "lucide-react";
import { useInView } from "@/app/hooks/useInView";
import EntrepreneurForm from "@/app/components/EntrepreneurForm";

const EntrepreneurSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as RefObject<Element>, {
    threshold: 0.1,
  });

  const [modalOpen, setModalOpen] = useState(false);

  const resources = [
    {
      title: "Start a Startup for Just ₹99",
      description:
        "Want to Start Your Own Startup But Don't Know Where to Begin? Join our Live 60-Minute Session.",
      icon: <Users size={24} className="text-[#f57d56]" />,
      items: [
        "Real steps to build from scratch",
        "MVP, funding & marketing",
        "Avoid common mistakes",
        "Free Startup Checklist",
      ],
    },
    {
      title: "Learn What MBA Won't Teach You",
      description:
        "MBA Can't Teach You How to Build a Real Startup. But this LIVE 60-minute session will.",
      icon: <TrendingUp size={24} className="text-[#f57d56]" />,
      items: [
        "Validate your idea",
        "Get your first users",
        "Build real traction",
        "Only ₹99 to join",
      ],
    },
    {
      title: "Student Founder Special",
      description:
        "Calling All Students Who Dream of Running a Startup! Join our 60-minute Live Call.",
      icon: <Target size={24} className="text-[#f57d56]" />,
      items: [
        "Ideas that actually work",
        "Build MVP without coding",
        "Attract users & raise funds",
        "Avoid beginner mistakes",
      ],
    },
    {
      title: "From ₹99 to a Full Startup",
      description:
        "What if ₹99 Could Be the Start of Your Startup Journey? Build your startup blueprint.",
      icon: <PieChart size={24} className="text-[#f57d56]" />,
      items: [
        "Start with ₹0",
        "No fluff, real strategies",
        "Free startup checklist",
        "Limited seats available",
      ],
    },
  ];

  return (
    <section
      id="entrepreneurship"
      className="py-16 md:py-24 bg-black text-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-[#f57d56] text-white text-sm px-4 py-1 rounded-full inline-block mb-4">
            ENTREPRENEURSHIP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Developer to Founder
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide the guidance and resources you need to transform your
            technical skills into entrepreneurial success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-lg p-6 border-l-4 border-[#f57d56] transition-all duration-700 ease-out transform ${isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-gray-800 rounded-lg mr-4">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {resource.description}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="grid grid-cols-2 gap-3">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-[#f57d56] rounded-full mr-2"></div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="mt-6 w-full bg-transparent hover:bg-[#f57d56] border border-[#f57d56] text-[#f57d56] hover:text-white font-medium py-2 rounded-md transition-colors duration-300"
                  onClick={() => setModalOpen(true)}
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Enroll for 2 hr Basic Training
              </h3>
              <p className="mb-6 text-gray-700">
                You have to pay{" "}
                <span className="font-semibold text-[#f57d56]">₹99</span> to
                enroll for 2 hr basic training.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  className="bg-[#f57d56] text-white font-medium py-2 rounded-md hover:bg-[#e96c3c] transition-colors"
                  onClick={() => {
                    setModalOpen(false);
                    window.location.href =
                      process.env.NEXT_PUBLIC_PAYMENT_URI || "Not available";
                  }}
                >
                  Proceed to Payment
                </button>
                <button
                  className="bg-gray-200 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-300 transition-colors"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 bg-gray-900 rounded-lg p-8 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#f57d56] opacity-5 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>

          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <div className="flex items-center mb-4">
                <Award className="text-[#f57d56] mr-3" size={28} />
                <h3 className="text-2xl font-bold">
                  60-Minute Startup Masterclass
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                Join our live 60-minute session for just ₹99 and learn
                everything you need to kickstart your entrepreneurial journey.
                Perfect for students, side hustlers, and early-stage founders.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Learn the real steps to build a startup from scratch",
                  "Understand MVP, funding, marketing & mistakes to avoid",
                  "Get a Free Startup Checklist + Toolkit worth ₹9999",
                  "Limited Seats | Live Zoom Call | ₹99 Only",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Lightbulb className="text-[#f57d56] mr-2 mt-1" size={16} />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/3">
              <EntrepreneurForm
                title="Apply Now"
                courses={resources.map((resource) => resource.title)} // Pass resource titles as courses
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurSection;
