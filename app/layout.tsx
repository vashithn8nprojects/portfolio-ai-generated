import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Pujala Sai Varshith - Portfolio',
  description: 'Computer Science undergraduate with strong fundamentals in backend development, programming, and debugging. Seeking internship or entry-level software roles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="flex flex-col min-h-screen font-sans">
        <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
          <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 mb-2 sm:mb-0">
              Sai Varshith
            </Link>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-blue-600 font-medium">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center text-sm mt-8">
          <p>&copy; {new Date().getFullYear()} Pujala Sai Varshith. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://linkedin.com/in/sai-varshith-pujala-704036252" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
            <a href="https://github.com/saivarshithnaidu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
            <a href="mailto:saivarshith8284@gmail.com" className="hover:text-blue-400">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
