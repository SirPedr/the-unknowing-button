import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useClickConsequence = () => {
  const [isQueryEnabled, setIsQueryEnabld] = useState(false);

  const { refetch, data, error } = useQuery<{ consequence: string }>({
    queryKey: ["click-consequence"],
    queryFn: () => fetch("/api/click").then((response) => response.json()),
    enabled: isQueryEnabled,
  });

  const getConsequence = () => {
    if (!isQueryEnabled) {
      setIsQueryEnabld(true);
      return;
    }

    refetch();
  };

  return {
    consequence: data ? data.consequence : null,
    getConsequence,
    error,
  };
};
