import React, { useState } from "react";
import UserState from "../components/stateComponents/UserState";

/**
 * state is a representation of data that changes over time
 * think of it like a variable
 * stores data within the react components
 * it is an inbuilt object
 *
 * they're different ways to handle state
 * @returns state
 */

function ReactState() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "paul",
      email: "paul@gmail.com",
    },
    {
      id: 2,
      username: "gift",
      email: "gfit@gmail.com",
    },
  ]);

  return (
    <div>
      {users.map((user) => (
        <UserState key={user.id} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}

export default ReactState;
