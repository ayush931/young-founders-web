import { Send } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute left-0 top-0 w-32 h-32 bg-orange-100 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute right-0 bottom-0 w-40 h-40 bg-orange-100 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
          
          <div className="md:w-1/2 mb-8 md:mb-0 relative z-10">
            <h2 className="text-3xl font-bold text-black mb-4">Stay Updated with Founder Resources</h2>
            <p className="text-gray-600 mb-6">
              Join our newsletter for exclusive content, founder stories, and early access to new courses. We &apos;ll help you stay ahead in your entrepreneurial journey.
            </p>
            <ul className="space-y-2">
              {[
                "Weekly technical insights for founders",
                "Funding opportunities and investor connections",
                "Free resources and templates",
                "Early access to new courses and workshops"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#f57d56] rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-5/12 relative z-10">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">Subscribe to Our Newsletter</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f57d56]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f57d56]"
                  />
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#f57d56] border-gray-300 rounded focus:ring-[#f57d56]"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to receive emails about relevant courses and resources
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  Subscribe Now
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;