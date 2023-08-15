import { useEffect, useState } from 'react';

function App() {
  const urlArray = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  ]; // Add your URLs here
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUrlIndex((prevIndex) => (prevIndex + 1) % urlArray.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <video
        controls
        autoPlay
        muted
        style={{ width: '100%', height: '100%' }}
        key={urlArray[currentUrlIndex]}
      >
        <source src={urlArray[currentUrlIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
