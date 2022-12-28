const { gql } = require('apollo-server');

const typeDefs = gql`

    type Comment {
        id: ID!
        post: Post!
        user: User!
        # postId: ID!
        # userId: ID!
        body: String!
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
        user: User!
        # likes: [Like]!
        likesCount: Int!
        # comments: [Comment]!
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