import supabase from "../config/supabase";
import { Note } from "../models/note";
import { RandomIdGenerator } from "../utils/get-random-number";

export class NoteService {
  static async insert(content: string, expiresHours: number): Promise<string | null> {
    const now = new Date(new Date().toUTCString());
    now.setHours(now.getHours() + +expiresHours);

    const uniqueId = RandomIdGenerator.getBase62(6);

    const result = await supabase.from("notes")
    .insert({
      content,
      expiresOn: now.toUTCString(),
      uniqueId
    }).select("uniqueId")
    .single()
    .then(x => x.data?.uniqueId as string | null);

    return result;
  }

  static async get(id: string): Promise<Note | null> {
    const result = await supabase.from("notes")
    .select("content, expiresOn, uniqueId")
    .filter("uniqueId", "eq", id)
    .single()
    .then(x => x.data as Note | null);

    if (result) {
      const expiresDate = new Date(result.expiresOn);
      const now = new Date();

      if (now.getTime() <= expiresDate.getTime()) {
        return result;
      }

      await this.delete(id);
      return null;
    }

    return result;
  }

  static async delete(id: string) {
    return await supabase.from("notes")
    .delete()
    .filter("uniqueId", "eq", id)
    .then(_ => true);
  }
}