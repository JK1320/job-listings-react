import React from 'react';



const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((item, id) => {
          return (
            <li key={id}>
              {item}
              <button className="close" onClick={() => removeKeywords(item)}>
                <img 
                  src={"./images/icon-remove.svg"}
                  alt=""
                />
              </button>
            </li>
          );
        })}
        <button className="clear-btn" src="" onClick={() => clearAll()}>Clear</button>
      </ul>
    </div>
  );
};

export default Header;
