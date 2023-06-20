import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import type { PostSubmitEventType } from '../../Types';
import { apiPostSubmitService } from '../../services';
import { usePostDispatch } from '../../Contexts/HOCs/PostContextProvider';

function PostForm(): JSX.Element {
  const dispatch = usePostDispatch();

  return (
    <Form onSubmit={(e: PostSubmitEventType) => apiPostSubmitService(e, dispatch)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" placeholder="title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Img</Form.Label>
        <Form.Control type="file" name="file" placeholder="title" />
      </Form.Group>
      <Button type="submit" variant="warning">
        Warning
      </Button>
    </Form>
  );
}

export default React.memo(PostForm);
