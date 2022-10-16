export const Badge = {
  baseStyle: {
    paddingX: 2,
    paddingY: 1,
    borderRadius: 0,
    color: 'white',
    fontWeight: 'bold'
  },
  sizes: {
    md: {
      fontSize: 'sm'
    }
  },
  variants: {
    featured: {
      background: 'dice.500',
      color: 'white'
    },
    date: {
      background: 'black',
      textTransform: 'none'
    },
    play: {
      width: 12,
      height: 12,
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
  },
  defaultProps: {
    variant: 'featured'
  }
}
