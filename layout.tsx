import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-space-grotesk' 
});

const dmSans = DM_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700'], 
  variable: '--font-dm-sans' 
});

export const metadata: Metadata = {
  title: 'ZM Jobs — Find Your Dream Job Anywhere',
  description: 'Worldwide Job Search Platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-background text-textWhite">
        <header className="sticky top-0 z-50 glass-card border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-electricBlue via-accentPurple to-electricBlue bg-[length:200%_auto] animate-textShine text-transparent bg-clip-text">
              ZM Jobs
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/jobs" className="hover:text-electricBlue transition-colors">All Jobs</Link>
            <Link href="/companies" className="hover:text-electricBlue transition-colors">Companies</Link>
            <Link href="/about" className="hover:text-electricBlue transition-colors">About Us</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="px-4 py-2 text-sm font-semibold text-black bg-gradient-to-r from-electricBlue to-accentPurple rounded-md hover:opacity-90 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)]">
              Register
            </Link>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="border-t border-white/5 py-8 px-6 text-center text-gray-500 text-sm glass-card">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-left">
              <span className="text-lg font-bold text-white">ZM Jobs</span>
              <p className="text-xs text-gray-500 mt-1">Connecting world-class talents with premium opportunities globally.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/jobs" className="hover:text-white transition-colors">Jobs</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}