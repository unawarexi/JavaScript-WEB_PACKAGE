import React from "react";

const UserName = ({ age, marital }) => {
  return (
    <div>
      <p>
        {" "}
        this user is {age} and is {marital}
      </p>
    </div>
  );
};

export default UserName;
