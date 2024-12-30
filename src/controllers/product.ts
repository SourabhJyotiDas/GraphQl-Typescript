export const getAllProducts = () => {
  const products = [
    {
      _id: "64d12a7f9b1234abcd567890",
      title: "Wireless Headphones",
      description:
        "High-quality noise-canceling wireless headphones with 30 hours of battery life.",
      quantity: 50,
      rating: "4.8",
      category: "Electronics",
      review: ["Amazing sound quality!", "Very comfortable for long use."],
      verified: true,
      createdAt: "2024-12-01T10:30:00Z",
      updatedAt: "2024-12-10T09:15:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567891",
      title: "Yoga Mat",
      description:
        "Eco-friendly, non-slip yoga mat suitable for all types of yoga.",
      quantity: 120,
      rating: "4.5",
      category: "Fitness",
      review: ["Great grip and comfort.", "Perfect for hot yoga!"],
      verified: true,
      createdAt: "2024-11-20T08:15:00Z",
      updatedAt: "2024-12-05T10:00:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567892",
      title: "Gaming Mouse",
      description:
        "RGB-enabled gaming mouse with adjustable DPI and ergonomic design.",
      quantity: 80,
      rating: "4.6",
      category: "Gaming",
      review: ["Responsive and precise.", "Love the customizable lighting!"],
      verified: true,
      createdAt: "2024-11-15T10:45:00Z",
      updatedAt: "2024-11-30T14:25:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567893",
      title: "Stainless Steel Water Bottle",
      description:
        "Durable and insulated bottle that keeps drinks cold for 24 hours.",
      quantity: 200,
      rating: "4.7",
      category: "Home & Kitchen",
      review: ["Keeps my water cold all day!", "Very sturdy and leakproof."],
      verified: true,
      createdAt: "2024-10-01T07:05:00Z",
      updatedAt: "2024-12-15T11:50:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567894",
      title: "LED Desk Lamp",
      description:
        "Energy-efficient desk lamp with adjustable brightness and USB charging port.",
      quantity: 60,
      rating: "4.4",
      category: "Office Supplies",
      review: [
        "Stylish and functional.",
        "Perfect for late-night work sessions.",
      ],
      verified: true,
      createdAt: "2024-11-01T09:00:00Z",
      updatedAt: "2024-11-25T12:45:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567895",
      title: "Smartphone Case",
      description:
        "Slim, protective smartphone case with shock absorption technology.",
      quantity: 150,
      rating: "4.3",
      category: "Accessories",
      review: ["Fits perfectly!", "Protects my phone from drops."],
      verified: true,
      createdAt: "2024-09-15T12:30:00Z",
      updatedAt: "2024-10-05T18:15:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567896",
      title: "Electric Kettle",
      description:
        "Fast-boiling electric kettle with a 1.7L capacity and auto shut-off feature.",
      quantity: 90,
      rating: "4.9",
      category: "Home Appliances",
      review: ["Boils water super fast!", "Great design and easy to use."],
      verified: true,
      createdAt: "2024-10-10T11:20:00Z",
      updatedAt: "2024-10-30T09:40:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567897",
      title: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with deep bass and 10-hour battery life.",
      quantity: 75,
      rating: "4.8",
      category: "Electronics",
      review: ["Crystal clear sound.", "Perfect for outdoor parties!"],
      verified: true,
      createdAt: "2024-12-05T15:45:00Z",
      updatedAt: "2024-12-18T13:30:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567898",
      title: "Digital Kitchen Scale",
      description:
        "Precise kitchen scale with a sleek design and easy-to-read display.",
      quantity: 130,
      rating: "4.6",
      category: "Kitchen",
      review: ["Accurate measurements.", "Compact and lightweight."],
      verified: true,
      createdAt: "2024-11-18T09:10:00Z",
      updatedAt: "2024-11-28T11:55:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567899",
      title: "Running Shoes",
      description:
        "Lightweight and comfortable running shoes designed for long-distance runners.",
      quantity: 110,
      rating: "4.7",
      category: "Sportswear",
      review: ["Extremely comfortable.", "Great for marathons!"],
      verified: true,
      createdAt: "2024-10-25T08:20:00Z",
      updatedAt: "2024-11-15T14:00:00Z",
    },
  ];

  return products;
};

export const getProductById = (parent: any, args: { id: String }) => {
  const products = [
    {
      _id: "64d12a7f9b1234abcd567890",
      title: "Wireless Headphones",
      description:
        "High-quality noise-canceling wireless headphones with 30 hours of battery life.",
      quantity: 50,
      rating: "4.8",
      category: "Electronics",
      review: ["Amazing sound quality!", "Very comfortable for long use."],
      verified: true,
      createdAt: "2024-12-01T10:30:00Z",
      updatedAt: "2024-12-10T09:15:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567891",
      title: "Yoga Mat",
      description:
        "Eco-friendly, non-slip yoga mat suitable for all types of yoga.",
      quantity: 120,
      rating: "4.5",
      category: "Fitness",
      review: ["Great grip and comfort.", "Perfect for hot yoga!"],
      verified: true,
      createdAt: "2024-11-20T08:15:00Z",
      updatedAt: "2024-12-05T10:00:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567892",
      title: "Gaming Mouse",
      description:
        "RGB-enabled gaming mouse with adjustable DPI and ergonomic design.",
      quantity: 80,
      rating: "4.6",
      category: "Gaming",
      review: ["Responsive and precise.", "Love the customizable lighting!"],
      verified: true,
      createdAt: "2024-11-15T10:45:00Z",
      updatedAt: "2024-11-30T14:25:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567893",
      title: "Stainless Steel Water Bottle",
      description:
        "Durable and insulated bottle that keeps drinks cold for 24 hours.",
      quantity: 200,
      rating: "4.7",
      category: "Home & Kitchen",
      review: ["Keeps my water cold all day!", "Very sturdy and leakproof."],
      verified: true,
      createdAt: "2024-10-01T07:05:00Z",
      updatedAt: "2024-12-15T11:50:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567894",
      title: "LED Desk Lamp",
      description:
        "Energy-efficient desk lamp with adjustable brightness and USB charging port.",
      quantity: 60,
      rating: "4.4",
      category: "Office Supplies",
      review: [
        "Stylish and functional.",
        "Perfect for late-night work sessions.",
      ],
      verified: true,
      createdAt: "2024-11-01T09:00:00Z",
      updatedAt: "2024-11-25T12:45:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567895",
      title: "Smartphone Case",
      description:
        "Slim, protective smartphone case with shock absorption technology.",
      quantity: 150,
      rating: "4.3",
      category: "Accessories",
      review: ["Fits perfectly!", "Protects my phone from drops."],
      verified: true,
      createdAt: "2024-09-15T12:30:00Z",
      updatedAt: "2024-10-05T18:15:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567896",
      title: "Electric Kettle",
      description:
        "Fast-boiling electric kettle with a 1.7L capacity and auto shut-off feature.",
      quantity: 90,
      rating: "4.9",
      category: "Home Appliances",
      review: ["Boils water super fast!", "Great design and easy to use."],
      verified: true,
      createdAt: "2024-10-10T11:20:00Z",
      updatedAt: "2024-10-30T09:40:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567897",
      title: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with deep bass and 10-hour battery life.",
      quantity: 75,
      rating: "4.8",
      category: "Electronics",
      review: ["Crystal clear sound.", "Perfect for outdoor parties!"],
      verified: true,
      createdAt: "2024-12-05T15:45:00Z",
      updatedAt: "2024-12-18T13:30:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567898",
      title: "Digital Kitchen Scale",
      description:
        "Precise kitchen scale with a sleek design and easy-to-read display.",
      quantity: 130,
      rating: "4.6",
      category: "Kitchen",
      review: ["Accurate measurements.", "Compact and lightweight."],
      verified: true,
      createdAt: "2024-11-18T09:10:00Z",
      updatedAt: "2024-11-28T11:55:00Z",
    },
    {
      _id: "64d12a7f9b1234abcd567899",
      title: "Running Shoes",
      description:
        "Lightweight and comfortable running shoes designed for long-distance runners.",
      quantity: 110,
      rating: "4.7",
      category: "Sportswear",
      review: ["Extremely comfortable.", "Great for marathons!"],
      verified: true,
      createdAt: "2024-10-25T08:20:00Z",
      updatedAt: "2024-11-15T14:00:00Z",
    },
  ];

  const product = products.find((ele) => ele._id === args.id);
  console.log(product);
  return product;
};
