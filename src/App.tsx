import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Globe, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import profileImage   from './assets/myimage.jpg';

const skills = {
  design: [
    { name: 'UI Design', level: 95, icon: '🎨' },
    { name: 'UX Design', level: 90, icon: '🧠' },
    { name: 'Interaction', level: 85, icon: '✨' },
    { name: 'Prototyping', level: 80, icon: '📱' }
  ],
  development: [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '📦' },
    { name: 'TypeScript', level: 80, icon: '💎' },
    { name: 'CSS/SCSS', level: 95, icon: '🎨' }
  ]
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'An elegant portfolio with smooth animations',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    category: 'UI/UX Design',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
    category: 'Mobile App',
    link: '#'
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold">Portfolio</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              <a href="#about" className="block">About</a>
              <a href="#skills" className="block">Skills</a>
              <a href="#projects" className="block">Projects</a>
              <a href="#contact" className="block">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ y: 100, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Developer
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting digital experiences that blend creativity with functionality
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <div>
              <motion.h2
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                A Passionate Designer & Developer
              </motion.h2>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-gray-400">
                  With a background in both design and development, I bring a unique perspective to every project. I focus on creating intuitive, engaging experiences that solve real problems.
                </p>
                <p className="text-gray-400">
                  My approach combines aesthetic sensibility with technical expertise to craft digital products that are both beautiful and functional.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">EXPERIENCE</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>1 Years in UI/UX Design</li>
                      <li>2 Years in Frontend Dev</li>
                      <li>4 Successful Projects</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">EDUCATION</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>Btech Computer Science</li>
                      <li>UI Design Certification</li>
                      <li>UX Design Certification</li>
                      <li>Frontend Development</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">My Expertise</h2>
            <p className="text-gray-400">
              A combination of design thinking and technical skills to create exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Design Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-8">Design Skills</h3>
              <div className="space-y-8">
                {skills.design.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Development Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-8">Development Skills</h3>
              <div className="space-y-8">
                {skills.development.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 bg-white/5 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Looking for a designer or developer?</h3>
            <p className="text-gray-400 mb-8">
              I'm currently available for freelance projects and full-time positions. Let's create something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work, showcasing web development, UI/UX design, and mobile applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card group"
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-[400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-100">
                    <div className="absolute bottom-0 p-6 w-full">
                      <span className="text-sm font-bold text-white mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white-300 mb-4">{project.description}</p>
                      <a
                        href={project.link}
                        className="inline-flex items-center text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
                      >
                        View Project <Globe className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                I'm currently available for freelance projects and full-time positions. 
                Let's create something amazing together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400">vishwathnarayanathm09@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-400">+91 9989047533</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-400">Telangana , India </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a href="#" className="social-link">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="social-link">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="social-link">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact-input"
                    placeholder="myemail@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="contact-input"
                    placeholder="Your message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Vishwath Narayana Thoutam</h3>
              <p className="text-gray-400 mb-4">
                UI/UX Designer & Developer
              </p>
              <p className="text-gray-400">
                Creating intuitive and beautiful interfaces that solve real problems.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Study</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">BtechComputer Science</span>
                </li>
                <li>
                  <span className="text-gray-400">KITSW</span>
                </li>
                <li>
                  <span className="text-gray-400">2023 - 2027</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About Me</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">vishwathnarayanathm09@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">9989047533</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Telangana , India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Vishwath Narayana Thoutam.   All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;