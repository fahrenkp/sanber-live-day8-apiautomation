const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

const AUTH = "Bearierxxxxxxxxxxxxxxx"     // ini auth nya 

describe("Create new user with auth", function(){
    it("Create New User", async function(){
        const response = await request
                        .post("/users")
                        .send({
                            "name": "jhon doe",
                            "job": "leader"
                        })
                        .set({
                            Authorization : AUTH,  // pemanggilan auth dari diatas
                            Accept : "application/json"  //ini kalau ada header di apinya

                        })
        expect (await response.statusCode).to.eql(201);
        console.log(response.body);
       
    })
})