const posts = [
  {
    "_id": "651234567890123456789001",
    "caption": "Exploring the beauty of nature.",
    "image":"",
    "owner": {
      "_id": "64a1b2c3d4e5f67890123456",
      "name": "Alice Brown",
      "email": "alice.brown@example.com",
      "role": "user",
      "verified": true
    },
    "createdAt": "2024-06-01T10:15:00Z",
    "likes": [
      {
        "_id": "64b2c3d4e5f6789012345678",
        "name": "Bob Carter",
        "email": "bob.carter@example.com",
        "role": "admin",
        "verified": false
      },
      {
        "_id": "64c3d4e5f678901234567890",
        "name": "Charlie Davis",
        "email": "charlie.davis@example.com",
        "role": "moderator",
        "verified": true
      }
    ],
    "comments": ["Absolutely stunning!", "Nature is healing.", "This is so calming!"]
  },
  {
    "_id": "651234567890123456789002",
    "caption": "Cooking is an art!",
    "image":"",
    "owner": {
      "_id": "64b2c3d4e5f6789012345678",
      "name": "Bob Carter",
      "email": "bob.carter@example.com",
      "role": "admin",
      "verified": false
    },
    "createdAt": "2024-06-05T11:30:00Z",
    "likes": [
      {
        "_id": "64a1b2c3d4e5f67890123456",
        "name": "Alice Brown",
        "email": "alice.brown@example.com",
        "role": "user",
        "verified": true
      }
    ],
    "comments": ["Yummy!", "Teach me your ways.", "Looks delicious!"]
  },
  {
    "_id": "651234567890123456789003",
    "caption": "Tech innovations of the year.",
    "image":"",
    "owner": {
      "_id": "64c3d4e5f678901234567890",
      "name": "Charlie Davis",
      "email": "charlie.davis@example.com",
      "role": "moderator",
      "verified": true
    },
    "createdAt": "2024-07-10T09:00:00Z",
    "likes": [
      {
        "_id": "64d4e5f67890123456789012",
        "name": "Diana Evans",
        "email": "diana.evans@example.com",
        "role": "user",
        "verified": false
      },
      {
        "_id": "64a1b2c3d4e5f67890123456",
        "name": "Alice Brown",
        "email": "alice.brown@example.com",
        "role": "user",
        "verified": true
      }
    ],
    "comments": ["Tech is the future!", "Great insights!", "Amazing innovations!"]
  },
  {
    "_id": "651234567890123456789004",
    "caption": "Fitness goals achieved!",
    "image":"",
    "owner": {
      "_id": "64d4e5f67890123456789012",
      "name": "Diana Evans",
      "email": "diana.evans@example.com",
      "role": "user",
      "verified": false
    },
    "createdAt": "2024-07-15T08:30:00Z",
    "likes": [
      {
        "_id": "64b2c3d4e5f6789012345678",
        "name": "Bob Carter",
        "email": "bob.carter@example.com",
        "role": "admin",
        "verified": false
      }
    ],
    "comments": ["Inspiring!", "Keep it up!", "Way to go!"]
  },
  {
    "_id": "651234567890123456789005",
    "caption": "Photography is my passion.",
    "image":"",
    "owner": {
      "_id": "64e5f6789012345678901234",
      "name": "Ethan Foster",
      "email": "ethan.foster@example.com",
      "role": "admin",
      "verified": true
    },
    "createdAt": "2024-07-20T11:15:00Z",
    "likes": [
      {
        "_id": "64f678901234567890123456",
        "name": "Fiona Grant",
        "email": "fiona.grant@example.com",
        "role": "user",
        "verified": true
      }
    ],
    "comments": ["Great shot!", "Love this picture!", "Amazing angles."]
  },
  {
    "_id": "651234567890123456789006",
    "caption": "Ancient history is fascinating.",
    "image":"",
    "owner": {
      "_id": "64f678901234567890123456",
      "name": "Fiona Grant",
      "email": "fiona.grant@example.com",
      "role": "user",
      "verified": true
    },
    "createdAt": "2024-07-25T10:30:00Z",
    "likes": [
      {
        "_id": "64a1b2c3d4e5f67890123456",
        "name": "Alice Brown",
        "email": "alice.brown@example.com",
        "role": "user",
        "verified": true
      }
    ],
    "comments": ["Wow, so informative!", "Loved the details.", "Great content!"]
  },
  {
    "_id": "651234567890123456789007",
    "caption": "Traveling to new places is the best therapy.",
    "image":"",
    "owner": {
      "_id": "650901234567890123456789",
      "name": "George Harris",
      "email": "george.harris@example.com",
      "role": "moderator",
      "verified": false
    },
    "createdAt": "2024-08-05T09:00:00Z",
    "likes": [
      {
        "_id": "64d4e5f67890123456789012",
        "name": "Diana Evans",
        "email": "diana.evans@example.com",
        "role": "user",
        "verified": false
      }
    ],
    "comments": ["Travel goals!", "Amazing clicks.", "Where is this?"]
  },
  {
    "_id": "651234567890123456789008",
    "caption": "Gardening is so relaxing.",
    "image":"",
    "owner": {
      "_id": "651234567890123456789012",
      "name": "Hannah James",
      "email": "hannah.james@example.com",
      "role": "user",
      "verified": true
    },
    "createdAt": "2024-08-10T10:30:00Z",
    "likes": [
      {
        "_id": "64f678901234567890123456",
        "name": "Fiona Grant",
        "email": "fiona.grant@example.com",
        "role": "user",
        "verified": true
      }
    ],
    "comments": ["Beautiful garden!", "So peaceful.", "Love the greens."]
  }
]


export const getAllPosts = () => {
  return posts;
};

export const getPostById = (parent: any, args: { id: String }) => {

  const post = posts.find((ele) => ele._id === args.id);
  return post;
};
