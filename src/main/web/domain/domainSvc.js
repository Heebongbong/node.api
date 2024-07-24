const Domain = require('../../models/domain');
const { v4: uuidv4 } = require('uuid');

exports.createDomain = async (req, res, next) => {
    try {
        await Domain.create({
            UserId: req.user.id,
            host: req.body.host,
            type: req.body.type,
            clientSecret: uuidv4(),
        })
        res.redirect('/')
    } catch (e) {
        console.error(e);
        next(e)
    }
}