// Context to store the search value

import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

export const useUserContext = () => useContext(UserContext);