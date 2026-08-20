# Shot Tracker data format

`shot-tracker.json` powers the "Shot Trails" panel shown on each match card
(see [src/components/match.js](../src/components/match.js) and
[src/components/matches/shot-tracker/](../src/components/matches/shot-tracker/)).

It is intentionally hand-edited — fill it in after a round (or leave it out
entirely; the panel just won't render for holes/years without data).

## Feature flag

The panel is gated behind `GATSBY_SHOW_SHOT_TRAILS=true` and is **off by
default everywhere, including production**, so it's safe to keep committing
data/code without it going live. To see it locally, set that variable in a
`.env.development` file at the project root (gitignored, already created for
you):

```
GATSBY_SHOW_SHOT_TRAILS=true
```

Restart `gatsby develop` after changing it. To turn it on for a real deploy
(e.g. a Netlify branch/preview build, or prod once it's ready), set the same
`GATSBY_SHOW_SHOT_TRAILS=true` environment variable in that deploy's build
environment settings — no code changes needed either way.

## Shape

```jsonc
{
  "<year>": {                 // e.g. "_2027" — matches the `year` prop passed to <Match> (note the leading underscore, same convention as score.json)
    "<courseKey>": {          // must match a courseMatch key from src/data/courses.json
      "<holeNumber>": {       // "1" - "18", as a string key
        "image": "/hole-maps/<courseKey>/hole-<holeNumber>.png", // optional, see below
        "shots": {
          "<playerKey>": [    // lowercase player key, same as used elsewhere (e.g. "chris")
            { "x": 50, "y": 96, "result": "tee" },
            { "x": 42, "y": 55, "result": "fairway" },
            { "x": 48, "y": 8, "result": "hole" }
          ]
        }
      }
    }
  }
}
```

### One ball per team (scramble / alternate / pinehurst)

For gameplay formats where a team plays a single ball (`scramble`,
`alternate`, `pinehurst`), `match.js` looks up shots under a combined
team key instead of one key per player: `"<player1>-<player3>"` for the
green/team-one pairing and `"<player2>-<player4>"` for the blue/team-two
pairing (using the same player order passed to `<Match>`). For a singles
or best-ball match, the pairing key falls back to just the single
player's key. For example, an Alternate match with `player1="matt"`,
`player3="stephen"`, `player2="craig"`, `player4="dan"` expects:

```jsonc
"shots": {
  "matt-stephen": [ /* team green's one ball */ ],
  "craig-dan": [ /* team blue's one ball */ ]
}
```

## Coordinates

- `x` and `y` are percentages from `0` to `100`, positioned as if looking
  straight down at the hole with the tee box at the **bottom** (`y: 100`) and
  the green/flag at the **top** (`y: 0`). `x: 50` is the center line.
- Shots for a player should be listed **in the order they were played**. The
  panel draws a line connecting them and numbers each marker.
- `result` is optional and only shown as a tooltip on hover. Free text is
  fine (`"tee"`, `"fairway"`, `"rough"`, `"bunker"`, `"green"`, `"hole"`, etc.)
  but ending a list with `"hole"` draws a small flag marker instead of a dot.

## Images

Drop a top-down photo (satellite screenshot, GPS app export, etc.) for a hole
into `static/hole-maps/<courseKey>/hole-<holeNumber>.png` (one subfolder per
course) and reference it with a root-relative path in `image`, e.g.
`/hole-maps/crookedTree/hole-1.png`. Files in `static/` are copied as-is and
don't need a GraphQL/image-processing pipeline. `.jpg` works too — the
extension just needs to match the actual file.

Portrait-oriented images (taller than wide) work best since holes are drawn
tee-to-green top-to-bottom. If `image` is omitted, or the file doesn't exist
yet, the panel falls back to a plain placeholder box so trails are still
visible before you've sourced an image.

## Why this doc lives in /docs, not /src/data

`src/data/` is registered as a `gatsby-source-filesystem` source, and
`gatsby-plugin-mdx` scans every sourced directory for `.md`/`.mdx` files. A
loose markdown file with no frontmatter dropped in `src/data/` gets turned
into a blog-post `Mdx` node with no `category`, which crashes
[gatsby-node.mjs](../gatsby-node.mjs) `createPages` (`Cannot read properties
of null (reading 'slug')`) because `onCreateNode` never sets `fields.slug`
for it. Keep documentation markdown outside of `content/players`,
`content/media`, `content/assets`, `src/data/`, and `src/images/` (or give it
real frontmatter with a matching `category`) to avoid this.
