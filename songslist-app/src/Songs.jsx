import React from "react";

const Songs = (props) => {
  return (
    <div>
      <h1>Songs List:</h1>
      <ul>
        {props.location.state.songsList.songs.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;