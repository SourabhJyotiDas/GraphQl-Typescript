const users = [
  {
    _id: "64a1b2c3d4e5f67890123456",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    password: "hashed_password_1",
    role: "user",
    verified: true,
    createdAt: "2024-01-10T10:15:00Z",
    updatedAt: "2024-12-20T12:30:00Z",
  },
  {
    _id: "64b2c3d4e5f6789012345678",
    name: "Bob Carter",
    email: "bob.carter@example.com",
    password: "hashed_password_2",
    role: "admin",
    verified: false,
    createdAt: "2024-02-05T08:45:00Z",
    updatedAt: "2024-12-15T11:00:00Z",
  },
  {
    _id: "64c3d4e5f678901234567890",
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    password: "hashed_password_3",
    role: "moderator",
    verified: true,
    createdAt: "2024-03-15T09:00:00Z",
    updatedAt: "2024-12-12T10:45:00Z",
  },
  {
    _id: "64d4e5f67890123456789012",
    name: "Diana Evans",
    email: "diana.evans@example.com",
    password: "hashed_password_4",
    role: "user",
    verified: false,
    createdAt: "2024-04-20T07:30:00Z",
    updatedAt: "2024-11-30T15:20:00Z",
  },
  {
    _id: "64e5f6789012345678901234",
    name: "Ethan Foster",
    email: "ethan.foster@example.com",
    password: "hashed_password_5",
    role: "admin",
    verified: true,
    createdAt: "2024-05-25T11:15:00Z",
    updatedAt: "2024-12-18T08:30:00Z",
  },
  {
    _id: "64f678901234567890123456",
    name: "Fiona Grant",
    email: "fiona.grant@example.com",
    password: "hashed_password_6",
    role: "user",
    verified: true,
    createdAt: "2024-06-10T10:45:00Z",
    updatedAt: "2024-12-14T09:10:00Z",
  },
  {
    _id: "650901234567890123456789",
    name: "George Harris",
    email: "george.harris@example.com",
    password: "hashed_password_7",
    role: "moderator",
    verified: false,
    createdAt: "2024-07-05T08:30:00Z",
    updatedAt: "2024-12-08T14:20:00Z",
  },
  {
    _id: "651234567890123456789012",
    name: "Hannah James",
    email: "hannah.james@example.com",
    password: "hashed_password_8",
    role: "user",
    verified: true,
    createdAt: "2024-08-15T12:00:00Z",
    updatedAt: "2024-12-19T09:55:00Z",
  },
  {
    _id: "652345678901234567890123",
    name: "Isabella King",
    email: "isabella.king@example.com",
    password: "hashed_password_9",
    role: "user",
    verified: false,
    createdAt: "2024-09-20T09:15:00Z",
    updatedAt: "2024-12-16T13:45:00Z",
  },
  {
    _id: "653456789012345678901234",
    name: "Jack Lewis",
    email: "jack.lewis@example.com",
    password: "hashed_password_10",
    role: "admin",
    verified: true,
    createdAt: "2024-10-25T10:10:00Z",
    updatedAt: "2024-12-21T14:30:00Z",
  },
];



export const getAllUsers = () => {
  return users;
};

export const getUserById = async(id:String)=>{
    const user = users.find((ele)=> ele._id ===  id);
    return user;
}