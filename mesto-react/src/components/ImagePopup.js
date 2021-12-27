import closeIcon from '../image/Close_Icon.svg';

function ImagePopup() {    
    return (
        <div className="popup popup_type_image">
            <div className="image-in-full">
                <button className="popup__close" type="button">
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <figure className="image-in-full__content">
                    <img className="image-in-full__image" src="src" alt="alt" />
                    <figcaption className="image-in-full__caption" />
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup