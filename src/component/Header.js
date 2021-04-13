import React from 'react';



const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((item, id) => {
          return (
            <li key={id}>
              {item}
              <button onClick={() => removeKeywords(item)}>
                <img
                  src={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                    >
                      <path
                        fill="#FFF"
                        fill-rule="evenodd"
                        d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                      />
                    </svg>
                  }
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
