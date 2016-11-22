// Contact Page
import React from 'react';
import './css/ContactPage.css';
import '../node_modules/font-awesome/css/font-awesome.css'


// ContactPage component
var ContactPage = React.createClass({
	// Renders contact info, links to social media, and an email form
	render() {
		return (
			<div className="contactPage">

				<div className="box" id="contactInfo">
					<h1>Contact Info</h1>
					<h2>email: jhonrade@uw.edu</h2>
					<h2>phone: 206-902-8468</h2>
				</div>

				<div className="box" id="socialMedias">
					<div class="elements" id="icons">
						<h1>Social Medias</h1>
						<a role="button" href="https://twitter.com/justtjilll">twitter</a>
						<a role="button" href="https://www.facebook.com/jillian.honrade">facebook</a>
						<a role="button" href="https://www.linkedin.com/in/jillian-honrade-223519126">linkedin</a>
					</div>
				</div>

				{/* Code from https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form */}
				<div className="formBox">
					<form action="mailto:jhonrade@uw.edu" method="post">
						<div>
							<h1>Send me an email!</h1>
						</div>
						<div>
							<label for="name">Name:</label><br/>
							<input type="text" id="name" name="user_name" />
						</div>
						<div>
							<label for="mail">E-mail:</label><br/>
							<input type="email" id="mail" name="user_email" />
						</div>
						<div>
							<label for="msg">Message:</label><br/>
							<textarea id="msg" name="user_message"></textarea>
						</div>
						<div class="button">
							<button type="submit">Send your message</button>
						</div>
					</form>
				</div>

			</div>
		);
	}
});

export default ContactPage;
