import React from "react";

const Favorites = (props) => {

    const allFavorites = props.favorites.map(favorite => {
        return (
            <div>{favorite}</div>
        )
    })

    return (
        <div>
            {allFavorites}
        </div>
    )
}

export default Favorites