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
      icon: <Network className="h-10 w-10" />,
      title: "Infrastructure Réseau",
      description: "Solutions réseau complètes avec fibre optique, VPN sécurisés et connectivité haute performance pour tous vos besoins.",
      link: "/services/pme",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cybersécurité Avancée",
      description: "Protection multicouche avec pare-feu nouvelle génération, surveillance 24/7 et audit de sécurité complet.",
      link: "/services/pme",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Développement Web & Apps",
      description: "Sites web professionnels, applications mobiles et solutions e-commerce sur mesure pour votre entreprise.",
      link: "/services/pme",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "IA & Automatisation",
      description: "Déploiement d'intelligence artificielle locale, chatbots intelligents et automatisation des processus métier.",
      link: "/services/pme",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "Marketing Digital",
      description: "Stratégies marketing complètes, publicités ciblées, SEO et gestion des réseaux sociaux pour votre croissance.",
      link: "/services/pme",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Domotique Intelligente",
      description: "Automatisation complète avec IoT, contrôle intelligent et intégration seamless pour votre confort.",
      link: "/services/particuliers",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { value: "98%", label: "Taux de satisfaction", icon: <CheckCircle className="h-8 w-8" />, color: "text-emerald-500" },
    { value: "200+", label: "Projets réalisés", icon: <Users className="h-8 w-8" />, color: "text-blue-500" },
    { value: "3x", label: "Plus performant", icon: <TrendingUp className="h-8 w-8" />, color: "text-purple-500" },
    { value: "24/7", label: "Support technique", icon: <Clock className="h-8 w-8" />, color: "text-orange-500" }
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
      icon: <Award className="h-6 w-6" />,
      title: "Certifications Premium",
      description: "Partenaires certifiés Cisco, Fortinet, Microsoft"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Couverture Nationale",
      description: "Services disponibles dans 5 villes du Maroc"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Intervention Rapide",
      description: "Réponse sous 2h pour les urgences"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-dots opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-sm font-medium">🚀 Solutions IT Complètes au Maroc</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-shadow">
                  Transformez Votre{' '}
                  <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    Business
                  </span>{' '}
                  avec SHI
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Solutions IT complètes : Développement web, IA locale, marketing digital, cybersécurité, 
                  infrastructure réseau et domotique intelligente pour particuliers et entreprises.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group btn-primary bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-glow hover:shadow-glow-lg"
                >
                  Devis Gratuit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/demo"
                  className="btn-ghost group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Voir Démo
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="text-primary-400">
                      {feature.icon}
                    </div>
                    <span className="text-gray-300">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="SHI Solutions IT"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              Solutions Premium
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services & Solutions{' '}
              <span className="gradient-text">Innovantes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions technologiques de pointe adaptées à vos besoins spécifiques, 
              pour particuliers, écoles et entreprises au Maroc.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card card-hover p-8 group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl text-white group-hover:scale-110 transition-transform mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group/link"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
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
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-4">
              Témoignages Clients
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ce que disent nos{' '}
              <span className="gradient-text">clients</span>
            </h2>
            <p className="text-xl text-gray-600">
              La satisfaction client est notre priorité absolue
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-8 animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="text-center animate-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow">
              Prêt à transformer votre{' '}
              <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                entreprise
              </span> ?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Obtenez un devis gratuit et personnalisé pour vos besoins technologiques. 
              Notre équipe d'experts vous accompagne dans votre transformation digitale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="btn-primary bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 shadow-glow hover:shadow-glow-lg text-lg px-10 py-5"
              >
                Demander un Devis
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              
              <Link
                to="/realisations"
                className="btn-ghost text-lg px-10 py-5"
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