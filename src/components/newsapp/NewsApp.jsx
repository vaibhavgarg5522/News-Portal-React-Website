import React, { useState } from 'react'
import './NewsApp.css'
import Card from '../card/Card'
const NewsApp = () => {
const [search,setSearch]=useState("india")

const Api_key = "3394a84ff03740b89f06928aae21ac5e"

const getApi = async() => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&apiKey=${Api_key}`)
  const jsonData = response.json()
    console.log(jsonData)
}
// const handleChange =(e)=>{
//   setSearch(e.target.value)
// }

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
          <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search News' />
          <button onClick={getApi}>Search</button>
        </div>
      </nav>
      <div>
        <p className='para'>Stay Update With Trending News</p>
      </div>
      <div className='category-button'>
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
  )
}

export default NewsApp