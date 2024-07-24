const { isLoggedIn, isNotLoggedIn } = require('../main/middle/logInCheck')

test('1 + 1은 2입니다', ()=>{
    expect(1+1).toEqual(2);
})

test('실패 예시 테스트', ()=>{
    expect(1+1).toEqual(3);
})

describe('logInCheck', () => {
    test('로그인되어 있으면 isNotLoggedIn', ()=>{
        const req = {
            isAuthenticated: jest.fn(() => true),
        }, res = {
            status: jest.fn((code)=>res),
            send: jest.fn(() => Promise.resolve(true)),
        }, next = jest.fn();
        isLoggedIn(req, res, next)
        expect(next).toBeCalledTimes(1)
    })
    test('로그인되어 있으면 isNotLoggedIn', ()=>{
        const req = {
            isAuthenticated: jest.fn(() => false),
        }, res = {
            redirect: jest.fn((code)=>res),
        }, next = jest.fn();
        isNotLoggedIn(req, res, next)
        expect(next).toBeCalledTimes(1)
    })
});