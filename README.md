<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://bfbhcup.com/">
    <img alt="BFBH Cup" src="https://bfbhcup.com/static/4c0795ea4f5ac26f519f5c86562c68c5/97d0b/logo-black.webp" width="150" />
  </a>
</p>
<h1 align="center">
 BFBH Cup
</h1>


## Directions on how I got up and running

- gatsby blog starter is the foundation
 - gatsby new my-blog-starter [https://github.com/gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)


### Installs
- Styled components - gatsby-plugin-styled-components
- mdx - gatsby-plugin-mdx
- gatsby-plugin-sitemap
- dotenv - environment variables
-  gatsby-plugin-google-tagmanager
- react-share - ???
- font awesome (https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- gatsby-plugin-fontawesome-css
- npm i --save @fortawesome/fontawesome-svg-core
- npm install --save @fortawesome/free-solid-svg-icons
- npm install --save @fortawesome/react-fontawesome

### Blog Capabilities
- Styled components
- mdx
- writing blog before release
- social media buttons
- social media share options (react-share)
## Updating player data

Run `npm run update:players` to import the default year's rounds (2026) into
[`playersUpdate.json`](./src/data/playersUpdate.json). Use `-- --year 2026` to
select a year or `-- --rounds path/to/rounds.json` to select a rounds file.

For a score entry with `useFront: true` or `useBack: true`, the script sums its
`holes` array into `frontGross` or `backGross`, respectively, overriding any
explicit gross value for that side. If the array contains `99`, the stored gross
for that side is left unchanged. Without a true side flag, explicitly supplied
gross values are still imported as before.

For each player's course, `useForHandicapIndex` is true if any imported round
for that course sets it to true. A later false does not override a true.
Eligibility is recalculated on each run from the explicitly supplied flags;
if all supplied flags are false, the course becomes false. If no flag is
supplied for a course, its existing value is preserved.

Appearances and Cup records use `playersOverview.json` as the historical baseline.
Each participant in the selected year's rounds gets that year added to their
appearances once, in chronological order. Once every match has a winner (including
ties), the team with the most points earns a Cup win and the other team a loss.
A tied Cup goes to the defending champion, using previous results in `score.json`.
Unplayed matches (`winner: null`) prevent a Cup win/loss from being added.
If the selected year is already in a player's overview appearances, its Cup
result is assumed to be included in their overview record and is not added again.
Reruns start from the overview baseline, so results are not double-counted.

Run `node scripts/testUpdatePlayers.cjs` to test this behavior without modifying
the project's player data.

## About Me

I’m a web developer based in New York City.

I create and improve existing websites. I have experience with JavaScript, Gatsby, SFCC, E-Commerce Google Analytics, Google Tag Manager, AWS.

You can read more about me [on my website](https://www.chrisshimmin.com)

Reach me at hello@chrisshimmin.com
