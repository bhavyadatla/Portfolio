import { Calendar, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">
              <img 
                src="/IMG-20241215-WA0024.jpg" 
                alt="Datla Bhavya - Professional Photo"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Datla Bhavya</h1>
            <h2 className="text-xl md:text-2xl text-blue-100 mb-4">Computer Science Engineering Student</h2>
            <p className="text-lg text-blue-50 mb-6 leading-relaxed">
              Passionate CS undergraduate with hands-on experience in full-stack development, 
              AI/ML, and cloud technologies. Seeking opportunities to contribute to innovative 
              software solutions and grow as a professional developer.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:bhavyareddydatla8@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="/public/Bhavya_resume.pdf"
                download="Datla_Bhavya_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors font-medium"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:col-span-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} />
                <span>B.Tech CSE, VVIT Guntur</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Expected Graduation: 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Tenali, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9390541618</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="https://github.com/bhavyadatla" target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bhavya-datla-26935b259/" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;