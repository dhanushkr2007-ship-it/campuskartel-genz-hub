import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Minus, MapPin, X, Star } from "lucide-react";
import { cafes, type MenuItem } from "@/data/cafes";
import heroBanner from "@/assets/hero-banner.jpg";
import { toast } from "sonner";

interface CartItem extends MenuItem {
  quantity: number;
  cafeName: string;
}

const FoodSection = () => {
  const [selectedCafe, setSelectedCafe] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [orderType, setOrderType] = useState<"preorder" | "delivery" | null>(null);

  const addToCart = (item: MenuItem, cafeName: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) => (c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
      }
      return [...prev, { ...item, quantity: 1, cafeName }];
    });
    toast.success(`${item.name} added! 🔥`);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => (c.id === id ? { ...c, quantity: c.quantity + delta } : c))
        .filter((c) => c.quantity > 0)
    );
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const placeOrder = () => {
    if (!orderType) {
      toast.error("Please select Pre Order or Delivery!");
      return;
    }
    if (orderType === "delivery") {
      setShowLocation(true);
    } else {
      confirmPreOrder();
    }
  };

  const confirmPreOrder = () => {
    toast.success("Pre-order placed! 🎉 The restaurant has been notified. Skip the queue when you arrive!");
    setCart([]);
    setShowCart(false);
    setOrderType(null);
  };

  const confirmOrder = () => {
    toast.success("Order placed successfully! 🎉 Your food is on the way!");
    setCart([]);
    setShowCart(false);
    setShowLocation(false);
    setOrderType(null);
  };

  const activeCafe = cafes.find((c) => c.id === selectedCafe);

  return (
    <div className="space-y-6">
      {/* Hero */}
      <motion.div
        className="relative rounded-3xl overflow-hidden h-48 md:h-64 neon-border"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <img src={heroBanner} alt="Food banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="section-heading text-3xl mb-1">Hungry much? 🍽️</h2>
          <p className="font-body text-foreground/70 text-sm">4 cafes • 40 items • 0 regrets</p>
        </div>
      </motion.div>

      {/* Cafe Grid */}
      {!selectedCafe ? (
        <div className="grid grid-cols-2 gap-4">
          {cafes.map((cafe, i) => (
            <motion.button
              key={cafe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCafe(cafe.id)}
              className="rounded-2xl overflow-hidden bg-card neon-border text-left transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative h-28">
                <img src={cafe.image} alt={cafe.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-2 left-2 text-2xl">{cafe.emoji}</span>
              </div>
              <div className="p-3">
                <h3 className="font-display font-bold text-sm text-foreground">{cafe.name}</h3>
                <p className="text-xs text-muted-foreground font-body">{cafe.tagline}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-accent text-accent" />
                  <span className="text-xs font-body text-muted-foreground">4.{5 + i}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        /* Menu View */
        <div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedCafe(null)}
            className="flex items-center gap-2 mb-4 font-display font-semibold text-primary"
          >
            ← Back to cafes
          </motion.button>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{activeCafe?.emoji}</span>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground">{activeCafe?.name}</h3>
              <p className="text-sm text-muted-foreground font-body">{activeCafe?.tagline}</p>
            </div>
          </div>

          <div className="grid gap-3">
            {activeCafe?.menu.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-card rounded-2xl p-3 neon-border transition-all hover:shadow-md hover:shadow-primary/5"
              >
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-sm border ${item.veg ? "border-mint bg-mint/20" : "border-destructive bg-destructive/20"}`} />
                    <h4 className="font-display font-semibold text-sm text-foreground">{item.name}</h4>
                  </div>
                  <p className="font-display font-bold text-primary mt-1">₹{item.price}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(item, activeCafe.name)}
                  className="gradient-primary text-primary-foreground w-9 h-9 rounded-xl flex items-center justify-center shadow-md shadow-primary/20"
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Floating Cart Button */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.button
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCart(true)}
            className="fixed bottom-12 right-6 gradient-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-2xl shadow-primary/30 flex items-center gap-3 font-display font-bold z-50 pulse-glow"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems} items • ₹{totalAmount}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-end justify-center"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full max-w-lg rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto neon-border"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-xl text-foreground">Your Cart 🛒</h3>
                <button onClick={() => setShowCart(false)}>
                  <X className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 bg-muted/30 rounded-xl p-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-sm text-foreground">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.cafeName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-display font-bold text-sm w-5 text-center text-foreground">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-display font-bold text-sm w-14 text-right text-foreground">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="flex justify-between font-display font-bold text-lg text-foreground">
                  <span>Total</span>
                  <span className="text-gradient-primary">₹{totalAmount}</span>
                </div>
              </div>

              {/* Order Type Selection */}
              <div className="mb-4">
                <p className="font-display font-semibold text-sm text-foreground mb-3">How would you like your order?</p>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setOrderType("preorder")}
                    className={`p-4 rounded-2xl border-2 transition-all text-left ${
                      orderType === "preorder"
                        ? "border-primary bg-primary/10 shadow-md shadow-primary/10"
                        : "border-border bg-muted/20 hover:border-muted-foreground/30"
                    }`}
                  >
                    <span className="text-2xl block mb-1">⏩</span>
                    <span className="font-display font-bold text-sm text-foreground block">Pre Order</span>
                    <span className="text-xs text-muted-foreground font-body">Skip the queue!</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setOrderType("delivery")}
                    className={`p-4 rounded-2xl border-2 transition-all text-left ${
                      orderType === "delivery"
                        ? "border-accent bg-accent/10 shadow-md shadow-accent/10"
                        : "border-border bg-muted/20 hover:border-muted-foreground/30"
                    }`}
                  >
                    <span className="text-2xl block mb-1">🛵</span>
                    <span className="font-display font-bold text-sm text-foreground block">Delivery</span>
                    <span className="text-xs text-muted-foreground font-body">To your location</span>
                  </motion.button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={placeOrder}
                className={`w-full py-4 rounded-2xl font-display font-bold text-lg shadow-lg flex items-center justify-center gap-2 ${
                  orderType
                    ? "gradient-accent text-accent-foreground shadow-accent/20"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                {orderType === "preorder" ? "⏩ Confirm Pre Order" : orderType === "delivery" ? <><MapPin className="w-5 h-5" /> Place Order</> : "Select order type"}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Location Modal */}
      <AnimatePresence>
        {showLocation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowLocation(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full max-w-md rounded-3xl p-6 neon-border"
            >
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">📍 Drop Location</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">Where should we deliver on campus?</p>

              <div className="rounded-2xl overflow-hidden mb-4 border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1000000000000"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Delivery location"
                />
              </div>

              <select className="w-full p-3 rounded-xl bg-muted border border-border font-body text-foreground mb-4">
                <option>🏫 Main Building Entrance</option>
                <option>📚 Library Gate</option>
                <option>🏟️ Sports Complex</option>
                <option>🅿️ Parking Area</option>
                <option>🏠 Hostel Block A</option>
                <option>🏠 Hostel Block B</option>
              </select>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={confirmOrder}
                className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-display font-bold text-lg shadow-lg shadow-primary/30"
              >
                Confirm Order 🚀
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FoodSection;
