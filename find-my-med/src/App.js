import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Newspaper,
  Phone,
  Info,
  Heart,
  X,
  Menu,
  Home,
} from "lucide-react";

// Define consistent color variables for easier management and matching
const colors = {
  primaryBlue: "#005AB5", // Darker blue for headings, buttons
  accentTeal: "#008080", // Teal for header, accents
  lightBackground: "#EDF5FB", // Light blue-gray for sections/banners
  gradientStart: "#1e40af", // Deeper blue for footer gradient start
  gradientEnd: "#0891b2", // Brighter teal for footer gradient end
  lightBlueShade: "rgb(237, 245, 251)", // For very light backgrounds
  white: "white",
  black: "black",
  grayText: "#4B5563", // A slightly softer black for body text
  borderLight: "#BFDBFE", // Light blue for borders
  hoverBlue: "#004A9F", // Darker blue for button hover
};

const Header = ({ setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        width: "100%",
        height: "100%",
        background: colors.accentTeal, // Header background
        color: colors.white,
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
            <Home className="h-5 w-5" /> <span>Home</span>
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
            onClick={() => setCurrentPage("search")} /* DEMO Button */
            className="hover:text-blue-200 transition flex items-center space-x-1"
          >
            <Search className="h-5 w-5" /> <span>Demo</span>
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
          <div
            className="fixed inset-0"
            style={{ background: colors.accentTeal, zIndex: 50 }}
          >
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
                <Home className="h-6 w-6" /> <span>Home</span>
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
                  setCurrentPage("blog");
                  setMobileMenuOpen(false);
                }}
                className="hover:text-blue-200 transition flex items-center space-x-2 text-xl"
              >
                <Newspaper className="h-6 w-6" /> <span>Blog</span>
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
                  setCurrentPage("search"); /* DEMO Button */
                  setMobileMenuOpen(false);
                }}
                className="hover:text-blue-200 transition flex items-center space-x-2 text-xl"
              >
                <Search className="h-6 w-6" /> <span>Demo</span>
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
    { label: "Services", page: "search" },
    { label: "News", page: "blog" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <footer
      style={{
        width: "100%",
        background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
        padding: "40px 0 0 0",
        color: colors.white,
      }}
    >
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
              color: colors.white,
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
                border: `1px solid rgba(255, 255, 255, 0.3)`,
                background: "transparent",
                color: colors.white,
                fontSize: "16px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                background: colors.white,
                color: colors.gradientStart,
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

          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          ></div>
        </div>

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
              color: colors.white,
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
                  color: `rgba(255, 255, 255, 0.9)`,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  padding: "0",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = colors.white)}
                onMouseLeave={(e) =>
                  (e.target.style.color = `rgba(255, 255, 255, 0.9)`)
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          padding: "16px 0",
          background: `rgba(0, 0, 0, 0.1)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "300",
            color: `rgba(255, 255, 255, 0.8)`,
            fontFamily: "Inter, sans-serif",
          }}
        >
          medpals, 2025 © All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

const LandingPage = ({ setCurrentPage }) => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50"
      style={{
        background: `linear-gradient(to bottom right, ${colors.lightBlueShade} 0%, ${colors.white} 50%, ${colors.lightBlueShade} 100%)`,
      }}
    >
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
            <div
              style={{
                width: "100%",
                maxWidth: 562,
                color: colors.primaryBlue,
                fontSize: "clamp(32px, 6vw, 48px)",
                fontFamily: "Manrope, sans-serif",
                fontWeight: "800",
                lineHeight: "clamp(40px, 7vw, 56px)",
                wordWrap: "break-word",
              }}
            >
              Track it. Trace it. Take it
            </div>

            <div style={{ alignSelf: "stretch" }}>
              <span
                style={{
                  color: colors.black,
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
                  color: colors.black,
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

            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 20,
                display: "inline-flex",
                flexWrap: "wrap",
              }}
            >
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
                  background: `radial-gradient(ellipse 95.59% 77.23% at 98.53% 51.06%, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
                  borderRadius: 100,
                  outline: `2px ${colors.primaryBlue} solid`,
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
                    color: colors.white,
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Learn More
                </div>
              </button>

              <button
                onClick={() => setCurrentPage("search")}
                style={{
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 100,
                  outline: `2px ${colors.primaryBlue} solid`,
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
                    color: colors.primaryBlue,
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
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background: `linear-gradient(135deg, ${colors.primaryBlue}1A 0%, ${colors.accentTeal}1A 100%)`, // 1A is for ~10% opacity
                  borderRadius: "24px",
                  transform: "rotate(6deg)",
                  opacity: "0.8",
                }}
              ></div>

              <div
                style={{
                  position: "relative",
                  background: `linear-gradient(135deg, ${colors.primaryBlue}0D 0%, ${colors.accentTeal}0D 100%)`, // 0D is for ~5% opacity
                  borderRadius: "24px",
                  padding: "32px",
                  minHeight: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
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
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />

                <div
                  style={{
                    display: "none",
                    width: "100%",
                    height: "400px",
                    background: `linear-gradient(135deg, #A7CCED 0%, ${colors.primaryBlue} 100%)`,
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
                      color: colors.white,
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    Medical Illustration
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: colors.primaryBlue,
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
                    background: colors.accentTeal,
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
                    background: colors.primaryBlue,
                    borderRadius: "50%",
                    opacity: "0.3",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    right: "48px",
                    color: colors.accentTeal,
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

      <div
        className="w-full py-8"
        style={{
          background: `linear-gradient(to right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div
            style={{
              width: "100%",
              paddingLeft: "clamp(20px, 5vw, 82px)",
              paddingRight: "clamp(20px, 5vw, 82px)",
              paddingTop: 24,
              paddingBottom: 24,
              background: colors.lightBackground, // Banner background
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
                color: colors.accentTeal,
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
                    color: colors.black,
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
                    color: colors.black,
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
                    color: colors.black,
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
                      background: colors.primaryBlue,
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
                      (e.target.style.background = colors.hoverBlue)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = colors.primaryBlue)
                    }
                  >
                    <div
                      style={{
                        color: colors.white,
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

      <div
        id="our-product-section"
        className="w-full"
        style={{ background: colors.white }}
      >
        <div className="text-center py-12 md:py-16">
          <h2
            style={{
              color: colors.primaryBlue,
              fontSize: "clamp(32px, 5vw, 44px)",
              fontFamily: "Manrope, sans-serif",
              fontWeight: "800",
              lineHeight: "1.3",
            }}
          >
            Our Product
          </h2>
        </div>

        <div
          className="w-full py-12 md:py-16"
          style={{
            background: `linear-gradient(to right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-12">
              <h3
                style={{
                  color: colors.primaryBlue,
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
                  color: colors.black,
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

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, #BFDBFE 0%, ${colors.accentTeal}30 100%)`,
                  }}
                >
                  <div className="text-7xl sm:text-8xl md:text-9xl">👩🏻‍⚕️</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full py-12 md:py-16"
          style={{ background: colors.white }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center justify-between max-w-7xl">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pl-8 xl:pl-12">
              <h3
                style={{
                  color: colors.primaryBlue,
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
                  color: colors.black,
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

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, #E0F2FE 0%, ${colors.accentTeal}1A 100%)`,
                  }}
                >
                  <img
                    src="app_search_screen.png"
                    alt="Phone with search screen"
                    className="object-cover rounded-2xl shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300"
                    style={{
                      width: "55%",
                      height: "90%",
                      maxWidth: "300px",
                      maxHeight: "450px",
                    }} // Made phone larger relative to its container
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full py-12 md:py-16"
          style={{
            background: `linear-gradient(to right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-12">
              <h3
                style={{
                  color: colors.primaryBlue,
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
                  color: colors.black,
                  fontSize: "clamp(14px, 2.5vw, 20px)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.7",
                }}
              >
                She adds her postcode.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, #E0F2FE 0%, ${colors.accentTeal}1A 100%)`,
                  }}
                >
                  <img
                    src="app_step2.png"
                    alt="Phone with location screen"
                    className="object-cover rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                    style={{
                      width: "55%",
                      height: "90%",
                      maxWidth: "300px",
                      maxHeight: "450px",
                    }} // Made phone larger relative to its container
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full py-12 md:py-16"
          style={{ background: colors.white }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center justify-between max-w-7xl">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pl-8 xl:pl-12">
              <h3
                style={{
                  color: colors.primaryBlue,
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
                  color: colors.black,
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

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, #E0F2FE 0%, ${colors.accentTeal}1A 100%)`,
                  }}
                >
                  <img
                    src="app_step3.png"
                    alt="Phone with map screen"
                    className="object-cover rounded-2xl shadow-xl transform rotate-6 hover:rotate-12 transition-transform duration-300"
                    style={{
                      width: "55%",
                      height: "90%",
                      maxWidth: "300px",
                      maxHeight: "450px",
                    }} // Made phone larger relative to its container
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full py-12 md:py-16"
          style={{
            background: `linear-gradient(to right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-12">
              <h3
                style={{
                  color: colors.primaryBlue,
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
                  color: colors.black,
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

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, #D1FAE5 0%, ${colors.accentTeal}1A 100%)`,
                  }}
                >
                  <img
                    src="app_step4.png"
                    alt="Phone with success screen"
                    className="object-cover rounded-2xl shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300"
                    style={{
                      width: "55%",
                      height: "90%",
                      maxWidth: "300px",
                      maxHeight: "450px",
                    }} // Made phone larger relative to its container
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full py-12 md:py-16"
          style={{ background: colors.white }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Want a Sneak Peek? Try the Demo!
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => setCurrentPage("search")}
                className="w-full sm:w-auto px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-lg text-lg"
                style={{ background: colors.primaryBlue, color: colors.white }}
              >
                Demo
              </button>
              <button
                onClick={() => setCurrentPage("waitlist")}
                className="w-full sm:w-auto px-8 py-3 rounded-full hover:from-blue-700 hover:to-teal-600 transition shadow-lg text-lg"
                style={{
                  background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
                  color: colors.white,
                }}
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

const GoogleMap = ({ address, pharmacies, mapRef, setMapRef }) => {
  const mapContainerRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_Maps_API_KEY}&libraries=places,geometry&callback=initMap`;
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
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Consistent blue for user
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
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Red for pharmacies
                    scaledSize: new window.google.maps.Size(40, 40),
                  },
                  label: {
                    text: (index + 1).toString(),
                    color: colors.white, // Label color
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
          <p className="font-semibold" style={{ color: colors.primaryBlue }}>
            Loading map...
          </p>
        </div>
      )}
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
};

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
      <div
        className="w-full md:w-2/3 relative rounded-lg overflow-hidden shadow-lg h-64 md:h-full"
        style={{ background: "#E0F2FE" }}
      >
        {" "}
        {/* Light blue background */}
        <GoogleMap
          address={address}
          pharmacies={{ list: pharmacies, setPharmacies }}
          mapRef={mapRef}
          setMapRef={setMapRef}
        />
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClearSearch}
            className="p-2 rounded-full shadow-lg transition"
            style={{
              background: colors.white,
              color: colors.primaryBlue,
              hover: colors.lightBlueShade,
            }}
            aria-label="Clear Search Results"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/3 space-y-4 overflow-y-auto md:max-h-[500px] pr-2">
        <div
          className="rounded-lg shadow-lg p-4"
          style={{
            background: colors.white,
            border: `1px solid ${colors.borderLight}`,
          }}
        >
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: colors.primaryBlue }}
          >
            Search Details
          </h3>
          <p style={{ color: colors.primaryBlue }}>
            <span className="font-semibold">Address:</span> {address}
          </p>
          <p style={{ color: colors.primaryBlue }}>
            <span className="font-semibold">Medicine:</span> {medicine}
          </p>
        </div>

        {pharmacies.map((pharmacy, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg relative`}
            style={{
              background: pharmacy.hasStock ? "#D1FAE5" : "#FEE2E2", // Soft green for stock, soft red for no stock
              border: pharmacy.hasStock
                ? `2px solid #A7F3D0`
                : `2px solid #FCA5A5`, // Borders matching
            }}
          >
            <div
              className="absolute top-2 right-2 rounded-full w-8 h-8 flex items-center justify-center shadow-md font-bold"
              style={{ background: colors.white, color: colors.primaryBlue }}
            >
              {index + 1}
            </div>
            <h4
              className="font-bold text-lg"
              style={{ color: colors.primaryBlue }}
            >
              {pharmacy.name}
            </h4>
            <p style={{ color: colors.grayText }}>{pharmacy.address}</p>
            <p style={{ color: colors.grayText }}>
              Distance: {pharmacy.distance}
            </p>
            <div
              className={`mt-2 font-semibold`}
              style={{
                color: pharmacy.hasStock ? "#047857" : "#B91C1C", // Darker green/red for text
              }}
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

const SearchPage = ({ setCurrentPage }) => {
  const [address, setAddress] = useState("");
  const [medicine, setMedicine] = useState("");
  const [pharmacies, setPharmacies] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const addressInputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    let intervalId;

    const initAutocomplete = () => {
      if (
        window.google &&
        window.google.maps &&
        window.google.maps.places &&
        addressInputRef.current &&
        !autocomplete
      ) {
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
          clearInterval(intervalId);
        } catch (error) {
          console.error("Error initializing autocomplete:", error);
        }
      }
    };

    initAutocomplete();
    intervalId = setInterval(initAutocomplete, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [autocomplete]);

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
    setIsSearching(false);
    if (addressInputRef.current) {
      addressInputRef.current.value = "";
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(to bottom right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
      }}
    >
      <div className="container mx-auto p-4 md:p-8">
        <div
          className="p-6 md:p-8 rounded-xl shadow-lg mb-6 relative"
          style={{
            background: colors.white,
            border: `1px solid ${colors.borderLight}`,
          }}
        >
          <button
            onClick={() => setCurrentPage("home")}
            className="absolute top-4 right-4 p-2 rounded-full shadow-md transition"
            style={{
              background: colors.lightBackground,
              color: colors.primaryBlue,
              hover: colors.lightBlueShade,
            }}
            aria-label="Go to Home"
          >
            <X className="h-5 w-5" />
          </button>
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
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
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:border-blue-500"
              style={{
                borderColor: colors.borderLight,
                focusRingColor: colors.primaryBlue,
                focusBorderColor: colors.primaryBlue,
              }}
            />
            <input
              type="text"
              placeholder="Enter Medicine Name"
              value={medicine}
              onChange={(e) => {
                setMedicine(e.target.value);
                setShowResults(false);
              }}
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:border-blue-500"
              style={{
                borderColor: colors.borderLight,
                focusRingColor: colors.primaryBlue,
                focusBorderColor: colors.primaryBlue,
              }}
            />
            <button
              onClick={handleSearch}
              className="w-full md:w-auto text-white p-3 rounded-lg transition flex items-center justify-center shadow-lg"
              style={{
                background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
                hover: `linear-gradient(to right, ${colors.hoverBlue} 0%, #007070 100%)`,
              }}
              disabled={isSearching}
            >
              <Search className="mr-2" /> Search
            </button>
          </div>
        </div>

        <div
          className="border-l-4 p-4 mb-6 rounded"
          style={{
            background: `linear-gradient(to right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
            borderColor: colors.primaryBlue,
          }}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5" style={{ color: colors.primaryBlue }} />
            </div>
            <div className="ml-3">
              <p className="text-sm" style={{ color: colors.primaryBlue }}>
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

const WaitlistPage = ({ setCurrentPage }) => {
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
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{
        background: `linear-gradient(to bottom right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
      }}
    >
      <div
        className="w-full max-w-lg p-6 md:p-8 rounded-xl shadow-lg relative"
        style={{
          background: colors.white,
          border: `1px solid ${colors.borderLight}`,
        }}
      >
        <button
          onClick={() => setCurrentPage("home")}
          className="absolute top-4 right-4 p-2 rounded-full shadow-md transition"
          style={{
            background: colors.lightBackground,
            color: colors.primaryBlue,
            hover: colors.lightBlueShade,
          }}
          aria-label="Go to Home"
        >
          <X className="h-5 w-5" />
        </button>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent"
          style={{
            background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Join The Waitlist
        </h2>
        <p style={{ color: colors.grayText }} className="mb-6">
          Be the first to know when MedPals launches in your area. Join our
          waitlist for early access and updates.
        </p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium"
              style={{ color: colors.primaryBlue }}
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
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:border-blue-500"
              style={{
                borderColor: colors.borderLight,
                focusRingColor: colors.primaryBlue,
                focusBorderColor: colors.primaryBlue,
              }}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium"
              style={{ color: colors.primaryBlue }}
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
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:border-blue-500"
              style={{
                borderColor: colors.borderLight,
                focusRingColor: colors.primaryBlue,
                focusBorderColor: colors.primaryBlue,
              }}
              required
            />
          </div>

          <div>
            <label
              htmlFor="postcode"
              className="block mb-1 font-medium"
              style={{ color: colors.primaryBlue }}
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
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:border-blue-500"
              style={{
                borderColor: colors.borderLight,
                focusRingColor: colors.primaryBlue,
                focusBorderColor: colors.primaryBlue,
              }}
              required
            />
            <p className="text-sm mt-1" style={{ color: colors.primaryBlue }}>
              This helps us prioritize areas for our initial launch
            </p>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block mb-1 font-medium"
              style={{ color: colors.primaryBlue }}
            >
              Why are you interested in MedPals?
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:border-blue-500"
              style={{
                borderColor: colors.borderLight,
                focusRingColor: colors.primaryBlue,
                focusBorderColor: colors.primaryBlue,
              }}
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
              className="block mb-1 font-medium"
              style={{ color: colors.primaryBlue }}
            >
              Ideas & Features
            </label>
            <textarea
              id="ideas"
              name="ideas"
              placeholder="Have any ideas or features you would love to see? Let us know!"
              value={formData.ideas}
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg h-24 resize-none focus:ring-2 focus:border-blue-500"
              style={{
                borderColor: colors.borderLight,
                focusRingColor: colors.primaryBlue,
                focusBorderColor: colors.primaryBlue,
              }}
              rows={3}
            />
            <p className="text-sm mt-1" style={{ color: colors.primaryBlue }}>
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
              className="h-4 w-4 rounded"
              style={{
                color: colors.primaryBlue,
                focusRingColor: colors.primaryBlue,
                borderColor: colors.grayText,
              }}
            />
            <label
              htmlFor="updates"
              className="ml-2 block"
              style={{ color: colors.primaryBlue }}
            >
              Keep me updated on MedPals news and developments
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full text-white p-3 rounded-lg transition font-medium shadow-lg"
            style={{
              background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
              hover: `linear-gradient(to right, ${colors.hoverBlue} 0%, #007070 100%)`,
            }}
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

          <p className="text-sm mt-4" style={{ color: colors.grayText }}>
            By signing up, you agree to our Terms of Service and Privacy Policy.
            We'll only use your information to provide updates about MedPals.
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogPage = ({ setCurrentPage }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{
        background: `linear-gradient(to bottom right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
      }}
    >
      <div
        className="max-w-2xl p-6 md:p-10 rounded-xl shadow-lg text-center relative"
        style={{
          background: colors.white,
          border: `1px solid ${colors.borderLight}`,
        }}
      >
        <button
          onClick={() => setCurrentPage("home")}
          className="absolute top-4 right-4 p-2 rounded-full shadow-md transition"
          style={{
            background: colors.lightBackground,
            color: colors.primaryBlue,
            hover: colors.lightBlueShade,
          }}
          aria-label="Go to Home"
        >
          <X className="h-5 w-5" />
        </button>
        <h2
          className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent"
          style={{
            background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Blog
        </h2>
        <div className="flex justify-center mb-6">
          <Newspaper
            className="h-16 w-16"
            style={{ color: colors.primaryBlue }}
          />
        </div>
        <p
          className="text-xl font-bold mb-4"
          style={{ color: colors.primaryBlue }}
        >
          Coming Soon!
        </p>
        <p style={{ color: colors.grayText }}>
          We're working on bringing you the latest healthcare insights,
          medication news, and helpful resources. Check back soon for valuable
          content to help you manage your health.
        </p>
      </div>
    </div>
  );
};

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{
        background: `linear-gradient(to bottom right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
      }}
    >
      <div
        className="max-w-4xl p-6 md:p-10 rounded-xl shadow-lg relative"
        style={{
          background: colors.white,
          border: `1px solid ${colors.borderLight}`,
        }}
      >
        <button
          onClick={() => setCurrentPage("home")}
          className="absolute top-4 right-4 p-2 rounded-full shadow-md transition"
          style={{
            background: colors.lightBackground,
            color: colors.primaryBlue,
            hover: colors.lightBlueShade,
          }}
          aria-label="Go to Home"
        >
          <X className="h-5 w-5" />
        </button>
        <h2
          className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent"
          style={{
            background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Medpals
        </h2>
        <p style={{ color: colors.grayText }} className="leading-relaxed mb-4">
          Medpals is an innovative platform designed by{" "}
          <strong style={{ color: colors.primaryBlue }}>
            Imperial College London
          </strong>{" "}
          students to simplify medication access. Our mission is to connect
          patients with nearby pharmacies that have the exact medicines they
          need during emergency or regular use.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="p-4 rounded-lg text-center md:text-left border"
            style={{
              background: `linear-gradient(to bottom right, #E0F2FE 0%, ${colors.primaryBlue}1A 100%)`,
              borderColor: colors.borderLight,
            }}
          >
            <h3 className="font-bold" style={{ color: colors.primaryBlue }}>
              Quick Search
            </h3>
            <p style={{ color: colors.grayText }}>
              Find medicines near you instantly
            </p>
          </div>
          <div
            className="p-4 rounded-lg text-center md:text-left border"
            style={{
              background: `linear-gradient(to bottom right, #D1FAE5 0%, ${colors.accentTeal}1A 100%)`,
              borderColor: colors.borderLight,
            }}
          >
            <h3 className="font-bold" style={{ color: colors.accentTeal }}>
              Accurate Results
            </h3>
            <p style={{ color: colors.grayText }}>
              Precise pharmacy and medicine location
            </p>
          </div>
          <div
            className="p-4 rounded-lg text-center md:text-left border"
            style={{
              background: `linear-gradient(to bottom right, #E0F2FE 0%, ${colors.primaryBlue}1A 100%)`,
              borderColor: colors.borderLight,
            }}
          >
            <h3 className="font-bold" style={{ color: colors.primaryBlue }}>
              User Friendly
            </h3>
            <p style={{ color: colors.grayText }}>
              Simple and intuitive interface
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3
            className="text-xl md:text-2xl font-bold mb-6 bg-clip-text text-transparent text-center"
            style={{
              background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Meet Our Founders
          </h3>

          <div
            className="p-6 rounded-lg shadow-lg mb-6 border"
            style={{
              background: `linear-gradient(to bottom right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
              borderColor: colors.borderLight,
            }}
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
              <div
                className="flex items-center justify-center h-64 md:h-80"
                style={{
                  background: `linear-gradient(to bottom right, #E0F2FE 0%, ${colors.accentTeal}1A 100%)`,
                }}
              >
                <img
                  src="Founders.jpeg"
                  alt="Medpals Founding Team"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4
                className="font-bold text-lg mb-2"
                style={{ color: colors.primaryBlue }}
              >
                The Founding Team
              </h4>
              <p style={{ color: colors.grayText }} className="mb-4">
                Our team consists of six passionate Imperial College London and
                Royal College of Arts students from diverse academic backgrounds
                including Computer Science, Medicine, UI/UX and Business. United
                by a shared vision to revolutionize medication accessibility, we
                created Medpals as part of the HealthX Initiative.
              </p>
              <p style={{ color: colors.grayText }}>
                Together, we combine technical expertise, healthcare knowledge,
                and entrepreneurial spirit to tackle the challenges of
                medication access. Our mission is to ensure that everyone can
                quickly find the medications they need, when they need them.
              </p>
            </div>
          </div>

          <div
            className="p-6 rounded-lg shadow-lg border"
            style={{
              background: `linear-gradient(to bottom right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
              borderColor: colors.borderLight,
            }}
          >
            <h4
              className="font-bold text-lg mb-4 text-center"
              style={{ color: colors.primaryBlue }}
            >
              Our Vision
            </h4>
            <p style={{ color: colors.grayText }} className="mb-4">
              We envision a world where medication access is never a barrier to
              health and wellbeing. By bridging the gap between patients and
              pharmacies, we aim to reduce the stress and uncertainty that often
              accompanies the search for critical medications.
            </p>
            <p style={{ color: colors.grayText }}>
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

const ContactPage = ({ setCurrentPage }) => {
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
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{
        background: `linear-gradient(to bottom right, ${colors.lightBlueShade} 0%, ${colors.lightBlueShade} 100%)`,
      }}
    >
      <div
        className="w-full max-w-md p-6 md:p-8 rounded-xl shadow-lg relative"
        style={{
          background: colors.white,
          border: `1px solid ${colors.borderLight}`,
        }}
      >
        <button
          onClick={() => setCurrentPage("home")}
          className="absolute top-4 right-4 p-2 rounded-full shadow-md transition"
          style={{
            background: colors.lightBackground,
            color: colors.primaryBlue,
            hover: colors.lightBlueShade,
          }}
          aria-label="Go to Home"
        >
          <X className="h-5 w-5" />
        </button>
        <h2
          className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent"
          style={{
            background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:border-blue-500"
            style={{
              borderColor: colors.borderLight,
              focusRingColor: colors.primaryBlue,
              focusBorderColor: colors.primaryBlue,
            }}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border-2 rounded-lg h-32 resize-none focus:ring-2 focus:border-blue-500"
            style={{
              borderColor: colors.borderLight,
              focusRingColor: colors.primaryBlue,
              focusBorderColor: colors.primaryBlue,
            }}
            required
          />
          <button
            type="submit"
            className="w-full text-white p-3 rounded-lg transition shadow-lg"
            style={{
              background: `linear-gradient(to right, ${colors.primaryBlue} 0%, ${colors.accentTeal} 100%)`,
              hover: `linear-gradient(to right, ${colors.hoverBlue} 0%, #007070 100%)`,
            }}
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
const NewsletterPage = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(""); // Correctly declared here

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
        setSubmissionStatus("Successfully subscribed to our newsletter!");
        setEmail("");
      } else {
        setSubmissionStatus("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubmissionStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-100 relative">
        <button
          onClick={() => setCurrentPage("home")}
          className="absolute top-4 right-4 bg-gray-100 text-blue-600 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
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
          {submissionStatus && (
            <div
              className={`mt-4 p-3 rounded-lg text-center ${
                submissionStatus.includes("Successfully")
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

const FindMyMedApp = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case "search":
        return <SearchPage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case "blog":
        return <BlogPage setCurrentPage={setCurrentPage} />;
      case "contact":
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case "newsletter":
        return <NewsletterPage setCurrentPage={setCurrentPage} />;
      case "waitlist":
        return <WaitlistPage setCurrentPage={setCurrentPage} />;
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
