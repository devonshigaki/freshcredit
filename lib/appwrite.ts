// "use server";

// import { Client, Account, Databases, Users } from "node-appwrite";
// import { cookies } from "next/headers";

// export async function createSessionClient() {
//   const client = new Client()
//     .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//     .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

//   const session = cookies().get("appwrite-session");

//   console.log("Session cookie:", session); // Log the session cookie

//   if (!session || !session.value) {
//     console.log("No session cookie found");
//     return null;
//   }

//   client.setSession(session.value);

//   const account = new Account(client);

//   try {
//     const user = await account.get();
//     console.log("User retrieved:", user); // Log the user object
//     return { account };
//   } catch (error) {
//     console.error("Error retrieving user:", error);
//     return null;
//   }
// }

// export async function createAdminClient() {
//   try {
//     const client = new Client()
//       .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//       .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

//     const account = new Account(client);
//     const database = new Databases(client);

//     console.log('Admin client created successfully');
//     return { account, database };
//   } catch (error) {
//     console.error('Error creating admin client:', error);
//     throw error;
//   }
// }






"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = cookies().get("appwrite-session");

  console.log("Session cookie:", session); // Log the session cookie

  if (!session || !session.value) {
    console.log("No session cookie found");
    return null;
  }

  client.setSession(session.value);

  const account = new Account(client);

  try {
    const user = await account.get();
    console.log("User retrieved:", user); // Log the user object
    return { account };
  } catch (error) {
    console.error("Error retrieving user:", error);
    return null;
  }
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}

