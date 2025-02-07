// import Button from "react-bootstrap/Button";
export default function Main(props) {
  const { data } = props;

  function getVideoId(url) {
    const regExp =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  }

  const videoId = getVideoId(data.url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="videoContainer">
        <h1 id="indextitel">APOD API</h1>
        <br />
        <br />

        <h2>{data.date}</h2>
        {videoId ? (
          <iframe
            className="videodisplay"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={data.title || "YouTube Video"}
          ></iframe>
        ) : (
          <p>Invalid video URL</p>
        )}
        <p> {data.explanation}</p>
      </div>
      <div className="mainImage">
        <img
          src={data.hdurl}
          className="achtergrondafbeelding"
          alt={
            `${data.title} ${data.copyright}` || "afbeelding niet beschikbaar"
          }
        />
        <br />
        <br />
      </div>
    </div>
  );
}
