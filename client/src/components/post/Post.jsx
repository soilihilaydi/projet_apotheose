
import "./post.scss"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "@mui/material";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
  makeRequest.get("/likes?postId=" + post.id).then((res) => {
    return res.data;
  })
);

const queryClient = useQueryClient();

const mutation = useMutation(
  (liked) => {
    if (liked) return makeRequest.delete("/likes?postId=" + post.id);
    return makeRequest.post("/likes", { postId: post.id });
  },
  {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["likes"]);
    },
  }
);




const handleLike = () => {
  mutation.mutate(data.includes(currentUser.id));
};





  return (
    <div className="post">
     <div className="container">
        <div className="user">
          <div className="userInfo">
          <img src={post.profilePic} alt="image du profil" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
              <span>{post.name}</span>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
              </Link>
            </div>
          </div>
          <MoreHorizIcon/>
        </div>
        <div className="content">
        <p>{post.desc}</p>
          <img src={"/upload/" + post.img} alt="image du multi effet d'elektron" />
        </div>
        <div className="info">
        <div className="item">
            {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon
                style={{ color: "red" }}
                onClick={handleLike}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {data?.length} J'aime
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
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
