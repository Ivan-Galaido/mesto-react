function ImagePopup({ name, card, isOpen, onClose, onOverlayClose }) {
  const { name: cardName, link } = card;

  const classNamesPopup = [
    'popup',
    `popup_type_${name}`,
    isOpen ? 'popup_opened' : ''
  ].join(' ').trim();

  return (
    <article
      className={classNamesPopup}
      aria-label="Окно просмотра изображения"
      onMouseDown={onOverlayClose}
    >
      <div className="popup__container popup__container_type_image">
        <button
          className="button button_close"
          aria-label="Закрыть"
          type="button"
          onClick={onClose}
        ></button>
        <figure className="figure">
          <img className="figure__image" src={link} alt={cardName} />
          <figcaption className="figure__caption">{cardName}</figcaption>
        </figure>
      </div>
    </article>
  );
}

export default ImagePopup;
