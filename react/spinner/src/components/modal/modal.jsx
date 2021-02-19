import React from "react";

// CSS
import "./modal.scss";

const ModalInfo = ({modalInfo}) => {
  return(
    <a href="https://unico.ge/cart" className={"spinner-modal__info"}>
      {modalInfo}
    </a>
  )
}

const Modal = ({giftInfo, closeModal, redirectToCart}) => {

  if(giftInfo === null) {
    return <span></span>
  }

  const {product_id, img, title} = giftInfo;
  const modalTitle = product_id > 0 ? `თქვენ მოიგეთ - ${title}` : "სამწუხაროდ თქვენ ვერაფერი მოიგეთ";
  const modalInfo = product_id > 0 ? `პრიზის სანახავად გადადით კალათაში` : null;
  return(
    <div className={"spinner-modal__container"}>
      <div className={"spinner-modal col-md-3 col-10"}>
      <span onClick={closeModal} className={"spinner-modal__close"}>&times;</span>
        <div className={"spinner-modal__head"}>
          <h3 className={"spinner-modal__title"}>{modalTitle}</h3>
        </div>
        <div className={"spinner-modal__body"}>
          <div className={"spinner-modal__img--container"}>
            <img src={img} alt={modalTitle} className={"spinner-modal__img"} />
          </div>
          {
            modalInfo !== null ? <ModalInfo modalInfo={modalInfo} /> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Modal;