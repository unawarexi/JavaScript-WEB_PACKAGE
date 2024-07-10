import React, { useState, useEffect } from "react";

// UserState component receives a user object and a setUsers function as props
function UserState(user, setUsers) {
  // State to toggle between editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to manage the form data for manipulating the user details
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  // Effect to set initial formData based on user prop
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
      });
    }
  }, [user]);

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handler for saving changes
  const handleSave = () => {
    setUsers((currentUsers) =>
      currentUsers.map((currentUser) =>
        currentUser.id === user.id
          ? { ...currentUser, ...formData }
          : currentUser
      )
    );

    // Since we're saving and no longer editing, turn this to false
    setIsEditing(false);
  };

  // Handler for deleting the user
  const handleDelete = () => {
    setUsers((currentUsers) =>
      currentUsers.filter((currentUser) => currentUser.id !== user.id)
    );
  };

  if (!user) {
    return <div>Loading...</div>; // Fallback UI if user is undefined
  }

  return (
    <div className="">
      <div>
        <p className=" font-semibold text-2xl text-rose-500  ">ID:</p>
        <span>{user.id}</span>
      </div>
      <div>
        <p>USERNAME:</p>
        {isEditing ? (
          <input
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        ) : (
          <span>{user.username}</span>
        )}
      </div>
      <div>
        <p>Email:</p>
        {isEditing ? (
          <input
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        ) : (
          <span>{user.email}</span>
        )}
      </div>
      <div>
        <button
          className="py-1 px-2 w-[30%] rounded-md border-2 bg-blue-500 border-red-500 text-sm font-semibold 
           text-white md:text-2xl lg:text-2xl md:rounded-full "
          onClick={() => setIsEditing((currentState) => !currentState)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
      {isEditing && (
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      )}
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default UserState;
