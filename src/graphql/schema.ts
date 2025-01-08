export const schema = `#graphql


type Post {
  _id: ID!
  caption: String!
  image: String
  owner: User!
}

type User {
  _id: ID!
  name: String!
  email: String!
  role: String!
  verified: Boolean!
}


type Query{
   users:[User]
   posts:[Post]
   post(id:ID!):Post
}


`;
