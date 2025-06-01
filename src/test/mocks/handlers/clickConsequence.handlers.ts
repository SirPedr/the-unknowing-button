import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/click", () => {
    return HttpResponse.json({
      consequence: "The world will explode",
    });
  }),
];
