import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate()
  const [usersList, setUsersList] = useState([])  
  const url = 'http://localhost:3000/users'

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()        
        setUsersList(data)        
      } catch (error) { error }
    }

    fetchData()
  }, [])

  const handleDeleteUser = (userId) => {
    async function fetchDelete() {
      try {
        const response = await fetch(`${url}/${userId}`, { method: "DELETE" })
        if (response.ok) {
          setUsersList(prevUsersList => prevUsersList.filter((user) => user !== id))          
        } 
      }catch( error ) {error}
    }
    fetchDelete()    
  }

  const handleEdit = (userId) => {
    navigate(`/edit/${userId}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Users List</h1>        
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">username</th>
              <th className="border border-gray-300 px-4 py-2 text-left">actions</th>
            </tr>
          </thead>
          <tbody>
            {usersList ? (
              usersList.map((user, key) => (
                <tr key={key} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{key + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{`${user.fname} ${user.lname}`}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer mr-2 hover:bg-blue-600" onClick={(userId) => handleEdit(user.id)}>
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded  cursor-pointer hover:bg-red-600" onClick={(userId) => handleDeleteUser(user.id)}>
                      Deletar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">
                  Lista vazia
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;