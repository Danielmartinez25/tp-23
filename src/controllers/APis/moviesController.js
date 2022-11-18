const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const moviesController = {
  create: async (req, res) => {
    try {
      let create = Movies.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length,
        genre_id: req.body.genre_id,
      });
      return res.status(201).json({
        ok: true,
        status: 201,
        data: create,
      });
    } catch (error) {
      let response = {
        ok: false,
        meta: {
          status: 500,
        },
        msg: error.messaje ? error.messaje : "comuniquese con el administrador",
      };
      return res.status(500).json(response);
    }
  },
  destroy: async (req, res) => {
    try {
      let movieId = req.params.id;
      Movies.destroy({ where: { id: movieId }, force: true });
      return res.status(201).json({
        ok: true,
        status: 201,
      });
    } catch (error) {
      let response = {
        ok: false,
        meta: {
          status: 500,
        },
        msg: error.messaje ? error.messaje : "comuniquese con el administrador",
      };
      return res.status(500).json(response);
    }
  },
};

module.exports = moviesController;
