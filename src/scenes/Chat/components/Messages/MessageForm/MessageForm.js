import { compose, withState, withHandlers } from 'recompose'

import { MessageFormView } from './MessageFormView'
import { connect } from 'react-redux'
import { sendMessage } from '../../../../../modules/maessage/messageOperations'

const enhancer = compose(
  connect(null, { sendMessage }),
  withState('message', 'setMessage', ''),
  withHandlers({
    onChange: ({ setMessage }) => (e) => {
      setMessage(e.target.value)
    },

    onSubmit: ({ sendMessage, chatId, message, setMessage }) => (
      e,
    ) => {
      if (e.key === 'Enter') {
        sendMessage(chatId, message)
        setMessage('')
      }
    },
  }),
)

export const MessagesForm = enhancer(MessageFormView)
