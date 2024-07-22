const Post = require("../../models/post");
const Hashtag = require("../../models/hashtag");
exports.getMyPost = (req, res, next) => {
    Post.findAll({where: {userId: res.locals.decoded.id}})
        .then((posts)=>{
            res.json({
                code: 200,
                payload: posts
            })
        })
        .catch(e=>{
            console.error(e)
            return res.status(500).json({
                code: 500,
                message: '서버에러'
            })
        })
}

exports.getPostByHashtag = async (req, res, next) => {
    try {
        const hashtag = await Hashtag.findOne({where: {title: req.params.title}})
        if(!hashtag) return res.status(404).json({
            conde: 404,
            message: '검색결과가 없습니다.'
        })
        return res.json({
            code: 200,
            payload: hashtag
        })
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            conde: 500,
            message: '서버 에러'
        })
    }
}