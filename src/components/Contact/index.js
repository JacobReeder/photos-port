import React from 'react';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const [formState, setFormState] = useState({ 
    name: '<input type="text" defaultValue={name} onChange={handleChange} name="name" />', 
    email: '<input type="email" defaultValue={email} name="email" onChange={handleChange} />',
    message: '<textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />' 
    });

function ContactForm() {
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value });
        }
    }
      
      console.log(formState);

      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

  return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
          <div>
     <label htmlFor="name">Name:</label>
     <input type="text" name="name" />
      </div>
       <div>
      <label htmlFor="email">Email address:</label>
       <input type="email" name="email" />
        </div>
         <div>
       <label htmlFor="message">Message:</label>
       <textarea name="message" rows="5"  />
       <button type="submit">Submit</button>
        </div>
          </form>
        </section>
      )
  }
    
    export default ContactForm;