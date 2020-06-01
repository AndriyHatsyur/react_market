import React from 'react'
import { MessageItem } from '../MessageItem/MessageItem'
import {
  InfiniteLoader,
  List,
  AutoSizer,
  CellMeasurerCache,
} from 'react-virtualized'

export const MessagesListView = React.memo(
  ({ messages, messagesCount, fetchMessage, viewer }) => {
    const isRowLoaded = ({ index }) => !!messages[index]

    const cache = new CellMeasurerCache({
      defaultHeight: 100,
      minHeight: 100,
      fixedWidth: true,
    })

    return (
      <InfiniteLoader
        threshold={messagesCount - 5}
        isRowLoaded={isRowLoaded}
        rowCount={messagesCount}
        loadMoreRows={fetchMessage}>
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer style={{ height: 'auto' }}>
            {({ width }) => (
              <List
                deferredMeasurementCache={cache}
                scrollToIndex={messages.length - 1}
                scrollToAlignment="end"
                height={500}
                rowCount={messagesCount}
                rowHeight={cache.rowHeight}
                onRowsRendered={onRowsRendered}
                rowRenderer={MessageItem(messages, viewer, cache)}
                ref={registerChild}
                onScroll={() => {
                  console.log(registerChild.current)
                }}
                width={width}
              />
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    )
  },
)
