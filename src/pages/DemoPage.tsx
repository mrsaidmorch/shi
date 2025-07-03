import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Monitor, Smartphone, Tablet, Wifi, Shield, Server, Home, Building, GraduationCap } from 'lucide-react';

const DemoPage = () => {
  const [activeDemo, setActiveDemo] = useState('network');
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = {
    network: {
      title: 'Infrastructure Réseau',
      description: 'Découvrez comment nous concevons et déployons des réseaux haute performance',
      icon: <Wifi className="h-8 w-8" />,
      features: [
        'Réseau structuré avec câblage Cat6A',
        'WiFi 6 avec couverture optimale',
        'Segmentation réseau sécurisée',
        'Monitoring en temps réel'
      ],
      video: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    security: {
      title: 'Cybersécurité',
      description: 'Protection multicouche contre toutes les menaces numériques',
      icon: <Shield className="h-8 w-8" />,
      features: [
        'Pare-feu nouvelle génération',
        'Détection d\'intrusion avancée',
        'Chiffrement bout en bout',
        'Audit de sécurité complet'
      ],
      video: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    cloud: {
      title: 'Solutions Cloud',
      description: 'Infrastructure cloud hybride pour une flexibilité maximale',
      icon: <Server className="h-8 w-8" />,
      features: [
        'Migration cloud sécurisée',
        'Sauvegarde automatique',
        'Accès distant sécurisé',
        'Scalabilité automatique'
      ],
      video: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    domotique: {
      title: 'Domotique Intelligente',
      description: 'Automatisation complète pour maisons et bureaux connectés',
      icon: <Home className="h-8 w-8" />,
      features: [
        'Contrôle centralisé',
        'Économies d\'énergie',
        'Sécurité intégrée',
        'Interface intuitive'
      ],
      video: 'https://images.pexels.com/photos/1472849/pexels-photo-1472849.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  };

  const clientTypes = [
    {
      id: 'particuliers',
      name: 'Particuliers',
      icon: <Home className="h-6 w-6" />,
      description: 'Solutions domotique et sécurité résidentielle',
      solutions: ['Maison connectée', 'Vidéosurveillance', 'Contrôle d\'accès', 'WiFi domestique']
    },
    {
      id: 'pme',
      name: 'PME',
      icon: <Building className="h-6 w-6" />,
      description: 'Infrastructure IT complète pour entreprises',
      solutions: ['Réseau d\'entreprise', 'Cybersécurité', 'Serveurs', 'Cloud hybride']
    },
    {
      id: 'ecoles',
      name: 'Écoles',
      icon: <GraduationCap className="h-6 w-6" />,
      description: 'Solutions éducatives et infrastructure pédagogique',
      solutions: ['Réseau éducatif', 'Sécurité des données', 'Équipements pédagogiques', 'Support technique']
    }
  ];

  const devices = [
    { name: 'Desktop', icon: <Monitor className="h-5 w-5" />, width: 'w-full' },
    { name: 'Tablet', icon: <Tablet className="h-5 w-5" />, width: 'w-3/4' },
    { name: 'Mobile', icon: <Smartphone className="h-5 w-5" />, width: 'w-1/3' }
  ];

  const [selectedDevice, setSelectedDevice] = useState('Desktop');

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            Démonstration Interactive
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Découvrez Nos Solutions en Action
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez nos technologies et solutions à travers des démonstrations interactives 
            adaptées à vos besoins spécifiques
          </p>
        </div>

        {/* Client Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {clientTypes.map((client) => (
            <div key={client.id} className="card p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-xl mr-4 group-hover:bg-primary-200 transition-colors">
                  <div className="text-primary-600">
                    {client.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{client.description}</p>
              <ul className="space-y-2">
                {client.solutions.map((solution, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Demo Selector */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Choisissez une Démonstration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className={`mr-3 ${activeDemo === key ? 'text-white' : 'text-primary-600'}`}>
                    {demo.icon}
                  </div>
                  <h3 className="font-semibold">{demo.title}</h3>
                </div>
                <p className={`text-sm ${activeDemo === key ? 'text-primary-100' : 'text-gray-600'}`}>
                  {demo.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Demo Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Video/Demo Area */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">
                  {demos[activeDemo as keyof typeof demos].title}
                </h3>
                <div className="flex space-x-2">
                  {devices.map((device) => (
                    <button
                      key={device.name}
                      onClick={() => setSelectedDevice(device.name)}
                      className={`p-2 rounded-lg transition-colors ${
                        selectedDevice === device.name
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                      title={device.name}
                    >
                      {device.icon}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="relative bg-white rounded-lg overflow-hidden">
                <div className={`mx-auto transition-all duration-500 ${
                  devices.find(d => d.name === selectedDevice)?.width
                }`}>
                  <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                    <img
                      src={demos[activeDemo as keyof typeof demos].video}
                      alt={demos[activeDemo as keyof typeof demos].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-white/90 hover:bg-white p-4 rounded-full transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="h-8 w-8 text-gray-900" />
                        ) : (
                          <Play className="h-8 w-8 text-gray-900 ml-1" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors">
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-white text-sm">
                  Démonstration interactive
                </div>
              </div>
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fonctionnalités Clés
              </h3>
              <ul className="space-y-3">
                {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Avantages Business
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                    <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">ROI Garanti</div>
                    <div className="text-sm text-gray-600">Retour sur investissement sous 12 mois</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Productivité +40%</div>
                    <div className="text-sm text-gray-600">Amélioration mesurable des performances</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Support 24/7</div>
                    <div className="text-sm text-gray-600">Assistance technique continue</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Prêt à Démarrer ?</h3>
              <p className="text-primary-100 mb-4">
                Contactez-nous pour une démonstration personnalisée sur site
              </p>
              <div className="flex space-x-3">
                <a
                  href="/contact"
                  className="bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Demander une Démo
                </a>
                <a
                  href="/contact"
                  className="border border-white/30 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Devis Gratuit
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tools */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Outils Interactifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Monitor className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Calculateur de Réseau</h3>
              <p className="text-gray-600 text-sm mb-4">
                Estimez vos besoins en bande passante et équipements
              </p>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Utiliser l'Outil
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Audit Sécurité</h3>
              <p className="text-gray-600 text-sm mb-4">
                Évaluez le niveau de sécurité de votre infrastructure
              </p>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Démarrer l'Audit
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Configurateur Domotique</h3>
              <p className="text-gray-600 text-sm mb-4">
                Concevez votre maison intelligente sur mesure
              </p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Configurer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;