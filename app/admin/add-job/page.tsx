'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddJobPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    country: 'Pakistan',
    city: '',
    salary: '',
    currency: 'USD',
    category: 'IT',
    job_type: 'Full Time',
    description: '',
    requirements: '',
    apply_link: '',
    is_featured: false,
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/admin');
  };

  return (
    <div className="py-12 px-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-2">Add New Job</h1>
      <p className="text-sm text-gray-400 mb-8">Fill the form below to post a new job.</p>

      <form onSubmit={handleFormSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Job Title</label>
            <input
              type="text"
              required
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Company Name</label>
            <input
              type="text"
              required
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Country</label>
            <select
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            >
              {['Pakistan', 'UAE', 'USA', 'UK', 'Saudi Arabia', 'Canada', 'Australia', 'Germany'].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">City</label>
            <input
              type="text"
              required
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Salary</label>
            <input
              type="text"
              placeholder="e.g. 85,000"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Currency</label>
            <select
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
              value={formData.currency}
              onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
            >
              {['USD', 'AED', 'PKR', 'GBP'].map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Category</label>
            <select
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              {['IT', 'Sales', 'Marketing', 'Teaching', 'Accounting', 'Engineering', 'Driving', 'Finance', 'Other'].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Job Type</label>
            <select
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
              value={formData.job_type}
              onChange={(e) => setFormData({ ...formData, job_type: e.target.value })}
            >
              {['Full Time', 'Part Time', 'Remote', 'Freelance'].map((jt) => (
                <option key={jt} value={jt}>{jt}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Apply Link</label>
          <input
            type="url"
            required
            placeholder="https://company.com/apply"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
            value={formData.apply_link}
            onChange={(e) => setFormData({ ...formData, apply_link: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Job Description</label>
          <textarea
            required
            rows={4}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Requirements</label>
          <textarea
            rows={3}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-electricBlue text-sm text-white"
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="is_featured"
            className="w-4 h-4 bg-black/50 border border-white/10 rounded"
            checked={formData.is_featured}
            onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
          />
          <label htmlFor="is_featured" className="text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer">
            Mark as Featured Job
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-electricBlue to-accentPurple text-black font-extrabold rounded-xl hover:opacity-95 transition-all text-sm shadow-[0_0_20px_rgba(0,212,255,0.25)]"
        >
          Publish Job
        </button>
      </form>
    </div>
  );
              }
