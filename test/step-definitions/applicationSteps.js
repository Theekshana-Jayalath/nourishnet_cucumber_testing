import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import request from "supertest";
import { expect, assert } from "chai";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../src/index.js";

let response;
let mongoServer;

Before(async function () {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

After(async function () {
  await mongoose.disconnect();
  await mongoServer.stop();
});

Given("the API server is running", function () {
  // server running assumption
});

When("I send POST request to {string}", async function (endpoint) {

  const data = {
    name: "Test User",
    email: "testuser@gmail.com",
    contact: "0712345678",
    nic: "123456789V",
    address: "Colombo",
    city: "Colombo",
    role: "donor",
    donorType: "individual"
  };

  response = await request(app)
    .post(endpoint)
    .send(data);
});

Then("the response status should be {int}", function (status) {
  console.log("Actual Status:", response.status);
  console.log("Response Body:", response.body);
  assert.equal(response.status, status);

  // Intentional failure for demo.999 is not the real status
  // assert.equal(response.status, 999); 
});