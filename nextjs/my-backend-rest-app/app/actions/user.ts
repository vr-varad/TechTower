"use server";
import client from "@/db";

export async function signUp(username: string, password: string) {
  await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  return {
    message: "Succesfully Logged In",
  };
}
