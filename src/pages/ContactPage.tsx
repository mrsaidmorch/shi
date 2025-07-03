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
      // Simulate email sending (replace with actual email service)
      const emailData = {
        to: 'contact@shi.co.ma',
        subject: `Nouvelle demande de devis - ${formData.service}`,
        html: `
          <h2>Nouvelle demande de devis</h2>
          <p><strong>Nom:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Téléphone:</strong> ${formData.phone}</p>
          <p><strong>Entreprise:</strong> ${formData.company || 'Non spécifiée'}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `
      };

      // Here you would integrate with your email service (EmailJS, Formspree, etc.)
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
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
      content: '+212 6 XX XX XX XX',
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
    'Réseau & Infrastructure',
    'Cybersécurité',
    'Serveurs & Cloud',
    'Domotique & IoT',
    'Maintenance & Support',
    'Audit & Conseil',
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
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                <span className="text-emerald-800">Votre demande a été envoyée avec succès! Nous vous répondrons sous 24h.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Décrivez vos besoins, votre environnement actuel, vos objectifs..."
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
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span>Réponse sous 2h pour les urgences</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span>Devis gratuit sous 24h</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span>Intervention possible le jour même</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;