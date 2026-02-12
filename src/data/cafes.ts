export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  veg: boolean;
}

export interface Cafe {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  image: string;
  menu: MenuItem[];
}

export const cafes: Cafe[] = [
  {
    id: "grains-gossips",
    name: "Grains & Gossips",
    emoji: "🌾",
    tagline: "Where chai meets chit-chat",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    menu: [
      { id: "gg1", name: "Samosa", price: 20, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop", veg: true },
      { id: "gg2", name: "Vada Pav", price: 25, image: "https://images.unsplash.com/photo-1606491956689-2ea866880049?w=300&h=200&fit=crop", veg: true },
      { id: "gg3", name: "Poha", price: 35, image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=300&h=200&fit=crop", veg: true },
      { id: "gg4", name: "Upma", price: 40, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop", veg: true },
      { id: "gg5", name: "Bread Pakora", price: 30, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop", veg: true },
      { id: "gg6", name: "Aloo Tikki", price: 35, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop", veg: true },
      { id: "gg7", name: "Paneer Roll", price: 60, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop", veg: true },
      { id: "gg8", name: "Spring Roll", price: 50, image: "https://images.unsplash.com/photo-1548507200-e9e0e7e5e0b1?w=300&h=200&fit=crop", veg: true },
      { id: "gg9", name: "Maggi", price: 40, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=200&fit=crop", veg: true },
      { id: "gg10", name: "Veg Sandwich", price: 45, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop", veg: true },
    ],
  },
  {
    id: "bits-bites",
    name: "Bits & Bites",
    emoji: "🍔",
    tagline: "Byte-sized happiness",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop",
    menu: [
      { id: "bb1", name: "Veg Burger", price: 60, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop", veg: true },
      { id: "bb2", name: "French Fries", price: 50, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop", veg: true },
      { id: "bb3", name: "Pizza Slice", price: 70, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop", veg: true },
      { id: "bb4", name: "Pasta", price: 80, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=200&fit=crop", veg: true },
      { id: "bb5", name: "Nuggets", price: 70, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=200&fit=crop", veg: false },
      { id: "bb6", name: "Hot Dog", price: 55, image: "https://images.unsplash.com/photo-1612392062126-2f5b0ced0ec3?w=300&h=200&fit=crop", veg: false },
      { id: "bb7", name: "Nachos", price: 65, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop", veg: true },
      { id: "bb8", name: "Garlic Bread", price: 45, image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=300&h=200&fit=crop", veg: true },
      { id: "bb9", name: "Paneer Wrap", price: 75, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop", veg: true },
      { id: "bb10", name: "Momos", price: 50, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop", veg: true },
    ],
  },
  {
    id: "food-truck",
    name: "Food Truck",
    emoji: "🚚",
    tagline: "Street food, campus style",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600&h=400&fit=crop",
    menu: [
      { id: "ft1", name: "Veg Biryani", price: 90, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop", veg: true },
      { id: "ft2", name: "Fried Rice", price: 70, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop", veg: true },
      { id: "ft3", name: "Manchurian", price: 65, image: "https://images.unsplash.com/photo-1645696301019-35adcc18fc89?w=300&h=200&fit=crop", veg: true },
      { id: "ft4", name: "Chow Mein", price: 60, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop", veg: true },
      { id: "ft5", name: "Frankie", price: 55, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop", veg: true },
      { id: "ft6", name: "Shawarma", price: 80, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=200&fit=crop", veg: false },
      { id: "ft7", name: "Kebab Roll", price: 85, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop", veg: false },
      { id: "ft8", name: "Cutlet", price: 35, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop", veg: true },
      { id: "ft9", name: "Pav Bhaji", price: 70, image: "https://images.unsplash.com/photo-1606491956689-2ea866880049?w=300&h=200&fit=crop", veg: true },
      { id: "ft10", name: "Chole Bhature", price: 80, image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=300&h=200&fit=crop", veg: true },
    ],
  },
  {
    id: "dosa-corner",
    name: "Dosa Corner",
    emoji: "🥞",
    tagline: "Crispy, golden, legendary",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=400&fit=crop",
    menu: [
      { id: "dc1", name: "Masala Dosa", price: 60, image: "https://images.unsplash.com/photo-1668236543090-82eb5eab6fee?w=300&h=200&fit=crop", veg: true },
      { id: "dc2", name: "Plain Dosa", price: 45, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop", veg: true },
      { id: "dc3", name: "Rava Dosa", price: 55, image: "https://images.unsplash.com/photo-1668236543090-82eb5eab6fee?w=300&h=200&fit=crop", veg: true },
      { id: "dc4", name: "Onion Dosa", price: 55, image: "https://images.unsplash.com/photo-1668236543090-82eb5eab6fee?w=300&h=200&fit=crop", veg: true },
      { id: "dc5", name: "Mysore Masala", price: 70, image: "https://images.unsplash.com/photo-1668236543090-82eb5eab6fee?w=300&h=200&fit=crop", veg: true },
      { id: "dc6", name: "Set Dosa", price: 50, image: "https://images.unsplash.com/photo-1668236543090-82eb5eab6fee?w=300&h=200&fit=crop", veg: true },
      { id: "dc7", name: "Uttapam", price: 55, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop", veg: true },
      { id: "dc8", name: "Idli (2 pcs)", price: 30, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop", veg: true },
      { id: "dc9", name: "Medu Vada", price: 35, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop", veg: true },
      { id: "dc10", name: "Pongal", price: 50, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop", veg: true },
    ],
  },
];
