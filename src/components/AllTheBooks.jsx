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
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SingleBook from './SingleBook'

// COMPONENT FUNCTION

class AllTheBooks extends Component {
  state = {
    genreSelected: fantasy,
    searchText: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ searchText: '' })
  }

  filter = () => {
    const filteredBooks = []
    for (let i = 0; i < this.state.genreSelected.length; i++) {
      if (
        this.state.genreSelected[i].title.indexOf(this.state.searchText) !== -1
      ) {
        filteredBooks.push(this.state.genreSelected[i])
      }
    }
    return filteredBooks
  }

  render() {
    return (
      <>
        <Container fluid className="mb-5">
          <Row className="mb-3 justify-content-between">
            <Col xs={1}>
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
            <Col xs={4}>
              <Form className="d-flex" onSubmit={this.handleSubmit}>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  className="me-2"
                  value={this.state.searchText}
                  onChange={(e) =>
                    this.setState({ searchText: e.target.value })
                  }
                />
                <Button type="submit" variant="dark">
                  Cerca
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="g-3" xs={2} md={3} lg={4} xl={5} xxl={6}>
            {this.state.searchText === ''
              ? this.state.genreSelected.map((book) => {
                  return <SingleBook book={book} key={book.asin} />
                })
              : this.filter().map((book) => {
                  return <SingleBook book={book} key={book.asin} />
                })}
          </Row>
        </Container>
      </>
    )
  }
}

// EXPORT

export default AllTheBooks
