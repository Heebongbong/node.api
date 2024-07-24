const rateLimit = require("express-rate-limit");
const User = require("../models/user");

exports.apiLimit = async (req, res, next) => {
    const user = res?.locals?.decode?.id && await User.findOne({where: {id: res.locals.decode.id}})

    rateLimit({
        windowMs: 60 * 1000,
        max: user?.type === 'premium' ? 100 : 1,
        handler(req, res) {
            res.status(this.statusCode).json({
                code: this.statusCode,
                message: '1분에 한 번만 요청할 수 있습니다.'
            })
        }
    })(req, res, next)
}

exports.deprecated = (req, res, next)=>{
    res.status(410).json({
        code: 410,
        message: '새로운 버전이 나왔습니다.'
    })
}