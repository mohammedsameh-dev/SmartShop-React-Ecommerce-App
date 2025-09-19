import axios from "axios";
import { domain, useUserStore } from "../Store/index";
import { useEffect } from "react";
import MyHeader from "../Components/MyHeader";
import toast, { Toaster } from "react-hot-toast";
export default function UsersPage() {
  const delNewUserModal = (id) => {
    axios
      .delete(domain + `/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter((u) => u.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        toast.success("User deleted successfully");
      })
      .catch((err) => toast.error(err.response?.data?.message || "Error"));
  };

  const { users, setUsers } = useUserStore();

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.length === 0) {
      if (localUsers.length > 0) {
        setUsers(localUsers);
      } else {
        axios
          .get(domain + "/users")
          .then((res) => {
            setUsers(res.data);
            localStorage.setItem("users", JSON.stringify(res.data));
          })
          .catch((err) => console.log(err));
      }
    }
  }, [setUsers]);

  return (
    <>
      <MyHeader />
      <Toaster />
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => (
            <tr
              key={el.id}
              className="dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer"
            >
              <td>{el.id}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
              <td>{el.password}</td>
              <td>
                <button
                  className="btn btn-error btn-soft"
                  onClick={() => delNewUserModal(el.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
