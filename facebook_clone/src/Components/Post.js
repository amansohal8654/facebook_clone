import React from 'react'
import "./Post.css"
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutline from '@material-ui/icons/ExpandMoreOutlined'
import AccountCircleIclon from '@material-ui/icons/AccountCircle'
import axios from '../axios'

const Post = ({ProfilePic, imgName, username, timeStamp, message}) => {
    return (
        <div className = "post">
            <div className= "post_top">
                <Avatar src={ProfilePic} className='post_avatar'/>
                <div className = "post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timeStamp)).toUTCString()}</p>
                    
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>
            {
                imgName ? (
                    <div className = "post__image">
                        <img src={`https://facebook-aman.herokuapp.com/retrieve/images/single?name=${imgName}`}/>
                    </div>
                ): (
                    console.log('DEBUG >>> NO IMAGE HERE')
                )


            }
            <div className = "post_options">
                        <div className="post_option">
                            <ThumbUpIcon/>
                            <p>Like</p>
                        </div>
                        <div className="post_option">
                            <ChatBubbleOutlineIcon />
                            <p>Comment</p>
                        </div>
                        <div className="post_option">
                            <NearMeIcon />
                            <p>Share</p>
                        </div>
                        <div className="post_option">
                            <AccountCircleIclon />
                            <ExpandMoreOutline />
                        </div>
                    </div>
        </div>
    )
}

export default Post
