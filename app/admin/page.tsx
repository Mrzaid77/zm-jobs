'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Job {
  id: string;
  title: string;
  company: string;
  country: string;
  is_featured: boolean;
  status: 'Published' | 'Draft';
}

export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([
    { id: '1', title: 'Senior Next.js Developer', company: 'TechVantage', country: 'USA', is_featured: true, status: 'Published' },
    { id: '2', title: 'Digital Marketing Specialist', company: 'Creative Pulse', country: 'UAE', is_featured: true, status: 'Published' },
    { id: '3', title: 'Corporate Financial Analyst', company: 'Apex Consulting', country: 'Pakistan', is_featured: false, status: 'Draft' },
  ]);

  const toggleFeatured = (id: string) => {
    setJobs(jobs.map(j => j.id === id ? { ...j, is_featured: !j.is_featured } : j));
  };

  const toggleStatus = (id: string) => {
    setJobs(jobs.map(j => j.id === id ? { ...j, status: j.status === 'Published' ? 'Draft' : 'Published' } : j));
  };

  const handleDelete = (id: string) => {
    setJobs(jobs.filter(j => j.id !== id));
  };

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Admin Dashboard</h1>
          <p className="text-sm text-gray-400 mt-1">Manage jobs listings.</p>
        </div>
        <Link href="/admin/add-job" className="px-6 py-3 bg-gradient-to-r from-electricBlue to-accentPurple text-black font-semibold rounded-xl text-sm hover:opacity-95 transition-all">
          + Add New Job
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Total Jobs</p>
          <p className="text-3xl font-bold mt-2 text-white">{jobs.length}</p>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Published</p>
          <p className="text-3xl font-bold mt-2 text-electricBlue">
            {jobs.filter(j => j.status === 'Published').length}
          </p>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Featured</p>
          <p className="text-3xl font-bold mt-2 text-accentPurple">
            {jobs.filter(j => j.is_featured).length}
          </p>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden border border-white/5">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-lg font-semibold text-white">All Jobs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-white/5 text-xs uppercase text-gray-400">
              <tr>
                <th className="p-4">Job Title</th>
                <th className="p-4">Company</th>
                <th className="p-4 text-center">Featured</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-semibold text-white">{job.title}</td>
                  <td className="p-4">{job.company} ({job.country})</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => toggleFeatured(job.id)}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        job.is_featured
                          ? 'bg-electricBlue/20 text-electricBlue border border-electricBlue/45'
                          : 'bg-white/5 text-gray-500 border border-transparent'
                      }`}
                    >
                      {job.is_featured ? 'Featured' : 'Standard'}
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => toggleStatus(job.id)}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        job.status === 'Published'
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                      }`}
                    >
                      {job.status}
                    </button>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-xs">Edit</button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
