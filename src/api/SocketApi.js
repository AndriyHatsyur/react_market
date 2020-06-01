import io from 'socket.io-client'

class SocketApi {
  init(token) {
    this.socket = io('http://144.91.112.180:3000', {
      query: {
        token,
      },
    })

    this.socket.on('connect', function () {
      console.log('connect!!!!')
    })
  }
  handleMessages(handle) {
    this.socket.on('message', handle)
  }
}

export default new SocketApi()
