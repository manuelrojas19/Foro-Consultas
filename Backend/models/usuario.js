/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
'use strict';
const {Model} = require('sequelize');
const bcrypt = require('bcryptjs');

// const AUTH_CREDENTIALS_ERROR = 'Password or email incorrect';

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
    }
  }

  Usuario.init({
    idBoleta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_Boleta',
    },

    email: {
      type: DataTypes.STRING,
      field: 'e_mail',
    },
    pNombre: {
      type: DataTypes.STRING,
      field: 'pNombre',
    },
    sNombre: {
      type: DataTypes.STRING,
      field: 'sNombre',
    },
    pApellido: {
      type: DataTypes.STRING,
      field: 'pApellido',
    },
    sApellido: {
      type: DataTypes.STRING,
      field: 'sApellido',
    },
    carrera: {
      type: DataTypes.STRING,
      field: 'carrera',
    },
    passUser: {
      type: DataTypes.STRING,
      field: 'pass_user',
    },
    confUser: {
      type: DataTypes.INTEGER,
      field: 'conf_user',
    },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false,
  },
  );

  Usuario.beforeCreate(async (usuario) => {
    if (usuario.passUser) {
      usuario.passUser = await bcrypt.hash(usuario.passUser, 8);
    }
  });

  Usuario.findByCredentials = async (credentials) => {
    const usario = await Usuario.findOne({
      where: {
        idBoleta: credentials.usuario,
      },
    });
    if (!usario) {
      throw new Error(AUTH_CREDENTIALS_ERROR);
    }
    const match = await bcrypt.compare(credentials.password, usario.passUser);
    if (!match) {
      throw new Error(AUTH_CREDENTIALS_ERROR);
    }
    return usario;
  };

  return Usuario;
};
