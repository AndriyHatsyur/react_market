import React from 'react'
import { CellMeasurer } from 'react-virtualized'
import s from './messageItem.module.css'
import { timeDuration } from '../../../../../utils/common/timeDuration'

export const MessageItem = (messages, viewer, cache) => ({
  key,
  index,
  style,
  parent,
}) => {
  if (!messages[index]) return <div key={key}>Loading...</div>
  const className =
    messages[index].ownerId === viewer.id
      ? s.message
      : s.viewerMessage

  const classMessage =
    messages[index].ownerId === viewer.id
      ? s.messageContainer
      : s.viewerMessageContainer
  return (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}>
      {({ registerChild }) => (
        <div
          className={s.container}
          style={style}
          key={key}
          ref={registerChild}>
          <div className={classMessage}>
            <div className={className}>{messages[index].text}</div>
            <span>{timeDuration(messages[index].createdAt)}</span>
          </div>
        </div>
      )}
    </CellMeasurer>
  )
}
