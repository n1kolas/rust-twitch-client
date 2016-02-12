use std::collections::BTreeMap;

pub use model::TwitchLinks;
pub use model::DateString;
pub use model::image::ImageLinks;
pub use model::channel::Channel;


#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct StreamResponse {
    #[serde(rename="_links")]
    links: BTreeMap<String, String>,
    stream: Option<Stream>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Stream {
    #[serde(rename="_links")]
    links: BTreeMap<String, String>,
    #[serde(rename="_id")]
    id: u64,
    game: String,
    viewers: u32,
    average_fps: f32,
    delay: u32,
    video_height: u16,
    is_playlist: bool,
    created_at: DateString,
    channel: Channel,
    preview: ImageLinks,
}


impl TwitchLinks for StreamResponse {
    fn links(&self) -> &BTreeMap<String, String> {
        &self.links
    }
}

impl StreamResponse {
    pub fn link_self(&self) -> &String {
        self.get_expected_link("self")
    }
    pub fn link_channel(&self) -> &String {
        self.get_expected_link("channel")
    }
    pub fn stream(&self) -> &Option<Stream> {
        &self.stream
    }
}

impl TwitchLinks for Stream {
    fn links(&self) -> &BTreeMap<String, String> {
        &self.links
    }
}

impl Stream {
    pub fn link_self(&self) -> &String {
        self.get_expected_link("self")
    }
    pub fn id(&self) -> u64 {
        self.id
    }
    pub fn game(&self) -> &String {
        &self.game
    }
    pub fn viewers(&self) -> u32 {
        self.viewers
    }
    pub fn average_fps(&self) -> f32 {
        self.average_fps
    }
    pub fn delay(&self) -> u32 {
        self.delay
    }
    pub fn video_height(&self) ->u16 {
        self.video_height
    }
    pub fn is_playlist(&self) -> bool {
        self.is_playlist
    }
    pub fn created_at(&self) -> &DateString {
        &self.created_at
    }
    pub fn channel(&self) -> &Channel {
        &self.channel
    }
    pub fn preview(&self) -> &ImageLinks {
        &self.preview
    }
}