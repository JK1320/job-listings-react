import React, {useState} from "react";
import './App.css';
import data from "./data/data";
// import JobsListDisplay from "./JobsListDisplay";
import Header from "./component/Header";
import Jobs from "./component/Jobs";


function App() {
  const [filteredKeywords, setFilteredKeywords] = useState([]);

  const addFilteredKeywords = (item) => {
    if (!filteredKeywords.includes(item)) {
      setFilteredKeywords([...filteredKeywords, item])
    }
  }

  const deleteKeyword = (data) => {
    const newKeyword = filteredKeywords.filter(item => item !== data);
    setFilteredKeywords(newKeyword);
  }

  const clearAll = () => {
    setFilteredKeywords([]);
  }

  return (
    <div className="App">
      <div className="header"></div>
      {filteredKeywords.length > 0 &&  (
      <Header 
      keywords={filteredKeywords} 
      removeKeywords={deleteKeyword}
      clearAll={clearAll} />)}
   
    <Jobs keywords={filteredKeywords} data={data} setKeywords={addFilteredKeywords} />
    </div>
  );
}

export default App;
