import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import CardItem from './CardItem';
import { usePostContext, usePostDispatch } from '../../Contexts/HOCs/PostContextProvider';
import { apiPostGetAllService } from '../../services';

export default function PostsWrapper(): JSX.Element {
  const posts = usePostContext();
  const getPosts = usePostDispatch(apiPostGetAllService);

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Row className="mt-3">
      {posts.map((el) => (
        <CardItem key={el.id} post={el} />
      ))}
    </Row>
  );
}
