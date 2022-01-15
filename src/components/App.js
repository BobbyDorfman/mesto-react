import React, {useEffect} from "react";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../constexts/CurrentUserContext";

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
                setCurrentUser(user)
                setCards(cards)
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

    /*function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id)

        if (!isLiked) {
            api.addCardLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log(`Не получилось поставить лайк: ${err}`)
                })
        } else {
            api.deleteCardLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log(`Не получилось дизлайкнуть: ${err}`)
                })
        }
    }*/

    function handleDeleteCard(card) {
        api.deleteCard(card).then(() => {
            setCards((items) => items.filter((c) => c._id !== card._id && c))
        })
        .catch((err) => {
            console.log(`Что-то пошло не так, карточка не удалилась. Ошибка: ${err}`)
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

            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                title={'Редактировать профиль'} 
                name={'form_edit'}>
                    <input type="text" name="name_profile" className="popup__input popup__subtitle" 
                    id="profile_name" placeholder="Имя" minLength="2" maxLength="40" required />
                    <span className="popup__error" id="input-name-error"/>
                    <input type="text" name="type_of_profession" className="popup__input popup__subtitle" 
                    id="input-subtitle" placeholder="Профессиональная деятельность" minLength="2" maxLength="200"
                    required />
                    <span className="popup__error" id="input-subtitle-error"/>
            </PopupWithForm>

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

            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                title={'Обновить аватар'} 
                name={'form_avatar'}>
                    <input type="url" name="avatar" className="popup__input popup__subtitle" 
                    id="input-name-avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
                    <span className="popup__error" id="input-name-avatar-error"/>
            </PopupWithForm>

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
