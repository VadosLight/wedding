import { useMemo } from "react";

export const useQueryParams = (): URLSearchParams => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useMemo(() => new URLSearchParams(window.location.search), [window.location.search]);
  };