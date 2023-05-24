import { useState } from 'react';
import './App.css';
import data from "./data.json"

import { ReactSearchAutocomplete } from 'react-search-autocomplete'



function App() {

  const [searchResults, setSearchResults] = useState(null);
  const [currentTab, setCurrentTab] = useState("")

  const handleOnSearch = (string, results) => {
    setSearchResults(results[0]);
  }

  const handleOnHover = (result) => {
    console.log(result)
  }

  const handleOnSelect = (item) => {
    setSearchResults(item);
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const handleTabsClick = (e) => {
    setCurrentTab(e.currentTarget.id);
    console.log(e.currentTarget.id);
    console.log(currentTab);
    console.log(searchResults);
    searchResults.categories.places.map((item) => {
      console.log(item);
    })
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

  return (
    <div className="App">
     <header className="App-header" style={{backgroundImage: `url(${searchResults?.backgroundUrl})`}}>
      <h4 className='city-name'>{searchResults?.name ? searchResults?.name : " "}</h4>
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={data}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            id="search-input"
          />
          <button id='btn-submit'>Search</button>
        </div>
        <ul>
          <li><a onClick={handleTabsClick} id='places'>Places</a></li>
        </ul>
      
      </header>
    </div>
  );
}

export default App;
