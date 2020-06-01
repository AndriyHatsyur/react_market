import React from 'react'
import s from './messages.module.css'
import { MessagesForm } from './MessageForm/MessageForm'
import { priceFormatter } from './../../../../utils/common/priceFormatter'
import { Icon } from './../../../../components/Icons/Icon'
import { Link, generatePath } from 'react-router-dom'
import { routes } from './../../../../routes/routes'
import { MessagesList } from './MessagesList/MessagesList'

export const MessagesView = ({ match, messages, chat }) => {
  return (
    <div className={s.container}>
      {chat && (
        <div className={s.chatInfo}>
          <div className={s.userInfo}>
            <img
              src={chat.participant.avatar}
              alt={chat.participant.fullName}
            />
            <span>{chat.participant.fullName}</span>
          </div>
          <div className={s.productInfo}>
            <img
              src={chat.product.photos && chat.product.photos[0]}
              alt={chat.product.title}
            />
            <div className={s.productTitle}>
              <span>{chat.product.title}</span>
              <span>{priceFormatter.format(chat.product.price)}</span>
            </div>
            <Link
              to={generatePath(routes.products.detail.path, {
                id: chat.product.id,
              })}>
              <Icon name="link" fill="#B4B4B4" />
            </Link>
          </div>
        </div>
      )}
      <MessagesList messages={messages} />
      <MessagesForm chatId={match.params.id} />
    </div>
  )
}
