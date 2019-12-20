import React from "react";
import { Card, CardBody, CardHeader, CardSubtitle} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div className='character-list' key={props.id}>
      <Card>
        <CardHeader>{props.name}</CardHeader>
        <CardBody>
          <CardSubtitle>{props.status}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
    );
}
