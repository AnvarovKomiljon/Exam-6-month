import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [rate, setRate] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !subtitle || !image || !price || !description || !size || !rate || !color) {
      toast.error("Malumotlarni to'ldiring");
      return; // Add return to prevent further execution
    }

    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("token") // Correct usage without response.data.data
      };
      const data = {
        title,
        subtitle,
        image,
        price,
        description,
        size,
        rate,
        color
      };

      const response = await axios.post('https://ecommerce-backend-fawn-eight.vercel.app/api/products', data, { headers });

      console.log(response.data);
      if (response.data) {
        toast.success("Malumotlar saqlandi");
        navigate('/client');
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi");
      console.log(error);
    }
  };

  return (
    <div className="w-screen flex items-center justify-center">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="flex m-10 border-[1px] border-gray-300 w-[500px] h-[850px] items-center shadow-lg shadow-gray-600">
        <div className="flex flex-col items-start space-y-3 ml-5">
          <div className="text-2xl font-bold text-[48px] text-[#00bbff]">
            <h1>Create New Product</h1>
          </div>
          <label className="text-xl font-bold text-gray-600">Title</label>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-[400px] border-[1px] border-gray-600 p-1 outline-none cursor-pointer" />
          <label className="text-xl font-bold text-gray-600">Subtitle</label>
          <input type="text" name="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-[400px] border-[1px] border-gray-600 p-1 outline-none cursor-pointer" />
          <label className="text-xl font-bold text-gray-600">Image</label>
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} className="w-[400px] border-[1px] border-gray-600 p-1 outline-none cursor-pointer" />
          <label className="text-xl font-bold text-gray-600">Description</label>
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-[400px] border-[1px] border-gray-600 p-1 outline-none cursor-pointer" />
          <label className="text-xl font-bold text-gray-600">Price</label>
          <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-[400px] border-[1px] border-gray-600 p-1 outline-none cursor-pointer" />
          <label className="text-xl font-bold text-gray-600">Size</label>
          <input type="text" name="size" value={size} onChange={(e) => setSize(e.target.value)} className="w-[400px] border-[1px] border-gray-600 p-1 outline-none cursor-pointer" />
          <label className="text-xl font-bold text-gray-600">Color</label>
          <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-[400px] border-[1px] border-gray-600 p-1 outline-none cursor-pointer" />
          <label className="text-xl font-bold text-gray-600">Rate</label>
          <input type="number" name="rate" value={rate} onChange={(e) => setRate(e.target.value)} className="w-[400px] border-[1px] border-gray-600 p-1 outline-none cursor-pointer" />
          <button type="submit" className="bg-blue-500 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
