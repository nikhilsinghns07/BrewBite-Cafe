"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Button, buttonVariants } from "@/components/ui/button";
import { Plus, Minus, Star, ChevronLeft, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProductDetail({ id }: { id: string }) {
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);

  useEffect(() => {
    if (product) {
      const purchases = JSON.parse(
        localStorage.getItem("cozy-purchases") || "[]"
      );
      if (purchases.includes(product.id)) {
        setHasPurchased(true);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/" className={cn(buttonVariants())}>
          Return Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Review submitted successfully!");
    setShowReviewForm(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-24 md:py-32">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ChevronLeft size={16} className="mr-1" /> Back to Menu
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-2 text-primary font-bold uppercase tracking-wide text-sm">
              {product.category}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center text-amber-500 text-sm">
                <Star size={16} fill="currentColor" />
                <span className="ml-1 font-medium text-foreground">4.8</span>
                <span className="text-muted-foreground ml-1">
                  ({product.reviews.length} reviews)
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center border border-border rounded-full bg-background h-12">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-full w-12 rounded-l-full hover:bg-secondary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus size={18} />
                </Button>
                <span className="w-12 text-center text-lg font-medium">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-full w-12 rounded-r-full hover:bg-secondary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={18} />
                </Button>
              </div>

              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 rounded-full h-12 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
            </div>

            <Separator className="mb-8" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block text-muted-foreground mb-1">
                  Preparation Time
                </span>
                <span className="font-medium">10-15 mins</span>
              </div>
              <div>
                <span className="block text-muted-foreground mb-1">
                  Calories
                </span>
                <span className="font-medium">320 kcal</span>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-bold">Customer Reviews</h2>
            {hasPurchased && !showReviewForm && (
              <Button variant="outline" onClick={() => setShowReviewForm(true)}>
                Write a Review
              </Button>
            )}
            {!hasPurchased && (
              <p className="text-sm text-muted-foreground italic">
                Purchase this item to leave a review
              </p>
            )}
          </div>

          {showReviewForm && (
            <div className="bg-card p-6 rounded-xl border border-border mb-10 animate-in fade-in slide-in-from-top-4">
              <h3 className="font-bold text-lg mb-4">Share your experience</h3>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="grid grid-cols-5 gap-2 max-w-[200px] mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-amber-400 hover:scale-110 transition-transform"
                    >
                      <Star
                        size={24}
                        fill={star <= 5 ? "currentColor" : "none"}
                      />
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review">Your Review</Label>
                  <Textarea
                    id="review"
                    placeholder="Tell us what you liked..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowReviewForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Submit Review</Button>
                </div>
              </form>
            </div>
          )}

          <div className="space-y-6">
            {product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-card p-6 rounded-xl border border-border/50 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-border">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.user}`}
                        />
                        <AvatarFallback>{review.user[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-sm">{review.user}</div>
                        <div className="text-xs text-muted-foreground">
                          {review.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < review.rating ? "currentColor" : "none"}
                          className={i < review.rating ? "" : "text-muted"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-[52px]">
                    &quot;{review.comment}&quot;
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-10 italic">
                No reviews yet. Be the first to try it!
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
