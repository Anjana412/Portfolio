import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <style>{`
        .contact-inner {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: 60px;
          width: 100%;
          max-width: 900px;
          padding: 0 24px;
          flex-wrap: wrap;
        }
        .contact-info { flex: 1 1 260px; }
        .contact-form { flex: 1 1 300px; width: 100%; }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          background: black;
          border: 1px solid #6b7280;
          border-radius: 4px;
          padding: 10px 12px;
          color: #d1d5db;
          font-size: 14px;
          outline: none;
          transition: border-color .2s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus { border-color: #a78bfa; }

        @media (max-width: 640px) {
          .contact-inner { flex-direction: column; gap: 32px; align-items: center; padding: 0 16px; }
          .contact-info  { text-align: center; width: 100%; }
          .contact-info .soc-icons { justify-content: center !important; }
          .contact-form  { width: 100%; }
          .name-email-row { flex-direction: column !important; }
        }
      `}</style>

      <div id="contact" className="min-h-screen bg-black flex flex-col items-center justify-center font-sans px-4 py-16">
        <h1 className="text-4xl sm:text-5xl text-white font-bold mb-10 text-center">
          Connect with me!
        </h1>

        <div className="contact-inner">
          {/* info */}
          <div className="contact-info flex flex-col gap-4">
            <span className="text-xl font-medium text-gray-100">Get in touch</span>
            <span className="text-sm bg-zinc-800 text-gray-300 rounded-md px-3 py-2">
              Email:{' '}
              <a href="mailto:anjanat0001@gmail.com" className="underline text-fuchsia-400">
                anjanat0001@gmail.com
              </a>
            </span>
            <span className="text-sm bg-zinc-800 text-gray-300 rounded-md px-3 py-2">
              Phone: +91 9656307973
            </span>
            <div className="soc-icons flex gap-4 mt-2">
              {[
                { href:'https://github.com/Anjana412',                         icon:<FaGithub size={22} />,    cls:'text-gray-400 hover:text-gray-100' },
                { href:'https://www.linkedin.com/in/anjana-t-480863352',        icon:<FaLinkedinIn size={22} />, cls:'text-gray-400 hover:text-blue-500' },
                { href:'https://twitter.com/YOUR_HANDLE',                       icon:<FaTwitter size={22} />,   cls:'text-gray-400 hover:text-sky-400' },
                { href:'https://instagram.com/YOUR_HANDLE',                     icon:<FaInstagram size={22} />, cls:'text-gray-400 hover:text-pink-500' },
              ].map(({ href, icon, cls }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className={`bg-zinc-800 rounded-full p-2 transition ${cls}`}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* form */}
          <div className="contact-form flex flex-col gap-4">
            <div className="name-email-row flex gap-4">
              <input type="text"  placeholder="Name"  />
              <input type="email" placeholder="Email" />
            </div>
            <textarea
              placeholder="Message"
              style={{ height:120, resize:'none' }}
            />
            <button
              type="button"
              className="self-start px-6 py-2 rounded border border-gray-500 text-gray-200 bg-zinc-900 hover:bg-violet-950 transition duration-150 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;