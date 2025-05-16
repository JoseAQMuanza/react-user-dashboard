import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">
            <Link to="/">MyWebsite</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/users" className="hover:text-gray-200 transition duration-300">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-gray-200 transition duration-300">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header