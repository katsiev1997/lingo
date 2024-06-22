import { auth } from "@clerk/nextjs";

const adminIds = ["user_2gAy9L1o1P5rYIEYgrOvGbByf8R"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
