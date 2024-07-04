import React from "react";
import UserName from "./UserName";

/**
 * props are only called in the child components
 * child components can only be  modified from the parent component
 * it can call a number, a non-primitive, a Boolean, even a function
 *
 * @param {*} props
 * @returns age and marital
 */

const UserProfile = () => {
  return (
    <div>
      UserProfile: <UserName age={30} marital="married" />
    </div>
  );
};

export default UserProfile;
