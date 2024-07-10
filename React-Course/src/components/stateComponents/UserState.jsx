import React, { useState } from "react";

// UserState component receives a user object and a setUsers function as props
function UserState({ user, setUsers }) {
  // State to toggle between editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to manage the form data for manipulating the user details
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
  });

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
      // array mapping and callback function
      currentUsers.map((currentUser) =>
        // ternary if else statement
        currentUser.id === user.id
          ? { ...currentUser, ...formData }
          : currentUser
      )
    );

    //since we're saving and no longer editing turn this to false
    setIsEditing(false);
  };

  // Handler for deleting the user
  const handleDelete = () => {
    setUsers((currentUsers) =>
      currentUsers.filter((currentUser) => currentUser.id !== user.id)
    );
  };

  return (
    <div>
      <div>
        <p>ID:</p>
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
        <button onClick={() => setIsEditing((currentState) => !currentState)}>
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
