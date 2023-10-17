import "./stories.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)


   //TEMPORARY
   const stories = [
    {
      id: 1,
      name: "aretha Franklin",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Aretha_Franklin_1968.jpg",
    },
    {
      id: 2,
      name: "franck sinatra",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Frank_Sinatra_by_Gottlieb_c1947-_2.jpg",
    },
    {
      id: 3,
      name: "elvis presley",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg",
    },
    {
      id: 4,
      name: "Prince",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Prince_at_Coachella_%28cropped%29.jpg",
    },
  ];
  return (
    <div className="stories">
       <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}


export default Stories;