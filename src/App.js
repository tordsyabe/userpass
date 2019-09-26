import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import styles from "./App.module.css";

function App() {
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" },
    { username: "ibm01", password: "password01" }
  ]);

  const handleGenerate = e => {
    e.preventDefault();
    const usernames = [];

    for (let i = 1; i <= count; i++) {
      usernames.push({ username: `${user}0${i}`, password: `password0${i}` });
    }
    setUsers(usernames);
  };

  const handleClear = e => {
    e.preventDefault();
    setUsers([]);
  };

  const listItems = users.map((a, i) => (
    <React.Fragment>
      <li key={i} className={styles.list}>
        user: {a.username}
        <br />
        pass: {a.password}
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
            onSubmit={e => e.preventDefault()}
          >
            <input
              className={styles.input}
              required
              type="text"
              name="name"
              placeholder="Username"
              onChange={e => setUser(e.target.value)}
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
            <button
              type="button"
              disabled
              className={styles.buttonGenerate}
              onClick={handleGenerate}
            >
              Generate
            </button>
            <button className={styles.buttonClear} onClick={handleClear}>
              Clear
            </button>
          </form>
        </div>
        <div className={styles.printAreaWrapper}>
          <div className={styles.printArea} ref={componentRef}>
            {users.length === 0 ? (
              <p className={styles.pTag}>Make some username and password.</p>
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
