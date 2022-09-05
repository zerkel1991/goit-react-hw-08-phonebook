import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function BasicExample() {
const [email,setEmail] = useState('admin@mail.con');
const [password,setPassword] = useState('12345678');

const dispatch = useDispatch()

const handleEmailChange = e => {
  setEmail(e.target.value);
};

const handlePasswordChange = e => {
  setPassword(e.target.value);
};

const handleSubmit = e =>{
 e.preventDefault()
 dispatch(logIn({
  email,
  password,
 }))
 setEmail('');
 setPassword('');

}

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' value={email} type="email" placeholder="Enter email" onChange={handleEmailChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' value={password} type="password" placeholder="Password" onChange={handlePasswordChange} />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
