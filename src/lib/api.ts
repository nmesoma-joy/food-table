interface Params {
  page: number;
  limit: number;
}

export async function getFoodData({ page, limit }: Params) {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }

  const data = await response.json();

  const meals = data.meals ?? [];

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    meals: meals.slice(start, end),
    total: meals.length,
    page,
    limit,
    totalPages: Math.ceil(meals.length / limit),
  };
}