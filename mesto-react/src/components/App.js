import React from "react";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";

import closeIcon from '../image/Close_Icon.svg';
import deleteIcon from '../image/delete_2.svg';
import likeIcon from '../image/Like.svg';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState()
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState()
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState()

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
    }

    return (
    <div className="body">
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
            />
            <Footer />
        </div>

        <PopupWithForm 
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            title={'Редактировать профиль'} 
            name={'form_edit'}
            children={(
                <>
                    <input type="text" name="name_profile" className="popup__input popup__subtitle" 
                    id="profile_name" placeholder="Имя" minLength="2" maxLength="40" required />
                    <span className="popup__error" id="input-name-error"/>
                    <input type="text" name="type_of_profession" className="popup__input popup__subtitle" 
                    id="input-subtitle" placeholder="Профессиональная деятельность" minLength="2" maxLength="200"
                    required />
                    <span className="popup__error" id="input-subtitle-error"/>
                </>
            )}
        />

        <PopupWithForm 
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            title={'Новое место'} 
            name={'form_add'}
            children={(
                <>
                    <input type="text" name="name" className="popup__input popup__subtitle" 
                    id="profile_name" placeholder="Название" minLength="2" maxLength="30" required />
                    <span className="popup__error" id="input-name-adding-error"/>
                    <input type="url" name="link" className="popup__input popup__subtitle" 
                    id="input-link" placeholder="Ссылка на картинку" required />
                    <span className="popup__error" id="input-link-error"/>
                </>
            )}
        />

        <PopupWithForm 
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            title={'Обновить аватар'} 
            name={'form_avatar'}
            children={(
                <>
                    <input type="url" name="avatar" className="popup__input popup__subtitle" 
                    id="input-name-avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
                    <span className="popup__error" id="input-name-avatar-error"/>
                </>
            )}
        />

        {/*<div className="popup popup_type_edit">
            <div className="popup__container">
                <button className="popup__close" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" name="form_edit" noValidate>
                    <input type="text" name="name_profile" className="popup__input popup__subtitle" 
                    id="input-name" minLength={2} maxLength={40} required />
                    <span className="popup__error" id="input-name-error" />
                    <input type="text" name="type_of_profession" className="popup__input popup__subtitle" 
                    id="input-subtitle" minLength={2} maxLength={200} required />
                    <span className="popup__error" id="input-subtitle-error" />
                    <button type="submit" className="popup__button">Сохранить</button>
                </form>
            </div>
        </div>*/}

        {/*<div className="popup popup_type_add">
            <div className="popup__container">
                <button className="popup__close" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form" name="form_add" novalidate>
                    <input className="popup__input popup__subtitle" required 
                    minlength={2} maxlength={30} id="input-name-adding" type="text" name="name" placeholder="Название" />
                    <span className="popup__error" id="input-name-adding-error"></span>
                    <input className="popup__input popup__subtitle" required 
                    type="url" name="link" id="input-link" placeholder="Ссылка на картинку" />
                    <span className="popup__error" id="input-link-error"></span>
                    <button type="submit" className="popup__button">Создать</button>
                </form>
            </div>
        </div>*/}

        <div className="popup popup_type_image">
            <div className="image-in-full">
                <button className="popup__close" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <figure className="image-in-full__content">
                    <img className="image-in-full__image" src="src" alt="alt" />
                    <figcaption className="image-in-full__caption"></figcaption>
                </figure>
            </div>
        </div>

        <div className="popup popup_type_delete">
            <div className="popup__container">
                <button className="popup__close" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 className="popup__title">Вы уверены?</h2>
                <form className="popup__form" name="form_delete" novalidate>
                    <button type="submit" className="popup__button">Да</button>
                </form>
            </div>
        </div>

        {/*<div className="popup popup_type_avatar">
            <div className="popup__container">
                <button className="popup__close" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="popup__form" name="form_avatar" novalidate>
                    <input className="popup__input popup__subtitle" id="input-name-avatar" 
                    type="url" name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
                    <span className="popup__error" id="input-name-avatar-error"></span>
                    <button type="submit" className="popup__button">Создать</button>
                </form>
            </div>
        </div>*/}

        <template id="card-template">
            <article className="element">
                <button className="element__button-delete" type="button">
                    <img className="element__delete" src={deleteIcon} alt="Иконка удаления карточки" />
                </button>
                <img className="element__image" src="src" alt="alt" />
                <div className="element__down">
                    <h2 className="element__title"></h2>
                    <div className="element__likes">
                        <button className="element__button" type="button">
                            <img className="element__like" src={likeIcon} alt="Лайк" />
                        </button>
                        <span className="element__like-counter">0</span>
                    </div>
                </div>
            </article>
        </template>

    </div>
  );
}

export default App;
