import { NoteService } from "../services/note.service";
import { Base } from "../views/base";
import { Home } from "../views/pages/home";
import { Note } from "../views/pages/note";

export class PagesController {

  static home() {
    return (
      <Base>
        <Home />
      </Base>
    );
  }

  static async note(id: string) {
    const note = await NoteService.get(id);

    if (!note) {
      return (
        <Base>
          <>
            <h1>Note is expired or does not exists</h1>
            <a href="/">Create a note</a>
          </>
        </Base>
      )
    }

    return (
      <Base>
        <Note {...note}></Note>
      </Base>
    )
  }
}