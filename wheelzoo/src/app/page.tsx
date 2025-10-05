"use client";

// import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  
  const cars = [
    { name: "Maruti Swift", price: "₹5.73 - 8.67 L", image: "/car1.jpg", category: "Hatchback", rating: 4.2 },
    { name: "Hyundai i20", price: "₹7.04 - 11.21 L", image: "/car2.jpg", category: "Hatchback", rating: 4.3 },
    { name: "Tata Nexon", price: "₹7.15 - 13.60 L", image: "/car3.jpg", category: "SUV", rating: 4.1 },
    { name: "Mahindra XUV700", price: "₹13.18 - 24.58 L", image: "/car4.jpg", category: "SUV", rating: 4.4 },
    { name: "Honda City", price: "₹11.99 - 16.94 L", image: "/car5.jpg", category: "Sedan", rating: 4.5 },
    { name: "Toyota Innova", price: "₹17.18 - 26.30 L", image: "/car6.jpg", category: "MPV", rating: 4.3 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [cars.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Wheelzoo</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition-all duration-200">Car Database</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition-all duration-200">Compare</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition-all duration-200">Reviews</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition-all duration-200">News</a>
                <a href="#" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">Car Specs</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Circular Car Slider */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Live Car Database
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block">Complete Car</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Information Hub</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
                Get detailed specifications, ex-showroom prices, reviews, and comparisons for every car in India
              </p>
              
              {/* Search Bar */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 shadow-2xl border border-white/20">
                <div className="flex flex-col md:flex-row gap-2">
                  <select className="flex-1 p-4 bg-white/90 backdrop-blur-sm rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 border-0 font-medium">
                    <option>Select Brand</option>
                    <option>Maruti Suzuki</option>
                    <option>Hyundai</option>
                    <option>Tata</option>
                    <option>Mahindra</option>
                    <option>Honda</option>
                    <option>Toyota</option>
                    <option>Kia</option>
                    <option>MG</option>
                  </select>
                  <select className="flex-1 p-4 bg-white/90 backdrop-blur-sm rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 border-0 font-medium">
                    <option>Select Model</option>
                    <option>Swift</option>
                    <option>Baleno</option>
                    <option>i20</option>
                    <option>Nexon</option>
                    <option>XUV700</option>
                    <option>City</option>
                    <option>Innova</option>
                    <option>Seltos</option>
                  </select>
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Get Info
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Circular Car Slider */}
            <div className="flex justify-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Outer ring with animated border */}
                <div className="absolute inset-0 rounded-full border-4 border-white/30 flex items-center justify-center animate-spin-slow">
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                </div>
                
                {/* Main circular container */}
                <div className="absolute inset-4 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
                  {/* Center circle with current car */}
                  <div className="w-64 h-64 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl">
                    <div className="text-center text-white">
                      <div className="w-40 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-4 mx-auto flex items-center justify-center shadow-lg">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mx-auto mb-2"></div>
                          <span className="text-gray-700 text-xs font-bold">3D CAR</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{cars[currentCarIndex].name}</h3>
                      <p className="text-yellow-300 text-lg font-semibold mb-1">Ex-showroom: {cars[currentCarIndex].price}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(cars[currentCarIndex].rating) ? 'text-yellow-400' : 'text-gray-400'}>★</span>
                          ))}
                        </div>
                        <span className="text-white/80 text-sm">({cars[currentCarIndex].rating})</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cars positioned in circle */}
                {cars.map((car, index) => {
                  const angle = (index * 360) / cars.length;
                  const radius = 180;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-20 h-20 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg transition-all duration-1000 hover:scale-110 cursor-pointer ${
                        index === currentCarIndex ? 'scale-125 bg-gradient-to-br from-yellow-400/40 to-orange-400/40 border-yellow-400/60' : 'scale-100'
                      }`}
                      style={{
                        left: `calc(50% + ${x}px - 40px)`,
                        top: `calc(50% + ${y}px - 40px)`,
                        transform: `rotate(${angle}deg)`,
                      }}
                      onClick={() => setCurrentCarIndex(index)}
                    >
                      <div className="w-16 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center transform -rotate-90 shadow-md">
                        <div className="text-center">
                          <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-1"></div>
                          <span className="text-gray-700 text-xs font-bold">3D</span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Dots indicator */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {cars.map((_, index) => (
                    <button
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentCarIndex 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      onClick={() => setCurrentCarIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Car Information</h2>
            <p className="text-xl text-gray-600">Everything you need to know about any car in India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Specifications</h3>
              <p className="text-gray-600">Complete technical specifications, dimensions, engine details, and performance metrics for every car.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ex-Showroom Prices</h3>
              <p className="text-gray-600">Accurate ex-showroom prices, on-road prices, and variant-wise pricing for all cities in India.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Comparison</h3>
              <p className="text-gray-600">Compare multiple cars side-by-side with detailed specifications, features, and pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Cars</h2>
            <p className="text-xl text-gray-600">Most searched and trending cars in India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Car Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p>3D Car View</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Maruti Swift</h3>
                <p className="text-gray-600 text-sm mb-2">Hatchback • 1.2L Petrol</p>
                <div className="space-y-1 mb-3">
                  <p className="text-blue-600 font-semibold text-sm">Ex-showroom: ₹5.73 - 8.67 L</p>
                  <p className="text-gray-500 text-xs">On-road: ₹6.85 - 10.25 L</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span className="text-sm text-gray-600">(4.2/5)</span>
                </div>
                <button className="w-full mt-3 bg-blue-50 text-blue-600 py-2 rounded-md text-sm font-medium hover:bg-blue-100">
                  View Details
                </button>
              </div>
            </div>

            {/* Car Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p>3D Car View</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Hyundai i20</h3>
                <p className="text-gray-600 text-sm mb-2">Hatchback • 1.2L Petrol</p>
                <div className="space-y-1 mb-3">
                  <p className="text-blue-600 font-semibold text-sm">Ex-showroom: ₹7.04 - 11.21 L</p>
                  <p className="text-gray-500 text-xs">On-road: ₹8.25 - 13.15 L</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span className="text-sm text-gray-600">(4.3/5)</span>
                </div>
                <button className="w-full mt-3 bg-blue-50 text-blue-600 py-2 rounded-md text-sm font-medium hover:bg-blue-100">
                  View Details
                </button>
              </div>
            </div>

            {/* Car Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p>3D Car View</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Tata Nexon</h3>
                <p className="text-gray-600 text-sm mb-2">SUV • 1.2L Petrol/1.5L Diesel</p>
                <div className="space-y-1 mb-3">
                  <p className="text-blue-600 font-semibold text-sm">Ex-showroom: ₹7.15 - 13.60 L</p>
                  <p className="text-gray-500 text-xs">On-road: ₹8.45 - 16.05 L</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span className="text-sm text-gray-600">(4.1/5)</span>
                </div>
                <button className="w-full mt-3 bg-blue-50 text-blue-600 py-2 rounded-md text-sm font-medium hover:bg-blue-100">
                  View Details
                </button>
              </div>
            </div>

            {/* Car Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p>3D Car View</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Mahindra XUV700</h3>
                <p className="text-gray-600 text-sm mb-2">SUV • 2.0L Petrol/2.2L Diesel</p>
                <div className="space-y-1 mb-3">
                  <p className="text-blue-600 font-semibold text-sm">Ex-showroom: ₹13.18 - 24.58 L</p>
                  <p className="text-gray-500 text-xs">On-road: ₹15.25 - 28.95 L</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span className="text-sm text-gray-600">(4.4/5)</span>
                </div>
                <button className="w-full mt-3 bg-blue-50 text-blue-600 py-2 rounded-md text-sm font-medium hover:bg-blue-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium">
              Browse All Cars
            </button>
          </div>
        </div>
      </section>

      {/* Comparison CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Compare Cars Side by Side</h2>
          <p className="text-xl mb-8 text-blue-100">
            Compare detailed specifications, features, and pricing to make informed decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <select className="px-6 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>Select First Car</option>
              <option>Maruti Swift</option>
              <option>Hyundai i20</option>
              <option>Tata Nexon</option>
              <option>Mahindra XUV700</option>
            </select>
            <span className="text-2xl">VS</span>
            <select className="px-6 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>Select Second Car</option>
              <option>Maruti Swift</option>
              <option>Hyundai i20</option>
              <option>Tata Nexon</option>
              <option>Mahindra XUV700</option>
            </select>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 font-medium">
              Compare Cars
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Cars Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Wheelzoo</h3>
              <p className="text-gray-400 mb-4">
                India&apos;s most comprehensive car information platform. Get detailed specifications, prices, reviews, and comparisons for every car.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Car Database</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">All Cars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Latest Launches</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Upcoming Cars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Electric Cars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Car Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Compare</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Car Comparison</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Price Comparison</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Feature Comparison</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Specification Comparison</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Performance Comparison</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Wheelzoo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}