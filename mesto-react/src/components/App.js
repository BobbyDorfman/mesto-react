import '../index.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import logoHeader from '../image/Vector.svg';
import editIcon from '../image/Edit.svg';
import addButtonIcon from '../image/Add_button.svg';
import closeIcon from '../image/Close_Icon.svg';
import deleteIcon from '../image/delete_2.svg';
import likeIcon from '../image/Like.svg';

function App() {
    return (
    <div className="body">
        <div className="page">
            <Header />
            {/*<header className="header">
                <img className="header__logo" src={logoHeader} alt="Логотип"/>
            </header>*/}

            {/*<main>
                <section className="profile">
                    <div className="profile__avatar-container">
                        <button className="profile__edit-avatar" type="button"></button>
                        <img className="profile__avatar" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="Аватар профиля" />
                    </div>

                    <div className="profile__info">
                        <h1 className="profile__title"></h1>
                        <button className="profile__edit-button" type="button">
                            <img className="profile__pencil" src={editIcon} alt="Элемент редактирования" />
                        </button>
                        <p className="profile__subtitle">Идет загрузка...</p>
                    </div>
                    <button className="profile__add-button" type="button">
                        <img className="profile__plus" src={addButtonIcon} alt="Знак - добавить" />
                    </button>
                </section>

                <section className="elements" aria-label="Фотоальбом"></section>
            </main>*/}
            <Main />

            {/*<footer className="footer">
                <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
            </footer>*/}
            <Footer />
        </div>

        <div className="popup popup_type_edit">
            <div className="edit-form">
                <button className="popup__close edit-form__close-icon" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 className="edit-form__title">Редактировать профиль</h2>
                <form classname="popup__form popup__form_type_edit" name="form_edit" noValidate>
                    <input type="text" name="name_profile" classname="popup__input edit-form__name" 
                    id="input-name" minLength={2} maxLength={40} required />
                    <span classname="popup__error" id="input-name-error" />
                    <input type="text" name="type_of_profession" classname="popup__input edit-form__subtitle" 
                    id="input-subtitle" minLength={2} maxLength={200} required />
                    <span classname="popup__error" id="input-subtitle-error" />
                    <button type="submit" classname="popup__button edit-form__submit-button">Сохранить</button>
                </form>
            </div>
        </div>

        <div class="popup popup_type_add">
            <div class="adding-cards">
                <button class="popup__close adding-cards__close-icon" type="button">
                    <img class="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 class="adding-cards__title">Новое место</h2>
                <form class="popup__form popup__form_type_adding" name="form_add" novalidate>
                    <input class="popup__input adding-cards__subtitle adding-cards__subtitle_name" required 
                    minlength={2} maxlength={30} id="input-name-adding" type="text" name="name" placeholder="Название" />
                    <span class="popup__error" id="input-name-adding-error"></span>
                    <input class="popup__input adding-cards__subtitle adding-cards__subtitle_link" required 
                    type="url" name="link" id="input-link" placeholder="Ссылка на картинку" />
                    <span class="popup__error" id="input-link-error"></span>
                    <button type="submit" class="popup__button adding-cards__submit-button">Создать</button>
                </form>
            </div>
        </div>

        <div class="popup popup_type_image">
            <div class="image-in-full">
                <button class="popup__close image-in-full__close-icon" type="button">
                    <img class="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <figure class="image-in-full__content">
                    <img class="image-in-full__image" src="src" alt="alt" />
                    <figcaption class="image-in-full__caption"></figcaption>
                </figure>
                </div>
            </div>
        <div class="popup popup_type_delete">
            <div class="delete-cards">
                <button class="popup__close delete-cards__close-icon" type="button">
                    <img class="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 class="delete-cards__title">Вы уверены?</h2>
                <form class="popup__form popup__form_type_delete" name="form_delete" novalidate>
                    <button type="submit" class="popup__button delete-cards__submit-button">Да</button>
                </form>
            </div>
        </div>
        <div class="popup popup_type_avatar">
            <div class="edit-avatar">
                <button class="popup__close edit-avatar__close-icon" type="button">
                    <img class="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <h2 class="edit-avatar__title">Обновить аватар</h2>
                <form class="popup__form popup__form_type_avatar" name="form_avatar" novalidate>
                    <input class="popup__input edit-avatar__subtitle edit-avatar__subtitle_name" id="input-name-avatar" 
                    type="url" name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
                    <span class="popup__error" id="input-name-avatar-error"></span>
                    <button type="submit" class="popup__button">Создать</button>
                </form>
            </div>
        </div>

        <template id="card-template">
            <article class="element">
                <button class="element__button-delete" type="button">
                    <img class="element__delete" src={deleteIcon} alt="Иконка удаления карточки" />
                </button>
                <img class="element__image" src="src" alt="alt" />
                <div class="element__down">
                    <h2 class="element__title"></h2>
                    <div class="element__likes">
                        <button class="element__button" type="button">
                            <img class="element__like" src={likeIcon} alt="Лайк" />
                        </button>
                        <span class="element__like-counter">0</span>
                    </div>
                </div>
            </article>
        </template>

    </div>
  );
}

export default App;
