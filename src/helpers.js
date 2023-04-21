import { FETCH_TIMEOUT, sortingOrder } from "config";

export async function fetchJSON(url, timeout = FETCH_TIMEOUT) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, { signal: controller.signal });

  if (!response.ok) {
    throw new Error(response.status);
  }

  return await response.json();
}

export function timer(wait) {
  return new Promise((resolve) => setTimeout(resolve, wait));
}

export function getCompareFunction(property, order) {
  if (order === sortingOrder.ASCENDING) {
    return function compareAscending(a, b) {
      if (a[property] > b[property]) {
        return 1;
      }

      if (a[property] < b[property]) {
        return -1;
      }

      return 0;
    };
  }

  return function compareDescending(a, b) {
    if (a[property] < b[property]) {
      return 1;
    }

    if (a[property] > b[property]) {
      return -1;
    }

    return 0;
  };
}

export function range(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}
