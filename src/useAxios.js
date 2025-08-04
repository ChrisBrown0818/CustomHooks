import axios from 'axios';
import  {useState, useEffect} from 'react'
import {v1 as uuid} from "uuid";



function useAxios(key, url)  {
    
    //const [ error, setError ] = useState(null);
    //loading
    //const [ loading, isLoading ] = useState(true);
    //baseUrl?
    //endPoint
const [state, setState] = useState([]);

const changeState = async ( endPoint = "" ) => {
  
   //url = (endPoint  == "pikachu") ? url : `${url}${endPoint}`;
   if(key === "pokemon"){
    url = (endPoint === "bulbasaur") ? url : `${url}${endPoint}`;
   }
   
   
   //previous attempt
   // if(!endPoint == "" ? url = `${url}${endPoint}` : url = url )
    console.log(url);
    const res = await axios.get(

       `${url}`
     );
     
     setState(data => [...data, { ...res.data, id: uuid()  }]);
   
    };


    

    return [state, changeState];


 
    }

export default useAxios;