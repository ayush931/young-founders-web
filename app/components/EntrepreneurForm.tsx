import { useState, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface EntrepreneurFormProps {
  title?: string;
}

const EntrepreneurForm = ({ title = "Apply Now" }: EntrepreneurFormProps) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: ''
  });
  
  // Form submission status
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.interest) {
      toast.error('Please fill out all fields');
      return;
    }

    // Set loading state
    setStatus('loading');
    
    try {
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Success
        setStatus('success');
        toast.success('Information request submitted successfully!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: ''
        });
      } else {
        // Error from server
        setStatus('error');
        toast.error(data.message || 'Failed to submit form');
      }
    } catch (error) {
      // Client-side error
      console.error('Error submitting form:', error);
      setStatus('error');
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h4 className="text-xl font-bold mb-4 text-center">{title}</h4>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full bg-gray-700 border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f57d56] text-white"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full bg-gray-700 border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f57d56] text-white"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full bg-gray-700 border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f57d56] text-white"
        />
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="w-full bg-gray-700 border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f57d56] text-white"
        >
          <option value="" disabled>
            Select Training Interest
          </option>
          <option value="Startup Fundamentals">Startup Fundamentals</option>
          <option value="Marketing Strategies">Marketing Strategies</option>
          <option value="Funding and Investment">Funding and Investment</option>
          <option value="Networking and Partnerships">Networking and Partnerships</option>
        </select>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#f57d56] hover:bg-[#e06a47] text-white font-medium py-3 rounded-md transition-colors duration-300"
        >
          {status === "loading" ? "Sending..." : "Request Information"}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default EntrepreneurForm;