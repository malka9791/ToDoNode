// import express from "express";
const renderApi = require("@api/render-api");

// const express = require("express");
const express = require("express");
const app = express();
const port = 3000;

// התחברות ל-Render API
renderApi.auth("rnd_42NLAwBctESxEP1BBH17XIjY3uZn");

 app.get("/services", async (req, res) => {
  try {
    const { data } = await renderApi.listServices({
      includePreviews: "true",
      limit: "20",
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello!!!");
});

app.listen(port, () => {
  console.log(`server runing in port: http://localhost:${port}`);
});
