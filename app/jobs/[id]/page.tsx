import React from 'react';
import Link from 'next/link';

interface JobDetailProps {
  params: {
    id: string;
  };
}

async function fetchJobDetail(id: string) {
  return {
    id: id,
    title: 'Senior Next.js Developer',
    company: 'TechVantage',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80',
    country: 'USA',
    city: 'San Francisco',
    salary: '95,000',
    currency: 'USD',
    job_type: 'Remote',
    description: 'We are seeking an experienced Next.js Developer to build modern dashboard interfaces and server components.',
    requirements: '• 3+ Years React & Next.js\n• Tailwind CSS\n• Supabase or PostgreSQL\n• Good communication skills',
    apply_link: 'https://example.com/apply',
    created_at: '2 days ago',
    category: 'IT'
  };
}

export default async function JobDetailPage({ params }: JobDetailProps) {
  const job = await fetchJobDetail(params.id);

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <Link href="/jobs" className="text-sm text-gray-400 hover:text-electricBlue flex items-center gap-1 mb-8">
        &larr; Back to Listings
      </Link>

      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            {job.logo && (
              <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-2xl object-cover border border-white/10" />
            )}
            <div>
              <span className="px-3 py-1 bg-electricBlue/15 text-electricBlue text-[11px] font-bold rounded-full uppercase">
                {job.job_type}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2">{job.title}</h1>
              <p className="text-sm text-gray-400 mt-1">{job.company} &bull; {job.city}, {job.country}</p>
            </div>
          </div>
          <div>
            <span className="text-xs text-gray-400 block md:text-right">Salary</span>
            <span className="text-2xl font-bold text-white">{job.currency} {job.salary}</span>
          </div>
        </div>

        <div className="py-8 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-electricBlue mb-3">Job Description</h3>
            <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">{job.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-electricBlue mb-3">Requirements</h3>
            <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">{job.requirements}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500">
            Posted {job.created_at} &bull; Category: {job.category}
          </div>
          <a
            href={job.apply_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-4 text-center bg-gradient-to-r from-electricBlue to-accentPurple text-black font-bold rounded-xl hover:opacity-95 shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
