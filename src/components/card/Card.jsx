import React from 'react'
import './Card.css'
const Card = ({news}) => {
  
  const handleNews = (url)=>{
      const host = window.open(url)
      return host
  }

  return (
    <div className='card-container'>
      {news.map((item,index)=>{
        if(!item.urlToImage){
          return null
        }else{ return <div key={index} className='card'>
        <img src={item.urlToImage}/>
        <div className='content'>
          <a className='title' onClick={()=>handleNews(item.url)}>{item.title}</a>
          <p>{item.description}</p>
          <button onClick={()=>handleNews(item.url)}>Read more</button>
        </div>
        
      </div>
          
        }
         
      })}
    </div>
  )
}

export default Card