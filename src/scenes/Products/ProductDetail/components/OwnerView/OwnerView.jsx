import React from 'react'
import s from './ownerView.module.css'
import { Icon } from '../../../../../components/Icons/Icon'
import { generatePath, Link } from 'react-router-dom'
import { routes } from './../../../../../routes/routes'

export const OwnerView = ({
  owner,
  openModal,
  saveUnsave,
  isSaved,
}) => {
  return (
    <div className={s.container}>
      <div className={s.ownerInfo}>
        <div>
          <img src={owner.avatar} alt={owner.fullname} />
          <Link
            to={generatePath(routes.userProducts.path, {
              id: owner.id,
            })}>
            <h3>{owner.fullName}</h3>
          </Link>
          <span>{owner.location}</span>
        </div>
      </div>

      <button className={s.chatBtn} onClick={openModal}>
        Chat with seller
      </button>
      <button className={s.favoriteBtn} onClick={saveUnsave}>
        {isSaved ? (
          <Icon name="heartLike" fill="#349A89" />
        ) : (
          <Icon name="heart" fill="#535353" />
        )}

        <span>Add to favorive</span>
      </button>
    </div>
  )
}
