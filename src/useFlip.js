import React, {useState} from 'react';


function useFlip(initialState = true)  {
    const [state, setState] = useState(initialState);

    const changeState = () => {
    setState(state => !state);

    
  };
  return [state, changeState];
}
 
export {useFlip};


