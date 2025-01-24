import { useState } from "react";
import benicio from '../../assets/image/benicio.jpg';
import benicio1 from '../../assets/image/benicio2.jpg';
import benicio2 from '../../assets/image/benicio3.jpg';
import fazenda from '../../assets/image/fazendaDino.jpg';

interface GalleryImage {
  url: string;
  caption: string;
}

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const galleryImages: GalleryImage[] = [
    {
      url: benicio,
      caption: "Benício e sua fantasia de dinossauro !"
    },
    {
      url: benicio2,
      caption: "Nosso aventureiro jurássico explorando !"
    },
    {
      url: benicio1,
      caption: "Sorriso tão brilhante quanto o sol de um dia jurássico!"
    },
    {
      url: fazenda, 
      caption: "Benício e sua coleção  de dinossauro"
    }
  ];

  return (
    <>
      <section className="py-16 px-4 bg-green-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">
            Momentos especiais do nosso pequeno explorador!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-orange-500 transition-shadow cursor-pointer"
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
                <p className="p-4 text-center text-black">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300"
            >
              ✖
            </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption} 
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="p-4 text-center text-black">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;