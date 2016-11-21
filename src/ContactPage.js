// Contact Page
import React from 'react';
import './css/ContactPage.css';

// PageOne Component
var ContactPage = React.createClass({

	render() {
		return (
			<div className="contactPage">
				<div>
					<h2>Contact</h2>

				</div>

				<form action="mailto:jhonrade@uw.edu" method="post">
					<div>
		        <label for="name">Name:</label>
		        <input type="text" id="name" name="user_name" />
					</div>
					<div>
		        <label for="mail">E-mail:</label>
		        <input type="email" id="mail" name="user_email" />
					</div>
					<div>
		        <label for="msg">Message:</label>
		        <textarea id="msg" name="user_message"></textarea>
					</div>

					<div class="button">
		        <button type="submit">Send your message</button>
					</div>
					
				</form>

			</div>
		);
	}
});

export default ContactPage;
