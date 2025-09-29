import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const navigate = useNavigate();

  const backClick = () => {
    navigate('/'); // or navigate(-1) to go back in history
  };

  const {id} = useParams()

  const [apiData, setapiData] = useState ({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWViNjUyYjRjM2NjYTc5ZWI1YzcyMzEyNmE5MmY3YSIsIm5iZiI6MTc1ODc2MjEzOS45LCJzdWIiOiI2OGQ0OTQ5Yjk2YjlhZWU0YzE0YTkxNWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rUgucnYUBwocTqB0vTeA3Y5o3Vjfwn32ovpXrFU7og8'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setapiData(res.results[0]))
      .catch(err => console.error(err));

  }, [])

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={backClick} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder={0}
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
