import {
  ResultUsageCode,
  SwipeRepositoryCode,
  UserRepositoryCode,
} from "~/_legacy/features/collect-and-chatgpt";

export const datingExamples = [
  { code: UserRepositoryCode },
  { code: SwipeRepositoryCode },
  { code: ResultUsageCode },
];

const MovieRepositoryCode = `
// Register collections for the movies app
const MovieRepository = Collect.register("movies", [
  {
    name: "Title",
    type: "string",
    required: true
  },
  {
    name: "Director",
    type: "string"
  },
  {
    name: "ReleaseDate",
    type: "date"
  },
  {
    name: "Genre",
    type: "string"
  },
  {
    name: "Poster",
    type: "file",
    max: "5mb",
    extensions: ["jpg", "png", "jpeg", "webp"]
  }
]);
`;

const ReviewRepositoryCode = `
const RatingRepository = Collect.register("ratings", [
  {
    name: "MovieID",
    type: "string",
    required: true
  },
  {
    name: "UserID",
    type: "string",
    required: true
  },
  {
    name: "Score",
    type: "number",
    required: true
  },
  {
    name: "Comment",
    type: "string"
  },
  {
    name: "Date",
    type: "date-time",
    required: true
  }
]);
`;

const MoviesResultUsage = `
// Create a new movie
const movie = await MovieRepository.save({
  Title: "The Godfather",
  Director: "Francis Ford Coppola",
  ReleaseDate: "1972-03-24",
  Genre: "Crime, Drama"
});

// Add a new rating for the movie
const rating = await RatingRepository.save({
  MovieID: movie._id,
  UserID: "user123",
  Score: 9,
  Comment: "A true classic",
  Date: "2023-04-02T12:00:00Z"
});

// Link the movie and rating
await Collect.link(movie, rating);

// Find all movies with a rating score greater than 8
const highlyRatedMovies = await Collect.find("movies", {
  related: {
    "ratings": {
      "Score": ">8"
    }
  }
});
`;

export const moviesExamples = [
  { code: MovieRepositoryCode },
  { code: ReviewRepositoryCode },
  { code: MoviesResultUsage },
];

const deliveryExamples = [
  {
    code: `// Define the DeliveryRepository with required fields
const DeliveryRepository = Collect.register('Delivery', [
  {
    name: "orderId",
    type: "string",
    required: true
  },
  {
    name: "address",
    type: "string",
    required: true
  },
  {
    name: "phone",
    type: "string",
    required: true
  },
  {
    name: "items",
    type: "array",
    required: true
  },
  {
    name: "status",
    type: "string",
    default: "Pending"
  },
  {
    name: "driver",
    type: "string"
  },
  {
    name: "createdAt",
    type: "date-time",
    default: () => new Date()
  },
  {
    name: "updatedAt",
    type: "date-time"
  }
]);`,
  },
  {
    code: `// Create a new delivery order
const order = await DeliveryRepository.save({
  orderId: "12345",
  address: "123 Main St.",
  phone: "555-1234",
  items: ["Pizza", "Soda"],
});

// Update the status of the order
await DeliveryRepository.update({orderId: "12345"}, {status: "Out for delivery"});

// Assign a driver to the order
await DeliveryRepository.update({orderId: "12345"}, {driver: "John Smith"});

// Get all orders that are out for delivery
const deliveries = await DeliveryRepository.find({status: "Out for delivery"});`,
  },
  {
    code: `// Automatically assign a driver to an order based on their availability and location
const drivers = await Collect.find('Driver', {
  Location: "37.5162,-77.5133",
  Availability: true
})

// Assign first available driver to the order
if (drivers.length > 0) {
  const [driver] = drivers
  const orderId = 123456 // Replace with actual order ID
  await Collect.update('Order', { orderId }, { DriverId: driver.id })
} else {
  console.log('No drivers available')
}
    `,
  },
];

export const examples = {
  ["Dating app"]: datingExamples,
  ["Delivery app"]: deliveryExamples,
  ["Movies app"]: moviesExamples,
  ["Music app"]: [
    {
      code: `// Define a schema for songs
const SongRepository = Collect.register('Song', [
  {
    name: 'Title',
    type: 'string',
    required: true
  },
  {
    name: 'Artist',
    type: 'string',
    required: true
  },
  {
    name: 'Album',
    type: 'string'
  },
  {
    name: 'Genre',
    type: 'string'
  },
  {
    name: 'Duration',
    type: 'number'
  },
  {
    name: 'ReleaseDate',
    type: 'date'
  },
  {
    name: 'CoverImage',
    type: 'file',
    max: '10mb',
    extensions: ['jpg', 'png', 'jpeg']
  }
]);
`,
    },
    {
      code: `// Save a new song
const song = await SongRepository.save({
  Title: 'Bohemian Rhapsody',
  Artist: 'Queen',
  Album: 'A Night at the Opera',
  Genre: 'Rock',
  Duration: 355,
  ReleaseDate: '1975-10-31',
  CoverImage: 'http://example.com/bohemian-rhapsody.png'
});

// Find all songs by Queen
const songsByQueen = await SongRepository.find({
  Artist: 'Queen'
});

// Find all songs in the rock genre
const rockSongs = await SongRepository.find({
  Genre: 'Rock'
});`,
    },
    {
      code: `// Register the Playlist model
const Playlist = Collect.register('Playlist', [
  {
    name: 'Name',
    type: 'string',
    required: true
  },
  {
    name: 'Description',
    type: 'string'
  },
  {
    name: 'Tracks',
    type: 'array',
    items: {
      type: 'string' // IDs of tracks in the playlist
    }
  }
]);

// Create a new playlist
const playlist = await Playlist.save({
  Name: 'My Playlist',
  Description: 'A cool playlist',
  Tracks: [] // Empty array for now
});

// Add a track to the playlist
const trackId = '3n3Ppam7vgaVa1iaRUc9Lp'; // ID of a track
const updatedPlaylist = await Playlist.update(playlist.id, {
  Tracks: [trackId] // Add the track to the array
});

// Get all playlists
const playlists = await Playlist.find({});`,
    },
  ],
};
