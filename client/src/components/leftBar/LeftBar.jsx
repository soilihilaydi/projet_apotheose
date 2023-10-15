import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";


const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Jackson_5_1974_%28Michael%29.jpg" alt="photo de mickeal jackson" />
          <span>Mickeal jackson</span>
          </div>
          <div className="item">
            <img src={Friends} alt="image des amis" />
            <span>Amis</span>
          </div>
          <div className="item">
            <img src={Groups} alt="image de groupes" />
            <span>Groupes</span>
          </div>
          <div className="item">
            <img src={Watch} alt="image des videos" />
            <span>Regarder</span>
          </div>
          <div className="item">
            <img src={Memories} alt="image de rappel" />
            <span>Rappel</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Vos raccourcis</span>
          <div className="item">
            <img src={Events} alt="image des  événements" />
            <span>Evénements</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="image des galeries" />
            <span>Galerie</span>
          </div>
          <div className="item">
            <img src={Videos} alt="image des videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="image des messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Autres</span>
          <div className="item">
            <img src={Tutorials} alt="image proposant des tutoriels" />
            <span>Tutoriels</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          <div className="item">
            <img src={Courses} alt="images proposant des cours" />
            <span>Cours</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default LeftBar;