import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { server } from "./test/mocks/node";

const renderApp = () =>
  render(
    <QueryClientProvider
      client={
        new QueryClient({ defaultOptions: { queries: { retry: false } } })
      }
    >
      <App />
    </QueryClientProvider>
  );

describe("App", () => {
  it("should show consequence after clicking the button", async () => {
    renderApp();

    const button = screen.getByRole("button", { name: /click me/i });

    await userEvent.click(button);

    await screen.findByText("The world will explode");
  });

  it("should show new consequence after clicking the button again", async () => {
    renderApp();

    const button = screen.getByRole("button", { name: /click me/i });

    await userEvent.click(button);

    await screen.findByText("The world will explode");

    server.use(
      http.get("/api/click", () => {
        return HttpResponse.json({
          consequence: "The world will explode again",
        });
      })
    );

    await userEvent.click(button);

    await screen.findByText("The world will explode again");
  });

  it("should show consequence after clicking the button", async () => {
    server.use(
      http.get("/api/click", () => {
        return HttpResponse.error();
      })
    );

    renderApp();

    const button = screen.getByRole("button", { name: /click me/i });

    await userEvent.click(button);

    await screen.findByText(
      "Error: The Consequence Engine has temporarily run out of 'Huh?' moments and needs a quick spiritual reboot (which, coincidentally, involves you clicking the button again)"
    );
  });
});
