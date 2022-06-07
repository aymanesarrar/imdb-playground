import { atom, selector } from "recoil";

const inputState = atom({
  key: "nameState",
  default: "hello",
});

const data = atom({
  key: "movies",
  default: [],
});

const tvs = atom({
  key: "tvs",
  default: [],
});

const Titletype = atom({
  key: "Titletype",
  default: "Movies",
});

const toggle = atom({
  key: "toggle",
  default: false,
});

const url = atom({
  key: "url",
  default: "",
});

const id = atom({
  key: "id",
  default: "",
});

const modal = atom({
  key: "modal",
  default: false,
});


const charState = selector({
  key: "charState",
  get: ({ get }) => {
    const name = get(inputState);
    return name + " world";
  },
});

export { inputState, charState, data, tvs, Titletype, toggle, url, modal, id };
