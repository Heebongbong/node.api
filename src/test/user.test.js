const { follow } = require("../main/web/user/userSvc");
jest.mock("../main/models/user")
const User = require("../main/models/user");

const req = {
    user: {id: 1},
    params: {id: 2}
}, res = {
    send: jest.fn(),
    status: jest.fn((code)=>res),
}, next = jest.fn();

describe("user test", function() {
    test("유저와 팔로잉 추가, success 응답", async () => {

        User.findOne.mockReturnValue({
            addFollowing(id){
                return Promise.resolve(true)
            }
        })

        await follow(req, res, next);
        expect(res.send).toBeCalledWith('success')
    })
    test("유저 없으면 res.status(404).send(no user)", async function () {

        User.findOne.mockReturnValue(null)

        await follow(req, res, next);

        expect(res.send).toBeCalledWith('no user')
    })
    test("DB 에러시 next(e) 호출", async function () {

        User.findOne.mockReturnValue(Promise.reject('DB 에러'))

        await follow(req, res, next);

        expect(next).toBeCalledWith('DB 에러')
    })
})