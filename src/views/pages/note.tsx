import { Note } from "../../models/note";

export function Note({ content, expiresOn, uniqueId }: Note) {
  const expiresOnDate = new Date(expiresOn);

  return (
    <section id="note">
      <a class="mb-2" href="/">Back</a>
      <h1 class="text-3xl text-center mb-4">Note - {uniqueId}</h1>
      
      <textarea class="textarea textarea-bordered w-full mb-4" readonly cols="30" rows="5">{content}</textarea>
      <p>Expires on {expiresOnDate.toLocaleDateString()} at {expiresOnDate.toLocaleTimeString()}</p>
    </section>
  );
}
