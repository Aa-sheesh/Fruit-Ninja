import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/contexts/CartContext";
import { UserProvider } from "@/contexts/UserContext"; // ✅ Import the missing provider

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider> {/* ✅ Wrap inside UserProvider */}
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                  <Route path="/order-history" element={<OrderHistoryPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <footer className="py-4 bg-white border-t text-center text-sm text-gray-500">
                © 2025 Fruit Ninja. All rights reserved.
              </footer>
            </div>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
