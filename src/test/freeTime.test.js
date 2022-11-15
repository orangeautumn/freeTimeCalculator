
const app = require("../app");
const supertest = require("supertest");
const { useCase1, useCase2, useCase3, useCase4, useCase5, useCase6 } = require("./data");

describe('FreeTime Calculator', () => {

  test(" should execute usecase 1", async () => {
    await supertest(app).post("/freeTime")
      .send(useCase1.req)
      .expect(200)
      .then(async (response) => {
        expect(response.body).toEqual(useCase1.expectedRes);
      });
  });

  test(" should execute usecase 2", async () => {
    await supertest(app).post("/freeTime")
      .send(useCase2.req)
      .expect(200)
      .then(async (response) => {
        expect(response.body).toEqual(useCase2.expectedRes);
      });
  });


  test(" should execute usecase 3", async () => {
    await supertest(app).post("/freeTime")
      .send(useCase3.req)
      .expect(200)
      .then(async (response) => {
        expect(response.body).toEqual(useCase3.expectedRes);
      });
  });

  test(" should execute usecase 4", async () => {
    await supertest(app).post("/freeTime")
      .send(useCase4.req)
      .expect(200)
      .then(async (response) => {
        expect(response.body).toEqual(useCase4.expectedRes);
      });
  });

  test(" should execute usecase 5", async () => {
    await supertest(app).post("/freeTime")
      .send(useCase5.req)
      .expect(200)
      .then(async (response) => {
        expect(response.body).toEqual(useCase5.expectedRes);
      });
  });

  test(" should execute usecase 6", async () => {
    await supertest(app).post("/freeTime")
      .send(useCase6.req)
      .expect(200)
      .then(async (response) => {
        expect(response.body).toEqual(useCase6.expectedRes);
      });
  });

  test(" should execute usecase 7", async () => {
    await supertest(app).post("/freeTime")
      .send({})
      .expect(200)
      .then(async (response) => {
        expect(response.body).toEqual([]);
      });
  });

});

