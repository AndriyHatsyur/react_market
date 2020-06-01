import React from 'react'
import Modal from 'react-modal'
import { ChatSellerView } from './ChatSellerView'
import s from './chatSeller.module.css'

export const ChatSellerModal = ({
  isModal,
  closeModal,
  product,
  owner,
}) => {
  Modal.setAppElement('#root')
  return (
    <Modal
      isOpen={isModal}
      onRequestClose={closeModal}
      className={s.containerModal}
      overlayClassName={s.overlay}>
      <ChatSellerView {...{ product, owner, closeModal }} />
    </Modal>
  )
}
