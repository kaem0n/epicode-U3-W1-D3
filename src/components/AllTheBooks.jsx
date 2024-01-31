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
import SingleBook from './SingleBook'

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
