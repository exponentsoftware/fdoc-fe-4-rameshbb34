import { ActionTypes } from "../constants/actionTypes";

const initialState = [
    {
        id: "01",
        artist: "Manisharma",
        album_title: "Style",
        album_cover: "https://c.saavncdn.com/393/Style-Telugu-2013-500x500.jpg",
        songs: [
          "Style style",
          "Edola Edo",
          "Rock&Roll",
          "Chiru Cheyyesthe",
        ],
      },
      {
        id: "02",
        artist: "Pritam",
        album_title: "Yeh Jawaani Hai Deewani",
        album_cover: "https://c.saavncdn.com/440/Yeh-Jawaani-Hai-Deewani-2013-500x500.jpg",
        songs: ["Badtameez Dil", "Balam Pichkari", "Kabira", "Ghagra"],
      },
      {
        id: "03",
        artist: "Manisharma",
        album_title: "Sridevi Soda Center",
        album_cover: "https://c.saavncdn.com/334/Sridevi-Soda-Center-Telugu-2021-20210825145336-500x500.jpg",
        songs: [
          "Naalone Unna",
          "Manduloda",
          "Chukkala Melam",
          "Naalo Innalluga",
        ],
      },
      {
        id: "04",
        artist: "Pawan Ch",
        album_title: "Love Story",
        album_cover: "https://c.saavncdn.com/582/Love-Story-Telugu-2020-20210923220520-500x500.jpg",
        songs: ["AyPilla", "Nee Chitram Choosi", "Saranga Dariya", "Evo Evo Kalale"],
      },
];
export const albumReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALBUM:
      return [...state, payload];

    case ActionTypes.DELETE_ALBUM:
      const data = state.filter((elem) => {
        return elem.id !== payload.id;
      });
      console.log("data", data);
      console.log("payload", payload.id);
      return data;

    default:
      return state;
  }
};

export const selectedAlbumReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ALBUM:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_ALBUM:
      return {};

    default:
      return state;
  }
};