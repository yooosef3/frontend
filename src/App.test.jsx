import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import { expect, test } from "vitest";

const store = configureStore({
  reducer: {
    alerts: () => ({ loading: false }),
  },
});

test("renders test text", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/Test CI\/CD/i)).toBeInTheDocument();
});
