import { compose, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'

import { fetchMessage } from './../../../../modules/maessage/messageOperations'
import { MessagesView } from './MessagesView'
import { getMessagesSelector } from './../../../../modules/maessage/messageSelectors'
import { connect } from 'react-redux'
import { getChatSelector } from '../../../../modules/chat/chatSelectors'

const mapStateToProps = (state, props) => ({
  messages: getMessagesSelector(state, props.match.params.id),
  chat: getChatSelector(state, props.match.params.id),
})

const enhancer = compose(
  withRouter,
  connect(mapStateToProps, { fetchMessage }),
  lifecycle({
    componentDidMount() {
      this.props.fetchMessage(this.props.match.params.id)
    },
    componentDidUpdate(prevProps) {
      if (this.props.match.params.id !== prevProps.match.params.id) {
        this.props.fetchMessage(this.props.match.params.id)
      }
    },
  }),
)

export const Messages = enhancer(MessagesView)
