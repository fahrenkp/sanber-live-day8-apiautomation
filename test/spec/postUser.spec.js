const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

const getUser = require("./getUser.spec")

describe("Post Create User di Web Reqres", function(){
    it("Create New User", async function(){
        const response = await request
                        .post("/users")
                        .send({
                            "name": "jhon doe",
                            "job": "leader"
                        });
    

        
    })
})