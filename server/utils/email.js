const nodemailer = require('nodemailer');
const pug = require('pug');
const { htmlToText } = require('html-to-text');
const path = require('path');
const dayjs = require('dayjs');
module.exports = class Email {
	constructor(user, url, oppurtunity) {
		this.to = user.email;
		this.firstName = user.name.split(' ')[0];
		this.url = url;
		this.from = `Rishab Dugar <${process.env.EMAIL_FROM}>`
		// this.oppurtunityName = oppurtunity ? oppurtunity.name : "";
		this.daysLeftToDeadline = oppurtunity ? dayjs(oppurtunity.lastDate).diff(dayjs(), 'day') : "";
		this.oppurtunity = oppurtunity
	}

	newTransport() {
		// if (process.env.NODE_ENV === 'production') {
		// 	return 1;
		// }

		return nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: process.env.EMAIL_PORT,
			auth: {
				user: process.env.EMAIL_USERNAME,
				pass: process.env.EMAIL_PASSWORD
			}
			// Activate in gmail "less secure app" option.
			// Gmail is not a good option for production apps.
		});
	}

	async send(template, subject) {
		// 1) Render HTML based on a pug template
		const html = pug.renderFile(
            path.join(__dirname, `../views/${template}.pug`),
            {
                firstName: this.firstName,
                url: this.url,
				subject,
				oppurtunity: this.oppurtunity
            }
        );
		const text = htmlToText(html)

		// 2) Define email options
		const mailOptions = {
			from: this.from,
			to: this.to,
			subject,
			html,
			text
			//html: options.html
		}

		// 3) Create a transport and send email
		await this.newTransport().sendMail(mailOptions);
	}

	async sendWelcome() {
		await this.send('welcome', 'Welcome to the Move Forward Family');
	}
	
	async sendReminder() {
		await this.send('reminder', `Reminder: ${this.oppurtunity.name} deadline approaching !! ${this.daysLeftToDeadline} days left`);
	}
}
