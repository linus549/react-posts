import { useState, useEffect } from "react";
import { SCROLL_DELAY } from "config";

function usePagination(items, itemsPerPage, scrollToRef, shouldScroll) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const currentItems = [];

  for (
    let i = (currentPage - 1) * itemsPerPage;
    i < currentPage * itemsPerPage && i < items.length;
    i++
  ) {
    currentItems.push(items[i]);
  }

  const currentStart = (currentPage - 1) * itemsPerPage + 1;
  const currentEnd = (currentPage - 1) * itemsPerPage + currentItems.length;

  useEffect(
    function scrollOnPageChange() {
      if (shouldScroll && scrollToRef.current) {
        setTimeout(() => scrollToRef.current.scrollIntoView(), SCROLL_DELAY);
      }
    },
    [shouldScroll, scrollToRef, currentPage]
  );

  return [
    currentPage,
    setCurrentPage,
    currentStart,
    currentEnd,
    pageCount,
    currentItems,
  ];
}

export default usePagination;
