import React, { useState, createContext } from "react";

export const LabelContext = createContext();

const LabelContextProvider = props => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [count, setCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);

  const handleGenerate = e => {
    e.preventDefault();
    const usernames = [];

    for (let i = 1; i <= 16; i++) {
      if (i <= count) {
        if (i < 10) {
          usernames.push({
            id: i,
            username: `${user}0${i}`,
            password: `${pass}0${i}`,
            enableEditUsername: false,
            enableEditPassword: false
          });
        } else {
          usernames.push({
            id: i,
            username: `${user}${i}`,
            password: `${pass}${i}`,
            enableEditUsername: false,
            enableEditPassword: false
          });
        }
      } else {
        usernames.push("");
      }
    }
    setUsers(usernames);
    setCurrentCount(count);
  };

  const handleClear = e => {
    e.preventDefault();
    setUsers([]);
  };

  const handleEditUsername = id => {
    const userForEdit = [...users];
    const usernameForEdit = userForEdit.find(obj => obj.id === id);

    usernameForEdit.enableEditUsername = true;

    setUsers(userForEdit);
  };

  const handleUsernameChange = (e, id) => {
    const userForEdit = [...users];
    const usernameForEdit = userForEdit.find(obj => obj.id === id);

    usernameForEdit.username = e.target.value;
    setUsers(userForEdit);
  };

  const handleSaveUsername = id => {
    const userForEdit = [...users];
    const usernameForEdit = userForEdit.find(obj => obj.id === id);

    usernameForEdit.enableEditUsername = false;
    setUsers(userForEdit);
  };

  const handleEditPassword = id => {
    const userForEdit = [...users];
    const usernameForEdit = userForEdit.find(obj => obj.id === id);

    usernameForEdit.enableEditPassword = true;
    setUsers(userForEdit);
  };

  const handlePasswordChange = (e, id) => {
    const userForEdit = [...users];
    const usernameForEdit = userForEdit.find(obj => obj.id === id);

    usernameForEdit.password = e.target.value;
    setUsers(userForEdit);
  };

  const handleSavePassword = id => {
    const userForEdit = [...users];
    const usernameForEdit = userForEdit.find(obj => obj.id === id);

    usernameForEdit.enableEditPassword = false;
    setUsers(userForEdit);
  };

  return (
    <LabelContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        pass,
        setPass,
        count,
        setCount,
        handleClear,
        handleEditPassword,
        handleEditUsername,
        handleGenerate,
        handlePasswordChange,
        handleSavePassword,
        handleUsernameChange,
        handleSaveUsername,
        currentCount
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};

export default LabelContextProvider;
