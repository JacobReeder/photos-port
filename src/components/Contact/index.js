import React from 'react';
import { validateEmail } from '../../utils/helpers';

/*const [formState, setFormState] = useState({ 
    name: '<input type="text" defaultValue={name} onChange={handleChange} name="name" />', 
    email: '<input type="email" defaultValue={email} name="email" onChange={handleChange} />',
    message: '<textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />' 
    });*/

function ContactForm() {
    const [formState, setFormState] = useState({ name: ``, email: ``, message: `` });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
      }
    };

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
        };
       
  return (
        <section>
          <h1 data-testid="h1tag">Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
          <div>
     <label htmlFor="name">Name:</label>
     <input type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
      </div>
       <div>
      <label htmlFor="email">Email address:</label>
       <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
        </div>
         <div>
       <label htmlFor="message">Message:</label>
       <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
       <button type="submit">Submit</button>
        </div>
          </form>
        </section>
      );
  }
}
    
    export default ContactForm;