var brisk = require("brisk"),
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	Parent = brisk.getClass("main");

var helper = Parent.extend({

	setup: function(){

		this.createStrategy("google", GoogleStrategy);

	},

	// service callback
	google: function(accessToken, refreshToken, profile, done) {

		profile.token = { access : accessToken, refresh : refreshToken };
		this.service("google", profile, done);

	}

});

module.exports = helper;
