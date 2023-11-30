import { html } from "@elysiajs/html";
import Elysia from "elysia";
import { routes } from "./routes";

const app = new Elysia().use(html()).use(routes);

app.listen(3000, () => {
  console.log(`App running on http://localhost:3000`);
});
