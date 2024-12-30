"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
exports.productSchema = `#graphql

type Product{
   _id:ID!
   title:String!
   description:String!
   quantity:Int!
   rating:String!
   category:String!
   review:[String]
   verified:Boolean!
   createdAt:String!
   updatedAt:String!
}

   type Query {
      products: [Product]
   }


`;