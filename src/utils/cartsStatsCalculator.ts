import { Cart } from "../types/cartTypes";

interface CartStats {
  users: number;
  activeCarts: number;
  totalValue: number;
  totalItems: number;
}

function calculateCartStats(carts: Cart[]): CartStats {
  const uniqueUserIds: Set<number> = new Set();
  const uniqueCartIds: number[] = [];
  let totalValue = 0;
  let totalItems = 0;

  for (const cart of carts) {
    uniqueUserIds.add(cart.userId);

    if (!uniqueCartIds.includes(cart.id)) {
      uniqueCartIds.push(cart.id);
    }

    totalValue += cart.total;
    totalItems += cart.totalQuantity;
  }

  const stats: CartStats = {
    users: uniqueUserIds.size,
    activeCarts: uniqueCartIds.length,
    totalValue,
    totalItems,
  };

  return stats;
}

export default calculateCartStats;
