const db = require("../../database/models");

const genresController = {
  list: async (req, res) => {
    try {
      let genres = await db.Genre.findAll();
      return res.status(201).json({
        ok: true,
        status: 201,
        genres : genres.length,
        data : genres
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

  detail: async (req, res) => {
    
    try {
    let genre = await db.Genre.findByPk(req.params.id)
    return res.status(200).json({
      ok : true,
      status: 201,
      data : genre
    })
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

module.exports = genresController;
