import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import styles from "./App.module.css";
import addContent from "./add-content.svg";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    // {
    //   id: 0,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 1,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 2,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 3,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 4,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 5,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 6,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 7,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 8,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 9,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 10,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 11,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 12,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 13,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 14,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // },
    // {
    //   id: 15,
    //   username: "ibm01",
    //   password: "password01",
    //   enableEditUsername: false,
    //   enableEditPassword: false
    // }
  ]);

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
        usernames.push({ username: `${user}${i}`, password: `${pass}${i}` });
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
      <li key={a.id} className={styles.list}>
        user:{" "}
        {a.enableEditUsername ? (
          <input
            name={a.id}
            type="text"
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
          <span onDoubleClick={() => handleEditUsername(a.id)}>
            {a.username}
          </span>
        )}
        <br />
        pass:{" "}
        {a.enableEditPassword ? (
          <input
            name={a.id}
            type="text"
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
          <span onDoubleClick={() => handleEditPassword(a.id)}>
            {a.password}
          </span>
        )}
      </li>
    </React.Fragment>
  ));

  const componentRef = useRef();
  return (
    <React.Fragment>
      <div className={styles.App}>
        <div className={styles.formWrapper}>
          <h1>user and pass</h1>
          <form
            className={styles.form}
            autoComplete="off"
            onSubmit={handleGenerate}
          >
            <input
              className={styles.input}
              required
              type="text"
              name="user"
              placeholder="Username"
              onChange={e => setUser(e.target.value)}
            />
            <br />
            <input
              className={styles.input}
              required
              type="text"
              name="pass"
              placeholder="Password"
              onChange={e => setPass(e.target.value)}
            />
            <br />

            <input
              className={styles.input}
              required
              type="text"
              name="count"
              placeholder="How many?"
              onChange={e => setCount(e.target.value)}
            />
            <br />
            <input
              type="submit"
              className={styles.buttonGenerate}
              value="Generate"
            />
            <button className={styles.buttonClear} onClick={handleClear}>
              Clear
            </button>
          </form>
        </div>
        <div className={styles.printAreaWrapper}>
          <div className={styles.printArea} ref={componentRef}>
            {users.length === 0 ? (
              <React.Fragment>
                <img
                  style={{ width: "50%", margin: "20px" }}
                  src={addContent}
                  alt="add"
                />
                <p className={styles.pTag}>Make some username and password.</p>
                <p>Lorem ipsum</p>
              </React.Fragment>
            ) : (
              <ul className={styles.lists}>{listItems}</ul>
            )}
          </div>
          <ReactToPrint
            trigger={() => (
              <button
                disabled={users.length === 0}
                className={styles.buttonPrint}
                style={{
                  background: users.length === 0 ? "#cccccc" : null
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
