import React from "react";
import Navbar from "../components/Navbar"; // Adjust the import path as needed
import Footer from "../components/Footer"; // Adjust the import path as needed

const CancellationPolicy = () => {
  return (
    <>
      <Navbar className="bg-white shadow-md" />
      <div className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              Cancellation & Refund Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated on 01-05-2025 11:27:23
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <p className="text-gray-700 mb-4">
              SHABRA SOFTECH SOLUTIONS PRIVATE LIMITED believes in helping its
              customers as far as possible, and has therefore a liberal
              cancellation policy. Under this policy:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                Cancellations will be considered only if the request is made
                immediately after placing the order. However, the cancellation
                request may not be entertained if the orders have been
                communicated to the vendors/merchants and they have initiated
                the process of shipping them.
              </li>
              <li>
                SHABRA SOFTECH SOLUTIONS PRIVATE LIMITED does not accept
                cancellation requests for perishable items like flowers,
                eatables etc. However, refund/replacement can be made if the
                customer establishes that the quality of product delivered is
                not good.
              </li>
              <li>
                In case of receipt of damaged or defective items please report
                the same to our Customer Service team. The request will,
                however, be entertained once the merchant has checked and
                determined the same at his own end. This should be reported
                within 2 days of receipt of the products. In case you feel that
                the product received is not as shown on the site or as per your
                expectations, you must bring it to the notice of our customer
                service within 2 days of receiving the product. The Customer
                Service Team after looking into your complaint will take an
                appropriate decision.
              </li>
              <li>
                In case of complaints regarding products that come with a
                warranty from manufacturers, please refer the issue to them. In
                case of any Refunds approved by the SHABRA SOFTECH SOLUTIONS
                PRIVATE LIMITED, it’ll take 9-15 days for the refund to be
                processed to the end customer.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CancellationPolicy;
