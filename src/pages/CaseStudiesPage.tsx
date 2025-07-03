import React from 'react';
import { Calendar, MapPin, Users, TrendingUp, CheckCircle } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Transformation Digitale - École Internationale de Casablanca',
      category: 'Éducation',
      client: 'École Internationale',
      location: 'Casablanca',
      date: '2024',
      duration: '3 mois',
      budget: '250,000 MAD',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modernisation complète de l\'infrastructure IT pour 800 élèves et 80 enseignants.',
      challenges: [
        'Réseau obsolète et instable',
        'Manque de sécurité informatique',
        'Pas de solution de sauvegarde',
        'Équipements informatiques vétustes'
      ],
      solutions: [
        'Installation d\'un réseau structuré Gigabit',
        'Déploiement de WiFi 6 dans toutes les salles',
        'Mise en place d\'un pare-feu UTM',
        'Serveur centralisé avec sauvegarde automatique'
      ],
      results: [
        '99,9% de disponibilité réseau',
        '50% d\'amélioration des performances',
        'Zéro incident de sécurité',
        '80% de satisfaction utilisateurs'
      ]
    },
    {
      id: 2,
      title: 'Sécurisation IT - Entreprise Textile PME',
      category: 'Industrie',
      client: 'Textile Pro SA',
      location: 'Fès',
      date: '2024',
      duration: '2 mois',
      budget: '150,000 MAD',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mise en place d\'une infrastructure de cybersécurité robuste pour protéger les données sensibles.',
      challenges: [
        'Risques de cyberattaques',
        'Données non protégées',
        'Accès réseau non contrôlé',
        'Manque de sensibilisation'
      ],
      solutions: [
        'Pare-feu Fortigate nouvelle génération',
        'Antivirus centralisé sur tous les postes',
        'VPN sécurisé pour accès distant',
        'Formation cybersécurité pour les employés'
      ],
      results: [
        '100% des menaces bloquées',
        'Conformité RGPD atteinte',
        'Productivité maintenue',
        'Audit sécurité réussi'
      ]
    },
    {
      id: 3,
      title: 'Maison Connectée - Villa Ain Diab',
      category: 'Résidentiel',
      client: 'Famille Bennani',
      location: 'Casablanca',
      date: '2024',
      duration: '1 mois',
      budget: '80,000 MAD',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Installation complète d\'un système domotique et de sécurité pour une villa de 400m².',
      challenges: [
        'Maison non connectée',
        'Gestion énergétique inefficace',
        'Sécurité insuffisante',
        'Confort limité'
      ],
      solutions: [
        'Système domotique centralisé',
        'Éclairage et chauffage intelligents',
        'Vidéosurveillance 4K',
        'Contrôle d\'accès biométrique'
      ],
      results: [
        '40% d\'économie d\'énergie',
        'Sécurité renforcée 24/7',
        'Confort optimal',
        'Contrôle total à distance'
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous avons transformé l'infrastructure IT de nos clients
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {study.date}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h2>
                <p className="text-gray-600 mb-6">{study.description}</p>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-gray-600">Client: {study.client}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-gray-600">{study.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-gray-600">Durée: {study.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-gray-600">Budget: {study.budget}</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-4">
                  <nav className="-mb-px flex space-x-8">
                    <span className="border-b-2 border-primary-600 text-primary-600 py-2 px-1 text-sm font-medium">
                      Défis
                    </span>
                  </nav>
                </div>

                {/* Challenges */}
                <div className="space-y-2">
                  {study.challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Voir le Projet Complet
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Résultats Obtenus
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Projets Réussis</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-gray-600">Économies Moyennes</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Client</div>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">&lt; 3</div>
              <div className="text-gray-600">Mois de Déploiement</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Démarrer Mon Projet
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Découvrir Nos Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;