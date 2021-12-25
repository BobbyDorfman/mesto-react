import '../index.css';
import editIcon from '../image/Edit.svg';
import addButtonIcon from '../image/Add_button.svg';

function Main() {
    return (
        <main>
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
        </main>
    );
}

export default Main;
