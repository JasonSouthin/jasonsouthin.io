import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
}

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, videos, and music.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>14&quot; Macbook Pro M1 (2022)</li>
          <li>31.5&quot; Dell UltraWide S3422DWG</li>
          <li>Logitech Pro Superlight</li>
          <li>Apple Magic Keyboard</li>
          <li>Corsair Gaming Chair</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode (
            <a href="https://gist.github.com/JasonSouthin/31e2bf48ceba681dfca30a63285f7fee">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: One Dark Pro</li>
          <li>
            Terminal: Hyper (
            <a href="https://gist.github.com/JasonSouthin/cc92446067f4f4522108e03a2565cd33">
              Settings
            </a>
            ) / zsh (
            <a href="https://gist.github.com/JasonSouthin/278137a555094ab3e240ab782f7dcedb">
              Settings
            </a>
            )
          </li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>Obsidian</li>
          <li>Insomnia</li>
          <li>Spotify</li>
          <li>Grammarly</li>
          <li>Texts</li>
          <li>Raycast</li>
          <li>TablePlus</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Apple Airpods Pro</li>
          <li>Apple Watch</li>
          <li>Apple iPhone</li>
          <li>Apple Ipad mini series 6</li>
          <li>BMW 1 series 2019</li>
        </ul>
      </div>
    </section>
  )
}
