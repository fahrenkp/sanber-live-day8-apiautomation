const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

const getUser = require("../spec/getUser.spec")
const createUser = require("../spec/postUserExport.spec")
