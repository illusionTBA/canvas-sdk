import { Canvas } from "../lib";
const TOKEN = Bun.env.TOKEN;
if (!TOKEN) {
  throw new Error("No token provided");
}
const canvas = new Canvas(TOKEN, new URL("https://canvas.instructure.com/"));
const courses = await canvas.getCourses();
courses.map((c) => console.log(c.name + " - " + c.id));
