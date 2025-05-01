import React from "react";
import Navbar from "../components/Navbar"; // Adjust the import path as needed
import Footer from "../components/Footer"; // Adjust the import path as needed

const ContactUs = () => {
  return (
    <>
      <Navbar className="bg-white shadow-md" />
      <div className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated on 01-05-2025 11:28:14
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <p className="text-gray-700 mb-4">
              You may contact us using the information below:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Merchant Legal entity name:</strong> SHABRA SOFTECH
                SOLUTIONS PRIVATE LIMITED
              </li>
              <li>
                <strong>Registered Address:</strong> NC 105, SBI OFFICERS
                COLONY, Chitragupta Nagar, Sampatchak, Patna- 800020, Bihar,
                Patna, Bihar, PIN: 800020
              </li>
              <li>
                <strong>Operational Address:</strong> NC 105, SBI OFFICERS
                COLONY, Chitragupta Nagar, Sampatchak, Patna- 800020, Bihar,
                Patna, Bihar, PIN: 800020
              </li>
              <li>
                <strong>Telephone No:</strong> 9646534433
              </li>
              <li>
                <strong>E-Mail ID:</strong>{" "}
                <a
                  href="mailto:abhishek@shopu.live"
                  className="text-blue-500 underline"
                >
                  abhishek@shopu.live
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
