import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, Shield, Server, Smartphone, CheckCircle, Star, Users, TrendingUp, Play, Award, Clock, Globe, Code, Brain, Mail, Megaphone } from 'lucide-react';

const HomePage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      icon: <Network className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Infrastructure Réseau",
      description: "Solutions réseau complètes avec fibre optique, VPN sécurisés et connectivité haute performance pour tous vos besoins.",
      link: "/services/pme",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Cybersécurité Avancée",
      description: "Protection multicouche avec pare-feu nouvelle génération, surveillance 24/7 et audit de sécurité complet.",
      link: "/services/pme",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Code className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Développement Web & Apps",
      description: "Sites web professionnels, applications mobiles et solutions e-commerce sur mesure pour votre entreprise.",
      link: "/services/pme",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Brain className="h-8 w-8 md:h-10 md:w-10" />,
      title: "IA & Automatisation",
      description: "Déploiement d'intelligence artificielle locale, chatbots intelligents et automatisation des processus métier.",
      link: "/services/pme",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Megaphone className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Marketing Digital",
      description: "Stratégies marketing complètes, publicités ciblées, SEO et gestion des réseaux sociaux pour votre croissance.",
      link: "/services/pme",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Smartphone className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Domotique Intelligente",
      description: "Automatisation complète avec IoT, contrôle intelligent et intégration seamless pour votre confort.",
      link: "/services/particuliers",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { value: "98%", label: "Taux de satisfaction", icon: <CheckCircle className="h-6 w-6 md:h-8 md:w-8" />, color: "text-emerald-500" },
    { value: "200+", label: "Projets réalisés", icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, color: "text-blue-500" },
    { value: "3x", label: "Plus performant", icon: <TrendingUp className="h-6 w-6 md:h-8 md:w-8" />, color: "text-purple-500" },
    { value: "24/7", label: "Support technique", icon: <Clock className="h-6 w-6 md:h-8 md:w-8" />, color: "text-orange-500" }
  ];

  const testimonials = [
    {
      name: "Ahmed Benali",
      role: "Directeur IT, École Internationale",
      content: "SHI a révolutionné notre infrastructure IT. L'équipe est exceptionnellement professionnelle et leur expertise technique est remarquable.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Fatima Zahra",
      role: "Responsable SI, PME Textile",
      content: "Grâce à SHI, notre cybersécurité est maintenant au niveau international. Nos données sont parfaitement protégées et notre productivité a augmenté.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Youssef Alami",
      role: "Particulier, Casablanca",
      content: "L'installation domotique de SHI a transformé ma maison en véritable smart home. Le contrôle intelligent et les économies d'énergie sont impressionnants.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const features = [
    {
      icon: <Award className="h-4 w-4 md:h-6 md:w-6" />,
      title: "Certifications Premium",
      description: "Partenaires certifiés Cisco, Fortinet, Microsoft"
    },
    {
      icon: <Globe className="h-4 w-4 md:h-6 md:w-6" />,
      title: "Couverture Nationale",
      description: "Services disponibles dans 5 villes du Maroc"
    },
    {
      icon: <Clock className="h-4 w-4 md:h-6 md:w-6" />,
      title: "Intervention Rapide",
      description: "Réponse sous 2h pour les urgences"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-dots opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative container-custom py-8 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-fade-in-up text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-xs md:text-sm font-medium">🚀 Solutions IT Complètes au Maroc</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-shadow">
                  Transformez Votre{' '}
                  <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    Business
                  </span>{' '}
                  avec SHI
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Solutions IT complètes : Développement web, IA locale, marketing digital, cybersécurité, 
                  infrastructure réseau et domotique intelligente pour particuliers et entreprises.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="group btn-primary bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-glow hover:shadow-glow-lg text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
                >
                  Devis Gratuit
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/demo"
                  className="btn-ghost group text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
                >
                  <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Voir Démo
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 pt-6 md:pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs md:text-sm">
                    <div className="text-primary-400 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-gray-300 text-center sm:text-left">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop Only Server/Network Image */}
            <div className="relative animate-fade-in-right hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Infrastructure Serveur et Réseau SHI"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
                
                {/* Overlay with tech icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        <Server className="h-6 w-6 text-white" />
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        <Network className="h-6 w-6 text-white" />
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                      Infrastructure Premium
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${stat.color} mb-3 md:mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1 md:mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-primary-100 text-primary-800 rounded-full text-xs md:text-sm font-medium mb-4">
              Solutions Premium
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Services & Solutions{' '}
              <span className="gradient-text">Innovantes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions technologiques de pointe adaptées à vos besoins spécifiques, 
              pour particuliers, écoles et entreprises au Maroc.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card card-hover p-6 md:p-8 group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-r ${service.gradient} p-3 md:p-4 rounded-2xl text-white group-hover:scale-110 transition-transform mb-4 md:mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group/link text-sm md:text-base"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-accent-100 text-accent-800 rounded-full text-xs md:text-sm font-medium mb-4">
              Témoignages Clients
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Ce que disent nos{' '}
              <span className="gradient-text">clients</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              La satisfaction client est notre priorité absolue
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-6 md:p-8 animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-shadow">
              Prêt à transformer votre{' '}
              <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                entreprise
              </span> ?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Obtenez un devis gratuit et personnalisé pour vos besoins technologiques. 
              Notre équipe d'experts vous accompagne dans votre transformation digitale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                to="/contact"
                className="btn-primary bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 shadow-glow hover:shadow-glow-lg text-base md:text-lg px-8 py-4 md:px-10 md:py-5"
              >
                Demander un Devis
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </Link>
              
              <Link
                to="/realisations"
                className="btn-ghost text-base md:text-lg px-8 py-4 md:px-10 md:py-5"
              >
                Voir nos Réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;