import { useState } from 'react';
import './App.css';
import Content from './Content';
import data from './sortedCU.json';
import Video from './video';

function App() {
  const [id, setId] = useState(null);
  const [page, setPage] = useState(1);
  const goToPage = (e) => {
    const num = Number(e.target.value);
    setPage(num);
    window.scrollTo(0, 0)
  }
  const nextPage = () => {
    setPage(prev => Number(prev) + 1);
    window.scrollTo(0, 0)
  }
  const prevPage = () => {
    setPage(prev => prev == 1 ? 1 : prev - 1);
    window.scrollTo(0, 0)
  }
  const finalData = data.slice(500 * page - 500, 500 * page);
  return (
    <>
      <div className="App">
        {finalData.map((video, ind) => {
          const link = `https://www.tubeninja.net/welcome?url=${video.link}`;

          return id == ind ? <Video key={Math.random()} videoLink={link} source={video.previewLink}></Video> : <Content key={Math.random()} setId={setId} id={ind} videoLink={link} duration={video.duration} views={video.views} imgSrc={video.thumbImgLink}></Content>
        })}
      </div>
      <div style={{ width: 'fit-content', margin: '20px auto' }}>
        <button onClick={nextPage} style={{ marginRight: '40px', padding: '2px', background: 'green', color: 'white', outline: 'none', border: 'none' }}>Next</button>
        <input value={page} onChange={goToPage} style={{ height: '20px', width: '40px', textAlign: 'center' }}></input>
        <button onClick={prevPage} style={{ marginLeft: '40px', padding: '2px', background: 'red', color: 'white', outline: 'none', border: 'none' }}>prev</button>
      </div>
    </>


  );
}

export default App;
