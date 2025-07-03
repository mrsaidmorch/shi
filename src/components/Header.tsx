import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Network, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Particuliers', path: '/services/particuliers', desc: 'Domotique & Sécurité' },
    { name: 'Écoles', path: '/services/ecoles', desc: 'Infrastructure IT' },
    { name: 'PME', path: '/services/pme', desc: 'Solutions Entreprise' },
  ];

  const handleServicesEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
    setServicesTimeout(timeout);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100/50' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-xl">
                <Network className="h-8 w-8 text-white" />
              </div>
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>SHI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isActive('/') 
                  ? (isScrolled ? 'text-primary-600' : 'text-white font-semibold') 
                  : (isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white')
              }`}
            >
              Accueil
            </Link>
            
            <div className="relative">
              <button
                className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname.startsWith('/services') 
                    ? (isScrolled ? 'text-primary-600' : 'text-white font-semibold') 
                    : (isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white')
                }`}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div
                className={`absolute left-0 mt-4 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-large border border-gray-100/50 py-4 transition-all duration-300 ${
                  isServicesOpen 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 translate-y-2 invisible'
                }`}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors group/item"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-semibold group-hover/item:translate-x-1 transition-transform">
                      {service.name}
                    </div>
                    <div className="text-xs text-gray-500 group-hover/item:translate-x-1 transition-transform">
                      {service.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {['produits', 'realisations', 'a-propos', 'blog'].map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(`/${page}`) 
                    ? (isScrolled ? 'text-primary-600' : 'text-white font-semibold') 
                    : (isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white')
                }`}
              >
                {page === 'produits' ? 'Produits' : 
                 page === 'realisations' ? 'Réalisations' : 
                 page === 'a-propos' ? 'À Propos' : 'Blog'}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className={`btn-primary ${!isScrolled ? 'bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20' : ''}`}
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-large">
            <nav className="container-custom py-6 space-y-4">
              <Link
                to="/"
                className={`block text-base font-medium transition-colors ${
                  isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              
              <div className="space-y-2">
                <span className="block text-base font-medium text-gray-700">Services</span>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block pl-4 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              {['produits', 'realisations', 'a-propos', 'blog'].map((page) => (
                <Link
                  key={page}
                  to={`/${page}`}
                  className={`block text-base font-medium transition-colors ${
                    isActive(`/${page}`) ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {page === 'produits' ? 'Produits' : 
                   page === 'realisations' ? 'Réalisations' : 
                   page === 'a-propos' ? 'À Propos' : 'Blog'}
                </Link>
              ))}
              
              <Link
                to="/contact"
                className="btn-primary w-full justify-center mt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Devis Gratuit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;