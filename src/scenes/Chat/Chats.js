import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { ChatsView } from './ChatsView'
import { fetchChats } from './../../modules/chat/chatOperations'
import { getChatsSelector } from './../../modules/chat/chatSelectors'

const mapStateToProps = (state) => ({
  chats: getChatsSelector(state),
})

const enhancer = compose(
  connect(mapStateToProps, { fetchChats }),
  lifecycle({
    componentDidMount() {
      this.props.fetchChats()
    },
  }),
)

export const Chats = enhancer(ChatsView)
