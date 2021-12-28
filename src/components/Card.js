import React from "react";
import deleteIcon from '../image/delete_2.svg';
import likeIcon from '../image/Like.svg';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
    }

    return(
        <article className="element">
            <button className="element__button-delete" type="button">
                <img className="element__delete" src={deleteIcon} alt="Иконка удаления карточки" />
            </button>
            <img className="element__image" src={props.link} alt={props.name} onClick={handleClick}/>
            <div className="element__down">
                <h2 className="element__title">{props.name}</h2>
                <div className="element__likes">
                    <button className="element__button" type="button">
                        <img className="element__like" src={likeIcon} alt="Лайк" />
                    </button>
                    <span className="element__like-counter">{props.likes}</span>
                </div>
            </div>
        </article>
    )
}

export default Card