import { getCarts, getSingleCart } from "./cartService";

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

describe("getSingleCart", () => {
  it("should return a single cart with expected properties", async () => {
    const cartId = 1;
    const cart = await getSingleCart(cartId);
    expect(cart.id).toBe(cartId);
    expect(cart.userId).toBeDefined();
    expect(cart.products).toBeDefined();
    expect(cart.total).toBeDefined();
    expect(cart.totalProducts).toBeDefined();
    expect(cart.totalQuantity).toBeDefined();
    expect(cart.discountedTotal).toBeDefined();
  });

  it("should throw an error for non-existent cart", async () => {
    const cartId = 999;
    await expect(getSingleCart(cartId)).rejects.toThrow(
      "The requested resource was not found."
    );
  });
});
