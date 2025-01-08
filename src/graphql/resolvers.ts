import { getAllPosts, getPostById } from "../controllers/post";
import { getAllUsers } from "../controllers/user";

type sampleUserType = {
  name: String;
  email: String;
  password: String;
};

export const resolver = {
  Mutation: {
    createNewUser: (parent: any, { name, email, password }: sampleUserType) => {
      console.log(name, email, password);
      return "skaldnsanbd";
    },
  },

  Query: {
    users: getAllUsers,
    posts: getAllPosts,
    post: getPostById,
  },
  // Post: {
  //   owner: async (parent) => {
  //     return await getUserById(parent.owner._id);
  //   },
  // },
};
