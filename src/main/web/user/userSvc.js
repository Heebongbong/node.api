const User = require("../../models/user");

exports.renderProfile = (req,res,next)=>{
    res.render('user/profile', {title: '내 정보 - NodeBird'})
}
exports.renderJoin = (req,res,next)=>{
    res.render('user/join', {title: '회원 가입 - NodeBird'})
}

exports.follow = async (req, res, next)=>{
    try {
        const user = await User.findOne({where: {id: req.user.id}})
        if(user){
            await user.addFollowing(parseInt(req.params.id, 10));
            res.send('success')
        }else res.status(404).send('no user')
    }catch (e) {
        console.error(e)
        next(e)
    }
}