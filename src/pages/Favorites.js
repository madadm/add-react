import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites(){

    let content;
    const favCtx = useContext(FavoritesContext);

    if(favCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding some?</p>
    }
    else{
        content = <MeetupList meetups={favCtx.favorites }/>
    }


    return (
        <section>
            <h1>Favorites</h1>
            {content}
        </section>
    );
}

export default Favorites;