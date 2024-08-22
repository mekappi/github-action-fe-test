import Home from "@/app/page";
import { render } from "@testing-library/react";
import { test } from "vitest";

test("page render", () => {
  render(<Home />);
});
