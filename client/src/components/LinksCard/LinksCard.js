import React from 'react'
import "./LinksCard.css"
import shortImg from './short.png'
import targetImg from './target.png'

function LinkCard({ title, slug, target, views, createdAt }) {
    
    const shortURL = `${process.env.REACT_APP_API_URL}/${slug}`

    return (
        <div className='link-card-container'>
            <h3 className='link-card-title'>{title || 'No Title'}</h3>
                <a href={shortURL} target='_blank' className='link-card-target text-primary'>
                    <img src={shortImg} alt='ShortURL'className='link-card-img'/>{shortURL}
                </a>
                <a href={target} target='_blank' className='link-card-target'>
                   <img src={targetImg} alt='TargetURL' className='link-card-img'/>{target.substring(0, 40)}{target.length > 40 ? "..." : null}
                </a>
         
            <span className='link-card-view'>
                {views}
                </span>
            <span className='link-card-view-text'>
                {views > 0 ? `${views} people visited this URL` : 'Share URL to get view count'}
                </span>
            <span className='link-card-date'>{new Date(createdAt).toLocaleString()}</span>
            <button type='button' className='btn'>Update</button> <button type='button' className='btn' >Delete</button>
        </div>
    )
}

export default LinkCard