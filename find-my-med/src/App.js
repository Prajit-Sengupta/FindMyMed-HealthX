import React, { useState, useEffect, useRef } from "react";
import { Search, Newspaper, Phone, Info, Heart, X, Menu } from "lucide-react";

const Header = ({ setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        width: "100%",
        height: "100%",
        background: "#008080",
        color: "white",
        padding: 16,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="logo.png"
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-blue-200 transition flex items-center space-x-1"
          >
            <Search className="h-5 w-5" /> <span>Home</span>
          </button>
          <button
            onClick={() => setCurrentPage("about")}
            className="hover:text-blue-200 transition flex items-center space-x-1"
          >
            <Info className="h-5 w-5" /> <span>About</span>
          </button>
          <button
            onClick={() => setCurrentPage("blog")}
            className="hover:text-blue-200 transition flex items-center space-x-1"
          >
            <Newspaper className="h-5 w-5" /> <span>Blog</span>
          </button>
          <button
            onClick={() => setCurrentPage("contact")}
            className="hover:text-blue-200 transition flex items-center space-x-1"
          >
            <Phone className="h-5 w-5" /> <span>Contact</span>
          </button>
          <button
            onClick={() => setCurrentPage("waitlist")}
            className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded transition flex items-center space-x-1"
          >
            <Heart className="h-5 w-5" /> <span>Join Waitlist</span>
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
          <div className="fixed inset-0 bg-teal-600 z-50 md:hidden">
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
                className="hover:text-blue-200 transition flex items-center space-x-2 text-xl"
              >
                <Search className="h-6 w-6" /> <span>Home</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage("about");
                  setMobileMenuOpen(false);
                }}
                className="hover:text-blue-200 transition flex items-center space-x-2 text-xl"
              >
                <Info className="h-6 w-6" /> <span>About</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage("contact");
                  setMobileMenuOpen(false);
                }}
                className="hover:text-blue-200 transition flex items-center space-x-2 text-xl"
              >
                <Phone className="h-6 w-6" /> <span>Contact</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage("blog");
                  setMobileMenuOpen(false);
                }}
                className="hover:text-blue-200 transition flex items-center space-x-2 text-xl"
              >
                <Newspaper className="h-6 w-6" /> <span>Blog</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage("waitlist");
                  setMobileMenuOpen(false);
                }}
                className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg transition flex items-center space-x-2 text-xl"
              >
                <Heart className="h-6 w-6" /> <span>Join Waitlist</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
// Footer Component
const Footer = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xjkyowlv", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          interest_type: "newsletter",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubscriptionStatus("Successfully subscribed!");
        setEmail("");
      } else {
        setSubscriptionStatus("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscriptionStatus("An error occurred. Please try again later.");
    }
  };

  const navigationItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "search" }, // Services maps to search/demo page
    { label: "News", page: "blog" }, // News maps to blog page
    { label: "Contact", page: "contact" },
  ];

  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #1e40af 0%, #0891b2 100%)",
        padding: "40px 0 0 0",
        color: "white",
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Section - Newsletter */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "500",
              marginBottom: "30px",
              color: "white",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Join our newsletter to follow our news
          </h3>

          <form
            onSubmit={handleNewsletterSubmit}
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: "1",
                minWidth: "250px",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                background: "transparent",
                color: "white",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                background: "white",
                color: "#1e40af",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe Now
            </button>
          </form>

          {subscriptionStatus && (
            <div
              style={{
                color: subscriptionStatus.includes("Successfully")
                  ? "#4ade80"
                  : "#f87171",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              {subscriptionStatus}
            </div>
          )}

          {/* Logo and Tagline */}
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "8px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              medpals
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "300",
                opacity: "0.9",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Track it. Trace it. Take it
            </div>
          </div>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          ></div>
        </div>

        {/* Right Section - Navigation */}
        <div
          style={{
            minWidth: "150px",
          }}
        >
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "500",
              marginBottom: "20px",
              color: "white",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Our Company
          </h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(item.page)}
                style={{
                  fontSize: "16px",
                  fontWeight: "300",
                  color: "rgba(255, 255, 255, 0.9)",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  padding: "0",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255, 255, 255, 0.9)")
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        style={{
          marginTop: "40px",
          padding: "16px 0",
          background: "rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "300",
            color: "rgba(255, 255, 255, 0.8)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          medpals, 2025 © All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

// Landing Page Component with Updated Colors and Our Product Section
const LandingPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section - Updated to match Figma exactly */}
      <div className="container mx-auto px-4 py-12">
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 18,
            display: "inline-flex",
            flexWrap: "wrap",
          }}
        >
          {/* Left Side - Text Content */}
          <div
            style={{
              width: "100%",
              maxWidth: 552,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 20,
              display: "inline-flex",
            }}
          >
            {/* Main Heading */}
            <div
              style={{
                width: "100%",
                maxWidth: 562,
                color: "#005AB5",
                fontSize: "clamp(32px, 6vw, 48px)",
                fontFamily: "Manrope, sans-serif",
                fontWeight: "800",
                lineHeight: "clamp(40px, 7vw, 56px)",
                wordWrap: "break-word",
              }}
            >
              Track it. Trace it. Take it
            </div>

            {/* Description Text */}
            <div style={{ alignSelf: "stretch" }}>
              <span
                style={{
                  color: "black",
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "700",
                  lineHeight: "clamp(28px, 4vw, 36px)",
                  wordWrap: "break-word",
                }}
              >
                medpals
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  lineHeight: "clamp(28px, 4vw, 36px)",
                  wordWrap: "break-word",
                }}
              >
                {" "}
                connects you to the medication you need. Quickly, easily, and
                with care. Whether it's a life-saving prescription or your daily
                routine, we make sure you're supported every step of the way.
                Because access to your meds shouldn't be a fight—it should be a
                given.
              </span>
            </div>

            {/* Buttons */}
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 20,
                display: "inline-flex",
                flexWrap: "wrap",
              }}
            >
              {/* Learn More Button */}
              <button
                onClick={() => {
                  const productSection = document.getElementById(
                    "our-product-section"
                  );
                  if (productSection) {
                    productSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 10,
                  paddingBottom: 10,
                  background:
                    "radial-gradient(ellipse 95.59% 77.23% at 98.53% 51.06%, #005AB5 0%, #008080 100%)",
                  borderRadius: 100,
                  outline: "2px #005AB5 solid",
                  outlineOffset: "-2px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 20,
                  display: "flex",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Learn More
                </div>
              </button>

              {/* Demo Button */}
              <button
                onClick={() => setCurrentPage("search")}
                style={{
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 100,
                  outline: "2px #005AB5 solid",
                  outlineOffset: "-2px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 20,
                  display: "flex",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    color: "#005AB5",
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Demo
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Image Illustration */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
              }}
            >
              {/* Background gradient blob */}
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "linear-gradient(135deg, rgba(0, 90, 181, 0.1) 0%, rgba(0, 128, 128, 0.1) 100%)",
                  borderRadius: "24px",
                  transform: "rotate(6deg)",
                  opacity: "0.8",
                }}
              ></div>

              {/* Main image container */}
              <div
                style={{
                  position: "relative",
                  background:
                    "linear-gradient(135deg, rgba(0, 90, 181, 0.05) 0%, rgba(0, 128, 128, 0.05) 100%)",
                  borderRadius: "24px",
                  padding: "32px",
                  minHeight: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Replace this img src with your actual image */}
                <img
                  src="landing_image.png"
                  alt="Medical illustration showing medication bottles, pills and healthcare symbols"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "450px",
                    objectFit: "contain",
                    borderRadius: "12px",
                  }}
                  onError={(e) => {
                    // Fallback if image doesn't load - show the original illustration
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />

                {/* Fallback illustration (hidden by default) */}
                <div
                  style={{
                    display: "none",
                    width: "100%",
                    height: "400px",
                    background:
                      "linear-gradient(135deg, #A7CCED 0%, #005AB5 100%)",
                    borderRadius: "12px",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "64px",
                    }}
                  >
                    💊🏥⚕️
                  </div>
                  <div
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    Medical Illustration
                  </div>
                </div>

                {/* Decorative elements */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "#005AB5",
                    opacity: "0.3",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "32px",
                    right: "32px",
                    width: "16px",
                    height: "16px",
                    background: "#008080",
                    borderRadius: "50%",
                    opacity: "0.4",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "48px",
                    left: "32px",
                    width: "24px",
                    height: "24px",
                    background: "#005AB5",
                    borderRadius: "50%",
                    opacity: "0.3",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    right: "48px",
                    color: "#008080",
                    opacity: "0.25",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Banner - Full Width */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-teal-50 py-8">
        <div className="container mx-auto px-4">
          <div
            style={{
              width: "100%",
              paddingLeft: "clamp(20px, 5vw, 82px)",
              paddingRight: "clamp(20px, 5vw, 82px)",
              paddingTop: 24,
              paddingBottom: 24,
              background: "#EDF5FB",
              borderRadius: 180,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "clamp(20px, 10vw, 142px)",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                minWidth: 200,
                color: "#008080",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontFamily: "Manrope, sans-serif",
                fontWeight: "800",
                lineHeight: "56px",
                wordWrap: "break-word",
              }}
            >
              We're rolling out soon.
            </div>
            <div
              style={{
                flex: "1",
                minWidth: 300,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 20,
                display: "flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: "400",
                    lineHeight: "36px",
                    wordWrap: "break-word",
                  }}
                >
                  We're launching in selected areas soon. Join the waitlist and
                  be the first to know when{" "}
                </span>
                <span
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: "700",
                    lineHeight: "36px",
                    wordWrap: "break-word",
                  }}
                >
                  medpals
                </span>
                <span
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: "400",
                    lineHeight: "36px",
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  is available near you.
                </span>
              </div>
              <div
                style={{
                  width: 177,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: 12,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 47,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 28,
                    display: "flex",
                  }}
                >
                  <button
                    onClick={() => setCurrentPage("waitlist")}
                    style={{
                      height: 47,
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingTop: 10,
                      paddingBottom: 10,
                      background: "#005AB5",
                      borderRadius: 48,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                      display: "flex",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#004A9F")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "#005AB5")
                    }
                  >
                    <div
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: "700",
                        lineHeight: "32px",
                        wordWrap: "break-word",
                      }}
                    >
                      Join Waitlist
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Product Section */}
      <div id="our-product-section" className="w-full bg-white">
        {/* Main Title */}
        <div className="text-center py-12 md:py-16">
          <h2
            style={{
              color: "#005AB5",
              fontSize: "clamp(32px, 5vw, 44px)",
              fontFamily: "Manrope, sans-serif",
              fontWeight: "800",
              lineHeight: "1.3",
            }}
          >
            Our Product
          </h2>
        </div>

        {/* Step 1: Sofia's Problem + Character */}
        <div className="w-full bg-gradient-to-r from-blue-50 to-teal-50 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-12">
              <h3
                style={{
                  color: "#005AB5",
                  fontSize: "clamp(20px, 4vw, 32px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  marginBottom: "16px",
                }}
              >
                "I knew I was down to my last dose. I just didn't think I'd have
                to fight to find the next one."
              </h3>
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(14px, 2.5vw, 20px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.7",
                }}
              >
                Meet Sofia, 26, living with epilepsy in London. She manages her
                condition carefully but this time, her repeat prescription
                didn't arrive.
                <br />
                It's late. Her local pharmacy is closed.
              </p>
            </div>

            {/* Character Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-7xl sm:text-8xl md:text-9xl">👩🏻‍⚕️</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: She opens medpals */}
        <div className="w-full bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center justify-between max-w-7xl">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pl-8 xl:pl-12">
              <h3
                style={{
                  color: "#005AB5",
                  fontSize: "clamp(20px, 4vw, 32px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  marginBottom: "16px",
                }}
              >
                She opens medpals.
              </h3>
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(14px, 2.5vw, 20px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.7",
                }}
              >
                No panic. No guesswork. Just action.
                <br />
                Sofia types in: Levetiracetam 500mg
                <br />
                Or she could simply snap a photo of the box.
              </p>
            </div>

            {/* Phone Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src="app_search_screen.png"
                    alt="Phone with search screen"
                    className="w-40 h-72 sm:w-44 sm:h-80 md:w-48 md:h-84 object-cover rounded-2xl shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Find Your Medication */}
        <div className="w-full bg-gradient-to-r from-blue-50 to-teal-50 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-12">
              <h3
                style={{
                  color: "#005AB5",
                  fontSize: "clamp(20px, 4vw, 32px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  marginBottom: "16px",
                }}
              >
                "Find Your Medication" – smart search and image scan options
              </h3>
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(14px, 2.5vw, 20px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.7",
                }}
              >
                She adds her postcode.
              </p>
            </div>

            {/* Phone Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src="app_step2.png"
                    alt="Phone with location screen"
                    className="w-40 h-72 sm:w-44 sm:h-80 md:w-48 md:h-84 object-cover rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Within seconds */}
        <div className="w-full bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center justify-between max-w-7xl">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pl-8 xl:pl-12">
              <h3
                style={{
                  color: "#005AB5",
                  fontSize: "clamp(20px, 4vw, 32px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  marginBottom: "16px",
                }}
              >
                Within seconds, she sees nearby pharmacies.
              </h3>
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(14px, 2.5vw, 20px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.7",
                }}
              >
                Some are open late. Some are out of stock.
                <br />
                Two are in stock and close by.
              </p>
            </div>

            {/* Phone Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src="app_step3.png"
                    alt="Phone with map screen"
                    className="w-40 h-72 sm:w-44 sm:h-80 md:w-48 md:h-84 object-cover rounded-2xl shadow-xl transform rotate-6 hover:rotate-12 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: Final - Sofia's Success */}
        <div className="w-full bg-gradient-to-r from-blue-50 to-teal-50 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-12">
              <h3
                style={{
                  color: "#005AB5",
                  fontSize: "clamp(20px, 4vw, 32px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  marginBottom: "16px",
                }}
              >
                Sofia taps "Directions", throws on a coat, and walks just 600
                metres.
              </h3>
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(14px, 2.5vw, 20px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.7",
                }}
              >
                Sofia taps "Directions", throws on a coat, and walks just 600
                metres. The pharmacist hands her an emergency supply. She
                breathes out—for now, she's safe.
              </p>
            </div>

            {/* Phone Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src="app_step4.png"
                    alt="Phone with success screen"
                    className="w-40 h-72 sm:w-44 sm:h-80 md:w-48 md:h-84 object-cover rounded-2xl shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-6">
              Want a Sneak Peek? Try the Demo!
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => setCurrentPage("search")}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-lg text-lg"
              >
                Demo
              </button>
              <button
                onClick={() => setCurrentPage("waitlist")}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-teal-600 transition shadow-lg text-lg"
              >
                Join The Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// GoogleMap Component - Updated colors
const GoogleMap = ({ address, pharmacies, mapRef, setMapRef }) => {
  const mapContainerRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load Google Maps API script
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places,geometry&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = () => {
          if (mapContainerRef.current) {
            initializeMap();
          }
        };
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    loadGoogleMapsScript();

    return () => {
      delete window.initMap;
    };
  }, []);

  const initializeMap = () => {
    if (!mapContainerRef.current) return;

    const map = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: 51.5074, lng: -0.1278 },
      zoom: 14,
    });

    setMapRef(map);
    setLoading(false);
  };

  useEffect(() => {
    if (!mapRef || !address || !window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        mapRef.setCenter(location);

        markers.forEach((marker) => marker.setMap(null));
        const newMarkers = [];

        const userMarker = new window.google.maps.Marker({
          position: location,
          map: mapRef,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            scaledSize: new window.google.maps.Size(40, 40),
          },
          title: "Your Location",
        });
        newMarkers.push(userMarker);

        const service = new window.google.maps.places.PlacesService(mapRef);
        const request = {
          location: location,
          radius: 5000,
          keyword: "pharmacy",
          type: "pharmacy",
        };

        service.nearbySearch(request, (results, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results &&
            results.length > 0
          ) {
            const pharmaciesWithDistance = results.map((place) => {
              const placeLocation = place.geometry.location;
              const distanceInMeters =
                window.google.maps.geometry.spherical.computeDistanceBetween(
                  location,
                  placeLocation
                );
              const distanceInMiles = (distanceInMeters / 1609.34).toFixed(1);

              return {
                place,
                distance: parseFloat(distanceInMiles),
                distanceText: `${distanceInMiles} miles`,
                location: placeLocation,
              };
            });

            pharmaciesWithDistance.sort((a, b) => a.distance - b.distance);
            const nearbyPharmacies = pharmaciesWithDistance.slice(0, 3);

            const updatedPharmacies = nearbyPharmacies.map(
              (pharmacy, index) => {
                const marker = new window.google.maps.Marker({
                  position: pharmacy.location,
                  map: mapRef,
                  icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    scaledSize: new window.google.maps.Size(40, 40),
                  },
                  label: {
                    text: (index + 1).toString(),
                    color: "white",
                    fontSize: "14px",
                  },
                  title: pharmacy.place.name,
                });

                newMarkers.push(marker);

                const infoWindow = new window.google.maps.InfoWindow({
                  content: `<div><strong>${pharmacy.place.name}</strong><br/>${pharmacy.place.vicinity}<br/>${pharmacy.distanceText}</div>`,
                });

                marker.addListener("click", () => {
                  infoWindow.open(mapRef, marker);
                });

                const hasStock = Math.random() > 0.5;

                return {
                  name: pharmacy.place.name,
                  address: pharmacy.place.vicinity,
                  distance: pharmacy.distanceText,
                  hasStock,
                  location: {
                    lat: pharmacy.location.lat(),
                    lng: pharmacy.location.lng(),
                  },
                };
              }
            );

            if (pharmacies.setPharmacies) {
              pharmacies.setPharmacies(updatedPharmacies);
            }
          } else {
            console.error("Places API error or no pharmacies found:", status);
            if (pharmacies.setPharmacies) {
              pharmacies.setPharmacies([]);
            }
          }
        });

        setMarkers(newMarkers);
      } else {
        console.error("Geocoding error:", status);
      }
    });
  }, [address, mapRef]);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      {loading && (
        <div className="flex items-center justify-center h-full bg-gray-100">
          <p className="text-blue-600 font-semibold">Loading map...</p>
        </div>
      )}
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
};

// MapPage Component with updated colors
const MapPage = ({
  address,
  medicine,
  pharmacies,
  setPharmacies,
  onClearSearch,
}) => {
  const [mapRef, setMapRef] = useState(null);

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-auto md:h-[500px]">
      <div className="w-full md:w-2/3 relative bg-gray-100 rounded-lg overflow-hidden shadow-lg h-64 md:h-full">
        <GoogleMap
          address={address}
          pharmacies={{ list: pharmacies, setPharmacies }}
          mapRef={mapRef}
          setMapRef={setMapRef}
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={onClearSearch}
            className="bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-50 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/3 space-y-4 overflow-y-auto md:max-h-[500px] pr-2">
        <div className="bg-white rounded-lg shadow-lg p-4 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-700 mb-2">
            Search Details
          </h3>
          <p className="text-blue-600">
            <span className="font-semibold">Address:</span> {address}
          </p>
          <p className="text-blue-600">
            <span className="font-semibold">Medicine:</span> {medicine}
          </p>
        </div>

        {pharmacies.map((pharmacy, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              pharmacy.hasStock
                ? "bg-green-50 border-2 border-green-300"
                : "bg-red-50 border-2 border-red-300"
            } relative`}
          >
            <div className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-blue-600 font-bold">
              {index + 1}
            </div>
            <h4 className="font-bold text-lg text-blue-800">{pharmacy.name}</h4>
            <p className="text-blue-700">{pharmacy.address}</p>
            <p className="text-blue-600">Distance: {pharmacy.distance}</p>
            <div
              className={`mt-2 font-semibold ${
                pharmacy.hasStock ? "text-green-700" : "text-red-700"
              }`}
            >
              {pharmacy.hasStock
                ? "✅ Medication in Stock"
                : "❌ Medication Not Available"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// SearchPage Component with updated colors
const SearchPage = () => {
  const [address, setAddress] = useState("");
  const [medicine, setMedicine] = useState("");
  const [pharmacies, setPharmacies] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const addressInputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    const initAutocomplete = () => {
      if (window.google && addressInputRef.current && !autocomplete) {
        try {
          const autocompleteInstance =
            new window.google.maps.places.Autocomplete(
              addressInputRef.current,
              { types: ["geocode"] }
            );

          autocompleteInstance.addListener("place_changed", () => {
            const place = autocompleteInstance.getPlace();
            if (place && place.formatted_address) {
              setAddress(place.formatted_address);
            }
          });

          setAutocomplete(autocompleteInstance);
        } catch (error) {
          console.error("Error initializing autocomplete:", error);
        }
      }
    };

    if (window.google && window.google.maps && window.google.maps.places) {
      initAutocomplete();
    } else {
      const checkGoogleMapsInterval = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          initAutocomplete();
          clearInterval(checkGoogleMapsInterval);
        }
      }, 500);

      return () => clearInterval(checkGoogleMapsInterval);
    }
  }, [addressInputRef.current, window.google]);

  const handleSearch = () => {
    if (address.trim() && medicine.trim()) {
      setIsSearching(true);
      setShowResults(true);
    } else {
      alert("Please enter both address and medicine name");
    }
  };

  const handleClearSearch = () => {
    setShowResults(false);
    setAddress("");
    setMedicine("");
    setPharmacies([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex">
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6 border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Find Your Medication
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              ref={addressInputRef}
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setShowResults(false);
              }}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Enter Medicine Name"
              value={medicine}
              onChange={(e) => {
                setMedicine(e.target.value);
                setShowResults(false);
              }}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-teal-500 text-white p-3 rounded-lg hover:from-blue-700 hover:to-teal-600 transition flex items-center justify-center shadow-lg"
              disabled={isSearching}
            >
              <Search className="mr-2" /> Search
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5 text-blue-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> Currently this is a Demo Website. The
                data is not real.
              </p>
            </div>
          </div>
        </div>

        {showResults && (
          <MapPage
            address={address}
            medicine={medicine}
            pharmacies={pharmacies}
            setPharmacies={setPharmacies}
            onClearSearch={handleClearSearch}
          />
        )}
      </div>
    </div>
  );
};

// Waitlist Page Component with updated colors
const WaitlistPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postcode: "",
    reason: "",
    ideas: "",
    updates: true,
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xjkyowlv", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          interest_type: "waitlist",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmissionStatus(
          "You've been added to our waitlist! We'll notify you when MedPals launches in your area."
        );
        // Reset form data
        setFormData({
          name: "",
          email: "",
          postcode: "",
          reason: "",
          ideas: "",
          updates: true,
        });
      } else {
        setSubmissionStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Join The Waitlist
        </h2>
        <p className="text-gray-700 mb-6">
          Be the first to know when MedPals launches in your area. Join our
          waitlist for early access and updates.
        </p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-blue-700 mb-1 font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-blue-700 mb-1 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="postcode"
              className="block text-blue-700 mb-1 font-medium"
            >
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              placeholder="Your postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <p className="text-sm text-blue-600 mt-1">
              This helps us prioritize areas for our initial launch
            </p>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-blue-700 mb-1 font-medium"
            >
              Why are you interested in MedPals?
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a reason</option>
              <option value="personal">For personal medication needs</option>
              <option value="family">For family medication needs</option>
              <option value="professional">
                I'm a healthcare professional
              </option>
              <option value="business">For business opportunities</option>
              <option value="other">Other reason</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="ideas"
              className="block text-blue-700 mb-1 font-medium"
            >
              Ideas & Features
            </label>
            <textarea
              id="ideas"
              name="ideas"
              placeholder="Have any ideas or features you would love to see? Let us know!"
              value={formData.ideas}
              onChange={handleChange}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24 resize-none"
              rows={3}
            />
            <p className="text-sm text-blue-600 mt-1">
              Your feedback helps us build the features that matter most to you
            </p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="updates"
              name="updates"
              checked={formData.updates}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="updates" className="ml-2 block text-blue-700">
              Keep me updated on MedPals news and developments
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white p-3 rounded-lg hover:from-blue-700 hover:to-teal-600 transition font-medium shadow-lg"
          >
            Join Waitlist
          </button>

          {submissionStatus && (
            <div
              className={`mt-4 p-3 rounded-lg text-center ${
                submissionStatus.includes("added to our waitlist")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submissionStatus}
            </div>
          )}

          <p className="text-sm text-gray-600 mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy.
            We'll only use your information to provide updates about MedPals.
          </p>
        </div>
      </div>
    </div>
  );
};
// Blog Page Component with updated colors
const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-2xl bg-white p-6 md:p-10 rounded-xl shadow-lg text-center border border-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Our Blog
        </h2>
        <div className="flex justify-center mb-6">
          <Newspaper className="h-16 w-16 text-blue-500" />
        </div>
        <p className="text-xl font-bold text-blue-700 mb-4">Coming Soon!</p>
        <p className="text-gray-600">
          We're working on bringing you the latest healthcare insights,
          medication news, and helpful resources. Check back soon for valuable
          content to help you manage your health.
        </p>
      </div>
    </div>
  );
};

// About Page Component with updated colors
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl bg-white p-6 md:p-10 rounded-xl shadow-lg border border-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          About Medpals
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Medpals is an innovative platform designed by{" "}
          <strong>Imperial College London</strong> Students to simplify
          medication access. Our mission is to connect patients with nearby
          pharmacies that have the exact medicines they need during emergency or
          regular use.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center md:text-left border border-blue-200">
            <h3 className="font-bold text-blue-600">Quick Search</h3>
            <p className="text-blue-700">Find medicines near you instantly</p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg text-center md:text-left border border-teal-200">
            <h3 className="font-bold text-teal-600">Accurate Results</h3>
            <p className="text-teal-700">
              Precise pharmacy and medicine location
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center md:text-left border border-blue-200">
            <h3 className="font-bold text-blue-600">User Friendly</h3>
            <p className="text-blue-700">Simple and intuitive interface</p>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent text-center">
            Meet Our Founders
          </h3>

          {/* Group Photo */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg shadow-lg mb-6 border border-blue-100">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
              <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-teal-100 h-64 md:h-80">
                <img
                  src="Founders.jpeg"
                  alt="Medpals Founding Team"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg text-blue-700 mb-2">
                The Founding Team
              </h4>
              <p className="text-gray-700 mb-4">
                Our team consists of six passionate Imperial College London and
                Royal College of Arts students from diverse academic backgrounds
                including Computer Science, Medicine, UI/UX and Business. United
                by a shared vision to revolutionize medication accessibility, we
                created Medpals as part of the HealthX Initiative.
              </p>
              <p className="text-gray-700">
                Together, we combine technical expertise, healthcare knowledge,
                and entrepreneurial spirit to tackle the challenges of
                medication access. Our mission is to ensure that everyone can
                quickly find the medications they need, when they need them.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg shadow-lg border border-blue-100">
            <h4 className="font-bold text-lg text-blue-700 mb-4 text-center">
              Our Vision
            </h4>
            <p className="text-gray-700 mb-4">
              We envision a world where medication access is never a barrier to
              health and wellbeing. By bridging the gap between patients and
              pharmacies, we aim to reduce the stress and uncertainty that often
              accompanies the search for critical medications.
            </p>
            <p className="text-gray-700">
              Medpals represents our commitment to leveraging technology for
              healthcare solutions that make a meaningful difference in people's
              everyday lives. As students at Imperial College London, we're
              dedicated to continuous innovation and improvement of our platform
              based on user feedback and evolving healthcare needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component with updated colors
const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mnnpzdwa", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        setSubmissionStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border-2 border-blue-200 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white p-3 rounded-lg hover:from-blue-700 hover:to-teal-600 transition shadow-lg"
          >
            Send Message
          </button>
          {submissionStatus && (
            <div
              className={`mt-4 p-3 rounded-lg text-center ${
                submissionStatus.includes("successfully")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submissionStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// Newsletter Subscription Page with updated colors
const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xjkyowlv", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubscriptionStatus("Successfully subscribed to our newsletter!");
        setEmail("");
      } else {
        setSubscriptionStatus("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscriptionStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Subscribe to Our Newsletter
        </h2>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white p-3 rounded-lg hover:from-blue-700 hover:to-teal-600 transition shadow-lg"
          >
            Subscribe
          </button>
          {subscriptionStatus && (
            <div
              className={`mt-4 p-3 rounded-lg text-center ${
                subscriptionStatus.includes("Successfully")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {subscriptionStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// GoogleMapsApiScript component
const GoogleMapsApiScript = () => {
  useEffect(() => {
    if (
      !window.googleMapsLoaded &&
      !document.getElementById("google-maps-script")
    ) {
      window.googleMapsLoaded = true;
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places,geometry`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return null;
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
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage />;
      case "newsletter":
        return <NewsletterPage />;
      case "waitlist":
        return <WaitlistPage />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <GoogleMapsApiScript />
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default FindMyMedApp;
