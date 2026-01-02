# Ginger

A progressive web app example of WebGL morph targets using three.js.

## Prerequisites

You'll just need a modern version of node and npm to run this project.

## Running Ginger

```
➜ git clone https://github.com/Amdrel/ginger.git
➜ cd ginger
➜ npm install
➜ npm run build
➜ npm run serve
```

Ginger should now be available at `http://localhost:8080` after running `npm run serve`.

## Additional Information

Read the blog post that I wrote documenting how this application was modernized: [WebGL Morph
Targets and Ginger: Modernizing for Today's
Web](https://www.thisdot.co/blog/webgl-morph-targets-and-ginger-modernizing-for-todays-web)

You can try Ginger out by clicking [here](https://ginger.amdrel.net) if you don't want to build it
yourself. There's currently a bug where the morphs act funny if too many are applied. Funnily enough
this was an issue that was fixed during the first refactor, but has somehow reintroduced itself. I
don't care enough to fix it.

# Ginger Model

Ginger was created and is copyright of [David
Steele](https://bsky.app/profile/bootstrapbuckaroo.bsky.social). This work is licensed under a
Creative Commons Attribution-NonCommercial 4.0 International License.
