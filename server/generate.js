import openaiClient from "./api.js";

const generator = async (queryDescription) => {
  const response = await openaiClient.createCompletion({
    model: "text-davinci-003",
    prompt: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.data.choices[0].text;
};

export default generator;
