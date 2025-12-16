import { Product } from "@/lib/data";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card rounded-xl h-full flex flex-col">
      <Link
        href={`/product/${product.id}`}
        className="block overflow-hidden relative aspect-[4/3] cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>

      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="text-xs font-medium text-primary uppercase tracking-wider">
            {product.category}
          </div>
          <div className="font-serif font-bold text-lg">
            ${product.price.toFixed(2)}
          </div>
        </div>

        <Link
          href={`/product/${product.id}`}
          className="font-serif font-bold text-lg mb-2 block hover:text-primary transition-colors cursor-pointer line-clamp-1"
        >
          {product.name}
        </Link>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          onClick={() => addToCart(product)}
          className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          variant="secondary"
        >
          <Plus size={16} className="mr-2" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
