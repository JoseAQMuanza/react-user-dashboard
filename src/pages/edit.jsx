import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams()
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const navigate = useNavigate()

  const getFname = (e) => { setFname(e.target.value) }
  const getLname = (e) => { setLname(e.target.value) }


  const upDateUser = async (id, newData) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    const data = await response.json();
    console.log("Dados atualizados:", data);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const username = `${fname}.${lname}@gmailcom`    
    upDateUser(id, { fname, lname, username })
    navigate('/users')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Add user</h2>
        <div className="mb-4">
          <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Typing First Name"
            required
            onChange={getFname}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lname" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Typing Last Name"
            required
            onChange={getLname}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
