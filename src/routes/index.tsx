
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/header/layout";
import { FoodCards } from "../components/FoodCard";
import { TableDemo } from "../components/table/TableDemo";

function DashboardPage() {
  const cards = [
    {
      title: "Total Meals",
      value: 120,
      status: "Meals recorded",
    },
    {
      title: "Food Waste",
      value: "12 kg",
      status: "This week",
    },
    {
      title: "Donations",
      value: 45,
      status: "Meals donated",
    },
    {
      title: "Food Saved",
      value: "85 kg",
      status: "Saved this month",
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <section>
          <h1 className="mb-6 text-2xl font-bold text-slate-900">
            Food Dashboard
          </h1>

          <FoodCards cards={cards} />
        </section>

        <section>
          <TableDemo />
        </section>
      </div>
    </Layout>
  );
}

export const Route = createFileRoute("/")({
  component: DashboardPage,
});