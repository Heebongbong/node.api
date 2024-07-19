const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV;
const config = require('./db')[env];

const db = {};
const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;

const modelPath = path.join(__dirname + '/../models');

fs
    // 현재 폴더의 모든 파일을 조회
    .readdirSync(modelPath)
    // 숨김 파일, index.js, js 확장자가 아닌 파일 필터링
    .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
    // 해당 파일의 모델 불러와서 init
    .forEach(file => {
        const model = require(path.join(modelPath, file));
        db[model.name] = model;
        model.initiate(sequelize);
    });

Object.keys(db).forEach(modelName => db[modelName]?.associate?.(db));

module.exports = db;