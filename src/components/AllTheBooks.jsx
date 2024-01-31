// DATA IMPORTS

import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'

// COMPONENT IMPORTS

import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

// COMPONENT FUNCTION

class AllTheBooks extends Component {
  state = {
    genreSelected: fantasy,
  }
  render() {
    return (
      <>
        <Container fluid className="mb-5">
          <Row className="mb-3">
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="dark">Generi</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: fantasy })}
                  >
                    Fantasy
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: history })}
                  >
                    History
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: horror })}
                  >
                    Horror
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: romance })}
                  >
                    Romance
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: scifi })}
                  >
                    Sci-Fi
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="g-3" xs={2} md={3} lg={4} xl={5} xxl={6}>
            {this.state.genreSelected.map((book) => {
              return (
                <Col key={book.asin}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div className="mb-2">
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle>
                          <Badge bg="danger">ASIN: {book.asin}</Badge>
                        </Card.Subtitle>
                      </div>
                      <div>
                        <Card.Text className="m-0">
                          <span className="fw-bold">Categoria:</span>{' '}
                          {book.category}
                        </Card.Text>
                        <Card.Text>
                          <span className="fw-bold">Prezzo:</span>{' '}
                          {fixPrice(String(book.price))}€
                        </Card.Text>
                        <Button variant="dark" className="w-100">
                          Aggiungi al carrello
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }
}

// OTHER FUNCTIONS

const fixPrice = (str) => {
  let text = str.replace('.', ',')
  if (text.slice(text.indexOf(',')).length === 2) {
    text += '0'
  } else if (text.indexOf(',') === -1) {
    text += ',00'
  }
  return text
}

// EXPORT

export default AllTheBooks
