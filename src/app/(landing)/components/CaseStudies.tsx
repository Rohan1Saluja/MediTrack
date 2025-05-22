import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Case Studies
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Discover how MediTrack has helped individuals manage their medications
          effectively.
        </p>
        <Link
          href="/case-studies" // Link to a dedicated case studies page
          className="text-teal-500 hover:text-teal-600 font-semibold group"
        >
          Explore Case Studies
          <ArrowRight
            size={20}
            className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
      <div className="mt-12 max-w-4xl mx-auto p-8 bg-teal-50/50 rounded-lg text-left">
        <p className="text-gray-700">
          Detailed case studies coming soon. We're gathering stories of how
          MediTrack is making a difference in people's lives by improving
          medication adherence and providing peace of mind.
        </p>
      </div>
    </section>
  );
};

export default CaseStudies;
