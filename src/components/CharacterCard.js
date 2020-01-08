import React from "react";
import { Card, CardBody, CardHeader, CardSubtitle, CardImg} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div className='character-card' key={props.id}>
      <Card>
        <CardImg top-width='100%' src={props.image} alt='character' />
        <CardHeader>Name: {props.name}</CardHeader>
        <CardBody>
          <CardSubtitle>Status: {props.status}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
    );
}
