import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import type { PostType } from '../../Types';
import { usePostDispatch } from '../../Contexts/HOCs/PostContextProvider';
import { apiDeletePostService } from '../../services';

type CardItemPropsType = {
  post: PostType;
};

function PostItem({ post }: CardItemPropsType): JSX.Element {
  const dispatch = usePostDispatch();

  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img
          style={{ height: '300px', objectFit: 'cover' }}
          variant="top"
          src={`http://localhost:3001/img/${post.img}`}
        />
        <Card.Body>
          <Card.Text>{post.title}</Card.Text>
        </Card.Body>
      </Card>
      <Button
        onClick={() => apiDeletePostService(post.id, dispatch)}
        variant="danger"
        className="mt-2"
      >
        Delete
      </Button>
    </Col>
  );
}

export default React.memo(PostItem);
