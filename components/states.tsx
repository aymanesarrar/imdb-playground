import {atom, selector} from 'recoil'

const inputState = atom({
	key: "nameState",
	default: 'hello'
})

const data = atom({
	key: "movies",
	default: []
})

const charState = selector({
	key: 'charState',
	get: ({get}) => {
		const name = get(inputState);
		return  name + " world";
	}
})

export {inputState, charState, data};