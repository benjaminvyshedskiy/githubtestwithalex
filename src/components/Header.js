import React from 'react'
import Button from "react-bootstrap/Button"

const Header = ({next, previous}) => {
  return (
    <div>
      <h1>Data Table</h1>
      <Button variant="outline-primary" id="next" onClick={next}>Next</Button>{' '}
      <Button variant="outline-primary" id="previous" onClick={previous}>Previous</Button>{' '}
    </div>
  )
}

export default Header
