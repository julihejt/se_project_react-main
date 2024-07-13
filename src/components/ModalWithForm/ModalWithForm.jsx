import "./ModalWithForm.css";

function ModalWithForm({
  closeActiveModal,
  children,
  buttonText,
  title,
  activeModal,
}) {
  return (
    <div className={`modal ${activeModal && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={closeActiveModal} className="modal__close" />
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
