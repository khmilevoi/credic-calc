import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { config } from "../config";
import { defaultConditions } from "../shared/constants";
import { CreditConditions } from "../types/logic.types";

export const useFetchConditions = () => {
  const [conditions, setConditions] = useState(defaultConditions);

  const fetchConditions = useCallback(async () => {
    const response = await axios.get<CreditConditions>(config.conditionsApi);
    const { data } = response;

    setConditions(data);
  }, []);

  useEffect(() => {
    fetchConditions().then();
  }, [fetchConditions]);

  return conditions;
};
