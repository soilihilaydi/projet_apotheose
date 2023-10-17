import "./posts.scss"

export const Posts = () => {

  //TEMPORARY
  const posts = [
      {
        id: 1,
        name: "Mickeal Jackson",
        userId: 1,
        profilePic:
          "https://upload.wikimedia.org/wikipedia/commons/a/ad/Jackson_5_1974_%28Michael%29.jpg",
        desc: "Laissez la peinture sonique couler sur vos rythmes, mélodies et sons. L'Analog Heat +FX est une boîte de coloration et de manipulation sonore complète. Il vous offre une large palette de couleurs de possibilités de traitement. Réorganisez-les pour expérimenter et trouver votre propre flux de signal, avec vos propres timbres spéciaux. Quelle que soit la source et la destination. Améliorez, détruisez, enflammez et faites-le dériver – laissez votre son être votre toile.",
        img: "https://cdn.www.elektron.se/media/wysiwyg/analog-heat-fx-hero2_1.jpg",
      },
      {
        id: 2,
        name: "Mickeal Jackson",
        userId: 2,
        profilePic:
          "https://upload.wikimedia.org/wikipedia/commons/a/ad/Jackson_5_1974_%28Michael%29.jpg",
        desc: "C'est le cœur et la chaleur de cette machine. Ajoutez de la chaleur, de la profondeur et du caractère avec huit circuits de distorsion stéréo entièrement analogiques – allant d'un subtil boost clair à l'annihilation complète. Chaque circuit offre sa propre manière unique de traiter le son. Clean boost, saturation, enhancement, mid-drive, crunch, distorsion, fuzz harmonique ou gain élevé. Prêt à améliorer ou détruire votre sampler, boîte à rythmes, synthé, voix, batterie, bus master, calimba – quelle que soit la source qui vous vient à l'esprit.",
      },
    ];
    return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
