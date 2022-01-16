import React, {useEffect} from "react";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../constexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)
    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards] = React.useState([])

    useEffect(() => {
        Promise.all([api.getInitialCards(), api.getApiUserInfo()])
            .then(([ cards, user ]) => {
                setCards(cards)
                setCurrentUser(user)
            })
            .catch((err) => {
                console.log(`Данные не загрузились. Ошибка: ${err}`)
            })
    }, [])

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        if (!isLiked) {
            api.addLike(card._id).then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(`Что-то пошло не так, Like не поставился. Ошибка: ${err}`)
            });
        } else {
            api.deleteLike(card._id).then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(`Что-то пошло не так, Like не убрался. Ошибка: ${err}`)
            })
        }
    }

    function handleDeleteCard(card) {
        api.deleteCard(card).then(() => {
            setCards((items) => items.filter((c) => c._id !== card._id && c))
        })
        .catch((err) => {
            console.log(`Что-то пошло не так, карточка не удалилась. Ошибка: ${err}`)
        })
    }

    function handleUpdateUser(data) {
        api.patchUserInfo(data)
            .then((newUser) => {
                setCurrentUser(newUser)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(`Данные не удалось отправить на сервер. Ошибка: ${err}`)
            })
    }

    function handleUpdateAvatar(data) {
        api.changeAvatar(data)
            .then((newAvatar) => {
              setCurrentUser(newAvatar)
              closeAllPopups()
            })
            .catch((err) => {
                console.log(`Не удалось сменить аватар. Ошибка: ${err}`)
            })
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleCardClick (card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setSelectedCard(null)
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="body">
                <div className="page">
                    <Header />
                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                        cards={cards}
                        onCardLike={handleCardLike}
                        onDeleteCard={handleDeleteCard}
                    />
                    <Footer />
                </div>

                <EditProfilePopup 
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onSubmit={handleUpdateUser}
                />

                <PopupWithForm
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    title={'Новое место'} 
                    name={'form_add'}>
                        <input type="text" name="name" className="popup__input popup__subtitle" 
                        id="profile_name" placeholder="Название" minLength="2" maxLength="30" required />
                        <span className="popup__error" id="input-name-adding-error"/>
                        <input type="url" name="link" className="popup__input popup__subtitle" 
                        id="input-link" placeholder="Ссылка на картинку" required />
                        <span className="popup__error" id="input-link-error"/>
                </PopupWithForm>

                <EditAvatarPopup 
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups} 
                    onSubmit={handleUpdateAvatar}
                />

                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />

                {/*<div className="popup popup_type_delete">
                    <div className="popup__container">
                        <button className="popup__close" type="button">
                            <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                        </button>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <form className="popup__form" name="form_delete" novalidate>
                            <button type="submit" className="popup__button">Да</button>
                        </form>
                    </div>
                </div>*/}

            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
