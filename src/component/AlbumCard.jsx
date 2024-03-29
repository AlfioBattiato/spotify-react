
import { useDispatch } from 'react-redux';
import {getSong} from '../redux/action/index'

function AlbumCard(props) {

  const dispatch=useDispatch()
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center cursor" id={props.songInfo.id}
      onClick={()=>dispatch(getSong(props.songInfo))}>
        <img className="img-fluid" src={props.songInfo.album.cover_medium} alt="track" />
        <p>
          Track: {props.songInfo.title.length < 16 ? props.songInfo.title : `${props.songInfo.title.substring(0, 16)}...`}
          <br />
          Artist: {props.songInfo.artist.name}
        </p>
      </div>
    );
  }
  
  export default AlbumCard;
  