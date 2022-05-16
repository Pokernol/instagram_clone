import React, { useState } from "react";
import Header from "./components/header/header";
import Story from "./components/Story/story";
import Post from "./components/post/post";
import Recomends from "./components/recomends/recomends";
import "./App.css";
//import Modal from "@material-ui/core/Modal";

function App() {
  const [posts, setPosts] = useState([

    {
      imgPerfil: "https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=2147483647&v=beta&t=OCAyyAl2Oaj5nbyvxltzVwjGHBg1RJlwI3zQlBZnvu4",
      username: "instituto.proa",
      caption: "venha fazer seu futuro conosco! #VEMPROPROAVEM",
      imageUrl:   "https://www.proa.org.br/wp-content/uploads/2021/12/banner1_home_ester_1080x1198px.jpg",
      Gostar: ".",
      comentarios: ".",
      compartilhar: ".",
      salvar: ".",
      emoji: ".",
    },{
      imgPerfil:"https://i.pinimg.com/564x/ff/72/f2/ff72f2b9086977f89d09306121bee527.jpg",
      username: "sasakkj.x",
      caption: "you promissed me.",
      imageUrl: "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      Gostar: ".",
      comentarios: ".",
      compartilhar: ".",
      salvar: ".",
      emoji: ".",
    },{
      imgPerfil:"https://pbs.twimg.com/profile_images/1378388174041387008/-Xy8-ZLG_400x400.jpg",
      username: "idiotmoose",
      caption: "when you have everything but what you need #fy #princecruel",
      imageUrl: "https://i.pinimg.com/564x/a9/0d/68/a90d68fee1b785ff6a7e48f5d50248f7.jpg",
      Gostar: ".",
      comentarios: ".",
      compartilhar: ".",
      salvar: ".",
      emoji: ".",
    },{
      imgPerfil:"https://i.pinimg.com/564x/26/8c/f9/268cf9cb5e82d458c9b98ae3caccc887.jpg",
      username: "Gustavo__amorim",
      caption: "As jogadas desse cara é muito foda #nba #basquete",
      imageUrl: "https://i.pinimg.com/564x/01/c9/e3/01c9e3a4568c84899527b51f6e76c360.jpg",
      Gostar: ".",
      comentarios: ".",
      compartilhar: ".",
      salvar: ".",
      emoji: ".",
    },{
      imgPerfil:"https://i.pinimg.com/564x/a9/62/9e/a9629e0cb780cf3b0f86369ec02cc741.jpg",
      username: "coisaspvchapado",
      caption: "por favor 😳👉👈 #fy #humor",
      imageUrl: "https://i.pinimg.com/564x/00/84/d2/0084d28d2e683898a6dbc34d31480f70.jpg",
      Gostar: ".",
      comentarios: ".",
      compartilhar: ".",
      salvar: ".",
      emoji: ".",
    },{
      imgPerfil:"https://i.pinimg.com/564x/17/5e/45/175e45a885c8ddbf259916acd131552a.jpg",
      username: "cauemoura",
      caption: "Sacramento ta massa demais rapaziada #rpg #sacramento #calango",
      imageUrl: "https://i.pinimg.com/564x/f4/09/dd/f409dd7cc13c3b581f335bdf8d82cf73.jpg",
      Gostar: ".",
      comentarios: ".",
      compartilhar: ".",
      salvar: ".",
      emoji: ".",
    },
  ]);
 
  return (

    <div className="app">
      <div className="app__Header"> 
      <Header/>
      </div>
      <Story/>
      <Recomends/>
      <div className="timeline">
          {posts.map((post) => (
            <Post
              imgPerfil={post.imgPerfil}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
              Gostar={post.Gostar}
              comentarios={post.comentarios}
              compartilhar={post.compartilhar}
              salvar={post.salvar}
              emoji={post.emoji}
            />
      ))}
    </div>
  </div>
  );
}

export default App;

