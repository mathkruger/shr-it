import { Note } from "../models/note";
import { NoteService } from "../services/note.service";

export class NoteController {
  static async save(data: {
    content: string,
    expirationHours: number
  }) {
    const id = await NoteService.insert(data.content, data.expirationHours);

    if (id) {
      return (
        <li>
          <a href={`/note/${id}`}>Note #{id}</a>
        </li>
      )
    }

    return (
      <p>Note was not created</p>
    )
  }
}