import Elysia from "elysia";
import { PagesController } from "./controllers/pages.controller";
import { NoteController } from "./controllers/note.controller";
import { Note } from "./models/note";

export const routes = new Elysia()
  .get("/", PagesController.home)
  .get("/note/:id", ({ params }) => PagesController.note(params.id))
  .post("/note", async ({ body }) => NoteController.save(body as any));