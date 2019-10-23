import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LabelContext } from "../context/LabelContext";

const LabelSticker = props => {
  const {
    users,
    currentCount,
    handleEditPassword,
    handleEditUsername,
    handlePasswordChange,
    handleSavePassword,
    handleSaveUsername,
    handleUsernameChange
  } = useContext(LabelContext);

  const { lightStyles, darkStyles, isDarkMode } = useContext(ThemeContext);

  const listItems = users.map((a, i) => (
    <li
      key={a.id}
      className={isDarkMode ? darkStyles.list : lightStyles.list}
      onContextMenu={() => console.log("right clicked")}
    >
      {i < currentCount ? `user: ` : null}
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
          maxLength='20'
          autoFocus
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
      {i < currentCount ? `pass: ` : null}
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
          maxLength='20'
          autoFocus
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
  ));
  return <React.Fragment>{listItems}</React.Fragment>;
};

export default LabelSticker;
