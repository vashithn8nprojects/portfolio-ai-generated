import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pujala Sai Varshith - Home',
  description: 'Pujala Sai Varshith - Computer Science undergraduate seeking internship or entry-level software roles with strong backend development skills.',
};

export default function HomePage() {
  return (
    <section className="min-h-[calc(100vh-16rem)] flex items-center justify-center py-12 md:py-24">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Hello, I&apos;m <span className="text-blue-600">Pujala Sai Varshith</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Computer Science undergraduate with strong fundamentals in backend development, programming, and debugging. Hands-on experience in API integration, email automation, and Linux-based development. Seeking internship or entry-level software roles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            View My Projects
          </Link>
          <Link href="/contact" className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
