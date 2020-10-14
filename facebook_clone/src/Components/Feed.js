import React, {useEffect, useState} from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
import axios from '../axios'
import Pusher from 'pusher-js'

const pusher = new Pusher('48b5f5130bcca7f2f281', {
    cluster: 'ap4'
});

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostData] = useState([])
    debugger;

    const syncFeed = () => {
        axios.get('/retrieve/post')
            .then((res) => {
                console.log(res.data)
                setPostData(res.data)
            })
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
            syncFeed()
    });
    }, [])

    useEffect (() => {
        syncFeed()
    }, [])
    return (
        <div className="feed" style = {{width : "33%"}}>
            <StoryReel />
            <MessageSender />
            {
                postsData.map(entery => (
                    <Post 
                        ProfilePic = {entery.avatar}
                        message = {entery.text}
                        timeStamp = {entery.timeStamp}
                        imgName= {entery.imgName}
                        username={entery.user}
                    />
                ))
            }
            
        </div>
    )
}

export default Feed
