import { expect, test } from "bun:test";

import { Canvas } from "../lib";
const TOKEN = Bun.env.TOKEN;
if (!TOKEN) {
  throw new Error("No token provided");
}
const canvas = new Canvas(TOKEN);

test("Get all courses", async () => {
  const courses = await canvas.getCourses();
  expect(courses.length).toBeGreaterThan(0);
});
