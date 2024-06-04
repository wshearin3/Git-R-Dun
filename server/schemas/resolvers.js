const { User, Project } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            try {
                const users = await User.find();
                return users;
            } catch (error) {
                throw new Error('Failed to fetch users');
            }
        },
        projects: async () => {
            try {
                const projects = await Project.find();
                return projects;
            } catch (error) {
                throw new Error('Failed to fetch projects');
            }
        }

    },

    Mutation: {
        addUser: async (parent, { username }) => {
            const user = await User.create({ username });
            return { user };
        },
        addProject: async (parent, { name, description, owner, members }) => {
            const project = await Project.create({ name, description, owner, members });
            return {project};
        }
    }
}
    module.exports = resolvers;