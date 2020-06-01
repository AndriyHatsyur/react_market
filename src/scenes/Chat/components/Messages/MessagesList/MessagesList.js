import { compose, withProps } from 'recompose'
import { MessagesListView } from './MessagesListView'
import {
  isMessagesLoading,
  isMessgesHasNextPage,
} from '../../../../../modules/maessage/messageSelectors'
import { connect } from 'react-redux'
import { fetchMoreMessages } from '../../../../../modules/maessage/messageOperations'
import { getViewer } from '../../../../../modules/viewer/viewerSelectors'

const mapStateToProps = (state) => ({
  isLoading: isMessagesLoading(state),
  hasNextPage: isMessgesHasNextPage(state),
  viewer: getViewer(state),
})

const enhancer = compose(
  connect(mapStateToProps, { fetchMoreMessages }),
  withProps((props) => ({
    messagesCount: props.hasNextPage
      ? props.messages.length + 1
      : props.messages.length,
    fetchMessage: () => {
      const message = props.messages[0]

      if (message) {
        props.fetchMoreMessages(message.chatId, message.id)
      }
    },

    isItemLoaded: (index) =>
      !props.hasNextPage || index < props.messages.length,
  })),
)

export const MessagesList = enhancer(MessagesListView)
