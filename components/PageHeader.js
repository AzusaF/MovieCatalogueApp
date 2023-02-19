import { Card } from "react-bootstrap";

export default function PageHeader(props) {
   return (
   <>
    <Card>
      <Card.Body>
         {props.text}
      </Card.Body>
    </Card>
    <br/>
   </>
   );
}