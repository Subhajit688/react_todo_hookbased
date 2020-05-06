import { useState } from 'react';
const useInput = (initialVal) => {
	const [state, setState] = useState(initialVal);
	const changestate = (e) => {
		setState(e.target.value);
	};
	const resetState = () => {
		setState('');
	};
	return [state, changestate, resetState];
};
export default useInput;
