export function Home() {
  return (
    <section id="home">
      <h1 class="text-3xl text-center mb-4">Shr.it</h1>
      <form
        hx-post="/note"
        hx-target="#results-list"
        hx-swap="afterend"
        _="on submit wait 0.2s target.reset()"
      >
        <textarea
          placeholder="Content to share"
          required
          class="textarea textarea-bordered w-full mb-4"
          name="content"
          cols="30"
          rows="5"
        ></textarea>
        <input
          class="input input-bordered w-full mb-4"
          required
          type="number"
          min={1}
          name="expirationHours"
          placeholder="Expiration time (in hours)"
        />

        <button class="btn btn-primary w-full">Save</button>
      </form>

      <h2 class="text-xl my-4">Notes created (will clear after refresh)</h2>
      <ul class="list-style-dic" id="results-list"></ul>
    </section>
  );
}
