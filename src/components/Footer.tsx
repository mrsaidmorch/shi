import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Infrastructure Réseau', path: '/services/pme' },
    { name: 'Cybersécurité', path: '/services/pme' },
    { name: 'Développement Web', path: '/services/pme' },
    { name: 'Marketing Digital', path: '/services/pme' },
    { name: 'Domotique', path: '/services/particuliers' },
  ];

  const quickLinks = [
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Nos Réalisations', path: '/realisations' },
    { name: 'Blog & Actualités', path: '/blog' },
    { name: 'Catalogue Produits', path: '/produits' },
  ];

  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, text: '+212 6 63 72 27 72' },
    { icon: <Mail className="h-5 w-5" />, text: 'contact@shi.co.ma' },
    { icon: <MapPin className="h-5 w-5" />, text: 'Casablanca, Maroc' },
    { icon: <Clock className="h-5 w-5" />, text: 'Lun-Ven: 9h-18h' },
  ];

  const socialLinks = [
    { 
      icon: <Facebook className="h-5 w-5" />, 
      href: 'https://www.facebook.com/smarthighit', 
      name: 'Facebook',
      color: 'hover:text-blue-400'
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      href: 'https://www.instagram.com/smarthighit', 
      name: 'Instagram',
      color: 'hover:text-pink-400'
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: 'https://x.com/shimorocco', 
      name: 'Twitter/X',
      color: 'hover:text-blue-400'
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://www.linkedin.com/company/smarthighit', 
      name: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 p-3 rounded-xl">
                    <Network className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>
                <span className="text-2xl md:text-3xl font-bold">SHI</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Expert en solutions IT complètes au Maroc : développement web, IA locale, marketing digital, 
                cybersécurité, réseaux et domotique. Votre partenaire technologique de confiance.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 md:p-3 rounded-xl">
                  <span className="text-white font-bold text-base md:text-lg">98%</span>
                </div>
                <div className="text-xs md:text-sm text-gray-300">
                  <div className="font-semibold">Taux de satisfaction</div>
                  <div>client garanti</div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-3 md:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group ${social.color}`}
                    aria-label={social.name}
                  >
                    <div className="text-gray-300 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-bold">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-white transition-colors group flex items-center text-sm md:text-base"
                    >
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-bold">Liens Rapides</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors group flex items-center text-sm md:text-base"
                    >
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-bold">Contact</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                      {info.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                      {info.text}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Newsletter */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                <h4 className="font-semibold mb-3 text-sm md:text-base">Newsletter</h4>
                <p className="text-xs md:text-sm text-gray-300 mb-4">
                  Recevez nos dernières actualités IT
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 md:px-4 md:py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                  <button className="bg-gradient-to-r from-primary-600 to-primary-700 px-3 py-2 md:px-4 md:py-2 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all">
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6 md:py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-xs md:text-sm text-center lg:text-left">
                &copy; {currentYear} SHI - Solutions IT Complètes. Tous droits réservés.
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs md:text-sm">
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Politique de confidentialité
                </span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Conditions d'utilisation
                </span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Plan du site
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;