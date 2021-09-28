import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlbum } from "./redux/action/albumaction";
import './App.css'

const AddAlbum = () => {
  const item = useSelector((state) => state.allAlbums);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    album_title: "",
    artist: "",
    image: "",
  });

  console.log("item", item);
  const [uimage, setUimage] = useState("");

  const [imageurl, setimageurl] = useState("");

  const handleChangetextField = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleChangeFile = (event) => {
    setUimage(event.target.files[0]);
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", uimage);
    data.append("upload_preset", "vishaldev");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dfdxz6jkp/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setimageurl(file.secure_url);
  };

  const handleUpload = () => {
    uploadImage();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setState({ ...state, image: imageurl });
    console.log("state", state);
    const addItem = {
      id: "5",
      artist: state.artist,
      album_title: state.album_title,
      album_cover: state.image,
      songs: ["more_piya", "ghar_aayenge", "ye dil"],
    };
    dispatch(setAlbum(addItem));
  };

  return (
    <div>
      <div className="addalbum-container">
        <h1>Add Your Album</h1>{" "}
      </div>
      <div className="addalbum">
        <form action="" className="formdata" onSubmit={onSubmit}>
          <div style={{ margin: "2em" }}>
            <input
              type="text"
              value={state.album_title}
              name="album_title"
              placeholder="album_title"
              onChange={handleChangetextField("album_title")}
            />
          </div>
          <div style={{ margin: "2em" }}>
            <input
              type="text"
              value={state.artist}
              name="artist"
              placeholder="artist"
              onChange={handleChangetextField("artist")}
            />
          </div>
          <div style={{ margin: "2em" }}>
            <input
              type="file"
              name="upload-file"
              placeholder="upload-cover-pic"
              onChange={handleChangeFile}
            />
          </div>
          <button onClick={handleUpload}> Upload </button>
          <div>
            {" "}
            <input
              type="submit"
              value="Submit"
              
            />
          </div>
        </form>
        <div style={{ color: "white", width: "220px", height: "200px" }}>
          <img src={imageurl} alt="" width="200px" height="190px" />
          <p> album_name: {state.album_title}</p>
          <p>artist: {state.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default AddAlbum;