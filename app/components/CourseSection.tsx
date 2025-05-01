"use client";

import { RefObject, useRef } from "react";
import {
  Server,
  Database,
  Code,
  Layers,
  CoffeeIcon,
  FileCode,
} from "lucide-react";
import { useInView } from "../hooks/useInView"; // Adjusted import path for Next.js conventions

// Course card component
interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  level: string;
  duration: string;
  delay: number;
  inView: boolean;
}

const CourseCard = ({
  title,
  description,
  icon,
  level,
  duration,
  delay,
  inView,
}: CourseCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#f57d56] transition-all duration-700 ease-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-orange-100 rounded-lg">{icon}</div>
          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
              {level}
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
              {duration}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <button className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 rounded-md transition-colors duration-300">
          Purchase course
        </button>
      </div>
    </div>
  );
};

const CourseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as RefObject<Element>, {
    threshold: 0.1,
  });

  const courses = [
    {
      title: "JavaScript Fundamentals",
      description:
        "Master the building blocks of modern web development with comprehensive JavaScript training.",
      icon: <CoffeeIcon size={24} className="text-[#f57d56]" />,
      level: "Beginner",
      duration: "8 weeks",
    },
    {
      title: "Frontend Development",
      description:
        "Learn HTML, CSS, React, and more to create stunning and responsive user interfaces.",
      icon: <Layers size={24} className="text-[#f57d56]" />,
      level: "Intermediate",
      duration: "10 weeks",
    },
    {
      title: "Backend Development",
      description:
        "Build robust server-side applications with Node.js, Express, and RESTful APIs.",
      icon: <Server size={24} className="text-[#f57d56]" />,
      level: "Intermediate",
      duration: "12 weeks",
    },
    {
      title: "Database Management",
      description:
        "Learn SQL and NoSQL database design, optimization, and integration with applications.",
      icon: <Database size={24} className="text-[#f57d56]" />,
      level: "Intermediate",
      duration: "8 weeks",
    },
    {
      title: "Full Stack Development",
      description:
        "Combine frontend and backend skills to build complete web applications from scratch.",
      icon: <Code size={24} className="text-[#f57d56]" />,
      level: "Advanced",
      duration: "16 weeks",
    },
    {
      title: "HTML & CSS Mastery",
      description:
        "Build the foundation of web development with semantic HTML and modern CSS techniques.",
      icon: <FileCode size={24} className="text-[#f57d56]" />,
      level: "Beginner",
      duration: "6 weeks",
    },
  ];

  return (
    <section
      id="courses"
      className="py-16 md:py-24 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Technical Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive curriculum designed to equip you with the technical
            skills needed to build and scale your startup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
              level={course.level}
              duration={course.duration}
              delay={index * 100}
              inView={isInView}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#f57d56] hover:bg-[#e06a47] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
