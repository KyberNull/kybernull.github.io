You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

---

## Development Environment

### Runtime and package manager

This project uses **Bun** as its JavaScript runtime and package manager.

- Use Bun for dependency management, script execution, and development tooling.
- Use `bun install` to install dependencies when necessary.
- Use `bun run <script>` to execute scripts defined in `package.json`.
- Use `bunx` to execute CLI tools when appropriate.
- Inspect `package.json` before assuming which scripts are available.
- Respect the existing Bun lockfile.
- Never introduce npm, Yarn, or pnpm into the project workflow.
- Do not regenerate the lockfile using another package manager.
- Prefer existing project scripts over inventing new commands.

### Framework conventions

- This project uses SvelteKit and Svelte 5.
- Prefer current Svelte 5 conventions, including runes and current event handling syntax.
- Consult the Svelte MCP documentation before making framework-specific decisions.
- Do not assume APIs or patterns from older Svelte versions are still recommended.
- Prefer official Svelte and SvelteKit documentation over outdated examples and generic conventions.

---

## Agent Orchestration and Parallel Execution

Parallel execution is supported. Use it whenever independent tasks can be performed concurrently.

### Sub-agent policy

- You may use a maximum of **four sub-agents concurrently**.
- For tasks with independent workstreams, delegate them to separate agents and launch them in parallel.
- Do not execute independent agent reviews sequentially without a technical reason.
- Give each agent a clearly defined responsibility, scope, and expected output.
- Provide sufficient project context to every agent.
- Avoid unnecessary overlap between agents.
- The coordinating agent is responsible for reviewing all results, resolving disagreements, checking evidence, and producing the consolidated output.
- Do not blindly trust sub-agent conclusions. Verify important findings against the actual code and documentation.
- If sub-agent functionality is unavailable, explicitly state this and perform the work directly.
- Do not spawn agents for trivial tasks or tightly coupled operations that are better handled together.

### Parallel tool execution

- Use parallel tool calls for independent operations.
- Examples include inspecting unrelated files, reading different components, examining configuration, consulting independent documentation sections, and running independent diagnostics.
- When launching independent sub-agent reviews, start them concurrently.
- While sub-agents are working, perform other independent inspection or verification tasks where possible.
- Do not parallelise operations with dependencies.
- Never run concurrent operations that modify the same files or shared state.
- Avoid concurrent dependency installations, conflicting builds, or commands that compete for the same output directory.
- Wait for all relevant operations to finish before consolidating results.
- Use the native parallel execution capabilities provided by the agent environment rather than simulating parallelism through sequential calls.
- Inspect available tools and their actual interfaces before invoking them. Do not assume a particular sub-agent API or tool name.

### Delegation quality

When delegating work:

1. Define the scope of each agent.
2. Specify the files or subsystems it should inspect.
3. Ask for evidence and exact file locations.
4. Require it to distinguish confirmed problems from potential risks.
5. Ask it to avoid duplicating findings from other agents.
6. Have the coordinating agent validate and consolidate the results.

Sub-agents should provide independent scrutiny, not merely generate additional suggestions.

---

## Engineering Quality Standards

### General principles

- Inspect before modifying.
- Understand the existing architecture before proposing changes.
- Prefer simple, maintainable solutions over unnecessary abstractions.
- Follow established project conventions unless there is a concrete reason to change them.
- Avoid unnecessary dependencies.
- Avoid dead code, unused imports, redundant state, and duplicated logic.
- Use TypeScript properly. Avoid unnecessary `any`, unsafe casts, and suppressed diagnostics.
- Do not make changes merely to satisfy subjective preferences.

### Correctness and rendering

Pay particular attention to:

- Server-side rendering and browser-only APIs.
- Hydration correctness.
- Svelte reactivity and component lifecycle.
- Event listener cleanup.
- Asynchronous operations and error handling.
- Route and navigation correctness.
- Initial rendering and layout stability.
- Light and dark theme consistency.

### Accessibility and performance

- Use semantic HTML.
- Ensure keyboard accessibility and visible focus states.
- Provide appropriate accessible labels.
- Check colour contrast in both themes.
- Respect `prefers-reduced-motion`.
- Avoid unnecessary client-side JavaScript.
- Optimise image and font loading.
- Identify unnecessary rendering and computation.
- Consider responsive behaviour across screen sizes.

### Verification

- Inspect `package.json` for the available scripts.
- Use Bun to execute project checks.
- Run relevant Svelte diagnostics, TypeScript checks, linting, formatting checks, tests, and production builds when available.
- Use Svelte MCP tools for framework-specific verification.
- Do not claim a check passed unless it was actually executed.
- Report checks that could not be performed and explain why.
- Review actual command output instead of assuming success.

### Change management

- Do not modify files unless the task explicitly authorises implementation.
- Keep changes scoped to the requested objective.
- Review the final diff for unintended modifications.
- Run relevant verification after implementation.
- Never claim completion solely because code was written.
- Preserve existing functionality unless a change is explicitly required.
