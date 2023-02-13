import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class MyCards extends Component {
  state = {
    film: [{}],
  };

  filmFetch = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?=tt3896198&apikey=465c90c4&s=harry%20potter"
      );

      if (res.ok) {
        const data = await res.json();
        this.setState({
          film: data,
        });
      } else {
        console.log("ERRORE FETCH");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* componentDidMount = () => {
    this.filmFetch();
  };*/
  render() {
    return (
      <Row>
        {this.state.film.map(({ el }) => (
          <Col>
            <Card key={el.imdbID} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={el.Poster} />
              <Card.Body>
                <Card.Title>{el.Title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default MyCards;
