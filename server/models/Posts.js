module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Posts;
};
