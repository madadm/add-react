import {Link} from "react-router-dom";

import styles from './MainNavigation.module.css';
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {

    const favCtx = useContext(FavoritesContext);
    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>                    <li>
                        <Link to='/new-meetups'>New Meetups</Link>
                    </li>                    <li>
                    <Link to='/favorites'>
                        Favorites
                        <span className={styles.badge} >
                            {favCtx.totalFavorites}
                        </span>
                    </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;