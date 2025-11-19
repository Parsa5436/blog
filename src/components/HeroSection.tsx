"use client";
import { MouseParallax } from "react-just-parallax";
import Image from "next/image";
import Link from "next/link";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

function HeroSection() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Background Parallax Layer */}
      <MouseParallax strength={0.01} isAbsolutelyPositioned>
        <Image
          src="/images/parallax/first-layer.jpg"
          alt="Background landscape"
          fill
          className="object-cover"
          style={{ transform: "scale(1.05)" }}
          priority
        />
      </MouseParallax>

      {/* Foreground Parallax Layer */}
      <MouseParallax strength={0.03} isAbsolutelyPositioned>
        <Image
          src="/images/parallax/second-layer.png"
          alt="Foreground elements"
          fill
          className="object-cover"
          style={{ transform: "scale(1.1)" }}
        />
      </MouseParallax>

      {/* Content Layer */}
      <MouseParallax strength={0.08} isAbsolutelyPositioned>
        <div className="w-full h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className={`${lobster.className} text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg`}>
            Welcome to My Blog
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md opacity-90">
            Discover amazing articles, insights, and stories from our community of writers
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blogs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Read Articles
            </Link>
            <Link
              href="/create-blog"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Write Article
            </Link>
          </div>
        </div>
      </MouseParallax>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
