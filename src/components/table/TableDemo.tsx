import { useQuery } from "@tanstack/react-query";
import type { PaginationState } from "@tanstack/react-table";
import { useState } from "react";

import { getFoodData } from "#lib/api";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Button } from "../ui/button";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
}

export function TableDemo() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 8,
  });

  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["foodData", pagination],
    queryFn: () =>
      getFoodData({
        page: pagination.pageIndex + 1,
        limit: pagination.pageSize,
      }),
  });

  if (isLoading) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white py-16 text-center shadow-sm">
        <p className="text-sm text-slate-500">
          Loading meals...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm text-red-500">
          {(error as Error).message}
        </p>
      </div>
    );
  }

  const meals: Meal[] = data?.meals ?? [];
  const pageCount = data?.totalPages ?? 0;

  return (
    <div
      className={`grid gap-6 ${
        selectedMeal
          ? "xl:grid-cols-[minmax(0,1fr)_420px]"
          : "grid-cols-1"
      }`}
    >
      {/* TABLE */}
      <div className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Table header */}
          <div className="border-b border-slate-200 px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Available Foods
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Browse available meals and select one to view details.
                </p>
              </div>

              <div className="rounded-lg bg-purple-50 px-3 py-2 text-xs font-medium text-purple-700">
                {meals.length} meals
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b bg-slate-50 hover:bg-slate-50">
                  <TableHead className="px-6 py-4 font-semibold text-slate-600">
                    Food Name
                  </TableHead>

                  <TableHead className="font-semibold text-slate-600">
                    Category
                  </TableHead>

                  <TableHead className="font-semibold text-slate-600">
                    Country
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {meals.map((meal) => {
                  const selected =
                    selectedMeal?.idMeal === meal.idMeal;

                  return (
                    <TableRow
                      key={meal.idMeal}
                      onClick={() => setSelectedMeal(meal)}
                      className={`cursor-pointer border-b transition-colors ${
                        selected
                          ? "bg-purple-50 hover:bg-purple-50"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <TableCell className="px-6 py-4">
                        <p
                          className={`font-medium ${
                            selected
                              ? "text-purple-700"
                              : "text-slate-900"
                          }`}
                        >
                          {meal.strMeal}
                        </p>
                      </TableCell>

                      <TableCell>
                        <span className="inline-flex rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                          {meal.strCategory}
                        </span>
                      </TableCell>

                      <TableCell className="text-slate-600">
                        {meal.strArea}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
            <p className="text-sm text-slate-500">
              Page{" "}
              <span className="font-medium text-slate-900">
                {pagination.pageIndex + 1}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-900">
                {pageCount}
              </span>
            </p>

            <div className="flex gap-2">
              <Button
                variant="outline"
                disabled={pagination.pageIndex === 0}
                onClick={() =>
                  setPagination((prev) => ({
                    ...prev,
                    pageIndex: prev.pageIndex - 1,
                  }))
                }
                className="border-slate-200"
              >
                Previous
              </Button>

              <Button
                variant="outline"
                disabled={
                  pagination.pageIndex + 1 >= pageCount
                }
                onClick={() =>
                  setPagination((prev) => ({
                    ...prev,
                    pageIndex: prev.pageIndex + 1,
                  }))
                }
                className="border-slate-200"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* SELECTED MEAL */}
      {selectedMeal && (
        <div className="h-fit overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Image */}
          <div className="relative">
            <img
              src={selectedMeal.strMealThumb}
              alt={selectedMeal.strMeal}
              className="h-64 w-full object-cover"
            />

            <button
              type="button"
              onClick={() => setSelectedMeal(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-sm transition hover:bg-white hover:text-slate-900"
            >
              ×
            </button>
          </div>

          {/* Details */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-slate-900">
              {selectedMeal.strMeal}
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700">
                {selectedMeal.strCategory}
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                {selectedMeal.strArea}
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Instructions
              </h3>

              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
                {selectedMeal.strInstructions}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}