import { useNavigate } from 'react-router-dom';
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'
import video from '../assets/video-3-ori.mp4'

export default function ProductDetail() {
  const navigate = useNavigate();
  const imageUrls: string[] = [
  image1,
  image2,
  image3
];
  return (
    <div className="flex flex-col mt-5 md:flex-row min-h-screen">

  <div className="md:w-1/2 w-full flex justify-center items-start">
    <video
      src={video}
      className="w-full h-full max-h-[800px] object-cover rounded-bl-lg md:rounded-none"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>

 
  <div className="md:w-1/2 w-full p-6 md:p-12 flex flex-col justify-center bg-white space-y-6">
    <p className="text-sm text-black leading-relaxed">
      A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force.
    </p>


    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {imageUrls.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`Product thumbnail ${i + 1}`}
          className="rounded-md object-cover w-full h-32"
        />
      ))}
    </div>


    <div>
      <h2 className="text-2xl font-semibold text-black">
        ₹ 7,999{" "}
        <span className="text-sm font-normal text-gray-500">
          MRP incl. of all taxes
        </span>
      </h2>
    </div>


    <div>
      <p className="font-medium text-black mb-2">Please select a size</p>
      <div className="flex flex-wrap gap-3">
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <button
            key={size}
            className="border px-4 py-2 text-black rounded hover:bg-gray-800 hover:text-white transition"
          >
            {size}
          </button>
        ))}
      </div>
    </div>


    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button className="border px-6 py-2 text-black rounded w-full sm:w-auto hover:bg-gray-800 hover:text-white transition">
        Add to Cart
      </button>
      <button
        onClick={() => navigate("/checkout")}
        className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto hover:bg-gray-800 transition"
      >
        Buy
      </button>
    </div>
  </div>
</div>

  );
}
