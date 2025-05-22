import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white py-20 md:py-32 text-center">
      <div className="container mx-auto px-4">
        <h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
          data-aos="fade-in"
        >
          Simplify Your <br className="hidden md:inline" />
          Medication Routine
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Stay on track with your medications using MediTrack, your personal
          pill companion.
        </p>
        <Link
          href="/signup" // Or your actual "Get Started" link (e.g., to a signup page)
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg"
          data-aos="fade-up"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
