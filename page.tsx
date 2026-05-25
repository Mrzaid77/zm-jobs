'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Job {
  id: string;
  title: string;
  company: string;
  country: string;
  city: string;
  salary: string;
  currency: string;
  job_type: string;
  created_at: string;
  is_featured: boolean;
}

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [detectedCountry, setDetectedCountry] = useState('Global');
  const [detectedCurrency, setDetectedCurrency] = useState('USD');
  
  const [featuredJobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Senior Next.js Developer',
      company: 'TechVantage',
      country: 'USA',
      city: 'San Francisco',
      salary: '95,000',
      currency: 'USD',
      job_type: 'Remote',
      created_at: '2 days ago',
      is_featured: true
    },
    {
      id: '2',
      title: 'Digital Marketing Specialist',
      company: 'Creative Pulse',
      country: 'UAE',
      city: 'Dubai',
      salary: '15,000',
      currency: 'AED',
      job_type: 'Full Time',
      created_at: '1 day ago',
      is_featured: true
    },
    {
      id: '3',
      title: 'Full Stack Software Engineer',
      company: 'AppScale Corp',
      country: 'Pakistan',
      city: 'Islamabad',
      salary: '220,000',
      currency: 'PKR',
      job_type: 'Remote',
      created_at: '3 hours ago',
      is_featured: true
    }
  ]);

  useEffect(() => {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timeZone.includes('Karachi')) {
        setDetectedCountry('Pakistan');
        setDetectedCurrency('PKR');
      } else if (timeZone.includes('Dubai')) {
        setDetectedCountry('UAE');
        setDetectedCurrency('AED');
      } else {
        setDetectedCountry('USA');
        setDetectedCurrency('USD');
      }
    } catch {
      setDetectedCountry('Global');
      setDetectedCurrency('USD');
    }
  }, []);

  const categories = ['IT', 'Sales', 'Marketing', 'Finance', 'Engineering', 'Teaching'];
  const countries = ['Pakistan', 'UAE', 'USA', 'UK', 'Saudi Arabia', 'Canada'];

  return (
    <div className="pb-16">
      <section className="relative pt-24 pb-20 px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="absolute top-10 w-72 h-72 bg-electricBlue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 w-72 h-72 bg-accentPurple/10 rounded-full blur-[100px]" />

        <p className="text-sm font-semibold uppercase tracking-widest text-electricBlue mb-4">
          Location: {detectedCountry} — Currency: {detectedCurrency}
        </p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6">
          Find Your Dream Job Anywhere In{' '}
          <span className="bg-gradient-to-r from-electricBlue via-accentPurple to-electricBlue bg-[length:200%_auto] animate-textShine text-transparent bg-clip-text">
            The World
          </span>
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mb-12 font-light">
          Explore high-paying remote roles, full-time contracts, and local jobs worldwide.
        </p>

        <div className="w-full max-w-4xl glass-card rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center shadow-2xl relative z-10">
          <input
            type="text"
            placeholder="Search Job Title, Company..."
            className="w-full md:flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none text-white focus:border-electricBlue text-sm transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full md:w-48 bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none text-white text-sm"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="All">All Countries</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            className="w-full md:w-48 bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none text-white text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-electricBlue to-accentPurple text-black font-semibold rounded-xl hover:opacity-95 transition-opacity duration-300 text-sm">
            Search
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Popular Job Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div key={cat} className="glass-card hover:translate-y-[-2px] duration-300 transition-all cursor-pointer rounded-xl p-6 text-center">
              <div className="w-10 h-10 bg-electricBlue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-electricBlue font-bold text-sm">#</span>
              </div>
              <p className="font-semibold text-sm">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Positions</h2>
            <p className="text-sm text-gray-500 mt-1">Premium opportunities worldwide.</p>
          </div>
          <Link href="/jobs" className="text-electricBlue hover:underline text-sm font-medium">
            View All &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <div key={job.id} className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-electricBlue/10 text-electricBlue text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl border-l border-b border-white/5">
                {job.job_type}
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">{job.company}</p>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electricBlue transition-colors">{job.title}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <span>📍 {job.city}, {job.country}</span>
                </div>
              </div>
              <div className="border-t border-white/5 pt-4 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-500 block">Salary</span>
                  <span className="text-sm font-bold text-white">{job.currency} {job.salary}</span>
                </div>
                <Link href={`/jobs/${job.id}`} className="px-4 py-2 bg-white/5 hover:bg-electricBlue hover:text-black transition-all rounded-lg text-xs font-semibold">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-electricBlue/10 via-accentPurple/10 to-transparent p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-electricBlue font-semibold uppercase tracking-wide">Work from Anywhere</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-2">Explore Remote Jobs</h2>
            <p className="text-sm text-gray-400 max-w-lg">Browse jobs globally — work from anywhere in the world.</p>
          </div>
          <Link href="/jobs?type=Remote" className="px-6 py-3 bg-white text-black font-semibold rounded-xl text-sm hover:bg-opacity-90 transition-all">
            Browse Remote Jobs
          </Link>
        </div>
      </section>
    </div>
  );
}