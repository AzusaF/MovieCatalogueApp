import { Col, Container, Row } from "react-bootstrap";

export default function MovieDetails(props) {
   console.log("poster", props.movie.poster);
   return (
     <>
      <Container>
         <Row>
            { props.movie.poster && <Col md><img src={props.movie.poster} alt="poster" className="w-100" /><br /><br /></Col> }
            <Col>
               {props.movie.directors.length > 0 && (
               <>
               <strong>Directed By:</strong>{" "}
                  {props.movie.directors.length > 1
                  ? props.movie.directors.join(", ")
                  : props.movie.directors}
                  <br />
                  <br />
               </>
               )}
               <p>{props.movie.fullplot}</p>
               <strong>Cast:</strong> {props.movie.cast == "" ? "N/A":(props.movie.cast[1]?props.movie.cast.map(cast=>cast).join(", "):props.movie.cast)} <br/> <br/>
               <strong>Awards:</strong> {props.movie.awards?.text}<br/>
               <strong>IMDB Rating:</strong> {props.movie.imdb?.rating} ({props.movie.imdb?.votes} votes)
            </Col> 
         </Row>
      </Container>
     </>
   );
}