import React from "react";
import { isLoggedInVar } from "../apollo";

export const LoggedInRouter = () => {
  return (
    <div>
      <div>Logged In</div>
      <button onClick={() => isLoggedInVar(false)}>Click to logout</button>
    </div>
  );
};
