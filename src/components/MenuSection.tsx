import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { categories, menuItems, MenuItem, MenuCategory } from "../data/menu";

export function MenuSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCategories = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return categories
      .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
      .map((cat) => {
        const items = menuItems.filter((item) => {
          if (item.category !== cat.id) return false;
          if (lowerSearch === "") return true;
          return (
            item.name.toLowerCase().includes(lowerSearch) ||
            cat.name.toLowerCase().includes(lowerSearch)
          );
        });
        return { cat, items };
      })
      .filter(({ items }) => items.length > 0);
  }, [search, activeCategory]);

  return (
    <section id="menu" className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: "#D4AF37" }}
        >
          Discover
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl"
          style={{ color: "#F8F8F8" }}
        >
          Our Menu
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-px w-20 mx-auto mt-5"
          style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
        />
      </div>

       {/* Search */}
      <div className="mb-8 relative max-w-lg mx-auto">
        <Search
          className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: "#666" }}
        />
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث في القائمة…"
          data-testid="input-menu-search"
          className="w-full pr-11 pl-10 py-3 rounded-2xl text-sm outline-none transition-all text-right"
          style={{
            background: "#141414",
            border: "1px solid #252525",
            color: "#F8F8F8",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.4)",
            fontFamily: "'Cairo', sans-serif",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#D4AF3780";
            e.currentTarget.style.boxShadow = "0 0 0 2px #D4AF3720, inset 0 1px 3px rgba(0,0,0,0.4)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "#252525";
            e.currentTarget.style.boxShadow = "inset 0 1px 3px rgba(0,0,0,0.4)";
          }}
        />
        {search && (
          <button
            onClick={() => { setSearch(""); inputRef.current?.focus(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full transition-colors"
            style={{ background: "#333", color: "#aaa" }}
            data-testid="button-clear-search"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-3 mb-10">
        {[{ id: "all", name: "All", emoji: "✨" }, ...categories].map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`button-category-${cat.id}`}
              className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all"
              style={{
                background: isActive ? "#D4AF37" : "#141414",
                color: isActive ? "#090909" : "#aaa",
                border: `1px solid ${isActive ? "#D4AF37" : "#252525"}`,
                fontWeight: isActive ? 600 : 400,
                boxShadow: isActive ? "0 0 12px #D4AF3740" : "none",
              }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Category Cards */}
      <AnimatePresence mode="popLayout">
        {filteredCategories.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCategories.map(({ cat, items }, index) => (
              <CategoryCard key={cat.id} cat={cat} items={items} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-24 text-center"
          >
            <p className="text-4xl mb-4">🔍</p>
            <p className="font-serif text-xl mb-2" style={{ color: "#D4AF37" }}>No results</p>
            <p className="text-sm" style={{ color: "#555" }}>Try a different name or category</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CategoryCard({ cat, items, index }: { cat: MenuCategory; items: MenuItem[]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      data-testid={`card-category-${cat.id}`}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#0f0f0f",
        border: "1px solid #1e1e1e",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{
          background: "linear-gradient(135deg, #1c1500 0%, #161616 100%)",
          borderBottom: "1px solid #252000",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
            style={{ background: "#2a1f00", border: "1px solid #3a2d00" }}
          >
            {cat.emoji}
          </div>
          <h3 className="font-serif text-lg tracking-wide" style={{ color: "#D4AF37" }}>
            {cat.name}
          </h3>
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded-full font-medium"
          style={{
            background: "#1f1800",
            color: "#a88a20",
            border: "1px solid #2e2400",
          }}
        >
          {items.length}
        </span>
      </div>

      {/* Items */}
      <div>
        {items.map((item, i) => (
          <div
            key={item.id}
            data-testid={`item-${item.id}`}
            className="flex items-center justify-between px-5 py-3 transition-colors"
            style={{
              borderTop: i > 0 ? "1px solid #161616" : "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "#141000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "transparent";
            }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#D4AF3750" }}
              />
              <span className="text-sm truncate" style={{ color: "#d0d0d0" }}>
                {item.name}
              </span>
            </div>
            <span
              className="text-sm font-semibold ml-4 flex-shrink-0 tabular-nums"
              style={{ color: "#D4AF37" }}
            >
              {typeof item.price === "number"
                ? `${item.price} EGP`
                : Object.entries(item.price)
                    .map(([size, price]) => `${size} ${price}`)
                    .join(" · ")}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
