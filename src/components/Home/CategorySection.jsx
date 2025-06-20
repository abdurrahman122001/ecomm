import React from "react";
import Image from "next/image";
import Link from "next/link";

function CategorySection({ sectionTitle, categories }) {
  // Show up to 4 categories
  const visibleCategories = categories.slice(0, 4);

  return (
    <div className="w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          {sectionTitle}
        </h2>
        <div className="flex flex-row justify-center gap-8">
          {visibleCategories.map((item, idx) => (
            <Link
              href={{
                pathname: "/products",
                query: { category: item.slug },
              }}
              passHref
              key={idx}
            >
              <a
                className="block w-[280px] rounded-2xl overflow-hidden shadow-md relative group transition-transform duration-300 hover:scale-105"
                style={{
                  minHeight: "400px",
                  maxWidth: "280px",
                }}
              >
                <div className="w-full h-[400px] relative">
                  <Image
                    src={
                      item.image.startsWith("http")
                        ? item.image
                        : process.env.NEXT_PUBLIC_BASE_URL + item.image
                    }
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    priority={idx === 0}
                  />
                  {/* Overlay gradient at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <span
                    className="absolute bottom-6 left-0 w-full text-center text-white text-lg sm:text-xl font-semibold drop-shadow-lg z-20"
                    style={{ textShadow: "0 2px 6px rgba(0,0,0,0.35)" }}
                  >
                    {item.name}
                  </span>

                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
