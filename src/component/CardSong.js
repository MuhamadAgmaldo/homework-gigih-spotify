import './CardSong.css';

function CardSong(props) {
    return (
        <div className="Card">
            <img src={props.url} alt={props.alt} />
            <div className="text-component" >
                <p>{props.name}</p>
                <p>{props.artists}</p>
            </div>
            <div className='button-component'>
                <button type="button" onclick="alert(Hello World!')">Select</button>
            </div>
        </div>
    );
}

export default CardSong;