import { fetchPhotos, fetchVideos } from "./api/mediaApi";

function App() {
  async function getPhotos() {
    const data = await fetchPhotos("cat");
    console.log(data.results);
  }

  async function getVideos() {
    const data = await fetchVideos("dog");
    console.log(data.videos);
  }

  return (
    <div className="h-screen text-white w-full bg-gray-900">
      <button className="p-2.5" onClick={getPhotos}>
        Get photos
      </button>
      <button className="p-2.5" onClick={getVideos}>
        Get Videos
      </button>
    </div>
  );
}

export default App;
