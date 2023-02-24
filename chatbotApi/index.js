const express = require('express')
const {Configuration, OpenAIApi} = require("openai")
require("dotenv").config()
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())

const configuration =  new Configuration({
    apiKey: process.env.OPENAI_KEY
})

const openai = new OpenAIApi(configuration)

const port = process.env.PORT || 5000;

app.post("/ask", async (req, res) => {
  const prompt = req.body.prompt;

  try {
    if (prompt === null) {
      throw new Error("Uh oh, no prompt was provided");
    }

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 64,
    });

    const completion = response.data.choices[0].text;

    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    console.log(error.message);
    res.status(204).json(error.message)
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));