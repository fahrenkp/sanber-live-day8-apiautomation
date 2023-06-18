const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

describe("Post Create User di Web Reqres", function(){
    it("Create New User", async function(){
        const response = await request
                        .post("/users")
                        .send({
                            "name": "jhon doe",
                            "job": "leader"
                        });
        expect (await response.statusCode).to.eql(201);
        expect (await response.body.name).to.eql("jhon doe");
        expect (await response.body.job).to.eql("leader");
    })
})