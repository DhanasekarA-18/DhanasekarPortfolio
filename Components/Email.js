const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'dhanasekar20002@gmail.com',
		pass: 'Dhanasekar@2002'
	}
});

let mailDetails = {
	from: 'dhanasekar20002@gmail.com',
	to: 'dhanasekarangamuthu@gmil.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs');
	} else {
		console.log('Email sent successfully');
	}
});
