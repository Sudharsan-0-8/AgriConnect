const { gql } = require('apollo-server');

const typeDefs = gql`

    type Comment {
        id: ID!
        body: String!
        postId: ID!
        post: Post!
        userId: ID!
        user: User!
    }

    type Like {
        id: ID!
        postId: ID!
        userId: ID!
    }

    type Post {
        id: ID!
        body: String!
        createdAt: String!
        userId: ID!
        user: User!
        likes: [Like]!
        likesCount: Int!
        comments: [Comment]!
        commentsCount: Int!
    }

    type User {
        id: ID!
        username: String!
        email: String!
        token: String!
        createdAt: String!
    }

    input registerUserInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    
    type Query {
        test: String!
        allPosts: [Post]!
    }

    type Mutation {
        register(input: registerUserInput!): User!
        login(username: String!, password: String!): User!
        addPost(userId: String!, body: String!): Post!
    }
    
`;

module.exports = typeDefs; 