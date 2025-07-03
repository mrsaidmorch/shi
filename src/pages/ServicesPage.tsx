import React from 'react';
import { useParams } from 'react-router-dom';
import { Home, School, Building, Shield, Network, Server, Smartphone, Camera, Lock, Wifi, HardDrive, Monitor, Code, Brain, Mail, Megaphone, Globe, Printer } from 'lucide-react';

const ServicesPage = () => {
  const { segment } = useParams();

  const serviceSegments = {
    particuliers: {
      title: "Services pour Particuliers",
      subtitle: "Solutions domotique, sécurité et développement pour votre domicile",
      icon: <Home className="h-12 w-12" />,
      color: "from-green-600 to-green-800",
      services: [
        {
          icon: <Smartphone className="h-8 w-8" />,
          title: "Domotique & Maison Connectée",
          description: "Automatisation complète de votre domicile : éclairage, chauffage, volets, multimédia.",
          features: ["Contrôle à distance", "Programmation intelligente", "Économies d'énergie", "Interface intuitive"]
        },
        {
          icon: <Camera className="h-8 w-8" />,
          title: "Vidéosurveillance & Sécurité",
          description: "Systèmes de sécurité avancés pour protéger votre famille et vos biens.",
          features: ["Caméras HD/4K", "Vision nocturne", "Détection de mouvement", "Accès mobile"]
        },
        {
          icon: <Code className="h-8 w-8" />,
          title: "Site Web Personnel",
          description: "Création de sites web personnels, portfolios et blogs professionnels.",
          features: ["Design responsive", "SEO optimisé", "Hébergement inclus", "Maintenance"]
        },
        {
          icon: <Wifi className="h-8 w-8" />,
          title: "Réseau Domestique",
          description: "WiFi performant, réseau câblé et optimisation de la connectivité.",
          features: ["WiFi 6/6E", "Couverture complète", "Réseau invité", "Contrôle parental"]
        }
      ]
    },
    ecoles: {
      title: "Services pour Écoles",
      subtitle: "Infrastructure IT éducative moderne et solutions digitales",
      icon: <School className="h-12 w-12" />,
      color: "from-blue-600 to-blue-800",
      services: [
        {
          icon: <Network className="h-8 w-8" />,
          title: "Infrastructure Réseau",
          description: "Réseau haute performance pour établissements scolaires et universitaires.",
          features: ["Réseau structuré", "WiFi éducatif", "Segmentation réseau", "Redondance"]
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: "Sécurité Informatique",
          description: "Protection des données étudiants et filtrage de contenu adapté.",
          features: ["Filtrage web", "Antivirus centralisé", "Sauvegarde automatique", "Conformité RGPD"]
        },
        {
          icon: <Code className="h-8 w-8" />,
          title: "Plateforme Éducative",
          description: "Développement de plateformes d'apprentissage en ligne et applications éducatives.",
          features: ["LMS personnalisé", "Applications mobiles", "Suivi des progrès", "Intégration outils"]
        },
        {
          icon: <Monitor className="h-8 w-8" />,
          title: "Équipement Pédagogique",
          description: "Matériel informatique et solutions pour classes numériques.",
          features: ["Tableaux interactifs", "Tablettes éducatives", "Logiciels pédagogiques", "Maintenance"]
        }
      ]
    },
    pme: {
      title: "Services pour PME",
      subtitle: "Solutions IT complètes et marketing digital pour entreprises",
      icon: <Building className="h-12 w-12" />,
      color: "from-purple-600 to-purple-800",
      services: [
        {
          icon: <Network className="h-8 w-8" />,
          title: "Infrastructure Réseau",
          description: "Réseau d'entreprise robuste et évolutif pour vos besoins professionnels.",
          features: ["Réseau LAN/WAN", "VPN sécurisé", "Redondance", "Monitoring 24/7"]
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: "Cybersécurité",
          description: "Protection complète contre les menaces numériques.",
          features: ["Pare-feu UTM", "Antivirus entreprise", "Audit sécurité", "Formation utilisateurs"]
        },
        {
          icon: <Code className="h-8 w-8" />,
          title: "Développement Web & Apps",
          description: "Sites web professionnels, e-commerce et applications métier sur mesure.",
          features: ["Sites vitrine/e-commerce", "Applications mobiles", "CRM/ERP", "API intégration"]
        },
        {
          icon: <Brain className="h-8 w-8" />,
          title: "IA & Automatisation",
          description: "Déploiement d'IA locale et automatisation des processus métier.",
          features: ["Chatbots intelligents", "Analyse de données", "Automatisation RPA", "Machine Learning"]
        },
        {
          icon: <Megaphone className="h-8 w-8" />,
          title: "Marketing Digital",
          description: "Stratégies marketing complètes pour votre croissance en ligne.",
          features: ["SEO/SEA", "Réseaux sociaux", "Email marketing", "Publicités ciblées"]
        },
        {
          icon: <Mail className="h-8 w-8" />,
          title: "Services Email & Communication",
          description: "Solutions email professionnelles et outils de communication.",
          features: ["Email professionnel", "Serveurs mail", "Messagerie unifiée", "Archivage"]
        }
      ]
    }
  };

  const currentSegment = segment ? serviceSegments[segment as keyof typeof serviceSegments] : null;

  if (!currentSegment) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Nos Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos solutions adaptées à chaque type de client
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(serviceSegments).map(([key, segment]) => (
              <div key={key} className={`bg-gradient-to-br ${segment.color} rounded-xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="mb-6">
                  {segment.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{segment.title}</h3>
                <p className="text-lg mb-6 opacity-90">{segment.subtitle}</p>
                <a
                  href={`/services/${key}`}
                  className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Découvrir
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`bg-gradient-to-r ${currentSegment.color} rounded-2xl p-8 text-white mb-12`}>
          <div className="flex items-center mb-4">
            {currentSegment.icon}
            <h1 className="text-4xl font-bold ml-4">{currentSegment.title}</h1>
          </div>
          <p className="text-xl opacity-90">{currentSegment.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentSegment.services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-primary-600 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Besoin d'une solution personnalisée ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour discuter de vos besoins spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Demander un Devis
            </a>
            <a
              href="/realisations"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Voir nos Réalisations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;