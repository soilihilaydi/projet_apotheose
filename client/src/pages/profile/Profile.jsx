import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";


const Profile = () => {

  const userId = parseInt(useLocation().pathname.split("/")[6]);

  const { isLoading, error, data } = useQuery(["user"], () =>
  makeRequest.get("/users/find/" + userId).then((res) => {
    return res.data;
  })
);

console.log(data)




  return (
    <div className="profile">
                <div className="images">
            {data && data.coverPic && (
              <img src={"/upload/"+data.coverPic} alt="" className="cover" />
            )}
            {data && data.profilePic && (
              <img src={"/upload/"+data.profilePic} alt="" className="profilePic" />
            )}
          </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Mickeal Jackson</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Ardeche</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Mickeal Jackson.electronik-Musik</span>
              </div>
            </div>
            <button>Suivre</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;