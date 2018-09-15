module.exports = (req, res, next) => {
	var userName = req.body.user_name;
	
	var botPayload = {
		text: 'Hello ' + userName + ', welcome to the channel.'
	}

	if(userName !== 'slackbot'){
		return res.status(200).json(botPayload);		
	} else{
		return res.status(200).end();
	}
}