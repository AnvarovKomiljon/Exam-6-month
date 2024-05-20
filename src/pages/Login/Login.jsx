import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://ecommerce-backend-fawn-eight.vercel.app/api/auth', {
                email,
                password
            });
            console.log("Response: ", response);
            if (response.data) {
                localStorage.setItem("token" , response.data);
                toast.success("Tizimdan muvaffaqiyatli ");
                navigate('/admin');
            }
        } catch (error) {
            toast.error("EMAIL YOKI PAROL HATO KIRITILDI");
            console.log("Error: ", error);
        }
    };

    return (
        <div className='w-screen h-screen bg-teal-300 flex items-center justify-center'>
            <ToastContainer />
            <div className='w-[500px] h-[400px] mx-auto bg-white p-6 mb-4 shadow-lg rounded-lg shadow-red-400 flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-3xl font-bold text-blue-500 text-[48px]'>Login</h1>
                </div>
                <div className='mt-20 space-x-1'>
                    <label htmlFor="email" className="text-black-500 text-[18px]">User Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-400 p-1 outline-none"
                    />
                </div>
                <div className='mt-10 space-x-3'>
                    <label htmlFor="password" className="text-black-500 text-[18px]">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-400 p-1 outline-none"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className='w-[100px] h-10 mt-10 bg-blue-500 text-white p-2 rounded-lg'
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
