import { Link } from "react-router-dom";

const Home = () => {  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Welcome to Home
        </h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          manage your users like never before.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition cursor-pointer">
            <Link to="/add_user">New User</Link>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;