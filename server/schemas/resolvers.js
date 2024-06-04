const { User, Project } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
    projects: async () => {
      try {
        const projects = await Project.find();
        return projects;
      } catch (error) {
        throw new Error("Failed to fetch projects");
      }
    },
  },

  Mutation: {
    addUser: async (parent, { username }) => {
      const user = await User.create({ username });
      return { user };
    },
    addProject: async (parent, { name, description, owner, members }) => {
      const project = await Project.create({
        name,
        description,
        owner,
        members,
      });
      console.log(project);
      return project;
    },
    // Copied currently
    // updateProject: async (parent, { id, name, description, members }) => {
    //   const project = await Project.findOneAndUpdate({
    //     id,
    //     name,
    //     description,
    //     members,
    //   });
    //   console.log(project);
    //   return project;
    // },

    removeProject: async (parent, { projectId }, context) => {
      // if (context.user)
      {
        const project = await Project.findOneAndDelete({
          _id: projectId,
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $pull: { Projects: Project._id } }
        // );
        return project;
      }
      // throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
