const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Blinding Lights",
    artist: "The Weeknd",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/The-Weeknd-Blinding-Lights_-_Naijamusics.com.mp3?alt=media&token=4a8d5cd6-aec9-4a27-b9eb-28f06f0842a5",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic2.jpg?alt=media&token=ced58b8f-0e56-4b28-b3a5-bcea1100f33e",
  },
  {
    id: 2,
    favourite: false,
    songName: "Shape of You",
    artist: "Ed Sheeran",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/Ed_Sheeran_-_Shape_Of_You.mp3?alt=media&token=c4b0c62a-f4e5-4755-bc2b-ce6c6ec49054",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic3.png?alt=media&token=a033ac9a-6549-4c46-9d34-ca4d190295a8",
  },
  {
    id: 3,
    favourite: false,
    songName: "The Night We Met",
    artist: "Lord Huron",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/Lord_Huron_-_The_Night_We_Met_(ColdMP3.com).mp3?alt=media&token=f654a080-a917-45df-874e-267f7cd8cae4",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic4.jpg?alt=media&token=7249ed34-d9e0-485b-a8ba-845761429159",
  },
  {
    id: 4,
    favourite: false,
    songName: "Space Bound",
    artist: "Eminem",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/Eminem%2BSpace%2BBound%2BOfficial%2BVideo.mp3?alt=media&token=645fcbe4-aa2b-4d36-bfda-43a448f15c03",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic5.jpg?alt=media&token=6c35e6a7-f1db-4a00-babb-fe55ba4ca197",
  },
  {
    id: 5,
    favourite: false,
    songName: "Control",
    artist: "Zoe Wees",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/Zoe-Wees-Control-via-Naijafinix.com_.mp3?alt=media&token=11547856-bf28-4859-ad2a-6c788ba7b5fd",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic6.jpg?alt=media&token=fe50727b-7c75-45f8-a756-c2f88f3b8ddb",
  },
  {
    id: 6,
    songName: "Bad Habits",
    artist: "Ed Sheeran",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/Ed-Sheeran-Bad-Habits-(TrendyBeatz.com).mp3?alt=media&token=d2dcb196-dff6-47ce-a902-c43d685c7e34",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic7.jpg?alt=media&token=35fb63cf-0774-4efe-a76a-b49fa46866eb",
  },
  {
    id: 7,
    favourite: false,
    songName: "Be Alright",
    artist: "Dean Lewis",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/yt1s.com%20-%20Dean%20Lewis%20%20Be%20Alright%20Official%20Video.mp3?alt=media&token=897e9b36-dd8c-494c-b607-6ba898f21bde",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic8.jpg?alt=media&token=d7121bf7-0da1-440f-aaff-21cdf9be95d7",
  },
  {
    id: 8,
    favourite: false,
    songName: "Hmaare Sath Shri Raghunath",
    artist: "Prembushan ji Maharaj",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/yt1s.com%20-%20Humare%20Saath%20Shri%20Raghunath%20To%20Kis%20Baat%20Ki%20Chinta%20With%20Lyrics%20%20Prembhushan%20Ji%20Maharaj.mp3?alt=media&token=704f0cd1-0ad1-4141-9054-e92dfc1d43c7",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic9.jpg?alt=media&token=a194632f-fad3-4290-8c39-7f46e3713d0c",
  },
  {
    id: 9,
    favourite: false,
    songName: "Aarambh Hai Prachand •X• Polozehni",
    artist: "Shrylox",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/yt1s.com%20-%20Aarambh%20Hai%20Prachand%20X%20Polozehni%20%20Shrylox%20.mp3?alt=media&token=fd41bdfb-28dc-4143-ac3e-01d553e65fef",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic11.jpg?alt=media&token=5d549282-2ea8-426b-a034-364bfebeab9a",
  },
  {
    id: 10,
    favourite: false,
    songName: "Dandelions",
    artist: "Ruth B ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/Ruth%20B.%20-%20Dandelions%20(slowed%20%2B%20reverb)%20cause%20i%20m%20in%20a%20field%20of%20dandelions.mp3?alt=media&token=e2db18e9-ad86-44ad-9eea-357ca3ed0b89",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ef85c.appspot.com/o/pic1.jpg?alt=media&token=1a88da4a-50b1-464f-891b-f814844609c9",
  },
];

export { Songs };
