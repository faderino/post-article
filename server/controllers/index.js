"use strict";
const { Post } = require("../models");
module.exports = class Controller {
  static async create(req, res, next) {
    try {
      const data = { ...req.body };
      const newPost = await Post.create(data);

      res.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const { limit, offset } = req.params;
      const options = { limit, offset, order: [["updatedAt", "DESC"]] };
      const posts = await Post.findAll(options);

      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(+id);
      if (!post) throw { name: "NotFound" };

      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(+id);
      if (!post) throw { name: "NotFound" };

      const data = { ...req.body };
      await Post.update(data, { where: { id } });

      res.status(200).json({ message: `Saved update for Post with id: ${id}` });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(+id);
      if (!post) throw { name: "NotFound" };

      await Post.destroy({ where: { id } });

      res.status(200).json({ message: `Deleted Post with id: ${id}` });
    } catch (error) {
      next(error);
    }
  }
};