import React from "react";
import Chat from "./chat"
import Player from "./player"

const Home = () => {
  return (
    <div className="home">
      <Player />
      <Chat />
    </div>
  );
};

export default Home;