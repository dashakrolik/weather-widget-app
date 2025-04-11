import React from "react";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));
