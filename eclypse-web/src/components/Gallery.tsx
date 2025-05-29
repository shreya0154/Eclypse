
import video from '../assets/video-2-ori.mp4';
import photo1 from '../assets/fabric-photo-1.jpg'
import photo2 from '../assets/fabric-photo-2.jpg'
import photo3 from '../assets/fabric-photo-3.jpg'
import logo from '../assets/logo.jpg';


const mediaItems = [
  {
    type: "video",
    src: video,
    alt: "Fashion walk",
    caption: "Confident steps in bold design",
    colSpan: "sm:col-span-2 md:col-span-2",
  },
  {
    type: "image",
    src: photo1,
    alt: "Red fabric",
    caption: "Premium wool blend in signature vermilion",
  },
  {
    type: "image",
    src: photo2,
    alt: "Pocket closeup",
    caption: "Discreet side pockets with clean finish",
  },
  {
    type: "image",
    src: photo3,
    alt: "Cutting scene",
    caption: "Hand-cut and assembled in small batches",
  },
  {
    type: "image",
    src: logo,
    alt: "Logo",
    caption: "Eclypse®",
  },
];

const Gallery=() =>{
  return (
    <div className="bg-black p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {mediaItems.map((item, idx) => (
          <div
            key={idx}
            className={`group relative overflow-hidden rounded-md ${item.colSpan || ""}`}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            )}

           
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            
            <div className={`absolute text-white text-4xl font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 
              ${item.alt === "Logo" ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center" : "bottom-6 left-4 right-4"}`}
            >
              {item.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery