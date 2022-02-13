import React,{useState} from 'react'
import './search.css'
const Searchbar = ()=> {
    const {searchData, setSearchData}= useState([]);

 

 const search =(key)=>{
        console.log(key);
        
        const url ="https://hn.algolia.com/api/v1/search?query=hacker"+{key};
        fetch(url).then((resp)=>resp.json())
        .then((res)=>{
            console.log(res.hits);
            setSearchData([res.hits]);
        })
        
 }

  return (
    <>
    <input type="search" placeholder='Explore Hacker News .....' onChange={(event)=>search(event.target.value)}/>
    <p>{searchData}</p>
    </>
  )
}
export default  Searchbar;