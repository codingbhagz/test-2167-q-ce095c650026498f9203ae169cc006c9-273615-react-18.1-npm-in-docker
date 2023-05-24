import { useEffect, useState } from 'react';
import './App.css';
import data from "./data.json"

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function App() {

  const [searchResults, setSearchResults] = useState(null);
  const [currentTab, setCurrentTab] = useState("")

  useEffect(() => {
    setSearchResults(data[0])
  },[])

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
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  return (
     <main className="app-wrapper" style={{backgroundImage: `url(${searchResults?.backgroundUrl})`}}>
      <div className='weather'>
        <img src={searchResults?.weather.icon} width={40} />
        <p>{searchResults?.weather.temp}</p>
        <p>{searchResults?.weather.main}</p>
      </div>

      <div className='app-container'>
        <div className='city-info'>
          <h4 className='city-name'>{searchResults?.name ? searchResults?.name : " "}</h4>
        </div>
        <div className='search-tab' style={{ width: 400 }}>
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
        </div>

        <ul className='tabs'>
          <li><a onClick={handleTabsClick} id='places'>Places</a></li>
          <li><a onClick={handleTabsClick} id='hotels'>Hotels</a></li>
          <li><a onClick={handleTabsClick} id='restaurants'>Restaurants</a></li>
          <li><a onClick={handleTabsClick} id='offices'>Offices</a></li>
        </ul>
        <div>
          {currentTab === 'places' && <div>
            {searchResults?.categories?.places?.map(item => {
            return (
              <div className='tabs-info'>
                <img src={item.imageUrl} className='image' />
                <div className='box-container'>
                  <p className='heading'>{item.name}</p>
                  <p>{item.address ? item.address : item.desc}</p>
                </div>

                <div className='box-container'>
                  <p className='heading'>Opens At</p>
                  <p>{item.openAt}</p>
                </div>

                <div className='box-container'>
                  <p className='heading'>Closes At</p>
                  <p>{item.closeAt}</p>
                </div>
              </div>
            )
          })}
            </div>}

            {currentTab === 'hotels' && <div>
            {searchResults?.categories?.hotels?.map(item => {
            return (
              <div className='tabs-info'>
                <img src={item.imageUrl} className='image' />
                <div className='box-container'>
                  <p className='heading'>{item.name}</p>
                  <p>{item.address ? item.address : item.desc}</p>
                </div>

                <div className='box-container'>
                  <p className='heading'>Opens At</p>
                  <p>{item.checkIn}</p>
                </div>

                <div className='box-container'>
                  <p className='heading'>Closes At</p>
                  <p>{item.checkOut}</p>
                </div>
              </div>
            )
          })}
            </div>}

            {currentTab === 'restaurants' && <div>
            {searchResults?.categories?.restaurants?.map(item => {
            return (
              <div className='tabs-info'>
                <img src={item.imageUrl} className='image' />
                <div className='box-container'>
                  <p className='heading'>{item.name}</p>
                  <p>{item.address ? item.address : item.desc}</p>
                </div>

                <div className='box-container'>
                  <p className='heading'>Opens At</p>
                  <p>{item.openAt}</p>
                </div>

                <div className='box-container'>
                  <p className='heading'>Closes At</p>
                  <p>{item.closeAt}</p>
                </div>
              </div>
            )
          })}
            </div>}

            {currentTab === 'offices' && <div>
            {searchResults?.categories?.offices?.map(item => {
            return (
              <div className='tabs-info'>
                <img src={item.imageUrl} className='image' />
                <div className='box-container'>
                  <p className='heading'>{item.name}</p>
                  <p>{item.address ? item.address : item.desc}</p>
                </div>

                <div className='box-container'>
                  <p className='heading'>Opens At</p>
                  <p>{item.openAt}</p>
                </div>

                <div className='box-container'>
                  <p className='heading'>Closes At</p>
                  <p>{item.closeAt}</p>
                </div>
              </div>
            )
          })}
            </div>}

        </div>
      </div>


      
      </main>
  );
}

export default App;
