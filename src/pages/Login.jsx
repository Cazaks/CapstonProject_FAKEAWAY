import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LenisScroll from "../components/LenisScroll";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    

    const handleSubmit = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    const handleChange = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
        
    }

    return (
        <>
            <LenisScroll />
            <Header />
           <main className="relative flex min-h-screen items-center justify-center px-4">
  <div
    className="absolute inset-0 bg-cover bg-center -z-10"
    style={{
      backgroundImage: "url('/assets/login_bgImage.jpg')",
    }}
  ></div>
                <form
                    onSubmit={handleChange}
                    className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={handleSubmit}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                             name="password"
                            placeholder="Enter your password"
                            required
                            value={formData.password}
                            onChange={handleSubmit}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>

                    <div className="mb-6 text-right">
  <Link
    to="/ForgotPassword"
    className="text-sm text-blue-600 hover:underline"
  >
    Forgot password?
  </Link>
</div>


                    <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>

                </form>
            </main>
            <Footer />
        </>
    );
}