
var google = require('googleapis'),
	Parent = require('brisk').getClass("main");

var helper = Parent.extend({

	// construct a scope from its keys
	scope: function( keys ){
		var services = this.services();
		var scope = [];
		// explode scope keys
		if( typeof keys == "string" ) keys = keys.split(",");
		// FIX: include user profile info (mandatory)
		if( keys.indexOf("plus.login") == -1 ) keys.push("plus.login");
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
	},

	auth: function( options ){
		// prerequisites
		if( !options.client_id || !options.client_secret ) return null;
		// variables
		var OAuth2 = google.auth.OAuth2;
		// init oauth
		var auth = new OAuth2( options.client_id, options.client_secret, ( options.redirect_url || "") );
		// optionally set the access token
		if( options.access_token ){
			auth.setCredentials({
				access_token: options.access_token,
				refresh_token: ( options.refresh_token || 0 )
			})
		}
		return auth;
	},

	// returns an api object for the specific service
	api: function( service ){
		// partial support... (option for version?)
		// - complete list: https://github.com/google/google-api-nodejs-client/tree/master/apis
		switch( service ){
			case "drive":
				return google.drive('v2');
			break;
			case "plus":
				return google.plus('v1');
			break;
			case "tasks":
				return google.tasks('v1');
			break;
			case "urlshortener":
				return google.urlshortener('v1');
			break;
			default:
			 	return null;
			break;
		}
	}

});

module.exports = helper;
