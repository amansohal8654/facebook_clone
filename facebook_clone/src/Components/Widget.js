import React from 'react'

const Widget = () => {
    return (
        <div className = "widget">
            <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNihangsinghAkaali&tabs=timeline&width=350&height=1000px&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=473544986936158" 
            width="350" 
            height="1000px" 
            style={{border:"none", overflow:"hidden"}} 
            scrolling="no" frameBorder="0" 
            allowTransparency="true" 
            allow="encrypted-media">
            </iframe>
        </div>
    )
}

export default Widget
