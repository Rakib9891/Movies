import { useState } from "react";

function Like({title , pic}) {
    const [like, setlike] = useState(false);

    return (
         <div className="main-container">
            <div className="movie-container">
                <h2 className="title">{title}</h2>
                <img className="img" src={pic} alt="Thubnail" />
                <button className="btn" onClick={() =>setlike(!like)
                } >{like?"❤️":"🤍"}</button>
            </div>
    
        </div>

    )
}
export default Like;