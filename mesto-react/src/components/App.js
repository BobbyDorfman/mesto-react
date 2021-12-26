import '../index.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import closeIcon from '../image/Close_Icon.svg';
import deleteIcon from '../image/delete_2.svg';
import likeIcon from '../image/Like.svg';

function App() {
    function handleEditAvatarClick() {
        document.querySelector('.popup_type_avatar').classList.add('popup_is-opened');
    }
    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('popup_is-opened');
    }
    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add').classList.add('popup_is-opened');
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

        <div className="popup popup_type_edit">
            <div className="edit-form">
                <button className="popup__close edit-form__close-icon" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 className="edit-form__title">Редактировать профиль</h2>
                <form className="popup__form popup__form_type_edit" name="form_edit" noValidate>
                    <input type="text" name="name_profile" className="popup__input edit-form__name" 
                    id="input-name" minLength={2} maxLength={40} required />
                    <span className="popup__error" id="input-name-error" />
                    <input type="text" name="type_of_profession" className="popup__input edit-form__subtitle" 
                    id="input-subtitle" minLength={2} maxLength={200} required />
                    <span className="popup__error" id="input-subtitle-error" />
                    <button type="submit" className="popup__button edit-form__submit-button">Сохранить</button>
                </form>
            </div>
        </div>

        <div className="popup popup_type_add">
            <div className="adding-cards">
                <button className="popup__close adding-cards__close-icon" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 className="adding-cards__title">Новое место</h2>
                <form className="popup__form popup__form_type_adding" name="form_add" novalidate>
                    <input className="popup__input adding-cards__subtitle adding-cards__subtitle_name" required 
                    minlength={2} maxlength={30} id="input-name-adding" type="text" name="name" placeholder="Название" />
                    <span className="popup__error" id="input-name-adding-error"></span>
                    <input className="popup__input adding-cards__subtitle adding-cards__subtitle_link" required 
                    type="url" name="link" id="input-link" placeholder="Ссылка на картинку" />
                    <span className="popup__error" id="input-link-error"></span>
                    <button type="submit" className="popup__button adding-cards__submit-button">Создать</button>
                </form>
            </div>
        </div>

        <div className="popup popup_type_image">
            <div className="image-in-full">
                <button className="popup__close image-in-full__close-icon" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <figure className="image-in-full__content">
                    <img className="image-in-full__image" src="src" alt="alt" />
                    <figcaption className="image-in-full__caption"></figcaption>
                </figure>
            </div>
        </div>

        <div className="popup popup_type_delete">
            <div className="delete-cards">
                <button className="popup__close delete-cards__close-icon" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 className="delete-cards__title">Вы уверены?</h2>
                <form className="popup__form popup__form_type_delete" name="form_delete" novalidate>
                    <button type="submit" className="popup__button delete-cards__submit-button">Да</button>
                </form>
            </div>
        </div>

        <div className="popup popup_type_avatar">
            <div className="edit-avatar">
                <button className="popup__close edit-avatar__close-icon" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 className="edit-avatar__title">Обновить аватар</h2>
                <form className="popup__form popup__form_type_avatar" name="form_avatar" novalidate>
                    <input className="popup__input edit-avatar__subtitle edit-avatar__subtitle_name" id="input-name-avatar" 
                    type="url" name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
                    <span className="popup__error" id="input-name-avatar-error"></span>
                    <button type="submit" className="popup__button">Создать</button>
                </form>
            </div>
        </div>

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
