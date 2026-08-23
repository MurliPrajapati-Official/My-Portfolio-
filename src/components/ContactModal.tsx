import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Send, CheckCircle2, Copy, Sparkles, ExternalLink, Linkedin, Github, Instagram, MapPin } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Development',
    message: '',
  });

  const email = 'jayish.choudhary@hoollow.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', service: 'Full-Stack Development', message: '' });
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="contact-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            id="contact-modal-dialog"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 max-w-xl w-full text-[#D7E2EA] relative shadow-2xl overflow-hidden my-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-contact-modal"
              onClick={onClose}
              className="absolute top-6 right-6 text-[#D7E2EA]/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.1em] text-[#B600A8] font-bold flex items-center gap-1.5 mb-2">
                <Sparkles size={14} /> Connect &amp; Collaborate
              </span>
              <h3 className="hero-heading font-black text-3xl sm:text-4xl uppercase tracking-[0.04em]">
                Connect With Jayish
              </h3>
              <p className="text-[#D7E2EA]/70 text-sm sm:text-base font-light mt-1 tracking-[0.02em]">
                Full-Stack Developer based in Hyderabad, India. Let&apos;s build reliable digital products.
              </p>
            </div>

            {/* Social Links Bar */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              <a
                href="https://www.linkedin.com/in/jayish-choudhary-913970398/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B600A8] hover:bg-white/10 transition-all text-xs font-medium text-[#D7E2EA]"
              >
                <Linkedin size={15} className="text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/jayish233"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B600A8] hover:bg-white/10 transition-all text-xs font-medium text-[#D7E2EA]"
              >
                <Github size={15} className="text-white" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.instagram.com/jayish2083/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B600A8] hover:bg-white/10 transition-all text-xs font-medium text-[#D7E2EA]"
              >
                <Instagram size={15} className="text-[#E1306C]" />
                <span>Instagram</span>
              </a>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8]">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl font-bold uppercase text-[#D7E2EA]">
                  Message Sent!
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 max-w-xs">
                  Thanks for reaching out! Jayish will respond as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full bg-[#181a20] border border-white/10 rounded-2xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full bg-[#181a20] border border-white/10 rounded-2xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5">
                    Service / Subject
                  </label>
                  <select
                    id="contact-form-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#181a20] border border-white/10 rounded-2xl px-4 py-3 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-colors"
                  >
                    <option value="Frontend Engineering">Frontend Engineering</option>
                    <option value="Backend Architecture">Backend Architecture</option>
                    <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                    <option value="System Design & Architecture">System Design &amp; Architecture</option>
                    <option value="Open Source & Other">Open Source &amp; Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-form-message"
                    rows={3}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your product requirements, tech stack, or ideas..."
                    className="w-full bg-[#181a20] border border-white/10 rounded-2xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs flex items-center gap-1.5 text-[#D7E2EA]/70 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        <span>Email copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy direct email</span>
                      </>
                    )}
                  </button>

                  <ContactButton
                    id="submit-contact-form-btn"
                    label="Send Message"
                    className="w-full sm:w-auto"
                  />
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
