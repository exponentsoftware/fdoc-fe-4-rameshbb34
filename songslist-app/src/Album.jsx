import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAlbum } from "./redux/action/albumaction";

const Album = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const item = useSelector((state) => state.allAlbums);

  const handleDelete = (id) => {
    // const data = item.filter((elem) => {
    //   return elem.id !== id;
    // });
    // console.log("data", data);
    dispatch(deleteAlbum(id));
  };

  const renderList = item
    .filter((val) => {
      if (search === "") {
        return val;
      } else if (val.album_title.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    })
    .map((album, i) => {
      const { id, album_title, artist, album_cover, songs } = album;

      return (
        <div className="cards" key={i}>
          <Link
            className="album"
            to={{
              pathname: `/albums/songs/:${id}`,
              state: { songsList: { songs } },
            }}
          >
            <div className="poster">
              <img src={album_cover} alt="" height="200" width="200" />
            </div>
            <div className="album_name">{album_title}</div>
            <div className="musician_name">{artist}</div>
          </Link>

          <button className="delete" onClick={() => handleDelete({ id })}>
            Delete
          </button>
        </div>
      );
    });

  return (
    <>
      <div className="topbar">
        <h1>Albums...</h1>
        <div className="searchbar">
          <input
            placeholder="Seach album name..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <p>click on image to see listed songs</p>

      <div className="list">{renderList}</div>
    </>
  );
};

export default Album;
