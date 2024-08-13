import { createClient } from "redis";

const client = createClient();

const processSubmission = async (submission: string) => {
  const { problemId, code, language } = JSON.parse(submission);

  console.log(`Processing submission for problemId ${problemId}...`);
  console.log(`Code: ${code}`);
  console.log(`Language: ${language}`);
  // Here you would add your actual processing logic

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Finished processing submission for problemId ${problemId}.`);
};

const startServer = async () => {
  try {
    await client.connect();
    console.log("Worker connected to Redis.");

    while (true) {
      try {
        const submission = await client.brPop("submissions", 0);
        // @ts-ignore
        await processSubmission(submission.element);
      } catch (error) {
        console.error("Error processing submission:", error);
        // Implement your error handling logic here. For example, you might want to push
        // the submission back onto the queue or log the error to a file.
      }
    }
  } catch (error) {
    console.log(error);
  }
};

startServer();
