const Domain = require("../../models/domain");
const jwt = require('jsonwebtoken')
const User = require("../../models/user");

exports.createToken = async (req, res, next) => {
    const clientSecret = req.body.clientSecret;
    try {
        const domain = await Domain.findOne({
            where: { clientSecret },
            include: [
                {
                    model: User,
                    attributes: ['id', 'nick']
                }
            ]
        })
        if(!domain){
            return res.status(401).json({
                code: 401,
                message: '등록되지 않은 도메인입니다.'
            })
        }
        const token = jwt.sign({
            id: domain.User.id,
            nick: domain.User.nick
        }, process.env.JWT_SECRETKEY, {
            expiresIn: '10m',
            issuer: 'nodebird'
        })
        return res.json({
            code: 200,
            message: '토큰이 발급 되었습니다.',
            token
        })
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            code: 500,
            message: '서버 에러'
        })
    }
}
exports.tokenTest = (req, res, next)=>{
    res.json(res.locals.decoded);
}