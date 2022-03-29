import React from "react";
import '../blog.css';
const Post = (props) => {
    return ( 
        <div className="post">
           <div className="postinfo">
           <div className="postdate">{props.date}</div>
           <div className="posttitle">
               {props.title}
           </div>     
           <div className="postcontent">
           {props.content}
           </div>
           </div>
           <div className="postpic">
               <img src="https://picsum.photos/400/300?random=6" className="postimage"/>
           </div>
        </div>
     );
}
 
export default Post;