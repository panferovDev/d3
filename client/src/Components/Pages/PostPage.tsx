import React, { useMemo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostForm from '../UI/PostForm';
import PostsWrapper from '../UI/PostsWrapper';

const someNumber = (): number => Math.random();

export default function PostPage(): JSX.Element {
  const num = useMemo(() => someNumber(), []);

  return (
    <>
      <h1>{num}</h1>
      <Row>
        <Col>
          <PostForm />
        </Col>
      </Row>
      <PostsWrapper />
    </>
  );
}
