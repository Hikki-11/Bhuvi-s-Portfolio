import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Check, Copy, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              Contact
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              Available for software engineering internships, backend development opportunities, and technical project collaborations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Info List */}
          <ScrollReveal direction="left" delay={0.15} className="lg:col-span-5 space-y-4">
            
            {/* Email */}
            <div className="glass-card p-4 rounded-[18px] bg-[rgba(255,255,255,0.75)] border border-[rgba(33,37,41,0.08)] space-y-3 text-left shadow-xs backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-[12px] bg-[#DEE2E6] text-[#212529] border border-[rgba(33,37,41,0.08)]">
                    <Mail className="w-4 h-4 text-[#212529]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#6C757D] uppercase">Email Address</div>
                    <a href={`mailto:${PROFILE_DATA.email}`} className="text-xs sm:text-sm font-semibold text-[#212529] hover:text-[#495057] transition-colors">
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PROFILE_DATA.email, 'email')}
                  className="p-1.5 rounded-[10px] bg-[#DEE2E6] hover:bg-[#CED4DA] text-[#212529] text-xs transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)]"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#212529]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card p-4 rounded-[18px] bg-[rgba(255,255,255,0.75)] border border-[rgba(33,37,41,0.08)] space-y-3 text-left shadow-xs backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-[12px] bg-[#DEE2E6] text-[#212529] border border-[rgba(33,37,41,0.08)]">
                    <Phone className="w-4 h-4 text-[#212529]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#6C757D] uppercase">Phone Number</div>
                    <a href={`tel:${PROFILE_DATA.phone}`} className="text-xs sm:text-sm font-semibold text-[#212529] hover:text-[#495057] transition-colors font-mono">
                      {PROFILE_DATA.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PROFILE_DATA.phone, 'phone')}
                  className="p-1.5 rounded-[10px] bg-[#DEE2E6] hover:bg-[#CED4DA] text-[#212529] text-xs transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)]"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#212529]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Channels Row */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3.5 rounded-[18px] bg-[rgba(255,255,255,0.75)] border border-[rgba(33,37,41,0.08)] hover:border-[#212529]/40 flex items-center space-x-3 transition-all text-left shadow-xs backdrop-blur-md"
              >
                <div className="p-2 rounded-[10px] bg-[#DEE2E6] text-[#212529] border border-[rgba(33,37,41,0.08)] shrink-0">
                  <Linkedin className="w-4 h-4 text-[#212529]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#212529]">LinkedIn</div>
                  <div className="text-[10px] font-mono text-[#6C757D] truncate">/in/bhuvanesan-n</div>
                </div>
              </a>

              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3.5 rounded-[18px] bg-[rgba(255,255,255,0.75)] border border-[rgba(33,37,41,0.08)] hover:border-[#212529]/40 flex items-center space-x-3 transition-all text-left shadow-xs backdrop-blur-md"
              >
                <div className="p-2 rounded-[10px] bg-[#DEE2E6] text-[#212529] border border-[rgba(33,37,41,0.08)] shrink-0">
                  <Github className="w-4 h-4 text-[#212529]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#212529]">GitHub</div>
                  <div className="text-[10px] font-mono text-[#6C757D] truncate">@Hikki-11</div>
                </div>
              </a>
            </div>

            {/* Resume Callout */}
            <div className="glass-card p-4 rounded-[18px] bg-[rgba(255,255,255,0.75)] border border-[rgba(33,37,41,0.08)] flex items-center justify-between text-left shadow-xs backdrop-blur-md">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-[#212529]">Curriculum Vitae</div>
                <div className="text-[11px] font-mono text-[#6C757D]">View or download PDF resume</div>
              </div>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-[12px] bg-[#212529] hover:bg-[#343A40] text-[#FFFFFF] font-bold text-xs flex items-center space-x-1.5 transition-all shadow-xs cursor-pointer border border-[#212529]"
              >
                <FileText className="w-3.5 h-3.5 text-[#FFFFFF]" />
                <span>Resume</span>
              </button>
            </div>

          </ScrollReveal>

          {/* Right Side: Contact Message Form */}
          <ScrollReveal direction="right" delay={0.25} className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-[18px] bg-[rgba(255,255,255,0.75)] border border-[rgba(33,37,41,0.08)] space-y-6 text-left shadow-xs backdrop-blur-md">
              <div className="border-b border-[rgba(33,37,41,0.08)] pb-4 text-center">
                <h3 className="text-xl font-bold text-[#212529] font-heading">Let's talk</h3>
                <p className="text-xs text-[#6C757D] mt-0.5">Reach out directly regarding opportunities or inquiries.</p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-[14px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-center space-y-2 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-[#212529] text-[#FFFFFF] flex items-center justify-center mx-auto font-bold">
                    <Check className="w-5 h-5 text-[#FFFFFF]" />
                  </div>
                  <h4 className="text-base font-bold text-[#212529] font-heading">Message Delivered</h4>
                  <p className="text-xs text-[#495057] max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name || 'Friend'}. I will get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium text-[#212529]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] text-xs focus:outline-none focus:border-[#212529] placeholder:text-[#6C757D]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium text-[#212529]">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] text-xs focus:outline-none focus:border-[#212529] placeholder:text-[#6C757D]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-medium text-[#212529]">Subject / Inquiry</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunities or Project Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] text-xs focus:outline-none focus:border-[#212529] placeholder:text-[#6C757D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-medium text-[#212529]">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Bhuvanesan, I reviewed your software engineer portfolio..."
                      className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] text-xs focus:outline-none focus:border-[#212529] resize-none placeholder:text-[#6C757D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-[12px] bg-[#212529] hover:bg-[#343A40] text-[#FFFFFF] font-bold text-xs transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-xs border border-[#212529]"
                  >
                    <Send className="w-3.5 h-3.5 text-[#FFFFFF]" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

