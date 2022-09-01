import PropTypes from 'prop-types'

export function Button({text}) {
  console.log(text);
  return <button onClick={function() {
    console.log('hola, soy un boton')
  }}>
    {text}
  </button>
}

Button.propTypes = {
  text: PropTypes.string
}