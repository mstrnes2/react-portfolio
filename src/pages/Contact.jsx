import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../utils/helpers';
import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleValidation = (e) => {
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)){
        setErrorMessage('Not a valid email');
      }
      else {
        setErrorMessage('');
      }
    } else {
      if(!e.target.value.length){
        setErrorMessage('Please input all the required fields!');
      }else {
        setErrorMessage('');
      }
    }
  }
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('Email Sent!');
  };
  return (
    <div className='contactForm'>
      <Form>
      <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} name='name' onBlur={handleValidation} onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={email} name='email' onBlur={handleValidation} onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={5} type="text" placeholder="Message" value={message} name='message' onBlur={handleValidation} onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Contact;