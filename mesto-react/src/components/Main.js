import '../index.css';
import api from "../utils/Api";
import Card from "./Card";
import React, {useEffect} from "react";
import editIcon from '../image/Edit.svg';
import addButtonIcon from '../image/Add_button.svg';

function Main(props) {

    const [userInfo, setUserInfo] = React.useState({})
    const [cards, setCards] = React.useState([])
    useEffect(() => {
        Promise.all([api.getInitialCards(), api.getApiUserInfo()])
        .then(([ cards, userData ]) => {
            setUserInfo(userData);
            //userId = userData._id;
    
            setCards(cards);
        })
        .catch((err) => {
            console.log(`Карточки не отобразились. Произошла ошибка: ${err}`);
        });
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container">
                    <button className="profile__edit-avatar" type="button" onClick={props.onEditAvatar}></button>
                    <img className="profile__avatar" src={userInfo.avatar} alt={userInfo.name} />
                </div>

                <div className="profile__info">
                    <h1 className="profile__title">{userInfo.name}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                        <img className="profile__pencil" src={editIcon} alt="Элемент редактирования" />
                    </button>
                    <p className="profile__subtitle">{userInfo.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
                    <img className="profile__plus" src={addButtonIcon} alt="Знак - добавить" />
                </button>
            </section>

            <section className="elements" aria-label="Фотоальбом">
                {cards.map((cards, id) => (
                    <Card
                    key={id}
                    card={cards}
                    link={cards.link}
                    name={cards.name}
                    likes={cards.likes.length}
                    onCardClick={props.onCardClick}
                />
                ))}
            </section>
        </main>
    );
}

export default Main;
