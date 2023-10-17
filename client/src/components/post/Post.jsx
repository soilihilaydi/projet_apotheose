
import "./post.scss"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "@mui/material";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false);

     //TEMPORARY
  const liked = false;



  return (
    <div className="post">
     <div className="container">
        <div className="user">
          <div className="userInfo">
          <img src={post.profilePic} alt="image du profil" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
              <span>{post.name}</span>
              <span className="date"> il y a 1 minute</span>
              </Link>
            </div>
          </div>
          <MoreHorizIcon/>
        </div>
        <div className="content">
        <p>{post.desc}</p>
          <img src={post.img} alt="image du multi effet d'elektron" />
        </div>
        <div className="info">
          <div className="item">
          {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          12 J'aime
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon />
          12 Commentaires
          </div>
          <div className="item">
          <ShareOutlinedIcon />
          Partager
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
