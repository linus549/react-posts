import { useState, useReducer, useEffect } from "react";
import { LOADER_DEMO_DELAY } from "config";

function useFakePostRequest() {
  const [request, setRequest] = useState(null);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    if (request === null) {
      return;
    }

    let ignore = false;

    async function postData() {
      dispatch({ type: "init" });

      const result = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(request.result);
        }, LOADER_DEMO_DELAY)
      );

      if (!ignore) {
        dispatch({ type: "finish", payload: result });
      }
    }

    postData();

    return () => {
      ignore = true;
    };
  }, [request]);

  function reset() {
    setRequest(null);
    dispatch({ type: "reset" });
  }

  return [state.isLoading, state.result, setRequest, reset];
}

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return INITIAL_STATE;
    case "init":
      return { isLoading: true, result: null };
    case "finish":
      return { isLoading: false, result: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

const INITIAL_STATE = {
  isLoading: false,
  result: null,
};

export default useFakePostRequest;
