"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Title is required" },
          notNull: { msg: "Title is required" },
          len: {
            args: [20, Infinity],
            msg: "Minimum 20 characters",
          },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Content is required" },
          notNull: { msg: "Content is required" },
          len: {
            args: [200, Infinity],
            msg: "Minimum 200 characters",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Category is required" },
          notNull: { msg: "Category is required" },
          len: {
            args: [3, Infinity],
            msg: "Minimum 3 characters",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Title is required" },
          notNull: { msg: "Title is required" },
          isCorrectStatus(value) {
            if (value !== "publish" || value !== "draft" || value !== "trash") {
              throw new Error(
                `Status must be either "publish", "draft", or "trash"`
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
