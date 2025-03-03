import { createFileRoute, useNavigate } from "@tanstack/react-router";
import * as v from "valibot";

const Category = v.union([
  v.literal("electronics"),
  v.literal("clothing"),
  v.literal("furniture"),
  v.literal("books"),
]);

const ItemFilters = v.object({
  query: v.optional(v.string()),
  hasDiscount: v.boolean(),
  categories: v.optional(v.array(Category)),
});

type ItemFilters = v.InferInput<typeof ItemFilters>;

type Category = "electronics" | "clothing" | "furniture" | "books";

export const Route = createFileRoute("/search")({
  validateSearch: (search) => v.parse(ItemFilters, search),
  component: Search,
});

function Search() {
  const { query, categories, hasDiscount } = Route.useSearch();

  const navigate = useNavigate({ from: Route.fullPath });

  const updateFilters = (name: keyof ItemFilters, value: any) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  };

  return (
    <>
      <h1>Search</h1>
      You searched for: {""}
      <input
        value={query}
        onChange={(e) => updateFilters("query", e.target.value)}
      />
      <input
        type="checkbox"
        checked={hasDiscount}
        onChange={(e) => updateFilters("hasDiscount", e.target.checked)}
      />
      <select
        multiple
        onChange={(e) =>
          updateFilters(
            "categories",
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
        value={categories}
      >
        {["electronics", "clothing", "furniture", "books"].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</div>
    </>
  );
}
