import { describe, test, expect } from "vitest";
import add from "./index";

describe("add function", () => {
	test("should return the correct sum", () => {
		expect(add(2, 3)).toBe(5);
	});

	test("should handle negative numbers", () => {
		expect(add(-2, -3)).toBe(-5);
	});

	test("should handle zero", () => {
		expect(add(0, 5)).toBe(5);
	});
});
