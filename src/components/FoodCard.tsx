
interface SummaryCard {
  title: string;
  value: string | number;
  status: string;
}

interface SummaryCardsProps {
  cards: SummaryCard[];
}

export function FoodCards({ cards }: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <p className="text-sm font-medium text-slate-500">
            {card.title}
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {card.value}
          </p>

          <p className="mt-5 text-sm text-slate-600">
            {card.status}
          </p>
        </div>
      ))}
    </div>
  );
}


export default function Dashboard() {
  const summaryCards: SummaryCard[] = [
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
    <main className="min-h-screen bg-slate-50 p-6">
      <h1 className="mb-6 text-2xl font-bold text-slate-900">
        Food Dashboard
      </h1>

      <FoodCards cards={summaryCards} />
    </main>
  );
}

