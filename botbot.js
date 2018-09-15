module.exports = (req, res, next) => {
	var userName = req.body.user_name;
	// var triggerWord = req.body.trigger_word
	var botPayload = {
		text: 'Hello ' + userName + ', welcome to the channel.'
	}

	// var hiPayload = {
	// 	text: 'hi ' + userName + ', what\'s up'
	// }

	if(userName !== 'slackbot'){
		return res.status(200).json(botPayload);		
	} else{
		return res.status(200).end();
	}
}