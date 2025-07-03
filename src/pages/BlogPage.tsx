import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: 'Les Tendances IT 2024 : Intelligence Artificielle et Cybersécurité',
      excerpt: 'Découvrez les principales tendances technologiques qui façonnent le monde IT en 2024 et leur impact sur les entreprises marocaines.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Mohammed Alami',
      date: '15 Mars 2024',
      category: 'Technologie',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Comment Sécuriser votre PME contre les Cyberattaques',
      excerpt: 'Guide pratique pour protéger votre entreprise des menaces numériques croissantes avec des solutions adaptées aux PME.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Fatima Bennani',
      date: '10 Mars 2024',
      category: 'Cybersécurité',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Domotique au Maroc : Révolution ou Évolution ?',
      excerpt: 'Analyse du marché de la domotique au Maroc et des opportunités pour les particuliers et les entreprises.',
      image: 'https://images.pexels.com/photos/1472849/pexels-photo-1472849.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Youssef Tazi',
      date: '5 Mars 2024',
      category: 'Domotique',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Mise en Place d\'un Réseau d\'Entreprise : Les Bonnes Pratiques',
      excerpt: 'Conseils d\'experts pour concevoir et déployer une infrastructure réseau performante et évolutive.',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Mohammed Alami',
      date: '28 Février 2024',
      category: 'Réseau',
      readTime: '8 min'
    },
    {
      id: 5,
      title: 'Cloud Computing vs Serveurs Locaux : Que Choisir ?',
      excerpt: 'Comparaison détaillée des avantages et inconvénients pour aider les entreprises à faire le bon choix.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Fatima Bennani',
      date: '20 Février 2024',
      category: 'Cloud',
      readTime: '6 min'
    },
    {
      id: 6,
      title: 'Transformation Digitale des Écoles : Défis et Solutions',
      excerpt: 'Comment les établissements scolaires peuvent réussir leur transformation numérique avec des budgets optimisés.',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Aicha Moussaoui',
      date: '15 Février 2024',
      category: 'Éducation',
      readTime: '5 min'
    }
  ];

  const categories = [
    { name: 'Tous', count: 12 },
    { name: 'Technologie', count: 4 },
    { name: 'Cybersécurité', count: 3 },
    { name: 'Réseau', count: 2 },
    { name: 'Domotique', count: 2 },
    { name: 'Cloud', count: 1 }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Actualités</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Restez informé des dernières tendances IT et découvrez nos conseils d'experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Catégories</h2>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                    <span className="text-gray-700">{category.name}</span>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-2" />
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                      Lire la suite
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Charger Plus d'Articles
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
          <p className="text-xl mb-8 text-primary-100">
            Recevez nos derniers articles et conseils IT directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;