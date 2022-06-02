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

const url_id = atom({
  key: "url_id",
  default: "",
});

const charState = selector({
  key: "charState",
  get: ({ get }) => {
    const name = get(inputState);
    return name + " world";
  },
});

const full_url = selector({
	key: "full_url",
	get: ({get}) => {
		const youtube_link = "https://www.youtube.com/watch?v=";
		const id = get(url_id);
		return youtube_link + id;
	}
})

export { inputState, charState, data, tvs, Titletype, toggle, url_id, full_url };
