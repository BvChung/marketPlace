"use server";

type UserCreateDB = {
  name: string;
  email: string;
};

export async function createUser(formData: FormData) {
  if (!formData.get("name")) {
    throw new Error("Name is required");
  }

  if (!formData.get("email")) {
    throw new Error("Email is required");
  }
}
