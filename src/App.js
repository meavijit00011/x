import './App.css';
import { useState } from 'react'
import data from './s5000.json';
function App() {
  const [showId, setShowId] = useState(null);
  const [page, setPage] = useState(1);
  const handleHover = (id) => {
    setShowId(id);
  }
  const changePage = (type) => {
    if (type == 0 && page != 0) {
      setPage(page - 1);
      window.scrollTo(0,0);
    }
    else if (type == 1) {
      setPage(page + 1);
      window.scrollTo(0,0)
    }
  };
  const startIndex = (page - 1) * 1000;
  const endIndex = startIndex + 1000;
  const filteredData = data.slice(startIndex,endIndex)
  return (
    <div className="App">
      <div className='content_wrapper'>
        {filteredData.map((item, ind) => {
          if (ind != showId) {
            return <a key={ind} onTouchEnd={handleHover.bind(null, ind)} href={item.vidLink} target="_blank">
              <img height='200px' width='200px' src={item.thumbImgLink}></img>
              <div className='details'>
                <span>{item.views}</span>
                <span>{item.vidLength}</span>
              </div>
            </a>
          }
          else {
            return <a key={ind} href={item.vidLink} target='_blank'><video height='200px' width='200px' src={item.previewLink} autoPlay muted loop>
            </video></a>
          }
        })}
      </div>
      <div className='action'>
        <button onClick={changePage.bind(null, 0)}>prev</button>
        <span>{page}</span>
        <button onClick={changePage.bind(null, 1)} style={{ backgroundColor: 'red' }}>next</button>
      </div>
    </div>
  );
}

export default App;
