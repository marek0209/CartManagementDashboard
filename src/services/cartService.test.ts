import { getCarts } from "./cartService";

describe("getCarts", () => {
  it("should return an array of carts", async () => {
    const carts = await getCarts();
    expect(Array.isArray(carts)).toBe(true);
  });

  it("should contain carts with expected properties", async () => {
    const carts = await getCarts();
    carts.forEach((cart) => {
      expect(cart.id).toBeDefined();
      expect(cart.userId).toBeDefined();
      expect(cart.products).toBeDefined();
      expect(cart.products[0].id).toBeDefined();
    });
  });
});
