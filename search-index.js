var searchIndex = {};
searchIndex["twitch_client"] = {"doc":"# Overview","items":[[3,"TwitchClient","twitch_client","Readonly client for the [Twitch API](https://github.com/justintv/twitch-api).",null,null],[0,"model","","Twitch return types.",null,null],[0,"image","twitch_client::model","Twitch images.",null,null],[3,"ImageLinks","twitch_client::model::image","Twitch (preview) image links.",null,null],[11,"clone","","",0,{"inputs":[{"name":"imagelinks"}],"output":{"name":"imagelinks"}}],[11,"fmt","","",0,{"inputs":[{"name":"imagelinks"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",0,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",0,{"inputs":[{"name":"imagelinks"},{"name":"__s"}],"output":{"name":"result"}}],[11,"template","","Example value: &quot;http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg&quot;",0,{"inputs":[{"name":"imagelinks"}],"output":{"name":"urlstring"}}],[11,"small","","Example value: &quot;http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-80x45.jpg&quot;",0,{"inputs":[{"name":"imagelinks"}],"output":{"name":"urlstring"}}],[11,"medium","","Example value: &quot;http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-320x180.jpg&quot;",0,{"inputs":[{"name":"imagelinks"}],"output":{"name":"urlstring"}}],[11,"large","","Example value: &quot;http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-640x360.jpg&quot;",0,{"inputs":[{"name":"imagelinks"}],"output":{"name":"urlstring"}}],[0,"game","twitch_client::model","Twitch games.",null,null],[3,"TopGames","twitch_client::model::game","Games sorted by number of current viewers on Twitch, most popular first.",null,null],[3,"GameInfo","","Current twitch stats about the game.",null,null],[3,"Game","","Information about the game itself.",null,null],[11,"clone","","",1,{"inputs":[{"name":"topgames"}],"output":{"name":"topgames"}}],[11,"fmt","","",1,{"inputs":[{"name":"topgames"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",1,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",1,{"inputs":[{"name":"topgames"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"gameinfo"}],"output":{"name":"gameinfo"}}],[11,"fmt","","",2,{"inputs":[{"name":"gameinfo"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",2,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",2,{"inputs":[{"name":"gameinfo"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"game"}],"output":{"name":"game"}}],[11,"fmt","","",3,{"inputs":[{"name":"game"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",3,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",3,{"inputs":[{"name":"game"},{"name":"__s"}],"output":{"name":"result"}}],[11,"links","","",1,{"inputs":[{"name":"topgames"}],"output":{"name":"btreemap"}}],[11,"link_self","","Link with key &quot;self&quot;.",1,{"inputs":[{"name":"topgames"}],"output":{"name":"string"}}],[11,"link_next","","Link with key &quot;next&quot;.",1,{"inputs":[{"name":"topgames"}],"output":{"name":"string"}}],[11,"total","","Example value: 322",1,{"inputs":[{"name":"topgames"}],"output":{"name":"u32"}}],[11,"top","","Example value: See `GameInfo` type.",1,{"inputs":[{"name":"topgames"}],"output":{"name":"vec"}}],[11,"viewers","","Example value: 23873",2,{"inputs":[{"name":"gameinfo"}],"output":{"name":"u32"}}],[11,"channels","","Example value: 305",2,{"inputs":[{"name":"gameinfo"}],"output":{"name":"u32"}}],[11,"game","","Example value: See `Game` type.",2,{"inputs":[{"name":"gameinfo"}],"output":{"name":"game"}}],[11,"links","","",3,{"inputs":[{"name":"game"}],"output":{"name":"btreemap"}}],[11,"id","","Example value: 32399",3,{"inputs":[{"name":"game"}],"output":{"name":"u64"}}],[11,"giantbomb_id","","Example value: 36113",3,{"inputs":[{"name":"game"}],"output":{"name":"u64"}}],[11,"name","","Example value: &quot;Counter-Strike: Global Offensive&quot;",3,{"inputs":[{"name":"game"}],"output":{"name":"string"}}],[11,"box_image_links","","Example value: See `ImageLinks` type.",3,{"inputs":[{"name":"game"}],"output":{"name":"imagelinks"}}],[11,"logo_image_links","","Example value: See `ImageLinks` type.",3,{"inputs":[{"name":"game"}],"output":{"name":"imagelinks"}}],[0,"ingest","twitch_client::model","Twitch ingests.",null,null],[3,"Ingests","twitch_client::model::ingest","List of ingests.",null,null],[3,"Ingest","","Ingest point.",null,null],[11,"clone","","",4,{"inputs":[{"name":"ingests"}],"output":{"name":"ingests"}}],[11,"fmt","","",4,{"inputs":[{"name":"ingests"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",4,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",4,{"inputs":[{"name":"ingests"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"ingest"}],"output":{"name":"ingest"}}],[11,"fmt","","",5,{"inputs":[{"name":"ingest"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",5,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",5,{"inputs":[{"name":"ingest"},{"name":"__s"}],"output":{"name":"result"}}],[11,"links","","",4,{"inputs":[{"name":"ingests"}],"output":{"name":"btreemap"}}],[11,"link_self","","Link with key &quot;self&quot;.",4,{"inputs":[{"name":"ingests"}],"output":{"name":"string"}}],[11,"ingests","","Example value: See `Ingest` type.",4,{"inputs":[{"name":"ingests"}],"output":{"name":"vec"}}],[11,"name","","Example value: &quot;EU: Amsterdam, NL&quot;",5,{"inputs":[{"name":"ingest"}],"output":{"name":"string"}}],[11,"availability","","Example value: 1.0",5,{"inputs":[{"name":"ingest"}],"output":{"name":"f64"}}],[11,"id","","Example value: 24",5,{"inputs":[{"name":"ingest"}],"output":{"name":"u64"}}],[11,"default","","Example value: false",5,{"inputs":[{"name":"ingest"}],"output":{"name":"bool"}}],[11,"url_template","","Example value: &quot;rtmp://live-ams.twitch.tv/app/{stream_key}&quot;",5,{"inputs":[{"name":"ingest"}],"output":{"name":"string"}}],[0,"root","twitch_client::model","Top level Twitch models and authorization status.",null,null],[3,"BasicInfo","twitch_client::model::root","Basic information about the API and authentication status.",null,null],[3,"Token","","Authentication token.",null,null],[3,"Authorization","","Authorization information.",null,null],[11,"clone","","",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"basicinfo"}}],[11,"fmt","","",6,{"inputs":[{"name":"basicinfo"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",6,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",6,{"inputs":[{"name":"basicinfo"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"token"}],"output":{"name":"token"}}],[11,"fmt","","",7,{"inputs":[{"name":"token"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",7,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",7,{"inputs":[{"name":"token"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"authorization"}],"output":{"name":"authorization"}}],[11,"fmt","","",8,{"inputs":[{"name":"authorization"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",8,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",8,{"inputs":[{"name":"authorization"},{"name":"__s"}],"output":{"name":"result"}}],[11,"links","","",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"btreemap"}}],[11,"link_user","","Link with key &quot;user&quot;.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"string"}}],[11,"link_channel","","Link with key &quot;channel&quot;.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"string"}}],[11,"link_search","","Link with key &quot;search&quot;.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"string"}}],[11,"link_streams","","Link with key &quot;streams&quot;.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"string"}}],[11,"link_ingests","","Link with key &quot;ingests&quot;.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"string"}}],[11,"link_teams","","Link with key &quot;teams&quot;.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"string"}}],[11,"link_users","","Link with key &quot;users&quot;.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"option"}}],[11,"link_channels","","Link with key &quot;channels&quot;.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"option"}}],[11,"link_chat","","Link with key &quot;chat&quot;.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"option"}}],[11,"token","","Example value: See `Token` type.",6,{"inputs":[{"name":"basicinfo"}],"output":{"name":"token"}}],[11,"valid","","Example value: true",7,{"inputs":[{"name":"token"}],"output":{"name":"bool"}}],[11,"user_name","","Example value: &quot;test_user1&quot;",7,{"inputs":[{"name":"token"}],"output":{"name":"option"}}],[11,"authorization","","Example value: See `Authorization` type.",7,{"inputs":[{"name":"token"}],"output":{"name":"option"}}],[11,"scopes","","Example values: [&quot;user_read&quot;, &quot;channel_read&quot;, &quot;channel_commercial&quot;, &quot;user_read&quot;]",8,{"inputs":[{"name":"authorization"}],"output":{"name":"vec"}}],[11,"created_at","","Example value: &quot;2012-05-08T21:55:12Z&quot;",8,{"inputs":[{"name":"authorization"}],"output":{"name":"datestring"}}],[11,"updated_at","","Example value: &quot;2012-05-17T21:32:13Z&quot;",8,{"inputs":[{"name":"authorization"}],"output":{"name":"datestring"}}],[0,"stream","twitch_client::model","Twitch streams.",null,null],[3,"Streams","twitch_client::model::stream","Streams that are queried by a number of parameters sorted by number of viewers descending.",null,null],[3,"FeaturedStreams","","Featured (promoted) streams.",null,null],[3,"ChannelStream","","Twitch stream information of a specific channel.",null,null],[3,"StreamsSummary","","Summary of current streams.",null,null],[3,"FeaturedStream","","Featured (promoted) stream.",null,null],[3,"Stream","","Basic Stream type.",null,null],[11,"clone","","",9,{"inputs":[{"name":"streams"}],"output":{"name":"streams"}}],[11,"fmt","","",9,{"inputs":[{"name":"streams"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",9,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",9,{"inputs":[{"name":"streams"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"featuredstreams"}],"output":{"name":"featuredstreams"}}],[11,"fmt","","",10,{"inputs":[{"name":"featuredstreams"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",10,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",10,{"inputs":[{"name":"featuredstreams"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",11,{"inputs":[{"name":"channelstream"}],"output":{"name":"channelstream"}}],[11,"fmt","","",11,{"inputs":[{"name":"channelstream"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",11,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",11,{"inputs":[{"name":"channelstream"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",12,{"inputs":[{"name":"streamssummary"}],"output":{"name":"streamssummary"}}],[11,"fmt","","",12,{"inputs":[{"name":"streamssummary"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",12,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",12,{"inputs":[{"name":"streamssummary"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",13,{"inputs":[{"name":"featuredstream"}],"output":{"name":"featuredstream"}}],[11,"fmt","","",13,{"inputs":[{"name":"featuredstream"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",13,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",13,{"inputs":[{"name":"featuredstream"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",14,{"inputs":[{"name":"stream"}],"output":{"name":"stream"}}],[11,"fmt","","",14,{"inputs":[{"name":"stream"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",14,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",14,{"inputs":[{"name":"stream"},{"name":"__s"}],"output":{"name":"result"}}],[11,"links","","",9,{"inputs":[{"name":"streams"}],"output":{"name":"btreemap"}}],[11,"link_self","","Link with key &quot;self&quot;.",9,{"inputs":[{"name":"streams"}],"output":{"name":"string"}}],[11,"link_next","","Link with key &quot;next&quot;.",9,{"inputs":[{"name":"streams"}],"output":{"name":"string"}}],[11,"link_featured","","Link with key &quot;featured&quot;.",9,{"inputs":[{"name":"streams"}],"output":{"name":"string"}}],[11,"link_summary","","Link with key &quot;summary&quot;.",9,{"inputs":[{"name":"streams"}],"output":{"name":"string"}}],[11,"link_followed","","Link with key &quot;followed&quot;.",9,{"inputs":[{"name":"streams"}],"output":{"name":"string"}}],[11,"total","","Example value: 12345",9,{"inputs":[{"name":"streams"}],"output":{"name":"u32"}}],[11,"streams","","Example value: See `Stream` type.",9,{"inputs":[{"name":"streams"}],"output":{"name":"vec"}}],[11,"links","","",10,{"inputs":[{"name":"featuredstreams"}],"output":{"name":"btreemap"}}],[11,"link_self","","Link with key &quot;self&quot;.",10,{"inputs":[{"name":"featuredstreams"}],"output":{"name":"string"}}],[11,"link_next","","Link with key &quot;next&quot;.",10,{"inputs":[{"name":"featuredstreams"}],"output":{"name":"string"}}],[11,"featured","","Example value: See `FeaturedStream` type.",10,{"inputs":[{"name":"featuredstreams"}],"output":{"name":"vec"}}],[11,"links","","",11,{"inputs":[{"name":"channelstream"}],"output":{"name":"btreemap"}}],[11,"link_self","","Link with key &quot;self&quot;.",11,{"inputs":[{"name":"channelstream"}],"output":{"name":"string"}}],[11,"link_channel","","Link with key &quot;channel&quot;.",11,{"inputs":[{"name":"channelstream"}],"output":{"name":"string"}}],[11,"stream","","Example value: See `Stream` type.",11,{"inputs":[{"name":"channelstream"}],"output":{"name":"option"}}],[11,"links","","",12,{"inputs":[{"name":"streamssummary"}],"output":{"name":"btreemap"}}],[11,"link_self","","Link with key &quot;self&quot;.",12,{"inputs":[{"name":"streamssummary"}],"output":{"name":"string"}}],[11,"viewers","","Example value: 194774",12,{"inputs":[{"name":"streamssummary"}],"output":{"name":"u32"}}],[11,"channels","","Example value: 4144",12,{"inputs":[{"name":"streamssummary"}],"output":{"name":"u32"}}],[11,"text","","Example value: &quot;&lt;p&gt;some html to describe this featured stream&lt;/p&gt;&quot;",13,{"inputs":[{"name":"featuredstream"}],"output":{"name":"string"}}],[11,"image","","Example value: &quot;http://s.jtvnw.net/jtv_user_pictures/hosted_images/TwitchPartnerSpotlight.png&quot;",13,{"inputs":[{"name":"featuredstream"}],"output":{"name":"urlstring"}}],[11,"title","","Example value: &quot;Twitch Partner Spotlight&quot;",13,{"inputs":[{"name":"featuredstream"}],"output":{"name":"string"}}],[11,"sponsored","","Example value: false",13,{"inputs":[{"name":"featuredstream"}],"output":{"name":"bool"}}],[11,"priority","","Example value: 3",13,{"inputs":[{"name":"featuredstream"}],"output":{"name":"u8"}}],[11,"scheduled","","Example value: true",13,{"inputs":[{"name":"featuredstream"}],"output":{"name":"bool"}}],[11,"stream","","Example value: See `Stream` type.",13,{"inputs":[{"name":"featuredstream"}],"output":{"name":"stream"}}],[11,"links","","",14,{"inputs":[{"name":"stream"}],"output":{"name":"btreemap"}}],[11,"link_self","","Link with key &quot;self&quot;.",14,{"inputs":[{"name":"stream"}],"output":{"name":"string"}}],[11,"id","","Example value: 4989654544",14,{"inputs":[{"name":"stream"}],"output":{"name":"u64"}}],[11,"game","","Example value: &quot;StarCraft II: Heart of the Swarm&quot;",14,{"inputs":[{"name":"stream"}],"output":{"name":"option"}}],[11,"viewers","","Example value: 2123",14,{"inputs":[{"name":"stream"}],"output":{"name":"u32"}}],[11,"average_fps","","Example value: 29.9880749574",14,{"inputs":[{"name":"stream"}],"output":{"name":"f64"}}],[11,"delay","","Example value: 0",14,{"inputs":[{"name":"stream"}],"output":{"name":"option"}}],[11,"video_height","","Example value: 720",14,{"inputs":[{"name":"stream"}],"output":{"name":"u16"}}],[11,"is_playlist","","Example value: false",14,{"inputs":[{"name":"stream"}],"output":{"name":"bool"}}],[11,"created_at","","Example value: &quot;2015-02-12T04:42:31Z&quot;",14,{"inputs":[{"name":"stream"}],"output":{"name":"datestring"}}],[11,"channel","","Example value: See `Channel` type.",14,{"inputs":[{"name":"stream"}],"output":{"name":"channel"}}],[11,"preview","","Example value: See `ImageLinks` type.",14,{"inputs":[{"name":"stream"}],"output":{"name":"imagelinks"}}],[0,"channel","twitch_client::model","Twitch channels.",null,null],[3,"Channel","twitch_client::model::channel","Channel information.",null,null],[11,"clone","","",15,{"inputs":[{"name":"channel"}],"output":{"name":"channel"}}],[11,"fmt","","",15,{"inputs":[{"name":"channel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",15,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",15,{"inputs":[{"name":"channel"},{"name":"__s"}],"output":{"name":"result"}}],[11,"links","","",15,{"inputs":[{"name":"channel"}],"output":{"name":"btreemap"}}],[11,"link_self","","Link with key &quot;self&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"link_follows","","Link with key &quot;follows&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"link_commercial","","Link with key &quot;commercial&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"link_stream_key","","Link with key &quot;stream_key&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"link_chat","","Link with key &quot;chat&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"link_features","","Link with key &quot;features&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"link_subscriptions","","Link with key &quot;subscriptions&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"link_editors","","Link with key &quot;editors&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"link_teams","","Link with key &quot;teams&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"link_videos","","Link with key &quot;videos&quot;.",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"id","","Example value: 12345",15,{"inputs":[{"name":"channel"}],"output":{"name":"u64"}}],[11,"name","","Example value: &quot;test_channel&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"display_name","","Example value: &quot;test_channel&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"string"}}],[11,"game","","Example value: &quot;Gaming Talk Shows&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"status","","Example value: &quot;test status&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"mature","","Example value: false",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"delay","","Example value: 0",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"language","","Example value: &quot;en&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"localestring"}}],[11,"broadcaster_language","","Example value: &quot;en&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"created_at","","Example value: &quot;2007-05-22T10:39:54Z&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"datestring"}}],[11,"updated_at","","Example value: &quot;2015-02-12T04:15:49Z&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"datestring"}}],[11,"logo","","Example value: &quot;http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"banner","","Example value: &quot;http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_header_image-08dd874c17f39837-640x125.png&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"video_banner","","Example value: &quot;http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_offline_image-b314c834d210dc1a-640x360.png&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"background","","Example value: `None`",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"profile_banner","","Example value: &quot;http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_banner-6936c61353e4aeed-480.png&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"profile_banner_background_color","","Example value: &quot;null&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"option"}}],[11,"partner","","Example value: true",15,{"inputs":[{"name":"channel"}],"output":{"name":"bool"}}],[11,"url","","Example value: &quot;http://www.twitch.tv/test_channel&quot;",15,{"inputs":[{"name":"channel"}],"output":{"name":"urlstring"}}],[11,"views","","Example value: 49144894",15,{"inputs":[{"name":"channel"}],"output":{"name":"u32"}}],[11,"followers","","Example value: 215780",15,{"inputs":[{"name":"channel"}],"output":{"name":"u32"}}],[6,"UrlString","twitch_client::model","Strings that contain a hyperlink (e.g.: &quot;http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg&quot;).",null,null],[6,"DateString","","Strings that contain a date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (e.g.: &quot;2015-02-12T04:42:31Z&quot;).",null,null],[6,"LocaleString","","Strings that contain a locale in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) codes format (2 letter locales e.g.: &quot;en&quot;).",null,null],[8,"TwitchLinks","","A Twitch Model that contains http links to the called resource and other related Twitch resources.",null,null],[10,"links","","Returns a map with all http links of the Twitch result.",16,{"inputs":[{"name":"twitchlinks"}],"output":{"name":"btreemap"}}],[11,"get_expected_link","","Returns the http link corresponding to the given key.",16,{"inputs":[{"name":"twitchlinks"},{"name":"str"}],"output":{"name":"string"}}],[0,"error","twitch_client","Error and Result module.",null,null],[4,"Error","twitch_client::error","Twitch Client error.",null,null],[13,"Twitch","","An twitch server error that is indicated by the response status 5xx (Server Error)",17,null],[13,"Unauthorized","","Tried to access an secured resource prior to authentication",17,null],[13,"Io","","An `io::Error` that occurred while trying to read or write to a network stream.",17,null],[13,"Hyper","","An `hyper::error::Error` that occurred while trying to use the hyper library.",17,null],[13,"Deserialization","","An `serde_json::error::Error` that occurred while trying to deserialize a json response string.",17,null],[6,"Result","","Result type from methods that can have Twitch Client Errors.",null,null],[11,"fmt","","",17,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",17,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",17,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",17,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"from","","",17,{"inputs":[{"name":"ioerror"}],"output":{"name":"error"}}],[11,"from","","",17,{"inputs":[{"name":"hypererror"}],"output":{"name":"error"}}],[11,"from","","",17,{"inputs":[{"name":"jsonerror"}],"output":{"name":"error"}}],[11,"new","collections::string","Creates a new empty `String`.",18,{"inputs":[],"output":{"name":"string"}}],[11,"with_capacity","","Creates a new empty `String` with a particular capacity.",18,{"inputs":[{"name":"usize"}],"output":{"name":"string"}}],[11,"from_utf8","","Converts a vector of bytes to a `String`.",18,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[11,"from_utf8_lossy","","Converts a slice of bytes to a string, including invalid characters.",18,null],[11,"from_utf16","","Decode a UTF-16 encoded vector `v` into a `String`, returning `Err`\nif `v` contains any invalid data.",18,null],[11,"from_utf16_lossy","","Decode a UTF-16 encoded vector `v` into a string, replacing\ninvalid data with the replacement character (U+FFFD).",18,null],[11,"from_raw_parts","","Creates a new `String` from a length, capacity, and pointer.",18,null],[11,"from_utf8_unchecked","","Converts a vector of bytes to a `String` without checking that the\nstring contains valid UTF-8.",18,{"inputs":[{"name":"vec"}],"output":{"name":"string"}}],[11,"into_bytes","","Converts a `String` into a byte vector.",18,{"inputs":[{"name":"string"}],"output":{"name":"vec"}}],[11,"as_str","","Extracts a string slice containing the entire string.",18,{"inputs":[{"name":"string"}],"output":{"name":"str"}}],[11,"as_mut_str","","Extracts a string slice containing the entire string.",18,{"inputs":[{"name":"string"}],"output":{"name":"str"}}],[11,"push_str","","Appends a given string slice onto the end of this `String`.",18,null],[11,"capacity","","Returns this `String`&#39;s capacity, in bytes.",18,{"inputs":[{"name":"string"}],"output":{"name":"usize"}}],[11,"reserve","","Ensures that this `String`&#39;s capacity is at least `additional` bytes\nlarger than its length.",18,null],[11,"reserve_exact","","Ensures that this `String`&#39;s capacity is `additional` bytes\nlarger than its length.",18,null],[11,"shrink_to_fit","","Shrinks the capacity of this `String` to match its length.",18,null],[11,"push","","Appends the given `char` to the end of this `String`.",18,null],[11,"as_bytes","","Returns a byte slice of this `String`&#39;s contents.",18,null],[11,"truncate","","Shortens this `String` to the specified length.",18,null],[11,"pop","","Removes the last character from the string buffer and returns it.",18,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"remove","","Removes a `char` from this `String` at a byte position and returns it.",18,{"inputs":[{"name":"string"},{"name":"usize"}],"output":{"name":"char"}}],[11,"insert","","Inserts a character into this `String` at a byte position.",18,null],[11,"as_mut_vec","","Returns a mutable reference to the contents of this `String`.",18,{"inputs":[{"name":"string"}],"output":{"name":"vec"}}],[11,"len","","Returns the length of this `String`, in bytes.",18,{"inputs":[{"name":"string"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns `true` if this `String` has a length of zero.",18,{"inputs":[{"name":"string"}],"output":{"name":"bool"}}],[11,"clear","","Truncates this `String`, removing all contents.",18,null],[11,"drain","","Create a draining iterator that removes the specified range in the string\nand yields the removed chars.",18,{"inputs":[{"name":"string"},{"name":"r"}],"output":{"name":"drain"}}],[11,"into_boxed_str","","Converts this `String` into a `Box&lt;str&gt;`.",18,{"inputs":[{"name":"string"}],"output":{"name":"box"}}],[11,"write_str","","",18,{"inputs":[{"name":"string"},{"name":"str"}],"output":{"name":"result"}}],[11,"write_char","","",18,{"inputs":[{"name":"string"},{"name":"char"}],"output":{"name":"result"}}],[11,"into","","",18,{"inputs":[{"name":"string"}],"output":{"name":"vec"}}],[11,"from","","",18,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[11,"as_ref","","",18,null],[11,"as_ref","","",18,{"inputs":[{"name":"string"}],"output":{"name":"str"}}],[11,"from_str","","",18,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"deref_mut","","",18,{"inputs":[{"name":"string"}],"output":{"name":"str"}}],[11,"deref","","",18,{"inputs":[{"name":"string"}],"output":{"name":"str"}}],[11,"index_mut","","",18,{"inputs":[{"name":"string"},{"name":"rangetoinclusive"}],"output":{"name":"str"}}],[11,"index_mut","","",18,{"inputs":[{"name":"string"},{"name":"rangeinclusive"}],"output":{"name":"str"}}],[11,"index_mut","","",18,{"inputs":[{"name":"string"},{"name":"rangefull"}],"output":{"name":"str"}}],[11,"index_mut","","",18,{"inputs":[{"name":"string"},{"name":"rangefrom"}],"output":{"name":"str"}}],[11,"index_mut","","",18,{"inputs":[{"name":"string"},{"name":"rangeto"}],"output":{"name":"str"}}],[11,"index_mut","","",18,{"inputs":[{"name":"string"},{"name":"range"}],"output":{"name":"str"}}],[11,"index","","",18,{"inputs":[{"name":"string"},{"name":"rangetoinclusive"}],"output":{"name":"str"}}],[11,"index","","",18,{"inputs":[{"name":"string"},{"name":"rangeinclusive"}],"output":{"name":"str"}}],[11,"index","","",18,{"inputs":[{"name":"string"},{"name":"rangefull"}],"output":{"name":"str"}}],[11,"index","","",18,{"inputs":[{"name":"string"},{"name":"rangefrom"}],"output":{"name":"str"}}],[11,"index","","",18,{"inputs":[{"name":"string"},{"name":"rangeto"}],"output":{"name":"str"}}],[11,"index","","",18,{"inputs":[{"name":"string"},{"name":"range"}],"output":{"name":"str"}}],[11,"add","","",18,{"inputs":[{"name":"string"},{"name":"str"}],"output":{"name":"string"}}],[11,"hash","","",18,null],[11,"fmt","","",18,{"inputs":[{"name":"string"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",18,{"inputs":[{"name":"string"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",18,{"inputs":[],"output":{"name":"string"}}],[11,"eq","","",18,{"inputs":[{"name":"string"},{"name":"cow"}],"output":{"name":"bool"}}],[11,"ne","","",18,{"inputs":[{"name":"string"},{"name":"cow"}],"output":{"name":"bool"}}],[11,"eq","","",18,{"inputs":[{"name":"string"},{"name":"str"}],"output":{"name":"bool"}}],[11,"ne","","",18,{"inputs":[{"name":"string"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","","",18,{"inputs":[{"name":"string"},{"name":"str"}],"output":{"name":"bool"}}],[11,"ne","","",18,{"inputs":[{"name":"string"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","","",18,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"bool"}}],[11,"ne","","",18,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"bool"}}],[11,"extend","","",18,null],[11,"extend","","",18,null],[11,"extend","","",18,null],[11,"extend","","",18,null],[11,"from_iter","","",18,{"inputs":[{"name":"i"}],"output":{"name":"string"}}],[11,"from_iter","","",18,{"inputs":[{"name":"i"}],"output":{"name":"string"}}],[11,"from_iter","","",18,{"inputs":[{"name":"i"}],"output":{"name":"string"}}],[11,"clone","","",18,{"inputs":[{"name":"string"}],"output":{"name":"string"}}],[11,"clone_from","","",18,null],[11,"partial_cmp","","",18,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"option"}}],[11,"lt","","",18,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"bool"}}],[11,"le","","",18,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"bool"}}],[11,"gt","","",18,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"bool"}}],[11,"ge","","",18,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"bool"}}],[11,"cmp","","",18,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"ordering"}}],[11,"borrow","","",18,{"inputs":[{"name":"string"}],"output":{"name":"str"}}],[0,"param","twitch_client","Parameters for `TwitchClient` methods.",null,null],[3,"TopGamesParams","twitch_client::param","Parameters for the top games.",null,null],[3,"StreamsParams","","Parameters for the streams.",null,null],[3,"FeaturedStreamsParams","","Parameters for the featured streams.",null,null],[3,"StreamsSummaryParams","","Parameters for the streams summary.",null,null],[4,"StreamType","","`StreamType` for `StreamsParams` to only show streams from a certain type.",null,null],[13,"All","","Show all streams.",19,null],[13,"Playlist","","Show only playlists.",19,null],[13,"Live","","Show only live streams.",19,null],[11,"eq","","",20,{"inputs":[{"name":"topgamesparams"},{"name":"topgamesparams"}],"output":{"name":"bool"}}],[11,"ne","","",20,{"inputs":[{"name":"topgamesparams"},{"name":"topgamesparams"}],"output":{"name":"bool"}}],[11,"hash","","",20,null],[11,"clone","","",20,{"inputs":[{"name":"topgamesparams"}],"output":{"name":"topgamesparams"}}],[11,"fmt","","",20,{"inputs":[{"name":"topgamesparams"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",20,{"inputs":[],"output":{"name":"topgamesparams"}}],[11,"new","","Constructs a new instance.",20,{"inputs":[],"output":{"name":"topgamesparams"}}],[11,"with_offset","","Offset for pagination.",20,{"inputs":[{"name":"topgamesparams"},{"name":"u32"}],"output":{"name":"topgamesparams"}}],[11,"with_limit","","Maximum number of objects in array.",20,{"inputs":[{"name":"topgamesparams"},{"name":"u8"}],"output":{"name":"topgamesparams"}}],[11,"eq","","",19,{"inputs":[{"name":"streamtype"},{"name":"streamtype"}],"output":{"name":"bool"}}],[11,"hash","","",19,null],[11,"clone","","",19,{"inputs":[{"name":"streamtype"}],"output":{"name":"streamtype"}}],[11,"fmt","","",19,{"inputs":[{"name":"streamtype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",21,{"inputs":[{"name":"streamsparams"},{"name":"streamsparams"}],"output":{"name":"bool"}}],[11,"ne","","",21,{"inputs":[{"name":"streamsparams"},{"name":"streamsparams"}],"output":{"name":"bool"}}],[11,"hash","","",21,null],[11,"clone","","",21,{"inputs":[{"name":"streamsparams"}],"output":{"name":"streamsparams"}}],[11,"fmt","","",21,{"inputs":[{"name":"streamsparams"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",21,{"inputs":[],"output":{"name":"streamsparams"}}],[11,"new","","Constructs a new instance.",21,{"inputs":[],"output":{"name":"streamsparams"}}],[11,"with_game","","Streams categorized under game.",21,{"inputs":[{"name":"streamsparams"},{"name":"str"}],"output":{"name":"streamsparams"}}],[11,"with_channel","","Streams from a channel.\nCan be called multiple times to specify a list of channels.",21,{"inputs":[{"name":"streamsparams"},{"name":"str"}],"output":{"name":"streamsparams"}}],[11,"with_channels","","Streams from a list of channels.\nCan be called with an empty Vec to clear the list and use the default again.",21,{"inputs":[{"name":"streamsparams"},{"name":"vec"}],"output":{"name":"streamsparams"}}],[11,"with_offset","","Offset for pagination.",21,{"inputs":[{"name":"streamsparams"},{"name":"u32"}],"output":{"name":"streamsparams"}}],[11,"with_limit","","Maximum number of objects in array.",21,{"inputs":[{"name":"streamsparams"},{"name":"u8"}],"output":{"name":"streamsparams"}}],[11,"with_client_id","","Only shows streams from applications of `client_id`.",21,{"inputs":[{"name":"streamsparams"},{"name":"str"}],"output":{"name":"streamsparams"}}],[11,"with_stream_type","","Only shows streams from a certain type.",21,{"inputs":[{"name":"streamsparams"},{"name":"streamtype"}],"output":{"name":"streamsparams"}}],[11,"eq","","",22,{"inputs":[{"name":"featuredstreamsparams"},{"name":"featuredstreamsparams"}],"output":{"name":"bool"}}],[11,"ne","","",22,{"inputs":[{"name":"featuredstreamsparams"},{"name":"featuredstreamsparams"}],"output":{"name":"bool"}}],[11,"hash","","",22,null],[11,"clone","","",22,{"inputs":[{"name":"featuredstreamsparams"}],"output":{"name":"featuredstreamsparams"}}],[11,"fmt","","",22,{"inputs":[{"name":"featuredstreamsparams"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",22,{"inputs":[],"output":{"name":"featuredstreamsparams"}}],[11,"new","","Constructs a new instance.",22,{"inputs":[],"output":{"name":"featuredstreamsparams"}}],[11,"with_offset","","Offset for pagination.",22,{"inputs":[{"name":"featuredstreamsparams"},{"name":"u32"}],"output":{"name":"featuredstreamsparams"}}],[11,"with_limit","","Maximum number of objects in array.",22,{"inputs":[{"name":"featuredstreamsparams"},{"name":"u8"}],"output":{"name":"featuredstreamsparams"}}],[11,"eq","","",23,{"inputs":[{"name":"streamssummaryparams"},{"name":"streamssummaryparams"}],"output":{"name":"bool"}}],[11,"ne","","",23,{"inputs":[{"name":"streamssummaryparams"},{"name":"streamssummaryparams"}],"output":{"name":"bool"}}],[11,"hash","","",23,null],[11,"clone","","",23,{"inputs":[{"name":"streamssummaryparams"}],"output":{"name":"streamssummaryparams"}}],[11,"fmt","","",23,{"inputs":[{"name":"streamssummaryparams"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",23,{"inputs":[],"output":{"name":"streamssummaryparams"}}],[11,"new","","Constructs a new instance.",23,{"inputs":[],"output":{"name":"streamssummaryparams"}}],[11,"with_game","","Streams categorized under game.",23,{"inputs":[{"name":"streamssummaryparams"},{"name":"str"}],"output":{"name":"streamssummaryparams"}}],[11,"new","twitch_client","Constructs a new instance without client id and with a default hyper client.",24,{"inputs":[],"output":{"name":"twitchclient"}}],[11,"with_client_id","","Sets the Twitch client id.",24,{"inputs":[{"name":"twitchclient"},{"name":"str"}],"output":{"name":"twitchclient"}}],[11,"with_hyper_client","","Sets a custom configured hyper client.",24,{"inputs":[{"name":"twitchclient"},{"name":"client"}],"output":{"name":"twitchclient"}}],[11,"top_games","","Get games by number of viewers.",24,{"inputs":[{"name":"twitchclient"},{"name":"topgamesparams"}],"output":{"name":"result"}}],[11,"ingests","","Get list of ingests.",24,{"inputs":[{"name":"twitchclient"}],"output":{"name":"result"}}],[11,"basic_info","","Get top level links object and authorization status.",24,{"inputs":[{"name":"twitchclient"}],"output":{"name":"result"}}],[11,"stream","","Get stream object.",24,{"inputs":[{"name":"twitchclient"},{"name":"str"}],"output":{"name":"result"}}],[11,"streams","","Get stream object.",24,{"inputs":[{"name":"twitchclient"},{"name":"streamsparams"}],"output":{"name":"result"}}],[11,"featured_streams","","Get a list of featured streams.",24,{"inputs":[{"name":"twitchclient"},{"name":"featuredstreamsparams"}],"output":{"name":"result"}}],[11,"streams_summary","","Get a summary of streams.",24,{"inputs":[{"name":"twitchclient"},{"name":"streamssummaryparams"}],"output":{"name":"result"}}],[11,"channel","","Get channel object.",24,{"inputs":[{"name":"twitchclient"},{"name":"str"}],"output":{"name":"result"}}]],"paths":[[3,"ImageLinks"],[3,"TopGames"],[3,"GameInfo"],[3,"Game"],[3,"Ingests"],[3,"Ingest"],[3,"BasicInfo"],[3,"Token"],[3,"Authorization"],[3,"Streams"],[3,"FeaturedStreams"],[3,"ChannelStream"],[3,"StreamsSummary"],[3,"FeaturedStream"],[3,"Stream"],[3,"Channel"],[8,"TwitchLinks"],[4,"Error"],[3,"String"],[4,"StreamType"],[3,"TopGamesParams"],[3,"StreamsParams"],[3,"FeaturedStreamsParams"],[3,"StreamsSummaryParams"],[3,"TwitchClient"]]};
initSearch(searchIndex);