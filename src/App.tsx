import React from 'react';
import dino  from './assets/dino.png';
import { Calendar, MapPin, Phone, Heart } from 'lucide-react';
import partyVideo from './assets/Vídeo.mp4';
import  GallerySection  from './components/GallerySection'

React;

// Activities data
const activities = [
  {
    title: "Caça aos ovos de dinossauro",
    description: "Uma aventura emocionante procurando ovos pré-históricos"
  },
  {
    title: "Piscina de bolinhas jurássica",
    description: "Mergulhe em um mar de diversão colorida"
  },
  {
    title: "Oficinas de pintura",
    description: "Crie sua própria arte com dinossauros"
  },
  {
    title: "Brincadeiras ao ar livre",
    description: "Explore nosso parque jurássico"
  },
  {
    title: "Mesa de doces temáticos",
    description: "Delícias inspiradas no mundo dos dinossauros"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      {/* Header */}
      <header 
        className="relative text-white py-20 px-4 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516571748831-5d81767b788d)',
          boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
            Bem-vindos à festa jurássica do Benício!
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Vamos celebrar os 3 anos do nosso pequeno explorador dos dinossauros!
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto bg-orange-500 rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 md:h-96 bg-cover bg-center" 
               style={{backgroundImage: `url(${dino})`}}>
          </div>
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="text-black w-6 h-6" />
                <span className="text-lg">26 de fevereiro de 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-black w-6 h-6" />
                <span className="text-lg">Parque dos Dinossauros – Rua do cajueiro, 53, Vergel </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}

      <GallerySection />
      {/* Activities Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">
            O que esperar nesta festa pré-histórica?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-orange-700">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-red-700 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 text-orange-800">
            Obrigado por fazer parte deste dia tão especial!
          </h2>
          <p className="text-xl text-black mb-8">
            Benício está muito feliz por ter você aqui!
          </p>
          <video
            src={partyVideo}
            controls
            autoPlay
            muted
            loop 
            className="w-full max-w-lg mx-auto rounded-2xl shadow-xl"
          />
          <p className="text-lg text-black mt-4">
            Aproveite para aproveitar as nossas fotos e video!
          </p>  
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-black py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-6">
            Esperamos que você se divirta muito e aproveite esta aventura jurássica conosco!
          </p>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <span>WhatsApp: (82) 99829-6640</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;