import React from 'react';
import Row from 'react-bootstrap/Row';
import CardItem from './CardItem';
import { usePostContext } from '../../Contexts/HOCs/PostContextProvider';

export default function PostsWrapper(): JSX.Element {
  const posts = usePostContext();
  return (
    <Row className="mt-3">
      {posts.map((el) => (
        <CardItem key={el.id} post={el} />
      ))}
    </Row>
  );
}
