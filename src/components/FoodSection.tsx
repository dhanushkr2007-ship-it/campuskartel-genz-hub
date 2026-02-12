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
    setShowLocation(true);
  };

  const confirmOrder = () => {
    toast.success("Order placed successfully! 🎉 Your food is on the way!");
    setCart([]);
    setShowCart(false);
    setShowLocation(false);
  };

  const activeCafe = cafes.find((c) => c.id === selectedCafe);

  return (
    <div className="space-y-6">
      {/* Hero */}
      <motion.div
        className="relative rounded-3xl overflow-hidden h-48 md:h-64"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <img src={heroBanner} alt="Food banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="font-marker text-3xl text-primary-foreground mb-1">Hungry much? 🍽️</h2>
          <p className="font-body text-primary-foreground/80 text-sm">4 cafes • 40 items • 0 regrets</p>
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
              className="card-hover rounded-2xl overflow-hidden bg-card border border-border text-left"
            >
              <div className="relative h-28">
                <img src={cafe.image} alt={cafe.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 text-2xl">{cafe.emoji}</span>
              </div>
              <div className="p-3">
                <h3 className="font-display font-bold text-sm text-card-foreground">{cafe.name}</h3>
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
                className="flex items-center gap-3 bg-card rounded-2xl p-3 border border-border card-hover"
              >
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-sm border ${item.veg ? "border-mint bg-mint/20" : "border-destructive bg-destructive/20"}`} />
                    <h4 className="font-display font-semibold text-sm text-card-foreground">{item.name}</h4>
                  </div>
                  <p className="font-display font-bold text-primary mt-1">₹{item.price}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(item, activeCafe.name)}
                  className="gradient-primary text-primary-foreground w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
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
            className="fixed bottom-6 right-6 gradient-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3 font-display font-bold z-50 pulse-glow"
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
            className="fixed inset-0 bg-foreground/50 z-50 flex items-end justify-center"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background w-full max-w-lg rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-xl">Your Cart 🛒</h3>
                <button onClick={() => setShowCart(false)}>
                  <X className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 bg-card rounded-xl p-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.cafeName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-display font-bold text-sm w-5 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-display font-bold text-sm w-14 text-right">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="flex justify-between font-display font-bold text-lg">
                  <span>Total</span>
                  <span className="text-gradient-primary">₹{totalAmount}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={placeOrder}
                className="w-full py-4 rounded-2xl gradient-accent text-accent-foreground font-display font-bold text-lg shadow-lg flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" /> Place Order
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
            className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowLocation(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background w-full max-w-md rounded-3xl p-6"
            >
              <h3 className="font-display font-bold text-xl mb-3">📍 Drop Location</h3>
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

              <select className="w-full p-3 rounded-xl bg-card border border-border font-body text-foreground mb-4">
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
                className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-display font-bold text-lg shadow-lg"
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
