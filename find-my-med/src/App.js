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
  X,
  Menu
} from "lucide-react";

// Header Component with Mobile Navigation
const Header = ({ setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-teal-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Find My Med</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
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

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-teal-700 z-50 md:hidden">
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-6 mt-12">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setMobileMenuOpen(false);
                }}
                className="hover:text-teal-200 transition flex items-center space-x-2 text-xl"
              >
                <Search className="h-6 w-6" /> <span>Home</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage("about");
                  setMobileMenuOpen(false);
                }}
                className="hover:text-teal-200 transition flex items-center space-x-2 text-xl"
              >
                <Info className="h-6 w-6" /> <span>About</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage("contact");
                  setMobileMenuOpen(false);
                }}
                className="hover:text-teal-200 transition flex items-center space-x-2 text-xl"
              >
                <Phone className="h-6 w-6" /> <span>Contact</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage("newsletter");
                  setMobileMenuOpen(false);
                }}
                className="hover:text-teal-200 transition flex items-center space-x-2 text-xl"
              >
                <Newspaper className="h-6 w-6" /> <span>Newsletter</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Landing Page Component
const LandingPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-teal-800 mb-6 leading-tight">
            Connecting You with Your Medications
          </h1>
          <p className="text-lg md:text-xl text-teal-700 mb-8">
            Quickly find pharmacies near you that have the exact medications you
            need. Simple, fast, and reliable healthcare navigation.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => setCurrentPage("search")}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center justify-center"
            >
              Get Started <ChevronRight className="ml-2" />
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className="bg-white text-teal-700 px-6 py-3 rounded-lg border border-teal-600 hover:bg-teal-50 transition flex items-center justify-center"
            >
              Learn More <Info className="ml-2" />
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Heart className="h-8 w-8 text-teal-600 mb-2 mx-auto md:mx-0" />
              <h3 className="font-bold text-teal-800 text-center md:text-left">Quick Search</h3>
              <p className="text-sm text-teal-700 text-center md:text-left">Find meds instantly</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <MapPin className="h-8 w-8 text-teal-600 mb-2 mx-auto md:mx-0" />
              <h3 className="font-bold text-teal-800 text-center md:text-left">Nearby Pharmacies</h3>
              <p className="text-sm text-teal-700 text-center md:text-left">Location-based results</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Cross className="h-8 w-8 text-teal-600 mb-2 mx-auto md:mx-0" />
              <h3 className="font-bold text-teal-800 text-center md:text-left">Accurate Info</h3>
              <p className="text-sm text-teal-700 text-center md:text-left">Reliable medication data</p>
            </div>
          </div>
        </div>

        {/* Illustration Placeholder */}
        <div className="w-full md:w-1/2 hidden md:block">
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

// MapPage Component
const MapPage = ({ address, medicine, pharmacies, onClearSearch }) => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-auto md:h-[500px]">
      {/* Map View */}
      <div className="w-full md:w-2/3 relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
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
      <div className="w-full md:w-1/3 space-y-4 overflow-y-auto md:max-h-[500px] pr-2">
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

// SearchPage Component
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
      <div className="container mx-auto p-4 md:p-8">
        {/* Search Input Section */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-600">Find Your Medication</h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input 
              type="text" 
              placeholder="Enter Address" 
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setShowResults(false);
              }}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <input 
              type="text" 
              placeholder="Enter Medicine Name" 
              value={medicine}
              onChange={(e) => {
                setMedicine(e.target.value);
                setShowResults(false);
              }}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <button 
              onClick={handleSearch}
              className="w-full md:w-auto bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition flex items-center justify-center"
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
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-2xl bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-600">
          About Find My Med
        </h2>
        <p className="text-teal-700 leading-relaxed mb-4">
          Find My Med is an innovative platform designed by <strong>Imperial College London</strong> Students to simplify medication
          access. Our mission is to connect patients with nearby pharmacies that
          have the exact medicines they need during emergency or regular use.(HealthX Initiative)
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-teal-100 p-4 rounded-lg text-center md:text-left">
            <h3 className="font-bold text-teal-600">Quick Search</h3>
            <p className="text-teal-700">Find medicines near you instantly</p>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg text-center md:text-left">
            <h3 className="font-bold text-teal-600">Accurate Results</h3>
            <p className="text-teal-700">
              Precise pharmacy and medicine location
            </p>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg text-center md:text-left">
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
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-600">Contact Us</h2>
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
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-600">
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