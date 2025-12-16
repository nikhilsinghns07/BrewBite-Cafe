import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/lib/cart-context";
import { Toaster as HotToaster } from "react-hot-toast";

import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Order from "@/pages/Order";
import ProductDetail from "@/pages/ProductDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/order" component={Order} />
      <Route path="/orders" component={Order} /> {/* Reusing order page for nav link consistency in mockup */}
      <Route path="/product/:id" component={ProductDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster /> {/* Shadcn Toaster */}
          <HotToaster position="bottom-right" toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            },
            className: 'font-sans',
          }} />
          <Router />
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
