// Minimal JS entry to allow Node resolution of the package name.
// Tailwind v4 will use the package.json "style" field to load CSS when used via `@plugin "glasswindui"`.
export default function glasswindui() {
  return () => {
    // Intentionally no-op; CSS is provided via the style entry.
  }
}


