import { getUsers, getSingleUser } from "./userService";

describe("getUsers", () => {
  it("should return an array of users", async () => {
    const users = await getUsers();
    expect(Array.isArray(users)).toBe(true);
  });

  it("should contain users with expected properties", async () => {
    const users = await getUsers();
    users.forEach((user) => {
      expect(user.id).toBeDefined();
      expect(user.firstName).toBeDefined();
      expect(user.email).toBeDefined();
    });
  });
});

describe("getSingleUser", () => {
  it("should return a single user with expected properties", async () => {
    const userId = 1;
    const user = await getSingleUser(userId);
    expect(user.id).toBe(userId);
    expect(user.firstName).toBeDefined();
    expect(user.email).toBeDefined();
  });

  it("should throw an error for non-existent user", async () => {
    const userId = 999;
    await expect(getSingleUser(userId)).rejects.toThrow(
      `Failed to fetch user with ID ${userId}`
    );
  });
});
