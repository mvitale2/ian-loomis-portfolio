import React from 'react'
import './Contact.css';

// Use this tutorial to create email form: https://medium.com/@thomasaugot/create-a-react-contact-form-with-email-js-cad2c8606f33
function Contact() {
  return (
    <main className='contact-wrapper'>
      <div className='left'>
        <span>For commissions and project inquiries, please email: ian.loomis@email.com or submit a message via this form.</span>
      </div>
      <div className='right'>
        <form>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
          <label htmlFor='message'>Message</label>
          <textarea name='message'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </main>
  )
}

export default Contact