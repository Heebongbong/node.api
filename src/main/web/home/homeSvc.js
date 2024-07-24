const Domain = require("../../models/domain");
const User = require("../../models/user");

exports.renderLogin = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where : { id: req.user?.id || null },
            include: { model: Domain }
        })
        res.render('index', {
            user,
            domains: user?.Domains,
        })
    } catch (e) {
        console.error(e);
        next(e)
    }
}