import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

class SingleBook extends Component {
  state = {
    selected: false,
    selectedClass: '',
  }

  setSelected = () => {
    if (this.state.selected) {
      this.setState({ selected: false })
      this.setState({ selectedClass: '' })
    } else {
      this.setState({ selected: true })
      this.setState({ selectedClass: 'border-4 border-danger ' })
    }
  }

  render() {
    return (
      <Col>
        <Card className={this.state.selectedClass + 'h-100'}>
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div className="mb-2">
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Subtitle>
                <Badge bg="danger">ASIN: {this.props.book.asin}</Badge>
              </Card.Subtitle>
            </div>
            <div>
              <Card.Text className="m-0">
                <span className="fw-bold">Categoria:</span>{' '}
                {toCapitalize(this.props.book.category)}
              </Card.Text>
              <Card.Text>
                <span className="fw-bold">Prezzo:</span>{' '}
                {fixPrice(String(this.props.book.price))}€
              </Card.Text>
              <Button
                variant="dark"
                className="w-100"
                onClick={this.setSelected}
              >
                Aggiungi al carrello
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

const fixPrice = (str) => {
  let text = str.replace('.', ',')
  if (text.slice(text.indexOf(',')).length === 2) {
    text += '0'
  } else if (text.indexOf(',') === -1) {
    text += ',00'
  }
  return text
}

const toCapitalize = (str) => {
  let text
  if (str === 'scifi') {
    text = 'Sci-Fi'
  } else {
    const textArray = str.split('')
    textArray[0] = textArray[0].toUpperCase()
    text = textArray.join('')
  }
  return text
}

export default SingleBook
