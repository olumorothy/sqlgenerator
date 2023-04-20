import openaiClient from "./api.js";

const generator = async (queryDescription) => {
  const daVinci = async (queryDescription) => {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`,
      temperature: 0,
      max_tokens: 100,
    });

    return response.data.choices[0].text;
  };

  const chatGptApi = async (queryDescription) => {
    const messages = [
      {
        role: "system",
        content: `You are a translator from plain English to SQL`,
      },
      {
        role: "user",
        content: `Convert the following natural language description into a SQL query: \n\nshow all elements from the table users.`,
      },
      { role: "assistant", content: `SELECT * FROM users;` },
      {
        role: "user",
        content: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`,
      },
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    return response.data.choices[0].message.content;
  };

  // return await daVinci(queryDescription);
  return await chatGptApi(queryDescription);
};

export default generator;
