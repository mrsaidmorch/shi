import React from 'react';
import { Award, Users, MapPin, Calendar, Target, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Mohammed Alami',
      role: 'Directeur Technique',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert en infrastructure réseau avec 15 ans d\'expérience'
    },
    {
      name: 'Fatima Bennani',
      role: 'Responsable Cybersécurité',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Spécialiste certifiée en sécurité informatique et audit'
    },
    {
      name: 'Youssef Tazi',
      role: 'Ingénieur Domotique',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert en solutions IoT et automatisation intelligente'
    },
    {
      name: 'Aicha Moussaoui',
      role: 'Responsable Commerciale',
      image: 'https://images.pexels.com/photos/3756941/pexels-photo-3756941.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Conseil client et développement commercial'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, avec des solutions de haute qualité.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Engagement',
      description: 'Nous nous engageons à long terme avec nos clients pour leur succès.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies pour rester à la pointe.'
    }
  ];

  const certifications = [
    'Partenaire Cisco',
    'Partenaire Fortinet',
    'Microsoft Partner',
    'Dell Technologies Partner',
    'Certifié ISO 27001'
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">À Propos de SHI</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Votre partenaire technologique de confiance au Maroc depuis plus de 10 ans
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Notre Histoire</h2>
            <p className="text-gray-600 text-lg">
              Fondée en 2014 à Casablanca, SHI est née de la passion de nos fondateurs pour l'innovation technologique et leur volonté de démocratiser l'accès aux solutions IT avancées au Maroc.
            </p>
            <p className="text-gray-600">
              Depuis nos débuts, nous avons accompagné plus de 150 clients dans leur transformation digitale, des particuliers aux grandes entreprises, en passant par les établissements d'enseignement.
            </p>
            <p className="text-gray-600">
              Notre approche se base sur l'écoute, l'expertise technique et un service client irréprochable, ce qui nous a permis de maintenir un taux de satisfaction de 98%.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Équipe SHI"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary-50 rounded-2xl p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-primary-600 mb-2">
                <Calendar className="h-6 w-6 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 mb-2">
                <Users className="h-6 w-6 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 mb-2">
                <Award className="h-6 w-6 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 mb-2">
                <MapPin className="h-6 w-6 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
              <div className="text-gray-600">Villes couvertes</div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Certifications & Partenariats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-primary-600 mb-2">
                  <Award className="h-8 w-8 mx-auto" />
                </div>
                <p className="font-medium text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Démocratiser l'accès aux technologies de pointe au Maroc en proposant des solutions IT innovantes, 
            sécurisées et adaptées aux besoins spécifiques de chaque client.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Nous Contacter
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

export default AboutPage;