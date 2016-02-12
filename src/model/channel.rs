use std::collections::BTreeMap;

pub use model::TwitchLinks;
pub use model::UrlString;
pub use model::DateString;
pub use model::LocaleString;


#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Channel {
    #[serde(rename="_links")]
    links: BTreeMap<String, String>,
    #[serde(rename="_id")]
    id: u64,
    name: String,
    display_name: String,
    game: String,
    status: String,
    mature: bool,
    delay: Option<f32>,
    language: LocaleString,
    broadcaster_language: LocaleString,
    created_at: DateString,
    updated_at: DateString,
    logo: UrlString,
    banner: UrlString,
    video_banner: UrlString,
    background: Option<UrlString>,
    profile_banner: UrlString,
    profile_banner_background_color: String,
    partner: bool,
    url: UrlString,
    views: u32,
    followers: u32,
}


impl TwitchLinks for Channel {
    fn links(&self) -> &BTreeMap<String, String> {
        &self.links
    }
}

impl Channel {
    pub fn link_self(&self) -> &String {
        self.get_expected_link("self")
    }
    pub fn link_follows(&self) -> &String {
        self.get_expected_link("follows")
    }
    pub fn link_commercial(&self) -> &String {
        self.get_expected_link("commercial")
    }
    pub fn link_stream_key(&self) -> &String {
        self.get_expected_link("stream_key")
    }
    pub fn link_chat(&self) -> &String {
        self.get_expected_link("chat")
    }
    pub fn link_features(&self) -> &String {
        self.get_expected_link("features")
    }
    pub fn link_subscriptions(&self) -> &String {
        self.get_expected_link("subscriptions")
    }
    pub fn link_editors(&self) -> &String {
        self.get_expected_link("editors")
    }
    pub fn link_teams(&self) -> &String {
        self.get_expected_link("teams")
    }
    pub fn link_videos(&self) -> &String {
        self.get_expected_link("videos")
    }
    pub fn id(&self) -> u64 {
        self.id
    }
    pub fn name(&self) -> &String {
        &self.name
    }
    pub fn display_name(&self) -> &String {
        &self.display_name
    }
    pub fn game(&self) -> &String {
        &self.game
    }
    pub fn status(&self) -> &String {
        &self.status
    }
    pub fn mature(&self) -> bool {
        self.mature
    }
    pub fn delay(&self) -> Option<f32> {
        self.delay
    }
    pub fn language(&self) -> &LocaleString {
        &self.language
    }
    pub fn broadcaster_language(&self) -> &LocaleString {
        &self.broadcaster_language
    }
    pub fn created_at(&self) -> &DateString {
        &self.created_at
    }
    pub fn updated_at(&self) -> &DateString {
        &self.updated_at
    }
    pub fn logo(&self) -> &UrlString {
        &self.logo
    }
    pub fn banner(&self) -> &UrlString {
        &self.banner
    }
    pub fn video_banner(&self) -> &UrlString {
        &self.video_banner
    }
    pub fn background(&self) -> &Option<UrlString> {
        &self.background
    }
    pub fn profile_banner(&self) -> &UrlString {
        &self.profile_banner
    }
    pub fn profile_banner_background_color(&self) -> &String {
        &self.profile_banner_background_color
    }
    pub fn partner(&self) -> bool {
        self.partner
    }
    pub fn url(&self) -> &UrlString {
        &self.url
    }
    pub fn views(&self) -> u32 {
        self.views
    }
    pub fn followers(&self) -> u32 {
        self.followers
    }
}