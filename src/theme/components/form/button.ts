export const Button = {
  baseStyle: {
    borderRadius: 0,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  sizes: {
    md: {
      minWidth: 40,
      minHeight: 10,
      fontSize: 'sm'
    }
  },
  variants: {
    active: {
      background: 'dice.500',
      color: 'white'
    },
    disabled: {
      background: 'whiteAlpha.900',
      color: 'black'
    },
    toggle: {
      width: '100%',
      color: 'white',
      background: 'whiteAlpha.300'
    },
    loadMore: {
      width: '100%',
      height: 'auto',
      paddingY: '3',
      border: '1px solid white',
      borderRadius: '3xl',
      fontSize: 'md',
      fontWeight: 500,
      _hover: {
        backgroundColor: 'gray.900',
        borderColor: 'gray.900'
      }
    }
  },
  defaultProps: {
    variant: 'active'
  }
}
