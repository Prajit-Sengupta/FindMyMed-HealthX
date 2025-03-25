import React, { useState } from "react";
import {
  MapPin,
  Search,
  Newspaper,
  Phone,
  Info,
  ChevronRight,
  Cross,
  Heart,
  X
} from "lucide-react";

// Header Component
const Header = ({ setCurrentPage }) => {
  return (
    <header className="bg-teal-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Find My Med</h1>
        </div>
        <nav className="flex space-x-6">
          <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-teal-200 transition flex items-center space-x-1"
          >
            <Search className="h-5 w-5" /> <span>Home</span>
          </button>
          <button
            onClick={() => setCurrentPage("about")}
            className="hover:text-teal-200 transition flex items-center space-x-1"
          >
            <Info className="h-5 w-5" /> <span>About</span>
          </button>
          <button
            onClick={() => setCurrentPage("contact")}
            className="hover:text-teal-200 transition flex items-center space-x-1"
          >
            <Phone className="h-5 w-5" /> <span>Contact</span>
          </button>
          <button
            onClick={() => setCurrentPage("newsletter")}
            className="hover:text-teal-200 transition flex items-center space-x-1"
          >
            <Newspaper className="h-5 w-5" /> <span>Newsletter</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

// Landing Page Component
const LandingPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Text Content */}
        <div className="w-1/2 pr-12">
          <h1 className="text-5xl font-bold text-teal-800 mb-6 leading-tight">
            Connecting You with Your Medications
          </h1>
          <p className="text-xl text-teal-700 mb-8">
            Quickly find pharmacies near you that have the exact medications you
            need. Simple, fast, and reliable healthcare navigation.
          </p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage("search")}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center"
            >
              Get Started <ChevronRight className="ml-2" />
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className="bg-white text-teal-700 px-6 py-3 rounded-lg border border-teal-600 hover:bg-teal-50 transition flex items-center"
            >
              Learn More <Info className="ml-2" />
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Heart className="h-8 w-8 text-teal-600 mb-2" />
              <h3 className="font-bold text-teal-800">Quick Search</h3>
              <p className="text-sm text-teal-700">Find meds instantly</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <MapPin className="h-8 w-8 text-teal-600 mb-2" />
              <h3 className="font-bold text-teal-800">Nearby Pharmacies</h3>
              <p className="text-sm text-teal-700">Location-based results</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Cross className="h-8 w-8 text-teal-600 mb-2" />
              <h3 className="font-bold text-teal-800">Accurate Info</h3>
              <p className="text-sm text-teal-700">Reliable medication data</p>
            </div>
          </div>
        </div>

        {/* Illustration Placeholder */}
        <div className="w-1/2">
          <div className="bg-teal-100 rounded-xl p-8 flex items-center justify-center">
            <img
              src="image.png"
              alt="Healthcare Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
// SVG Map Placeholder
const MapPlaceholder = ({ pharmacies }) => {
  return (
    <svg 
      viewBox="0 0 600 400" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-full"
    >
      {/* Background */}
      <rect width="600" height="400" fill="#e6f3f3" />
      
      {/* Grid lines */}
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <line 
            x1={i * 60} 
            y1="0" 
            x2={i * 60} 
            y2="400" 
            stroke="#b0d4d4" 
            strokeWidth="1" 
          />
          <line 
            x1="0" 
            y1={i * 40} 
            x2="600" 
            y2={i * 40} 
            stroke="#b0d4d4" 
            strokeWidth="1" 
          />
        </React.Fragment>
      ))}
      
      {/* Pharmacy Markers */}
      {pharmacies.map((pharmacy, index) => {
        const x = Math.random() * 500 + 50;
        const y = Math.random() * 300 + 50;
        return (
          <React.Fragment key={index}>
            {/* Location Pin */}
            <circle 
              cx={x} 
              cy={y} 
              r="10" 
              fill={pharmacy.hasStock ? "#10b981" : "#ef4444"} 
              stroke="white" 
              strokeWidth="3" 
            />
            {/* Number Label */}
            <text 
              x={x} 
              y={y} 
              textAnchor="middle" 
              dy="4" 
              fill="white" 
              fontWeight="bold" 
              fontSize="8"
            >
              {index + 1}
            </text>
          </React.Fragment>
        );
      })}
    </svg>
  );
};

// Interactive Map Component
const MapPage = ({ address, medicine, pharmacies, onClearSearch }) => {
  return (
    <div className="flex space-x-4 h-[500px]">
      {/* Map View */}
      <div className="w-2/3 relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <MapPlaceholder pharmacies={pharmacies} />
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClearSearch}
            className="bg-white text-teal-600 p-2 rounded-full shadow-lg hover:bg-teal-50 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Pharmacy List */}
      <div className="w-1/3 space-y-4 overflow-y-auto max-h-[500px] pr-2">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-xl font-bold text-teal-700 mb-2">Search Details</h3>
          <p className="text-teal-600">
            <span className="font-semibold">Address:</span> {address}
          </p>
          <p className="text-teal-600">
            <span className="font-semibold">Medicine:</span> {medicine}
          </p>
        </div>

        {pharmacies.map((pharmacy, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg ${
              pharmacy.hasStock 
                ? 'bg-green-50 border-2 border-green-300' 
                : 'bg-red-50 border-2 border-red-300'
            } relative`}
          >
            <div className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-teal-600 font-bold">
              {index + 1}
            </div>
            <h4 className="font-bold text-lg text-teal-800">{pharmacy.name}</h4>
            <p className="text-teal-700">{pharmacy.address}</p>
            <p className="text-teal-600">Distance: {pharmacy.distance}</p>
            <div className={`mt-2 font-semibold ${pharmacy.hasStock ? 'text-green-700' : 'text-red-700'}`}>
              {pharmacy.hasStock 
                ? '✅ Medication in Stock' 
                : '❌ Medication Not Available'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Search Page Component
const SearchPage = () => {
  const [address, setAddress] = useState('');
  const [medicine, setMedicine] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Mock pharmacies data
  const mockPharmacies = [
    { 
      name: "Wellness Pharmacy", 
      address: "123 Health St", 
      distance: "0.5 miles",
      hasStock: Math.random() > 0.5
    },
    { 
      name: "City Drug Store", 
      address: "456 Wellness Ave", 
      distance: "1.2 miles",
      hasStock: Math.random() > 0.5
    },
    { 
      name: "QuickMed Pharmacy", 
      address: "789 Care Blvd", 
      distance: "2.0 miles",
      hasStock: Math.random() > 0.5
    }
  ];

  const handleSearch = () => {
    // Validate inputs
    if (address.trim() && medicine.trim()) {
      setShowResults(true);
    } else {
      alert('Please enter both address and medicine name');
    }
  };

  const handleClearSearch = () => {
    setShowResults(false);
    setAddress('');
    setMedicine('');
  };

  return (
    <div className="min-h-screen bg-teal-50 flex">
      <div className="container mx-auto p-8">
        {/* Search Input Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Find Your Medication</h2>
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="Enter Address" 
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setShowResults(false);
              }}
              className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <input 
              type="text" 
              placeholder="Enter Medicine Name" 
              value={medicine}
              onChange={(e) => {
                setMedicine(e.target.value);
                setShowResults(false);
              }}
              className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <button 
              onClick={handleSearch}
              className="bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition flex items-center justify-center"
            >
              <Search className="mr-2" /> Search
            </button>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <MapPage 
            address={address} 
            medicine={medicine} 
            pharmacies={mockPharmacies}
            onClearSearch={handleClearSearch}
          />
        )}
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-teal-600">
          About Find My Med
        </h2>
        <p className="text-teal-700 leading-relaxed mb-4">
          Find My Med is an innovative platform designed by <strong>Imperial College London</strong> Students to simplify medication
          access. Our mission is to connect patients with nearby pharmacies that
          have the exact medicines they need during emergency or regular use.(HealthX Initiative)
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-teal-100 p-4 rounded-lg">
            <h3 className="font-bold text-teal-600">Quick Search</h3>
            <p className="text-teal-700">Find medicines near you instantly</p>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg">
            <h3 className="font-bold text-teal-600">Accurate Results</h3>
            <p className="text-teal-700">
              Precise pharmacy and medicine location
            </p>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg">
            <h3 className="font-bold text-teal-600">User Friendly</h3>
            <p className="text-teal-700">Simple and intuitive interface</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting contact form", { email, message });
  };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-teal-600">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

// Newsletter Subscription Page
const NewsletterPage = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
  };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-teal-600">
          Subscribe to Our Newsletter
        </h2>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

// Main App Component
const FindMyMedApp = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case "search":
        return <SearchPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "newsletter":
        return <NewsletterPage />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default FindMyMedApp;