import React, { useEffect, useState } from 'react'
import './NewsApp.css'
import Card from '../card/Card'
const NewsApp = () => {
const [search,setSearch]=useState("india")
const [news, setNews]=useState([])

const Api_key = "3394a84ff03740b89f06928aae21ac5e"

const getApi = async() => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${Api_key}`)
  const jsonData = await response.json()
    console.log(jsonData)
    setNews(jsonData.articles)
}
   const handleinput =(event)=>{
    setSearch(event.target.value)
   }

 useEffect(()=>{
       getApi()
  },[])

  return (
    <div className='newsapp-container'>
      <nav>
        <div className='heading-container'>
          <h1 className='heading'>Trendy News</h1>
        </div>
        <ul>
          <a >All News</a>
          <a>Trending</a>
        </ul>
        <div className='searchbar'>
          <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search News' value={search} />
          <button onClick={getApi}>Search</button>
        </div>
      </nav>
      <div>
        <p className='para'>Stay Update With Trending News</p>
      </div>
      <div className='category-button'>
        <button onChange={handleinput} value="Sports">Sports</button>
        <button onChange={handleinput} value="Politics">Politics</button>
        <button onChange={handleinput} value="Entertainment">Entertainment</button>
        <button onChange={handleinput} value="Health">Health</button>
        <button onChange={handleinput} value="Fitness">Fitness</button>
      </div>
      <div>
        {news?<Card news={news}></Card>:[]}
      </div>
    </div>
  )
}

export default NewsApp