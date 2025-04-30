import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Add useNavigate
import { LogIn, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/contexts/UserContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const { userName, setUserName, setUserMobile } = useUser(); // ✅ Destructure setters
  const navigate = useNavigate(); // ✅ For redirect

  const handleLogout = () => {
    setUserName("");
    setUserMobile("");
    localStorage.removeItem("fruitNinjaUserName");
    localStorage.removeItem("fruitNinjaUserMobile");
    navigate("/"); // ✅ Redirect to home
  };

  return (
    <header className="py-4 px-4 border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="fruit-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl bg-red-300 rounded-full">🍉</span>
          <span className="text-xl font-mono">Fruit Ninja</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="hidden md:block hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hidden md:block hover:text-gray-600 transition-colors"
          >
            About
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-fruit-green rounded-full flex items-center justify-center text-xs">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </div>
            )}
          </Link>

          {userName ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full w-8 h-8 border flex items-center justify-center">
                  <User className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/order-history">Order History</Link>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              to="/signup"
              className="hover:text-gray-600 transition-colors"
            >
              <LogIn className="w-6 h-6" />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
