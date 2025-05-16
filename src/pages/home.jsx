import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
        <div className="flex flex-col items-center">
          <img
            src="https://img.icons8.com/color/96/000000/user-group-man-man.png"
            alt="User Management"
            className="mb-6"
          />
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 text-center">
            User Management Dashboard
          </h1>
          <p className="text-gray-500 text-lg text-center mb-8 max-w-xl">
            Organize, add, edit and remove users easily. Manage your team efficiently and conveniently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link to="/add_user" className="w-full sm:w-auto">
              <button className="w-full px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition cursor-pointer">
                New User
              </button>
            </Link>
            <Link to="/users" className="w-full sm:w-auto">
              <button className="w-full px-8 py-3 bg-white border border-indigo-600 text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-50 transition cursor-pointer">
                View Users
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;