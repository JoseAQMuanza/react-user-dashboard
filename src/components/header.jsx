import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-3">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </span>
          <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
            MyWebsite
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link
            to="/"
            className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header