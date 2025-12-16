"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Order() {
  const { items, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  if (items.length === 0 && !orderComplete) {
    router.push("/cart");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newOrderId = Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase();
      setOrderId(newOrderId);

      const purchasedItemIds = items.map((item) => item.id);
      const existingPurchases = JSON.parse(
        localStorage.getItem("cozy-purchases") || "[]"
      );
      const updatedPurchases = Array.from(
        new Set([...existingPurchases, ...purchasedItemIds])
      );
      localStorage.setItem("cozy-purchases", JSON.stringify(updatedPurchases));

      setOrderComplete(true);
      clearCart();
      setIsSubmitting(false);
      toast.success("Order placed successfully!");
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4">
          <Card className="max-w-md w-full border-none shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-10 pb-10 flex flex-col items-center text-center">
              <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <CheckCircle2 size={40} />
              </div>
              <h1 className="font-serif text-3xl font-bold mb-2">
                Order Confirmed!
              </h1>
              <p className="text-muted-foreground mb-6">
                Thank you for your order. We&apos;re preparing your delicious
                meal now.
              </p>

              <div className="bg-muted p-4 rounded-lg w-full mb-8 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                <p className="font-mono text-xl font-bold tracking-widest">
                  {orderId}
                </p>
              </div>

              <Button
                onClick={() => router.push("/")}
                className="w-full rounded-full h-12"
              >
                Back to Menu
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">
            Checkout
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <Card className="border-border shadow-sm">
                <CardHeader>
                  <CardTitle>Contact Details</CardTitle>
                  <CardDescription>
                    Where should we send your order updates?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    id="order-form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>

                    <Separator className="my-4" />

                    <h3 className="font-medium mb-2">Payment Method</h3>
                    <div className="bg-muted/50 p-4 rounded-lg border border-border text-sm text-muted-foreground">
                      ⚠️ This is a demo. No payment will be processed.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-border shadow-sm bg-muted/20">
                <CardHeader>
                  <CardTitle>Your Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 mb-6 custom-scrollbar">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-start"
                      >
                        <div className="flex gap-3">
                          <div className="bg-muted h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <p className="font-medium text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator className="mb-4" />

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span>${(cartTotal * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2">
                      <span>Total</span>
                      <span>${(cartTotal * 1.08).toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    form="order-form"
                    className="w-full rounded-full h-12 text-lg shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Processing..."
                      : `Pay $${(cartTotal * 1.08).toFixed(2)}`}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
