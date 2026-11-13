import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Check, Copy, FileText, Loader2, AlertCircle } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { supabase } from '../supabaseClient';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'General Inquiry',
          message: formData.message.trim(),
        },
      ]);

      if (error) {
        throw error;
      }

      setSuccessMessage(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);
    } catch (err: any) {
      console.error('Supabase contact submission error:', err);
      const errCode = err?.code;
      const errMsg = err?.message || '';

      if (errCode === 'PGRST205' || errMsg.includes('Could not find the table')) {
        setErrorMessage(
          "Database table 'contact_messages' does not exist yet in Supabase. Please run the SQL migration script in your Supabase SQL Editor."
        );
      } else if (errCode === '42501' || errMsg.includes('permission denied')) {
        setErrorMessage(
          "Permission denied (42501). Please run 'GRANT INSERT ON public.contact_messages TO anon;' in your Supabase SQL Editor."
        );
      } else {
        setErrorMessage(
          errMsg || 'Failed to send message. Please try again later or contact directly via email.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      {/* Background Ambient Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#CED4DA] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#DEE2E6] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              Let's Talk
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              Available for internships, backend development opportunities, and technical project collaborations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Info List */}
          <ScrollReveal direction="left" delay={0.15} className="lg:col-span-5 space-y-4">
            
            {/* Email */}
            <div className="glass-card p-4 space-y-3 text-left">
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
            <div className="glass-card p-4 space-y-3 text-left">
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
                className="glass-card p-3.5 flex items-center space-x-3 transition-all text-left"
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
                className="glass-card p-3.5 flex items-center space-x-3 transition-all text-left"
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
            <div className="glass-card p-4 flex items-center justify-between text-left">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-[#212529]">Curriculum Vitae</div>
                <div className="text-[11px] font-mono text-[#6C757D]">View or download PDF resume</div>
              </div>

              <button
                onClick={() => {
                  if (onOpenResume) onOpenResume();
                }}
                className="px-4 py-2.5 rounded-[12px] bg-[#212529] hover:bg-[#343A40] text-[#FFFFFF] font-bold text-xs flex items-center space-x-1.5 transition-all shadow-xs cursor-pointer border border-[#212529]"
              >
                <FileText className="w-3.5 h-3.5 text-[#FFFFFF]" />
                <span>Resume</span>
              </button>
            </div>

          </ScrollReveal>

          {/* Right Side: Contact Message Form */}
          <ScrollReveal direction="right" delay={0.25} className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 space-y-6 text-left">
              {successMessage ? (
                <div className="p-6 rounded-[14px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-center space-y-2 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-[#212529] text-[#FFFFFF] flex items-center justify-center mx-auto font-bold">
                    <Check className="w-5 h-5 text-[#FFFFFF]" />
                  </div>
                  <h4 className="text-base font-bold text-[#212529] font-heading">Message Delivered</h4>
                  <p className="text-xs text-[#495057] max-w-sm mx-auto">
                    Your message has been sent successfully! I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-[12px] bg-[#F8D7DA] border border-[#F5C6CB] text-[#721C24] text-xs flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium text-[#212529]">Your Name *</label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] text-xs focus:outline-none focus:border-[#212529] placeholder:text-[#6C757D] disabled:opacity-60"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium text-[#212529]">Your Email *</label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] text-xs focus:outline-none focus:border-[#212529] placeholder:text-[#6C757D] disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-medium text-[#212529]">Subject / Inquiry</label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunities or Project Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] text-xs focus:outline-none focus:border-[#212529] placeholder:text-[#6C757D] disabled:opacity-60"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-medium text-[#212529]">Message *</label>
                    <textarea
                      required
                      rows={4}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Bhuvanesan, I reviewed your portfolio..."
                      className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] text-xs focus:outline-none focus:border-[#212529] resize-none placeholder:text-[#6C757D] disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-[12px] bg-[#212529] hover:bg-[#343A40] text-[#FFFFFF] font-bold text-xs transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-xs border border-[#212529] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#FFFFFF]" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#FFFFFF]" />
                        <span>Send Message</span>
                      </>
                    )}
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
