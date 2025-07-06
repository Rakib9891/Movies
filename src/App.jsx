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
            < Like title={"Iron Man"} pic={"https://wallpapercave.com/wp/wp3198150.jpg"} />
            < Like title={"Iron Man"} pic={"https://wallpapercave.com/wp/wp3198150.jpg"} />
            < Like title={"Iron Man"} pic={"https://wallpapercave.com/wp/wp3198150.jpg"} />
            < Like title={"Iron Man"} pic={"https://wallpapercave.com/wp/wp3198150.jpg"} />
            < Like title={"Iron Man"} pic={"https://wallpapercave.com/wp/wp3198150.jpg"} />
            < Like title={"Iron Man"} pic={"https://wallpapercave.com/wp/wp3198150.jpg"} />
  
      </div>
      </main>

     
    </div>
  )
}
export default App;