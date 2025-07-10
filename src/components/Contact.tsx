import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-xl text-blue-100 mb-8">
          I'm actively seeking opportunities to contribute to innovative projects and grow as a software developer.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:bhavyareddydatla8@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/bhavya-datla-26935b259/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors font-medium"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/bhavyadatla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;