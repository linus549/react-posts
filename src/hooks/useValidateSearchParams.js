import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sortingProperty, sortingOrder } from "config";

function useValidateSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const sortby = searchParams.get("sortby");
    const order = searchParams.get("order");
    const isValidSortby = Object.values(sortingProperty).includes(sortby);
    const isValidOrder = Object.values(sortingOrder).includes(order);

    if (!isValidSortby || !isValidOrder) {
      setSearchParams(
        {
          ...Object.fromEntries(searchParams.entries()),
          sortby: isValidSortby ? sortby : Object.values(sortingProperty)[0],
          order: isValidOrder ? order : Object.values(sortingOrder)[0],
        },
        { replace: true }
      );
    }
  }, [searchParams, setSearchParams]);
}

export default useValidateSearchParams;
