import { compose, withProps } from 'recompose'

import * as Yup from 'yup'
import { withRouter, generatePath } from 'react-router-dom'
import { MessageFormView } from './MessageFormView'
import { createChat } from './../../../../../modules/chat/chatOperations'
import { connect } from 'react-redux'
import { routes } from '../../../../../routes/routes'
import { sendMessage } from '../../../../../modules/maessage/messageOperations'

const enhancer = compose(
  connect(null, { createChat, sendMessage }),
  withRouter,
  withProps(({ history, product, createChat, sendMessage }) => ({
    formikProps: {
      initialValues: {
        message: '',
      },
      validationSchema: Yup.object({
        message: Yup.string()
          .min(2, 'Too Short!')
          .max(1000, 'Too Long!')
          .required('Is required'),
      }),
      onSubmit: async ({ message }) => {
        if (!product.chatId) {
          const chatId = await createChat(product.id, message)

          history.push(
            generatePath(routes.chats.messages.path, {
              id: chatId,
            }),
          )
        } else {
          sendMessage(product.chatId, message)
          history.push(
            generatePath(routes.chats.messages.path, {
              id: product.chatId,
            }),
          )
        }
      },
    },
  })),
)

export const MessageForm = enhancer(MessageFormView)
