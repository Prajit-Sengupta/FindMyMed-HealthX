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

// Search Page Component
const SearchPage = () => {
  const [address, setAddress] = useState("");
  const [medicine, setMedicine] = useState("");

  const handleSearch = () => {
    // Placeholder for search functionality
    console.log("Searching for", medicine, "near", address);
  };

  return (
    <div className="min-h-screen bg-teal-50 flex">
      <div className="container mx-auto flex items-center justify-between p-8">
        {/* Search Section */}
        <div className="w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">
            Find Your Medication
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Enter Medicine Name"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <button
              onClick={handleSearch}
              className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition flex items-center justify-center"
            >
              <Search className="mr-2" /> Search Nearby Pharmacies
            </button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-1/2 pl-8">
          <div className="bg-teal-100 h-[500px] rounded-xl flex items-center justify-center">
            <p className="text-teal-600">Map Placeholder</p>
          </div>
        </div>
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
          Find My Med is an innovative platform designed to simplify medication
          access. Our mission is to connect patients with nearby pharmacies that
          have the exact medicines they need.
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
