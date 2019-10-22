import React, { useContext, useRef } from "react";
import LabelSticker from "./LabelSticker";
import { LabelContext } from "../context/LabelContext";
import addContent from "../add-content.svg";
import ReactToPrint from "react-to-print";
import { ThemeContext } from "../context/ThemeContext";

const LabelStickers = props => {
  const { users } = useContext(LabelContext);
  const { isDarkMode, darkStyles, lightStyles } = useContext(ThemeContext);
  const componentRef = useRef();

  return (
    <div
      className={
        isDarkMode ? darkStyles.printAreaWrapper : lightStyles.printAreaWrapper
      }
    >
      <div
        className={isDarkMode ? darkStyles.printArea : lightStyles.printArea}
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
                <p className={isDarkMode ? darkStyles.pTag : lightStyles.pTag}>
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
          <ul className={isDarkMode ? darkStyles.lists : lightStyles.lists}>
            <LabelSticker />
          </ul>
        )}
      </div>

      <ReactToPrint
        trigger={() => (
          <button
            disabled={users.length === 0}
            className={
              isDarkMode ? darkStyles.buttonPrint : lightStyles.buttonPrint
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
  );
};

export default LabelStickers;
