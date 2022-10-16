import React from 'react'
import { Button } from '@chakra-ui/react'

interface LoadMoreProps {
  onLoadMore: () => void
}

const LoadMore = ({ onLoadMore }: LoadMoreProps) => {
  return (
    <Button type="button" aria-label="load more events" variant="loadMore" onClick={onLoadMore}>
      Load more
    </Button>
  )
}

export { LoadMore }
