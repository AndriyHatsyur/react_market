import React from 'react'
import s from './chats.module.css'
import { ChatsItemtView } from './components/ChatsItem/ChatsItemView'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { Messages } from './components/Messages/Messages'
import { ProfileHeader } from '../../components/Header/ProfileHeader/ProfileHeader'

export const ChatsView = ({ chats }) => {
  if (!chats) return <div>Loading...</div>

  return (
    <div className={s.container}>
      <ProfileHeader />
      <main>
        <div className={s.chatsList}>
          {chats.map((chat) => (
            <ChatsItemtView key={chat.id} {...{ chat }} />
          ))}
        </div>
        <div className={s.chat}>
          <Switch>
            <Route
              path={routes.chats.messages.path}
              component={Messages}
            />
          </Switch>
        </div>
      </main>
    </div>
  )
}
