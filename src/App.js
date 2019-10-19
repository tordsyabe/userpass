import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import styles from "./App.module.css";
import darkstyles from "./AppDark.module.css";
import addContent from "./add-content.svg";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [users, setUsers] = useState([]);

  const handleGenerate = e => {
    e.preventDefault();
    const usernames = [];

    for (let i = 1; i <= count; i++) {
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
    }
    setUsers(usernames);
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

  const listItems = users.map((a, i) => (
    <React.Fragment>
      <li
        key={a.id}
        className={styles.list}
        onContextMenu={() => console.log("right clicked")}
      >
        user:{" "}
        {a.enableEditUsername ? (
          <input
            name={a.id}
            type='text'
            value={a.username}
            style={{
              borderBottom: "1px solid #cccccc",
              width: "50%",
              height: "15px",
              display: "inline-block",
              margin: 0,
              padding: 0,
              textAlign: "center"
            }}
            onChange={e => handleUsernameChange(e, a.id)}
            onBlur={() => handleSaveUsername(a.id)}
          />
        ) : (
          <span
            style={{ cursor: "pointer" }}
            onDoubleClick={() => handleEditUsername(a.id)}
          >
            {a.username}
          </span>
        )}
        <br />
        pass:{" "}
        {a.enableEditPassword ? (
          <input
            name={a.id}
            type='text'
            value={a.password}
            style={{
              borderBottom: "1px solid #cccccc",
              width: "50%",
              height: "15px",
              display: "inline-block",
              margin: 0,
              padding: 0,
              textAlign: "center"
            }}
            onChange={e => handlePasswordChange(e, a.id)}
            onBlur={() => handleSavePassword(a.id)}
          />
        ) : (
          <span
            style={{ cursor: "pointer" }}
            onDoubleClick={() => handleEditPassword(a.id)}
          >
            {a.password}
          </span>
        )}
      </li>
    </React.Fragment>
  ));

  const componentRef = useRef();

  return (
    <React.Fragment>
      <div className={isDarkMode ? darkstyles.App : styles.App}>
        <div
          className={isDarkMode ? darkstyles.formWrapper : styles.formWrapper}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Label Sticker</h1>
            <input
              type='checkbox'
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{ margin: "10px 0", display: "none" }}
              id='toggleDarkMode'
            />
            <label
              htmlFor='toggleDarkMode'
              style={{
                cursor: "pointer",
                color: "grey",
                fontSize: "13px",
                border: "1px solid grey",
                borderRadius: "31px",
                padding: "10px",
                height: "15px"
              }}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </label>
          </div>

          <form
            className={isDarkMode ? darkstyles.form : styles.form}
            autoComplete='off'
            onSubmit={handleGenerate}
          >
            <input
              className={isDarkMode ? darkstyles.input : styles.input}
              required
              type='text'
              name='user'
              placeholder='Username'
              onChange={e => setUser(e.target.value)}
            />
            <br />
            <input
              className={isDarkMode ? darkstyles.input : styles.input}
              required
              type='text'
              name='pass'
              placeholder='Password'
              onChange={e => setPass(e.target.value)}
            />
            <br />

            <input
              className={isDarkMode ? darkstyles.input : styles.input}
              required
              type='number'
              min='1'
              max='16'
              name='count'
              placeholder='How many?'
              onChange={e => setCount(e.target.value)}
            />
            <br />
            <input
              type='submit'
              className={
                isDarkMode ? darkstyles.buttonGenerate : styles.buttonGenerate
              }
              value='Generate'
            />
            <button
              className={
                isDarkMode ? darkstyles.buttonClear : styles.buttonClear
              }
              onClick={handleClear}
            >
              Clear
            </button>
          </form>
          <p
            style={{
              color: "grey",
              marginTop: "50px",
              fontSize: "15px"
            }}
          >
            This app only supports 8 rows and 2 columns label stickers.
          </p>
        </div>
        <div
          className={
            isDarkMode ? darkstyles.printAreaWrapper : styles.printAreaWrapper
          }
        >
          <div
            className={isDarkMode ? darkstyles.printArea : styles.printArea}
            ref={componentRef}
          >
            {users.length === 0 ? (
              <React.Fragment>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    style={{
                      width: "50%",
                      margin: "20px",
                      alignSelf: "center"
                    }}
                    src={addContent}
                    alt='add'
                  />
                  <div>
                    <p className={isDarkMode ? darkstyles.pTag : styles.pTag}>
                      Get Started.
                    </p>
                    <p style={{ color: "grey", fontSize: "15px" }}>
                      Please fill in the fields on the left to start generating
                      username and password.
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <ul className={isDarkMode ? darkstyles.lists : styles.lists}>
                {listItems}
              </ul>
            )}
          </div>

          <ReactToPrint
            trigger={() => (
              <button
                disabled={users.length === 0}
                className={
                  isDarkMode ? darkstyles.buttonPrint : styles.buttonPrint
                }
                style={{
                  overflow: "hidden",
                  position: "absolute",
                  right: 0,
                  bottom: users.length === 0 ? "-300px" : "0",
                  transition: "all 400ms ease-in-out"
                }}
              >
                Print
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
