import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from "@material-ui/icons/Flag"
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined"
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined"
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"
import {Avatar, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from "@material-ui/icons/Forum"
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {useStateValue} from '../StateProvider'
const Header = () => {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="header">
            <div className = "header_logo">
                <img 
                src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8Yd/IAcvIAb/ESdfKPtPcAa/EAbfGLsfeowvl3pvZgl/WCq/YcevLi7P3s8/7x9/7R4PyZvPi90/o/iPPb5/yzzPqSt/f5/P9Oj/RtoPU3hfPF2fupxvkxgvMsf/Pj7aGgAAAHa0lEQVR4nO2da3fqKhCGDSB4idfEWOOl//9fHt1td+1WCZN3BtJ1eL51Lat5EhiGS2A0ymQymUwmk8lkMplMJpPJZDKZTCaTyWR+F6vdpmqm2/14Mt5vp0212a1TXxIXb7umnF+0dc5prT7Q+vqX1Zd52ezeUl8gxKqa1MppZUzxDGOUdqqeVKvUF9qPzeRiX8r91LTHySb15RJ5q9rr0+mSu9O8Pum2+j0F9tQqp4LtviVVe0p96SGs9gXl6f0jWWyHXic3Lf3p/UC7dpdawsOptpjfDWUPQy2smxp8fneOQwytu4PtV/ueO86XqYX+YT1j9LthbDmotG6qecrnPUqdU2v9ZXd0vA/wE1cPpKiOmQvoN8rtU8tdWR61kN8NVyfPABqBGniPUVVaQe4Q+gQ7Sei3riVL6Bf6kKzTsTOyJfQLtUgUUyuZNuIJxiXJVLfyVfAbm6D1n9h4fjfFbWzBMq7gVTFy49+6yIKxW41JfMG4BXUcu4h+Kk5jCU7TCF4VmziCVSrBq2KU0Y1NtIb+CTpCdrOKk6m9wBTyOeqR8Qma2zTUJ7c5qYB/UQdpwRlXb0Jpa4/teNr84TydtO18Ya1zyj+bo4WbxTNPlFF2MWueVan1ptqW84tP0Yp2iZeao4xqW3bExIX39kgOMx4ZwoxenDujhd9QsCqO8UpoXEju5TUsnFhus8MroTsEjZ35DY2TGoDzBoAQTGjy7DcsjFA53cJlNDgMdhgWTiRBXcE9pvCsssuwUBKpTYvGUULa3G1Y8gtu0DBDaak7DQvLn4LXYJjRM8KPdRuqObfgCXyE5p3ya92GheVe0IB2KWh91wBDw/wQKzCQqpb0cwGG3P19tBYSs5AQQ96aiAZSRQkzgYa84XSO1kJiWAgypN42H0s0kNbEHwwyLDRfR7EE0xlN7e4EGvINgqM9e3KNCTMsFlyCDdqpIF9JoCFbg3EAH2FAmrys9uUdoV/MFGvgbpPu6M2txgv7tYz/g9BvNjyGcCHtqIZl/0WpTPP7B7RjqH3d1fUFuIE8xXSNdgzNxff10AClURyGFVpIve19iX2744im8OiFr1+BZkuKY/1CYNvkuQrPXMoMvH3kfPAJ+DCw7z7DX27x3BRuK3yG8PAWR3uBlqOr4TjN7QsFroY+wz1+++AB/hU+3eQxHOOzdXDitsFXP8kaOnQs4zz0ZwiHGjzQCBsqtKMPp93ihrSR2EfwUCptiAZThtUlsoYFaULkETQzjmBoMUOGxkLcEFu2AHcO5Q0dNs2GJ47yhlgneMtwCcKGGlvnxnEJ0obYyyaTX2CIJTW/wBBM26iGRj/ieRVkYp98XtOim+cGChia+jx95HX2f3ry6en0fCEZYouGqYY8c+uknUNAQ2JF4TGkjbKDpZQ4kMJjSEsVwbEoYovPY0hLpMBYShzE4DGkVX6wxSdm3jyGtLUtYNZ2ovWeeAxp4wrgUNQugeGats0U2HsiTo+yGBLHFdC5Gdr9ZDGk1X14Gpj2BgKL4ZRmeAR/jhbXWAxpk87wIkxa2sZiSFugBE+v0fILFkNa+O5ajtQJLUfkMCSGb7CxGI3eopdS4j3F354hLdLnMCTWC3wxBmn1LIchLe9meD2IdEs5DKPm3TdWlIrPYUjLMcBZC/IvMhjS8m44o7lBmedmMKTl3Sxv6VG6iAyGJ1IoZVlC+0Zpn95nj7Svs46mffg0KWczmkGQGNzUI84z5u0ePk1LStFlCh+gc4ieAU10WsTx7CCxHqwhQ8r2wRy7DjlDpkIKv14pZ8i32WDPPdbFDQsuQfBCxAxZlrF/gK0bEjPk3AAEeodUypAtztyAVpxLGfK+kY+8yy1kyLyFC3GGJoYh9/57wEOUMWTfLQrYF0PGkH8Lxf7LoUUMBTZS6h9ORQwF9qfp/5aehKHEHkOjVd+38kUMRfbdm/ZsMQQMZfb66r0LD7+h1H5tfV+25DeE33V6yb7XeAa7ody+iT1fLec2FN2Gttf+peyGogezND2qIrOh7B60vdp9XkMt0db/4EK+KFZDxfACfgf0/bw5DU0R4awycgrOaGjglRdBUKMNo6F0lPmCeDYCn2GssxGoZ8ywGcY8woN0RgmXYdzDdGYERSZDi71XQYZwVhCPYeyzgihnzbAYxj/v6XZmV0TDeFH0ntDzZnDDROeuXbObsJlT2FAVyc4jXQWd0Ika6kPKc3NDzrAEDZOeYTkKOocUMlSpzyEdjZad+x4ihq4ewsnOk46S2t9QBR1oEoHdxTtA1dfQDOZM5ytb37nxPQ2HdC73ldX89TarvQyNnQ2hBt6zqV9Vxx6Gxh6iDFcQqS7PT9UjGypbRzkFsAfV0+dINFT2kCgLDeI0dw/JKslQuXaoz++L5UT/E1iDDY1yZp/8tPgQqrm7byADDZXT7ZCL50/Wzdz9fZIBhten59oq2RHq/XirZu/2T1reYWiUtpfy9Mv0Plk2s3ftvDvwOP1eNr+i7r1kvWle93+qZjO0zCWTyWQymUwmk8lkMplMJpPJZDKZTCaT+R/zH0//dm2V/I2VAAAAAElFTkSuQmCC" 
                alt = "facebook_logo"
                />
            </div>
            <div className="header_input">
                <SearchIcon />
                <input placeholder='search Facebook' 
                type='text'/>
            </div>
            <div className="header_center">
                <div className = "header_option header_option--active">
                    <HomeIcon fontsize='large' />
                </div>
                <div className="header_option">
                    <FlagIcon fontsize='large'/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon
                    fontsize='large' />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon />
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src = {user?.photoURL}/>
                    <h4>{user?.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>    
            </div>
        </div>
    )
}

export default Header
