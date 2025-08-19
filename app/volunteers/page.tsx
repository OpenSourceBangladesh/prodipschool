"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Volunteer {
  id: string;
  name: string;
  designation: string;
}

interface VolunteersData {
  volunteers: Volunteer[];
}

export default function VolunteersPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await fetch('/data/2025/volunteers.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: VolunteersData = await response.json();
        if (data && data.volunteers && Array.isArray(data.volunteers)) {
          setVolunteers(data.volunteers);
        } else {
          console.error('Invalid data structure:', data);
          setVolunteers([]);
        }
      } catch (error) {
        console.error('Error fetching volunteers:', error);
        setVolunteers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

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
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors"
              >
                হোম
              </Link>
            </li>
            <li>
              <Link
                href="/volunteers"
                className="text-blue-600 font-semibold"
              >
                সেচ্ছাসেবক
              </Link>
            </li>
            <li>
              <Link
                href="/#students"
                className="hover:text-blue-600 transition-colors"
              >
                শিক্ষার্থী
              </Link>
            </li>
            <li>
              <Link
                href="/#advisors"
                className="hover:text-blue-600 transition-colors"
              >
                পরামর্শদাতা
              </Link>
            </li>
            <li>
              <Link
                href="/#media"
                className="hover:text-blue-600 transition-colors"
              >
                মিডীয়া
              </Link>
            </li>
            <li>
              <Link
                href="/#events"
                className="hover:text-blue-600 transition-colors"
              >
                ইভেন্টস
              </Link>
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
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    হোম
                  </Link>
                </li>
                <li>
                  <Link
                    href="/volunteers"
                    className="block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    সেচ্ছাসেবক
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#students"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    শিক্ষার্থী
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#advisors"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    পরামর্শদাতা
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#media"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    মিডীয়া
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#events"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ইভেন্টস
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            🤝 আমাদের সেচ্ছাসেবকগণ
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong>২০২৫</strong> সালে আমাদের সাথে যুক্ত দানশীল ও আত্মত্যাগী সেচ্ছাসেবকদের পরিচয়
          </p>
        </div>
      </section>

      {/* Impact and Responsibility Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                🌟 সামাজিক প্রভাব ও দায়বদ্ধতা
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                আমাদের সেচ্ছাসেবকগণ কেবল শিক্ষা প্রদানই করেন না, বরং তারা প্রতিটি শিশুর জীবনে 
                একটি ইতিবাচক পরিবর্তন আনেন। তাদের নিঃস্বার্থ সেবা ও আত্মত্যাগের মাধ্যমে 
                সুবিধাবঞ্চিত শিশুরা আশার আলো খুঁজে পায়।
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm md:text-lg">💡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">শিক্ষার মান উন্নয়ন</h3>
                    <p className="text-gray-600 text-sm md:text-base">প্রতিটি শিশু উন্নত মানের শিক্ষা পাওয়ার অধিকার রাখে</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm md:text-lg">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">সামাজিক দায়বদ্ধতা</h3>
                    <p className="text-gray-600 text-sm md:text-base">সমাজের প্রতিটি সদস্যের কল্যাণে অবদান রাখা</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm md:text-lg">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">ভবিষ্যৎ নেতৃত্ব</h3>
                    <p className="text-gray-600 text-sm md:text-base">আগামীর নেতা তৈরিতে গুরুত্বপূর্ণ ভূমিকা পালন</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 mt-8 lg:mt-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                🎁 সেচ্ছাসেবা করার উপকারিতা
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                সেচ্ছাসেবা শুধু অন্যদের উপকার করে না, এটি নিজের ব্যক্তিত্ব ও 
                দক্ষতা বিকাশেও সহায়তা করে।
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm md:text-lg">🧠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">দক্ষতা বৃদ্ধি</h3>
                    <p className="text-gray-600 text-sm md:text-base">নেতৃত্ব, যোগাযোগ ও সমস্যা সমাধানের দক্ষতা</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm md:text-lg">❤️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">মানসিক প্রশান্তি</h3>
                    <p className="text-gray-600 text-sm md:text-base">অন্যের সেবা করে অভূতপূর্ব আনন্দ ও তৃপ্তি লাভ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm md:text-lg">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">নেটওয়ার্কিং</h3>
                    <p className="text-gray-600 text-sm md:text-base">সমমনা ব্যক্তিদের সাথে দীর্ঘমেয়াদী সম্পর্ক</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Grid Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              👥 ২০২৫ সালের সেচ্ছাসেবক দল
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              আমাদের নিবেদিতপ্রাণ সেচ্ছাসেবকগণ যারা শিশুদের উন্নত ভবিষ্যত গড়তে 
              নিরলসভাবে কাজ করে যাচ্ছেন।
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : volunteers && volunteers.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {volunteers.map((volunteer) => (
                <div
                  key={volunteer.id}
                  className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={`/photos/2025/${volunteer.id}.webp`}
                      alt={volunteer.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/photos/slide.jpg'; // Fallback image
                      }}
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <a
                      href={`https://cuet.sayed.app/${volunteer.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-blue-600 transition-colors"
                    >
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center hover:text-blue-600 transition-colors">
                        {volunteer.name}
                      </h3>
                    </a>
                    <p className="text-sm md:text-base text-gray-600 text-center mb-2">
                      {volunteer.designation}
                    </p>
                    <a
                      href={`https://cuet.sayed.app/${volunteer.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center hover:text-blue-600 transition-colors"
                    >
                      <p className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors">
                        আইডি: {volunteer.id}
                      </p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <p className="text-xl text-gray-600 mb-4">কোনো সেচ্ছাসেবক পাওয়া যায়নি</p>
                <p className="text-gray-500">দয়া করে পরে আবার চেষ্টা করুন</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🌟 আপনিও যুক্ত হন
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            আমাদের সেচ্ছাসেবক দলে যোগ দিয়ে শিশুদের জীবনে ইতিবাচক পরিবর্তন আনুন। 
            একসাথে গড়ি একটি উন্নত সমাজ।
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer">
            <span>যোগাযোগ করুন</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
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
