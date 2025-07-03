import React, { useState } from 'react';
import { Filter, Search, ChevronDown } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'computers', name: 'Ordinateurs & Laptops' },
    { id: 'servers', name: 'Serveurs & Stockage' },
    { id: 'network', name: 'Équipements Réseau' },
    { id: 'printers', name: 'Imprimantes & Scanners' },
    { id: 'security', name: 'Sécurité & Cybersécurité' },
    { id: 'cables', name: 'Câbles & Fibre Optique' },
    { id: 'software', name: 'Logiciels & Licences' },
    { id: 'smart-home', name: 'Domotique & IoT' }
  ];

  const products = [
    // Computers & Laptops
    {
      id: 1,
      name: 'PC Desktop HP Elite 800 G9',
      category: 'computers',
      price: 'À partir de 12,000 MAD',
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ordinateur de bureau professionnel haute performance',
      features: ['Intel Core i7-12700', 'RAM 16GB DDR4', 'SSD 512GB NVMe', 'Windows 11 Pro']
    },
    {
      id: 2,
      name: 'Laptop Dell Latitude 5530',
      category: 'computers',
      price: 'À partir de 15,000 MAD',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ordinateur portable professionnel 15.6"',
      features: ['Intel Core i5-1235U', 'RAM 8GB', 'SSD 256GB', 'Écran Full HD']
    },
    
    // Servers & Storage
    {
      id: 3,
      name: 'Dell PowerEdge R750',
      category: 'servers',
      price: 'Sur devis',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Serveur rack 2U haute performance',
      features: ['Processeur Intel Xeon', 'RAM jusqu\'à 128GB', 'Stockage SSD/HDD', 'Redondance PSU']
    },
    {
      id: 4,
      name: 'Synology NAS DS920+',
      category: 'servers',
      price: 'À partir de 8,500 MAD',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Serveur de stockage réseau 4 baies',
      features: ['4 baies SATA', 'RAM 4GB extensible', 'Transcoding 4K', 'Applications Synology']
    },

    // Network Equipment
    {
      id: 5,
      name: 'Cisco Catalyst 2960-X',
      category: 'network',
      price: 'Sur devis',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Switch réseau 24 ports Gigabit manageable',
      features: ['24 ports Gigabit', 'PoE+', 'Gestion centralisée', 'QoS avancée']
    },
    {
      id: 6,
      name: 'Ubiquiti UniFi Dream Machine',
      category: 'network',
      price: 'À partir de 4,500 MAD',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Routeur/Firewall tout-en-un avec WiFi 6',
      features: ['WiFi 6', 'IDS/IPS intégré', 'Controller UniFi', '8 ports Gigabit']
    },

    // Printers
    {
      id: 7,
      name: 'HP LaserJet Pro M404dn',
      category: 'printers',
      price: 'À partir de 3,200 MAD',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Imprimante laser monochrome réseau',
      features: ['38 ppm', 'Recto-verso auto', 'Ethernet', 'Toner haute capacité']
    },
    {
      id: 8,
      name: 'Canon imageRUNNER 2630i',
      category: 'printers',
      price: 'Sur devis',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Multifonction A3 professionnel',
      features: ['Impression/Copie/Scan', '30 ppm', 'Finition avancée', 'Sécurité renforcée']
    },

    // Security
    {
      id: 9,
      name: 'Fortigate 60F',
      category: 'security',
      price: 'Sur devis',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Pare-feu nouvelle génération pour PME',
      features: ['Débit 10 Gbps', 'Protection avancée', 'VPN SSL', 'Reporting détaillé']
    },
    {
      id: 10,
      name: 'Caméra IP Hikvision DS-2CD2385G1',
      category: 'security',
      price: 'À partir de 2,200 MAD',
      image: 'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Caméra de surveillance 8MP 4K',
      features: ['Résolution 4K', 'Vision nocturne 30m', 'Détection IA', 'PoE']
    },

    // Cables & Fiber
    {
      id: 11,
      name: 'Câble Réseau Cat6A UTP',
      category: 'cables',
      price: 'À partir de 8 MAD/m',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Câble réseau haute performance Cat6A',
      features: ['Bande passante 500MHz', 'Longueur jusqu\'à 100m', 'Blindage UTP', 'Certifié TIA/EIA']
    },
    {
      id: 12,
      name: 'Fibre Optique Monomode OS2',
      category: 'cables',
      price: 'Sur devis',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Câble fibre optique longue distance',
      features: ['Monomode 9/125μm', 'Connecteurs SC/LC', 'Faible atténuation', 'Installation extérieure']
    },

    // Software
    {
      id: 13,
      name: 'Microsoft Office 365 Business',
      category: 'software',
      price: '180 MAD/mois/utilisateur',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Suite bureautique complète dans le cloud',
      features: ['Word, Excel, PowerPoint', 'OneDrive 1TB', 'Teams inclus', 'Mises à jour automatiques']
    },
    {
      id: 14,
      name: 'Windows Server 2022 Standard',
      category: 'software',
      price: 'Sur devis',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Système d\'exploitation serveur Microsoft',
      features: ['Virtualisation Hyper-V', 'Active Directory', 'Sécurité avancée', 'Support 16 cœurs']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Catalogue Produits</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits IT : ordinateurs, serveurs, équipements réseau, imprimantes et solutions technologiques
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary-600">{product.price}</span>
                  <a
                    href="/contact"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Demander un Devis
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun produit trouvé pour cette recherche.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nos experts vous conseillent dans le choix de vos équipements informatiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Conseils Gratuits
            </a>
            <a
              href="/services"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Nos Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;