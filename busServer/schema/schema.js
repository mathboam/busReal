const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} = graphql;

const AuthorModel = require("../db/AuthorModel");
const ArticleModel = require("../db/ArticleModel");

const ArticleType = new GraphQLObjectType({
  name: "Article",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return AuthorModel.findOne({ _id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    contact: {
      type: GraphQLString,
    },
    profession: {
      type: GraphQLString,
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parent, args) {
        return ArticleModel.find({ authorId: parent._id });
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addAuthor: {
      type: AuthorType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        contact: {
          type: new GraphQLNonNull(GraphQLString),
        },
        profession: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        const newArthor = new AuthorModel({
          name: args.name,
          contact: args.contact,
          profession: args.profession,
        });
        return newArthor.save();
      },
    },
    addArticle: {
      type: ArticleType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        genre: {
          type: new GraphQLNonNull(GraphQLString),
        },
        authorId: {
          type: new GraphQLNonNull(GraphQLID),
        },
        body: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        const newArticle = new ArticleModel({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
          body: args.body,
        });
        return newArticle.save();
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    article: {
      type: ArticleType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        // code to get book data from db
        // return _.find(articles, { id: args.id });
        return ArticleModel.findById(args.id);
      },
    },
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
        return AuthorModel.findById(args.id);
      },
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parent, args) {
        return ArticleModel.find();
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors;
        return AuthorModel.find();
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
