import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function openAI(description: string) {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "I need help writing about the description I provided, suggest me some ideas about the story unfolding if a story is provided or some tips about resume if resume details are provided",
      },

      {
        role: "user",
        content: JSON.stringify({
          description: [description],
        }),
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const messageContent = response.choices[0].message?.content;

  if (messageContent) {
    return messageContent;
  }
}
