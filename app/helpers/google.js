
var Parent = require('brisk').getClass("main");

var helper = Parent.extend({

	// construct a scope from its keys
	scope: function( keys ){
		var services = this.services();
		var scope = [];
		// explode scope keys
		if( typeof keys == "string" ) keys = keys.split(",");
		for( var i in keys ){
			var key = keys[i];
			// check if service exists
			if( !services[key] ) continue;
			scope.push( services[key] );
		}
		return scope;
	},

	// matches scopes with their equivalent urls
	services: function(){

		// Reference on what all these services are:
		// https://code.google.com/oauthplayground/
		return 	{
				"adsense" 					: "https://www.googleapis.com/auth/adsense",
				"analytics" 				: "https://www.googleapis.com/auth/analytics.readonly",
				"books" 					: "https://www.googleapis.com/auth/books",
				"blogger" 					: "https://www.googleapis.com/auth/blogger",
				"calendar" 					: "https://www.googleapis.com/auth/calendar",
				"contacts" 					: "https://www.google.com/m8/feeds/",
				"chromewebstore" 			: "https://www.googleapis.com/auth/chromewebstore.readonly",
				"docs" 						: "https://docs.google.com/feeds/",
				"drive.file"				: "https://www.googleapis.com/auth/drive.file",
				"drive.readonly"			: "https://www.googleapis.com/auth/drive.readonly",
				"gan" 						: "https://www.googleapis.com/auth/gan",
				"gmail" 					: "https://mail.google.com/mail/feed/atom",
				"plus" 						: "https://www.googleapis.com/auth/plus.me",
				"groups" 					: "https://apps-apis.google.com/a/feeds/groups/",
				"latitude" 					: "https://www.googleapis.com/auth/latitude.all.best",
				"moderator" 				: "https://www.googleapis.com/auth/moderator",
				"nicknames.provisioning" 	: "https://apps-apis.google.com/a/feeds/alias/",
				"orkut" 					: "https://www.googleapis.com/auth/orkut",
				"picasaweb" 				: "https://picasaweb.google.com/data/",
				"plus.login"				: "https://www.googleapis.com/auth/plus.login",
				"sites" 					: "https://sites.google.com/feeds/",
				"spreadsheets" 				: "https://spreadsheets.google.com/feeds/",
				"storage" 					: "https://www.googleapis.com/auth/devstorage.read_write",
				"structuredcontent" 		: "https://www.googleapis.com/auth/structuredcontent",
				"tasks" 					: "https://www.googleapis.com/auth/tasks",
				"urlshortener" 				: "https://www.googleapis.com/auth/urlshortener",
				"userinfo.email" 			: "https://www.googleapis.com/auth/userinfo.email",
				"userinfo.profile" 			: "https://www.googleapis.com/auth/userinfo.profile",
				"user.provisioning" 		: "https://apps-apis.google.com/a/feeds/user/",
				"webmasters.tools" 			: "https://www.google.com/webmasters/tools/feeds/",
				"youtube" 					: "https://gdata.youtube.com"
		}
	}

});

module.exports = helper;
