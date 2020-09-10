import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat.js";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
//import { IconButton } from "@material-ui/core";
import { Avatar, IconButton} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://cdn.mos.cms.futurecdn.net/ExZhhoFQYwDYSmXiYev25G.jpg" />
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
                    <div className="sidebar__search">
                        <div className="sidebar__searchContainer">
                            <SearchOutlined />
                            <input placeholder="Search or start new chat" type="text" />
                        </div>

                    </div>
                    <div className="sidebar__chats">
                        <SidebarChat />
                        <SidebarChat />
                        <SidebarChat />
                        <SidebarChat />
                    </div>

        </div>

    )
}


export default Sidebar;
