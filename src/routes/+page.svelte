<script>
  let name = 'Aasish';
</script>

<svelte:head>
  <title>Aasish — Personal Website</title>
  <meta
    name="description"
    content="My projects, interests, and work."
  />
</svelte:head>

<main>
  <h1>Hi, I'm {name}.</h1>
  <p>Electrical Engineering student interested in computing and AI.</p>
</main>

<style>
  main {
    max-width: 720px;
    margin: 100px auto;
    padding: 24px;
    font-family: system-ui, sans-serif;
  }

  h1 {
    font-size: clamp(2rem, 6vw, 4rem);
    letter-spacing: -0.04em;
  }
</style>