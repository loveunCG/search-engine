'use strict';
module.exports = (sequelize, DataTypes) => {
  var DataWare = sequelize.define('DataWare', {
    url: DataTypes.STRING,
    location: DataTypes.STRING,
    property: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  DataWare.associate = function(models) {
    // associations can be defined here
  };
  return DataWare;
};