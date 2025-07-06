import Like from "./Like";
import './App.css';
import Header from "./Header";
import "./index.css";
import Aside from "./Aside";

function App(){

  return (
    <div className="App">
      <Header />
      <main style={{display: "flex"}} className="main">
        <aside style={{width: "26%"}} className="aside">
          <Aside />
        </aside>
      <div className="like">
            < Like title={"The Avengers"} pic={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B6981BDF339764E6C56626C9DE0820CEF297EAF069F62F244E0F50061219F069/scale?width=440&aspectRatio=1.78&format=webp"} />
            < Like title={"Thor"} pic={"https://i.pinimg.com/originals/52/3f/2c/523f2cb401311665564bb4681938d98b.jpg"} />
            < Like title={"Captain America"} pic={"https://wallpapercave.com/wp/wp3775641.jpg"} />
            < Like title={"Mad Max: Fury Road"} pic={"https://wallpapercat.com/w/full/d/9/9/329676-1920x1080-desktop-full-hd-mad-max-fury-road-background.jpg"} />
            < Like title={"Iron-Man 2"} pic={"https://wallpapercat.com/w/full/c/6/e/320077-2560x1440-desktop-hd-iron-man-wallpaper-image.jpg"} />
            < Like title={"Bullet Train"} pic={"https://www.ecranlarge.com/content/uploads/2022/08/bullet-train-affiche-1442748-320x170.jpg"} />
            < Like title={"Deadpool & Wolverine"} pic={"https://wallpapercat.com/w/full/6/0/c/5822914-2880x1620-desktop-hd-deadpool-wolverine-comics-background-image.jpg"} />
            < Like title={"Iron-Man 3"} pic={"https://wallpaper.forfun.com/fetch/97/970ef0b7721e8a279b4b0d2f1fffb570.jpeg"} />
            < Like title={"Spider-Man"} pic={"https://m.media-amazon.com/images/M/MV5BNzE5NTk5NDQ0NV5BMl5BanBnXkFtZTgwNjU3ODIxMjI@.jpg"} />
            < Like title={"Iron-Man"} pic={"https://wallpapercave.com/wp/wp3198150.jpg"} />
  
      </div>
      </main>

     
    </div>
  )
}
export default App;