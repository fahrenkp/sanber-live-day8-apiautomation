const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

async function createUser() {
  try {
    const response = await request
      .post("/users")
      .send({
        name: "jhon doe",
        job: "leader",
      });

    expect(response.statusCode).to.eql(201);
    expect(response.body.name).to.eql("jhon doe");
    expect(response.body.job).to.eql("leader");

    // Tidak ada console.log di sini
  } catch (error) {
    console.error("Failed to create user:", error.message);
  }
}

describe("Post Create User di Web Reqres", function () {
  it("Create New User", async function () {
    await createUser();
  });
});

exports.createUser = {createUser}

