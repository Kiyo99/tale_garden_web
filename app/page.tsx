"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import your theme hook
import { useTheme } from "@/context/theme-context";

export default function Home() {
  // Pull the current theme from your custom context
  const { theme } = useTheme(); // e.g., "light" or "dark"

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
        }`}
    >
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-12 py-4">
        <Link href="/">
          <span className="text-xl font-bold">TaleGarden</span>
        </Link>
        <div className="space-x-4 hidden md:block">
          <Link href="#features">Features</Link>
          <Link href="#screens">Screens</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="px-6 py-12 sm:py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Immersive Reading With{" "}
            <span className="text-green-600">TaleGarden</span>
          </h1>
          <p
            className={`text-lg sm:text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
          >
            TaleGarden is an e-reading application that empowers emerging authors
            to publish while providing readers with an immersive discovery experience. Explore new books,
            enjoy background soundtracks through Spotify integration, and support independent writers
            in a beautifully designed reading environment.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => alert("iOS Download Coming Soon!")}
              className={`px-6 py-3 rounded-full hover:opacity-90 transition ${theme === "dark"
                  ? "bg-gray-100 text-black"
                  : "bg-black text-white"
                }`}
            >
              iOS Download
            </button>
            <button
              onClick={() => alert("Android Download Coming Soon to the playstore!")
              }
              className={`px-6 py-3 rounded-full border hover:opacity-90 transition ${theme === "dark"
                  ? "border-white bg-white/10 text-white"
                  : "border-black bg-white text-black"
                }`}
            >
              Android Download
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={theme === "dark" ? "/home_dark.png" : "/home_light.png"}
            alt="TaleGarden Home"
            width={350}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Why Choose <span className="text-green-600">TaleGarden?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "📚",
              title: "Sophisticated Reading Experience",
              description: "Enjoy books with customizable typography, seamless page transitions, and full dark mode support.",
            },
            {
              icon: "🎵",
              title: "Spotify Integration",
              description: "Authors can add custom playlists to enhance the atmosphere of their stories, giving readers a truly immersive experience.",
            },
            {
              icon: "✍️",
              title: "Author Publishing Platform",
              description: "A multi-step publishing flow allows authors to easily upload, format, and share their works with readers.",
            },
            {
              icon: "🌗",
              title: "Material 3 Design",
              description: "Modern UI with both light and dark themes for comfortable reading in any environment.",
            },
            {
              icon: "📱",
              title: "Native Performance",
              description: "Built with Kotlin and Jetpack Compose for a fluid, responsive Android experience.",
            },
            {
              icon: "🔄",
              title: "Reactive Data Handling",
              description: "Leveraging coroutines and Flow for efficient backend interactions and real-time updates.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow transition-colors duration-300 ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
                }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPOTIFY FEATURE HIGHLIGHT */}
      <section className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-green-600">Soundtrack Your Reading</span> with Spotify Integration
              </h2>
              <p className="text-lg mb-6">
                TaleGarden takes reading to the next level by allowing authors to create custom Spotify playlists
                that accompany their stories. Readers can enjoy these curated soundtracks while reading,
                creating a truly immersive experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-green-500 mr-4 mt-1">✓</div>
                  <p>Authors can attach Spotify playlists to set the perfect mood for their stories</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-4 mt-1">✓</div>
                  <p>Readers can play background music while reading with one tap</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-4 mt-1">✓</div>
                  <p>Music controls available in the reading interface for a seamless experience</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src={theme === "dark" ? "/upload_dark.png" : "/upload_light.png"}
                  alt="Spotify Integration Screenshot"
                  width={300}
                  height={600}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <div className="absolute -bottom-5 -right-5 bg-green-500 text-white p-4 rounded-full shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENS SECTION */}
      <section id="screens" className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          App Screens
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DualImageCard
            title="Home"
            theme={theme}
            lightImg="/home_light.png"
            darkImg="/home_dark.png"
          />
          <DualImageCard
            title="Book Details"
            theme={theme}
            lightImg="/summary_light.png"
            darkImg="/summary_dark.png"
          />
          <DualImageCard
            title="Upload Book"
            theme={theme}
            lightImg="/upload_light.png"
            darkImg="/upload_dark.png"
          />
          <DualImageCard
            title="Upload Book (step 2)"
            theme={theme}
            darkImg="/upload_2_dark.png"
            lightImg="/upload_2_light.png"
          />
          <DualImageCard
            title="Book Preview"
            theme={theme}
            darkImg="/upload_3_dark.png"
            lightImg="/upload_3_light.png"
          />
          <DualImageCard
            title="Reading Experience"
            theme={theme}
            darkImg="/reading_dark.png"
            lightImg="/reading_light.png"
          />
        </div>
      </section>

      {/* PUBLISHING SECTION */}
      <section className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Publishing Made <span className="text-green-600">Simple</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src={theme === "dark" ? "/upload_dark.png" : "/upload_light.png"}
                alt="Publishing Interface"
                width={300}
                height={600}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-xl font-bold">A Multi-Step Publishing Flow</h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}>
                  <h4 className="font-bold">Step 1: Book Details</h4>
                  <p>Add your book title, select a category, add tags, and write a compelling synopsis.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}>
                  <h4 className="font-bold">Step 2: Files & Media</h4>
                  <p>Upload your book file (PDF), add a cover image, and attach a Spotify playlist to enhance the reading experience.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}>
                  <h4 className="font-bold">Step 3: Review & Publish</h4>
                  <p>Preview how your book will appear to readers and publish with a single tap when ready.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="py-16 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience TaleGarden?</h2>
          <p className="text-lg mb-8">
            Download now and join a community of readers and writers exploring the future of digital literature.
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => alert("iOS Download Coming Soon!")}
              className={`px-8 py-4 rounded-full text-lg hover:opacity-90 transition ${theme === "dark"
                  ? "bg-gray-100 text-black"
                  : "bg-black text-white"
                }`}
            >
              iOS Download
            </button>
            <button
              onClick={() => alert("Android Download Coming Soon to the playstore!")
              }
              className={`px-8 py-4 rounded-full border text-lg hover:opacity-90 transition ${theme === "dark"
                  ? "border-white bg-green-600 text-white"
                  : "border-black bg-green-600 text-white"
                }`}
            >
              Android Download
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        className={`px-6 py-8 ${theme === "dark" ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
          } text-center`}
      >
        <p>
          © {new Date().getFullYear()} TaleGarden - An immersive reading platform for independent authors and readers.
        </p>
      </footer>
    </main>
  );
}

/**
 * Component for screens that have both light & dark versions.
 */
function DualImageCard({
  title,
  theme,
  lightImg,
  darkImg,
}: {
  title: string;
  theme: string;
  lightImg: string;
  darkImg: string;
}) {
  const imageSrc = theme === "dark" ? darkImg : lightImg;
  return (
    <div
      className={`p-4 rounded-lg shadow flex flex-col items-center ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"
        }`}
    >
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      <Image
        src={imageSrc}
        alt={`${title} Screenshot`}
        width={240}
        height={480}
        className="rounded shadow"
      />
    </div>
  );
}