import { useDispatch, useSelector } from "react-redux";
import type{ RootState } from "../store/store";
import { setFilter, setSort, type FilterType, type SortType } from "../store/slices/uiSlice";
import type { ChangeEvent } from "react";

export default function FilterBar() {
  const dispatch = useDispatch();
  const { filter, sort } = useSelector((state: RootState) => state.ui);

  return (
    <div className="flex gap-4 mb-4 p-3 border rounded bg-gray-50">
      {/* Filter */}
      <div>
        <label className="mr-2">Filter:</label>
        <select
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value as FilterType))}
          className="border p-1"
        >
          <option value="all">All</option>
          <option value="highPriority">High Priority</option>
          <option value="dueToday">Due Today</option>
        </select>
      </div>

      {/* Sort */}
      <div>
        <label className="mr-2">Sort:</label>
        <select
          value={sort}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(setSort(e.target.value as SortType))}
          className="border p-1"
        >
          <option value="none">None</option>
          <option value="priority">By Priority</option>
          <option value="dueDate">By Due Date</option>
        </select>
      </div>
    </div>
  );
}
