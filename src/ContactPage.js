// Contact Page
import React from 'react';
import './css/ContactPage.css';
import '../node_modules/font-awesome/css/font-awesome.css'

// PageOne Component
var ContactPage = React.createClass({

	render() {
		return (
			<div className="contactPage">
				<div>
					<h2>Send me an email!</h2>
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

				<div className="socialMedias">
					<div class="elements" id="icons">
						<h3>Find me on Social Media!</h3>
						<a role="button" href="mailto:jhonrade@uw.edu">EMAIL</a>
						<a role="button" href="https://twitter.com/justt-jilll">TWITTER</a>
						<a role="button" href="https://www.facebook.com/jillian.honrade">FACEBOOK</a>
					</div>
				</div>

			</div>
		);
	}
});

export default ContactPage;
