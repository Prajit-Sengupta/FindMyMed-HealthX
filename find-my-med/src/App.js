import React, { useState, useEffect, useRef } from "react";
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
  Menu,
} from "lucide-react";

// Header Component with Mobile Navigation
const Header = ({ setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-teal-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <Heart className="h-8 w-8" /> */}
          <img
            src="logo.png"
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
          />
          {/* <h1 className="text-2xl font-bold">medpals</h1> */}
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
            onClick={() => setCurrentPage("blog")}
            className="hover:text-teal-200 transition flex items-center space-x-1"
          >
            <Newspaper className="h-5 w-5" /> <span>Blog</span>
          </button>
          <button
            onClick={() => setCurrentPage("contact")}
            className="hover:text-teal-200 transition flex items-center space-x-1"
          >
            <Phone className="h-5 w-5" /> <span>Contact</span>
          </button>
          <button
            onClick={() => setCurrentPage("waitlist")}
            className="bg-teal-500 hover:bg-teal-400 px-4 py-2 rounded transition flex items-center space-x-1"
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
                  setCurrentPage("blog");
                  setMobileMenuOpen(false);
                }}
                className="hover:text-teal-200 transition flex items-center space-x-2 text-xl"
              >
                <Newspaper className="h-6 w-6" /> <span>Blog</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage("waitlist");
                  setMobileMenuOpen(false);
                }}
                className="bg-teal-500 hover:bg-teal-400 px-4 py-2 rounded-lg transition flex items-center space-x-2 text-xl"
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

// Landing Page Component
// Landing Page Component with Demo Section
const LandingPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-teal-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
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
              onClick={() => setCurrentPage("waitlist")}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition flex items-center justify-center"
            >
              Join Waitlist <Heart className="ml-2" />
            </button>
          </div>

          {/* Waitlist Banner */}
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div className="ml-3">
                <h3 className="font-medium text-yellow-800">
                  Early Access Coming Soon!
                </h3>
                <p className="text-yellow-700 mt-1">
                  We're launching in select areas soon. Join our waitlist to be
                  notified when MedPals is available in your area.
                </p>
                <button
                  onClick={() => setCurrentPage("waitlist")}
                  className="mt-2 text-teal-600 font-medium hover:text-teal-800"
                >
                  Sign up for updates →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration Placeholder */}
        <div className="w-full md:w-1/2 hidden md:block">
          <div className="bg-teal-100 rounded-xl p-8 flex items-center justify-center">
            <img
              src="landing_image.png"
              alt="Healthcare Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
              See MedPals in Action
            </h2>
            <p className="text-lg text-teal-700 max-w-3xl mx-auto">
              Explore our interactive prototype and experience how simple it is
              to find your medications at nearby pharmacies.
            </p>
          </div>

          {/* Demo Container */}
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
            {/* Figma Embed - Replace the URL with your actual Figma prototype URL */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="450"
                src="https://embed.figma.com/proto/2zV31XYMbzLH75i9NH0QgY/Medication-Finder-App?node-id=24-5525&p=f&scaling=min-zoom&content-scaling=fixed&page-id=24%3A4605&starting-point-node-id=24%3A5614&show-proto-sidebar=1&embed-host=share"
                allowfullscreen
              ></iframe>
            </div>

            {/* Uncomment this and comment out the Figma embed above if you want to use a video instead */}
            {/* <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
                title="MedPals Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}
          </div>

          <div className="text-center mt-8">
            <p className="text-teal-700 mb-4">
              Interested in early access to MedPals?
            </p>
            <button
              onClick={() => setCurrentPage("waitlist")}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Join the Waitlist Today
            </button>
          </div>
        </div>
      </div>

      {/* Feature Highlights Section */}
      <div className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-12 text-center">
            Why Choose MedPals?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-teal-600 mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-bold text-teal-800 text-center md:text-left mb-2">
                Quick Search
              </h3>
              <p className="text-teal-700 text-center md:text-left">
                Find medications instantly with our powerful search.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-12 w-12 text-teal-600 mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-bold text-teal-800 text-center md:text-left mb-2">
                Nearby Pharmacies
              </h3>
              <p className="text-teal-700 text-center md:text-left">
                Locate pharmacies with your medication in stock, sorted by
                distance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Cross className="h-12 w-12 text-teal-600 mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-bold text-teal-800 text-center md:text-left mb-2">
                Accurate Info
              </h3>
              <p className="text-teal-700 text-center md:text-left">
                Get real-time stock information to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// GoogleMap Component - Fixed version
const GoogleMap = ({ address, pharmacies, mapRef, setMapRef }) => {
  const mapContainerRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load Google Maps API script
  useEffect(() => {
    // Function to load the Google Maps script
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
      // Cleanup function to remove the global callback
      delete window.initMap;
    };
  }, []);

  // Initialize map once script is loaded
  const initializeMap = () => {
    if (!mapContainerRef.current) return;

    const map = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: 51.5074, lng: -0.1278 }, // Default to London
      zoom: 14,
    });

    setMapRef(map);
    setLoading(false);
  };

  // Update map when address changes
  useEffect(() => {
    if (!mapRef || !address || !window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;

        mapRef.setCenter(location);

        // Clear existing markers
        markers.forEach((marker) => marker.setMap(null));
        const newMarkers = [];

        // Add marker for user location
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

        // Find pharmacies near this location
        const service = new window.google.maps.places.PlacesService(mapRef);

        // Define the search request
        const request = {
          location: location,
          radius: 5000, // 5km radius
          keyword: "pharmacy", // Add keyword for better results
          type: "pharmacy", // Using the correct type parameter
        };

        service.nearbySearch(request, (results, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results &&
            results.length > 0
          ) {
            // Calculate distances for all pharmacies
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

            // Sort pharmacies by distance (closest first)
            pharmaciesWithDistance.sort((a, b) => a.distance - b.distance);

            // Take only the closest 3 pharmacies
            const nearbyPharmacies = pharmaciesWithDistance.slice(0, 3);

            // Create updated pharmacies list with real data
            const updatedPharmacies = nearbyPharmacies.map(
              (pharmacy, index) => {
                // Add pharmacy marker
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

                // Create info window
                const infoWindow = new window.google.maps.InfoWindow({
                  content: `<div><strong>${pharmacy.place.name}</strong><br/>${pharmacy.place.vicinity}<br/>${pharmacy.distanceText}</div>`,
                });

                marker.addListener("click", () => {
                  infoWindow.open(mapRef, marker);
                });

                // Randomly determine if medication is in stock
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

            // Update the pharmacies state in parent component
            if (pharmacies.setPharmacies) {
              pharmacies.setPharmacies(updatedPharmacies);
            }
          } else {
            console.error("Places API error or no pharmacies found:", status);
            // Set empty array if no results
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
          <p className="text-teal-600 font-semibold">Loading map...</p>
        </div>
      )}
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
};

// MapPage Component with Google Maps Integration
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
      {/* Map View */}
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
            className="bg-white text-teal-600 p-2 rounded-full shadow-lg hover:bg-teal-50 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Pharmacy List */}
      <div className="w-full md:w-1/3 space-y-4 overflow-y-auto md:max-h-[500px] pr-2">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-xl font-bold text-teal-700 mb-2">
            Search Details
          </h3>
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
                ? "bg-green-50 border-2 border-green-300"
                : "bg-red-50 border-2 border-red-300"
            } relative`}
          >
            <div className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-teal-600 font-bold">
              {index + 1}
            </div>
            <h4 className="font-bold text-lg text-teal-800">{pharmacy.name}</h4>
            <p className="text-teal-700">{pharmacy.address}</p>
            <p className="text-teal-600">Distance: {pharmacy.distance}</p>
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

// Update SearchPage component's autocomplete functionality
const SearchPage = () => {
  const [address, setAddress] = useState("");
  const [medicine, setMedicine] = useState("");
  const [pharmacies, setPharmacies] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Autocomplete hook for address input
  const addressInputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    // Initialize autocomplete when Google Maps API is loaded
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

    // Check if Google Maps API is loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      initAutocomplete();
    } else {
      // If not loaded, set up a listener for when it loads
      const checkGoogleMapsInterval = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          initAutocomplete();
          clearInterval(checkGoogleMapsInterval);
        }
      }, 500);

      // Clear interval if component unmounts
      return () => clearInterval(checkGoogleMapsInterval);
    }
  }, [addressInputRef.current, window.google]);

  const handleSearch = () => {
    // Validate inputs
    if (address.trim() && medicine.trim()) {
      setIsSearching(true);
      // The actual search happens in the GoogleMap component
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
    <div className="min-h-screen bg-teal-50 flex">
      <div className="container mx-auto p-4 md:p-8">
        {/* Search Input Section */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-600">
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
              disabled={isSearching}
            >
              <Search className="mr-2" /> Search
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Note:</strong> Currently this is a Demo Website. The
                data is not real.
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
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

// Waitlist Page Component
const WaitlistPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postcode: "",
    reason: "",
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
      // Replace with your actual FormSpree endpoint or other form processing service
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
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-600">
          Join the MedPals Waitlist
        </h2>
        <p className="text-teal-700 mb-6">
          Be the first to know when MedPals launches in your area. Join our
          waitlist for early access and updates.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-teal-700 mb-1 font-medium"
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-teal-700 mb-1 font-medium"
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="postcode"
              className="block text-teal-700 mb-1 font-medium"
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
              required
            />
            <p className="text-sm text-teal-600 mt-1">
              This helps us prioritize areas for our initial launch
            </p>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-teal-700 mb-1 font-medium"
            >
              Why are you interested in MedPals?
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
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

          <div className="flex items-center">
            <input
              type="checkbox"
              id="updates"
              name="updates"
              checked={formData.updates}
              onChange={handleChange}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="updates" className="ml-2 block text-teal-700">
              Keep me updated on MedPals news and developments
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition font-medium"
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
        </form>
      </div>
    </div>
  );
};

// Blog Page Component
const BlogPage = () => {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-2xl bg-white p-6 md:p-10 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-600">
          Our Blog
        </h2>
        <div className="flex justify-center mb-6">
          <Newspaper className="h-16 w-16 text-teal-500" />
        </div>
        <p className="text-xl font-bold text-teal-700 mb-4">Coming Soon!</p>
        <p className="text-teal-600">
          We're working on bringing you the latest healthcare insights,
          medication news, and helpful resources. Check back soon for valuable
          content to help you manage your health.
        </p>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-600">
          About Medpals
        </h2>
        <p className="text-teal-700 leading-relaxed mb-4">
          Medpals is an innovative platform designed by{" "}
          <strong>Imperial College London</strong> Students to simplify
          medication access. Our mission is to connect patients with nearby
          pharmacies that have the exact medicines they need during emergency or
          regular use (HealthX Initiative).
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

        {/* Founders Section */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-teal-600 text-center">
            Meet Our Founders
          </h3>

          {/* Group Photo */}
          <div className="bg-teal-50 p-6 rounded-lg shadow-lg mb-6">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
              <div className="flex items-center justify-center bg-teal-100 h-64 md:h-80">
                <img
                  src="Founders.jpeg"
                  alt="Medpals Founding Team"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg text-teal-700 mb-2">
                The Founding Team
              </h4>
              <p className="text-teal-700 mb-4">
                Our team consists of six passionate Imperial College London and
                Royal College of Arts students from diverse academic backgrounds
                including Computer Science, Medicine, UI/UX and Business. United
                by a shared vision to revolutionize medication accessibility, we
                created Medpals as part of the HealthX Initiative.
              </p>
              <p className="text-teal-700">
                Together, we combine technical expertise, healthcare knowledge,
                and entrepreneurial spirit to tackle the challenges of
                medication access. Our mission is to ensure that everyone can
                quickly find the medications they need, when they need them.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-6 rounded-lg shadow-lg">
            <h4 className="font-bold text-lg text-teal-700 mb-4 text-center">
              Our Vision
            </h4>
            <p className="text-teal-700 mb-4">
              We envision a world where medication access is never a barrier to
              health and wellbeing. By bridging the gap between patients and
              pharmacies, we aim to reduce the stress and uncertainty that often
              accompanies the search for critical medications.
            </p>
            <p className="text-teal-700">
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

// Contact Page Component with FormSpree
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
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-600">
          Contact Us
        </h2>
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

// Newsletter Subscription Page with FormSpree
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

// Also update the GoogleMapsApiScript component to properly load the API
const GoogleMapsApiScript = () => {
  useEffect(() => {
    // Only load if not already loaded
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
    </div>
  );
};

export default FindMyMedApp;
