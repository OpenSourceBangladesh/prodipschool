"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  "/photos/slide.jpg",
  "/photos/slide2.jpg",
  "/photos/slide3.jpg",
  "/photos/slide4.jpg",
  "/photos/slide5.jpg",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text: string, service: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${service} নম্বর কপি হয়েছে!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        {/* Desktop Navigation */}
        <div className="hidden md:block bg-white/90 backdrop-blur-lg rounded-full px-8 py-4 shadow-xl border border-white/20">
          <ul className="flex items-center space-x-8 text-sm font-medium text-gray-700">
            <li>
              <a
                href="/volunteers"
                className="hover:text-blue-600 transition-colors"
              >
                সেচ্ছাসেবক
              </a>
            </li>
            <li>
              <a
                href="/students"
                className="hover:text-blue-600 transition-colors"
              >
                শিক্ষার্থী
              </a>
            </li>
            <li>
              <a
                href="/advisors"
                className="hover:text-blue-600 transition-colors"
              >
                পরামর্শদাতা
              </a>
            </li>
            <li>
              <a
                href="#media"
                className="hover:text-blue-600 transition-colors"
              >
                মিডীয়া
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="hover:text-blue-600 transition-colors"
              >
                ইভেন্টস
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="bg-white/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl border border-white/20 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            মেনু
          </button>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 py-4 px-2 min-w-[200px]">
              <ul className="space-y-3">
                <li>
                  <a
                    href="/volunteers"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    সেচ্ছাসেবক
                  </a>
                </li>
                <li>
                  <a
                    href="#students"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    শিক্ষার্থী
                  </a>
                </li>
                <li>
                  <a
                    href="#advisors"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    পরামর্শদাতা
                  </a>
                </li>
                <li>
                  <a
                    href="#media"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    মিডীয়া
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ইভেন্টস
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              প্রদীপ স্কুল
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow-md">
              সুবিধাবঞ্চিত শিশুদের শিক্ষার আলো
            </p>
            <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              শিক্ষা একটি মৌলিক অধিকার এবং প্রতিটি শিশুর উজ্জ্বল ভবিষ্যতের
              চাবিকাঠি
            </p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              আমাদের সম্পর্কে
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <strong>প্রদীপ স্কুল</strong> হলো একটি সেবামূলক উদ্যোগ, যার লক্ষ্য
              হলো সুবিধাবঞ্চিত ও দরিদ্র শিশুদের শিক্ষার আলো পৌঁছে দেওয়া। আমরা
              বিশ্বাস করি, শিক্ষা একটি মৌলিক অধিকার এবং প্রতিটি শিশুর উজ্জ্বল
              ভবিষ্যতের চাবিকাঠি।
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-32">
            {/* Service 1 - Education Mainstream - Image Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/photos_extra/education.jpg"
                    alt="শিক্ষার মূলধারায় ফেরানো"
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  শিক্ষার মূলধারায় ফেরানো
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  বিদ্যালয়ে ভর্তি না হওয়া বা পড়াশোনা বন্ধ হয়ে যাওয়া শিশুদের
                  পুনরায় শিক্ষার মূলধারায় ফিরিয়ে আনা। আমরা প্রতিটি শিশুর
                  শিক্ষার অধিকার নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।
                </p>
                <div className="pt-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Service 2 - Free Education - Image Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/photos_extra/play.jpg"
                    alt="বিনামূল্যে শিক্ষা"
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-500/10 rounded-full blur-xl"></div>
              </div>
              <div className="lg:order-1 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  বিনামূল্যে শিক্ষা
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  শিক্ষার্থীদের বিনামূল্যে প্রাথমিক শিক্ষা প্রদান করা হয়।
                  আমাদের উদ্দেশ্য হলো অর্থনৈতিক বাধা দূর করে সবার জন্য
                  শিক্ষার সুযোগ তৈরি করা।
                </p>
                <div className="pt-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Service 3 - Educational Materials - Image Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/photos_extra/bag.jpg"
                    alt="শিক্ষা উপকরণ"
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-500/10 rounded-full blur-xl"></div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl">
                  <span className="text-3xl">📖</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  শিক্ষা উপকরণ
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  প্রয়োজনীয় শিক্ষা উপকরণ (বই, খাতা, কলম, গাইডবুক ইত্যাদি)
                  সরবরাহ। প্রতিটি শিশু যেন পড়াশোনার জন্য প্রয়োজনীয় সকল
                  উপকরণ পায়।
                </p>
                <div className="pt-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Service 4 - Sports & Activities - Image Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/photos_extra/sports.jpg"
                    alt="খেলাধুলা ও সহায়ক কার্যক্রম"
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"></div>
              </div>
              <div className="lg:order-1 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl">
                  <span className="text-3xl">🏃‍♂️</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  খেলাধুলা ও সহায়ক কার্যক্রম
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  শিশুদের জন্য বিশেষ সহায়ক কার্যক্রম যেমন খেলাধুলা, স্বাস্থ্য
                  সচেতনতা ও সামাজিক দক্ষতা উন্নয়ন। সুস্থ মানসিক ও শারীরিক
                  বিকাশের জন্য।
                </p>
                <div className="pt-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            ⚙️ কিভাবে চলে
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            প্রদীপ স্কুল মূলত{" "}
            <strong>
              সেচ্ছাসেবীদের প্রচেষ্টা এবং সমাজের শুভানুধ্যায়ী মানুষের
              সহযোগিতায়
            </strong>{" "}
            পরিচালিত হয়। কোনো বাণিজ্যিক উদ্দেশ্য ছাড়া, একেবারেই সামাজিক
            দায়বদ্ধতা থেকে আমাদের কার্যক্রম পরিচালিত হয়।
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            📅 আমাদের যাত্রা
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            প্রদীপ স্কুল যাত্রা শুরু করে <strong>২০২১ সাল</strong> থেকে। অল্প
            কিছু শিক্ষার্থী দিয়ে শুরু হলেও আজ এটি হয়ে উঠেছে সুবিধাবঞ্চিত
            শিশুদের জন্য একটি <strong>আশার প্রদীপ</strong>।
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🌱 আমাদের স্বপ্ন
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            প্রত্যেক শিশুর হাতে শিক্ষা তুলে দেওয়া, যাতে তারা স্বপ্ন দেখতে পারে,
            বড় হতে পারে, এবং নিজেদের ও সমাজকে আলোকিত করতে পারে।
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              💝 দান করুন
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              আপনার সহযোগিতায় আরও শিশুর জীবনে আলো ছড়িয়ে দিন। নিচের যেকোনো
              মাধ্যমে আমাদের সাহায্য করতে পারেন।
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* bKash Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src="/logo/bkash.svg"
                    alt="bKash"
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-pink-600 mb-3">bKash</h3>
                  <p className="text-3xl font-bold text-gray-900 tracking-wider">
                    01794019401
                  </p>
                  <p className="text-sm text-gray-500 mt-2">ব্যক্তিগত অ্যাকাউন্ট</p>
                </div>
                <button
                  onClick={() => copyToClipboard("01794019401", "bKash")}
                  className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    নম্বর কপি করুন
                  </span>
                </button>
              </div>
            </div>

            {/* Rocket Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src="/logo/rocket.svg"
                    alt="Rocket"
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-orange-600 mb-3">Rocket</h3>
                  <p className="text-3xl font-bold text-gray-900 tracking-wider">
                    01794019401
                  </p>
                  <p className="text-sm text-gray-500 mt-2">ব্যক্তিগত অ্যাকাউন্ট</p>
                </div>
                <button
                  onClick={() => copyToClipboard("01794019401", "Rocket")}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    নম্বর কপি করুন
                  </span>
                </button>
              </div>
            </div>

            {/* Nagad Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src="/logo/nagad.svg"
                    alt="Nagad"
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-3">Nagad</h3>
                  <p className="text-3xl font-bold text-gray-900 tracking-wider">
                    01754039112
                  </p>
                  <p className="text-sm text-gray-500 mt-2">ব্যক্তিগত অ্যাকাউন্ট</p>
                </div>
                <button
                  onClick={() => copyToClipboard("01754039112", "Nagad")}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    নম্বর কপি করুন
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              সকল ধরনের দান স্বচ্ছতার সাথে ব্যবহার করা হয়
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
            <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl border border-green-500">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">{toastMessage}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">প্রদীপ স্কুল</h3>
          <p className="text-gray-300 mb-6">
            সুবিধাবঞ্চিত শিশুদের শিক্ষার আলো পৌঁছে দিচ্ছি
          </p>
          <div className="text-sm text-gray-400">
            © ২০২৫ প্রদীপ স্কুল। সকল অধিকার সংরক্ষিত।
          </div>
        </div>
      </footer>
    </div>
  );
}
