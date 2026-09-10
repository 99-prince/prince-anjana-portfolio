import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-black/60">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="LET'S BUILD SOMETHING" subtitle="Open for opportunities and collaborations." />
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                  <a href={`mailto:${portfolioData.contact.email}`} className="text-white hover:text-primary transition-colors">
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>

              {portfolioData.contact.phone && (
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-white">{portfolioData.contact.phone}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-white">{portfolioData.contact.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: 'GitHub', href: portfolioData.contact.social.github, icon: <Code2 size={18} /> },
                  { label: 'LinkedIn', href: portfolioData.contact.social.linkedin, icon: <Briefcase size={18} /> },
                  { label: 'LeetCode', href: portfolioData.contact.social.leetcode, icon: <span className="text-xs font-bold">LC</span> },
                ].map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-3 text-sm text-gray-300 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-white"
                  >
                    {profile.icon}
                    {profile.label}
                    <ExternalLink size={14} className="text-gray-500" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm text-gray-400 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can we help each other?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-blue-600 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>SEND MESSAGE <Send size={18} /></>
                )}
              </button>

            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
