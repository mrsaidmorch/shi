import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mzzgwqod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `Nouvelle demande de devis - ${formData.service}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Téléphone',
      content: '+212 6 63 72 27 72',
      description: 'Disponible 24/7 pour urgences'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'contact@shi.co.ma',
      description: 'Réponse sous 24h'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Adresse',
      content: 'Casablanca, Maroc',
      description: 'Siège social'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Horaires',
      content: 'Lun-Ven: 9h-18h',
      description: 'Sam: 9h-13h'
    }
  ];

  const services = [
    'Infrastructure Réseau & Cybersécurité',
    'Développement Web & Applications',
    'Intelligence Artificielle Locale',
    'Marketing Digital & Publicités',
    'Domotique & IoT',
    'Serveurs & Cloud',
    'Maintenance & Support',
    'Audit & Conseil IT',
    'Autre'
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            Contact & Devis
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contactez-Nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtenez un devis gratuit et personnalisé pour vos besoins IT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Demande de Devis Gratuit</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="text-emerald-800">Votre demande a été envoyée avec succès! Nous vous répondrons sous 24h.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-red-800">Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                    placeholder="+212 6XX XX XX XX"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise/Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                    placeholder="Nom de votre entreprise (optionnel)"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service souhaité *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  disabled={isSubmitting}
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Décrivez vos besoins, votre environnement actuel, vos objectifs, budget approximatif..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer la Demande
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant votre demande.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Coordonnées</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-primary-100 rounded-xl p-3 mr-4 group-hover:bg-primary-200 transition-colors">
                      <div className="text-primary-600">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-700 font-medium">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Réponse Rapide Garantie</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Réponse sous 2h pour les urgences</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Devis gratuit sous 24h</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Intervention possible le jour même</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Support technique 24/7</span>
                </div>
              </div>
            </div>

            {/* Zone Coverage */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zone de Couverture</h2>
              <div className="space-y-3">
                {['Casablanca (Siège social)', 'Rabat', 'Fès', 'Marrakech', 'Tanger'].map((city, index) => (
                  <div key={index} className="flex items-center group">
                    <MapPin className="h-5 w-5 text-primary-600 mr-3 group-hover:text-primary-700 transition-colors" />
                    <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Interventions sur site</strong> disponibles dans toutes ces villes. 
                  Support à distance disponible partout au Maroc.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-accent-600 to-accent-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'une Intervention Urgente ?
          </h2>
          <p className="text-xl mb-8 text-accent-100">
            Notre équipe technique est disponible 24/7 pour les urgences IT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+212663722772"
              className="bg-white text-accent-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Appel d'Urgence
            </a>
            <a
              href="mailto:contact@shi.co.ma"
              className="border-2 border-white text-white hover:bg-white hover:text-accent-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;