import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const SubmissionForm = () => {
    return ( 
        <div>
            <Form>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='text-light'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-light">
          We'll never share your email with anyone else.
          <Form.Label className='text-light'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter comment" />
        </Form.Text>
      </Form.Group>

      
      <Button variant="danger" type="submit">
        Post Comment
      </Button>
    </Form>
        </div>
     );
}
 
export default SubmissionForm ;