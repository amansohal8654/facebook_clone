import React, {useState} from 'react'
import {Avatar, Button} from '@material-ui/core'
import "./MessageSender.css"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {useStateValue} from '../StateProvider'
import axios from '../axios'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const MessageSender = () => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [image, setImage] = useState(null)
    const[{user}, dispatch] = useStateValue()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleChange = (e) => {
         if(e.target.files[0]){
             setImage(e.target.files[0])
         }
     }

     const handleSubmit = async (e) => {
        e.preventDefault()
        handleClose()
         if(image) {
             const imgForm = new FormData()
             imgForm.append('file', image, image.name)

             axios.post('/upload/image', imgForm, {
                 headers: {
                     'accept': 'application/json',
                     'Accept-Language': 'en-US,en;q=0.8',
                     'Content-Type' : `multipart/form-dat; boundary=${imgForm._boundary}`
                 }
             }).then((res) => {
                 console.log(res.data)

                 const postData = {
                     text: input,
                     imgName: res.data.filename,
                     user: user.displayName,
                     avatar: user.photoURL,
                     timestamp: Date.now()
                 }
                 console.log(postData)
                 savePost(postData)
             })
         }else {
             const postData = {
                 text: input,
                 user:user.displayName,
                 avatar:user.photoURL,
                 timestamp: Date.now()
             }
             console.log(postData)
             savePost(postData)
         }

         setImageUrl('')
         setInput('')
         setImage(null)
     }
     debugger;
     const savePost = async (postData) => {
         await axios.post('/upload/post', postData)
                .then((resp) => {
                    console.log(resp)
                })
     }

    return (
        <div className = "messageSender">
            <div className = "messageSender_top">
                <Avatar 
                src = {user.photoURL} />
                
                    <div 
                    className="messageSender_input" 
                    placeholder="what's in your mind"
                    role="button"
                    onClick={handleClickOpen}
                    >
                        <strong className="input_text">What's in your mind</strong>
                    </div>   
            </div>

            <div className = "messageSender_bottom">
                <div className = "messageSender_option">
                    <VideocamIcon style= {{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className = "messageSender_option">
                    <PhotoLibraryIcon style= {{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className = "messageSender_option">
                    <InsertEmoticonIcon style= {{color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>


        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            
            <DialogTitle id="form-dialog-title" style= {{paddingRight: "15px"}}>
            <div className = "dialog_title">
            <span style={{fontWeight: "600"}}>Create post</span> 
            <CancelIcon className="dialog_icon" style = {{fontSize: "40px"}} onClick={handleClose}/>
            </div>
            <div className = "dialog_bottom">
                <Avatar/>
                <div className = "dialog_info">
                    <h5>Aman Singh</h5>
                    <div><SupervisorAccountIcon/><h6>Friends</h6></div>
                </div>
            </div>
            </DialogTitle>
        <form>
        <DialogContent>
          <DialogContentText className = "dialog_mid">
               <textarea placeholder = "What's on your mind " onChange = {(e) => setInput(e.target.value)}></textarea>
          </DialogContentText>
        </DialogContent>
        <div className = "dialog_upload">
            <input type="file" onChange = {handleChange}>
            </input>
        </div>
        <div className = "dialog_action">
          <button onClick = {handleSubmit}>
            Post
          </button>
        </div>
        </form>
      </Dialog>
            
        </div>
    )
}

export default MessageSender
