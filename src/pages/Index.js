import CardSong from "../component/CardSong";
import "./Home.css";
import data from "../data/data.js";

function Index() {
    return ( 
        <div className="card-song">
            {data.map((item) => {
                return (
                    <CardSong
                    url= {item.album.images[0].url}
                    name={item.album.name}
                    artists={item.album.artists[0].name}
                    alt="CardSong="
                    />
                );
            
            })}

            

        </div>
    );
}

export default Index;