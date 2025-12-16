"use client";

import { useCart } from "@/lib/cart-context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Minus, Plus, Trash2, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
          <div className="bg-secondary/50 p-6 rounded-full mb-6">
            <Trash2 size={48} className="text-muted-foreground" />
          </div>
          <h1 className="font-serif text-3xl font-bold mb-2">
            Your cart is empty
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            Looks like you haven&apos;t added anything to your cart yet. Browse
            our menu to find your favorites.
          </p>
          <Link
            href="/"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Browse Menu
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-24 md:py-32">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8">
          Your Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="flex-grow space-y-6">
            <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
              <div className="p-6 space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 sm:items-center"
                  >
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
                      <div className="flex-1 pr-4">
                        <h3 className="font-serif font-bold text-lg">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.category}
                        </p>
                        <p className="mt-1 font-medium text-primary">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between sm:mt-0 sm:gap-6">
                        <div className="flex items-center border border-border rounded-full bg-background">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-l-full hover:bg-secondary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus size={14} />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-r-full hover:bg-secondary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus size={14} />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="font-bold mb-1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10 h-auto p-0 px-2 py-1 text-xs"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 p-4 border-t border-border flex justify-between items-center">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
                <Link
                  href="/"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-card rounded-xl border border-border shadow-sm p-6 sticky top-24">
              <h2 className="font-serif text-xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span className="font-medium">
                    ${(cartTotal * 0.08).toFixed(2)}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${(cartTotal * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/order"
                className={cn(
                  buttonVariants(),
                  "w-full rounded-full h-12 text-lg shadow-lg hover:shadow-xl transition-all"
                )}
              >
                Proceed to Order <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
