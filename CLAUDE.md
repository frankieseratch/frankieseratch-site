# Frankie Seratch — Actor Website Build

You are helping Frankie Seratch build a personal website for his acting career. This file is the project brief. Read it fully before suggesting any code, structure, or content. Frankie has explicitly approved the direction below; do not relitigate decisions, only execute and refine.

---

## Who Frankie is (the brand)

Frankie is a New York-based actor (also splits time between LA and Tokyo) building toward prestige film and episodic television. He has a parallel producing operation (IP Bay) optioning Japanese IP for Western markets. The website is **acting-only.** Producing does not appear on this site at all.

He has a world premiere at **Tribeca Film Festival 2026** (June 3) — *RECLUSE*, directed by Henry Chaisson. Lead role, 40 lines, single card credit. This is the most important asset of his career to date and is the centerpiece of the site.

He is currently between theatrical/management representation and the site is, in part, a tool to land that representation. Audience priority: managers, theatrical agents, casting directors. Secondary: industry peers and press.

### Casting type — three lanes

Frankie is not a generalist. He has three specific, evidence-backed casting lanes. Site visuals and copy should reinforce them; nothing on the site should contradict them.

1. **Coiled Wire** — sensitive, intelligent, slightly dangerous. Procedural-suspect / horror-thriller energy. Confirmed by *RECLUSE*, *Human Resource* (Grady), *The Landing* at the Vineyard. **Primary booking lane.**
2. **Charismatic Wild Card** — charming, unhinged, two steps ahead. Confirmed by Dunkin' Super Bowl spot (dir. Ben Affleck), callbacks for *The Equalizer* (Kaos) and *Overcompensating*. Commercial / streaming lane.
3. **Menacing Edge** — stillness as threat, controlled antagonist. Confirmed by *The Obelisk* (Otto), *Monsters* S4 audition. Prestige-facing, manager submission lane.

**Through-line across all three: intensity behind the eyes.** Not warm best friend. Not vanilla lead. Not musical theater.

### Actor comps (visual/tonal reference)

- **Jack Alcott** (closest direct comp — same energy, theater background, intense, not conventional pretty-boy)
- **Charlie Plummer** (indie-first, sensitive intensity)
- **Evan Peters pre-AHS**

Aspirational: Andrew Garfield, Timothée Chalamet, Evan Peters. Look at how those actors' personal sites or representation pages present them — restrained, cinematic, single strong image, minimal copy, the work doing the talking.

---

## Brand & tone direction

Frankie's literal brief: **"simple and cool. no bullshit. a rep lands on it and knows exactly where to place me."**

Translate that to:

- **Restrained, editorial, cinematic.** Think a film festival site or a serious agency's actor page, not a Wix template.
- **Typography-driven.** The site should feel designed, not decorated.
- **Generous negative space.** White space (or black space) is a signal of confidence.
- **High contrast.** Strong headshots, deep blacks or near-blacks, sharp accent.
- **No fluff.** No tagline like "Actor / Artist / Storyteller." No inspirational quotes. No "love to dive into new worlds." The reel and the credits do the talking.
- **Mobile-first.** Reps will pull this up on their phones in elevators between meetings. It must be fast, legible, and visually impactful at 375px wide.

### Typography direction

- **Avoid:** Inter, Roboto, Arial, system fonts, anything generic.
- **Lean toward:** distinctive serif or geometric display font for the wordmark and section headers (consider editorial fonts like *Editorial New*, *Migra*, *PP Neue Montreal*, *Söhne*, *Söhne Mono*, *GT Sectra*, *Neue Haas Grotesk*, or self-hosted alternatives via Bunny Fonts / Fontshare / Google Fonts where the licensing works). Pair with a refined, neutral body font.
- One display family + one body family. No more.

### Color direction

- **Default proposal:** near-black background (`#0A0A0A`), off-white text (`#F5F4F2` or `#EFEFEC`), single sharp accent color used sparingly (deep red, electric chrome, or a film-grade cool blue — to be confirmed with Frankie before final).
- **Alternative if Frankie wants brighter:** off-white background (`#F5F4F2`), near-black text, same accent treatment.
- **Do not:** purple gradients, pastel anything, neon, multi-color palettes. This is not a creative agency portfolio; this is an actor's representation-facing presence.

### Motion direction

- One well-orchestrated page load (subtle stagger reveal of hero elements).
- Hover states on credit grid items (slight scale, image desaturation toggle, or accent underline — pick one and use it consistently).
- Smooth scroll. No parallax. No scroll-triggered animations on body content.
- The reel autoplays muted, looped on the home page. That is the only "moving" element.

---

## Tech stack (locked)

- **Plain HTML + CSS + minimal vanilla JS.** No React. No Next.js. No framework chaff. Static files.
- **Hosting:** Vercel (free tier).
- **Domain:** `frankieseratch.com` — to be re-purchased through Cloudflare or Namecheap (NOT Wix). Frankie has confirmed he will repurchase.
- **DNS:** Cloudflare (free) for fastest resolution and free SSL.
- **Email:** Frankie will set up `frankie@frankieseratch.com` via Google Workspace ($7/mo). The site contact must use this address, not `frankieseratch4@gmail.com`.
- **Fonts:** self-hosted or via Bunny Fonts / Fontshare for performance. Avoid Google Fonts CDN if possible (privacy + speed).
- **Images:** WebP format, multiple sizes via `srcset`, lazy loading on everything below the fold.
- **Reel embed:** Vimeo (preferred — cleaner player, no ads) or self-hosted MP4 if Frankie's reel lives elsewhere.

Site must score 95+ on Lighthouse (Performance, Accessibility, SEO). Total page weight under 1MB on initial load.

---

## Site architecture — four pages, no exceptions

### 1. Home (`/`)

Above the fold:
- Reel autoplay (muted, looped, 20–30 seconds of strongest moments). Fills viewport or near-fills it.
- Wordmark "FRANKIE SERATCH" — typeset, not an image. No tagline beneath it.
- Two CTAs: "Watch full reel" (links to longer reel or modal) and "Work" (links to `/work`).

Below the fold:
- One strong headshot (Coiled Wire or Menacing Edge lane — Frankie to choose).
- A single sentence positioning line. Working draft: *"New York–based actor. RECLUSE, premiering at Tribeca Film Festival 2026."* Final wording TBD with Frankie.
- Footer with rep contact, IMDb, Actors Access, Instagram.

### 2. Work (`/work`)

Clean credit grid. Each credit is a card with: still image, project title, role, director, year, format (Film / TV / Theater / Commercial). No filenames as titles. No floating thumbnails.

Lead credit (top of page, possibly larger card or hero treatment):
- ***RECLUSE*** — Lead role. Dir. Henry Chaisson. 2026. **Tribeca Film Festival 2026 — World Premiere.**

Featured credits (in order, subject to Frankie's final list):
- ***The Obelisk*** — Otto. Dir. Bela Baptiste. 2024.
- ***Human Resource*** — Grady. Dir. Henry Chaisson. (Show only if cleared pre-feature release.)
- ***The Landing*** — Vineyard Theatre. Dir. [confirm]. (Casting: Doug Aibel.)
- **Dunkin'** — Super Bowl commercial. Dir. Ben Affleck.

**Do not include:**
- Music
- Voice over (lives only on Contact page as a rep email)
- Audiobooks
- Student / undergraduate work
- Original work (writing, directing) — this is an acting site

### 3. About (`/about`)

Three short paragraphs. Maximum ~150 words total. Current. No childhood. No college. No Andy Warhol. No Einstein. No "love to dive into new worlds."

Working structure:
- **Paragraph 1:** Lead with *RECLUSE* and the Tribeca premiere. Name Henry Chaisson. Establish current trajectory in one sentence.
- **Paragraph 2:** A few key credits and collaborators that signal range and the casting lanes (without naming them as lanes). Mention the Vineyard Theatre / *The Landing* if it serves the prestige signal.
- **Paragraph 3:** Brief, grounded biographical note — based in NYC, splits time with LA and Tokyo, SAG-AFTRA, Equity. One line. No "imagination ran wild."

Single headshot on this page (different lane from the home page headshot — diversify what reps see).

### 4. Contact (`/contact`)

Single-page, no form. Reps do not fill out forms.

Fields:
- **Theatrical / Management inquiries:** `frankie@frankieseratch.com` (interim — until management is signed)
- **Commercial:** Barbara Coleman, Innovative Artists — `barbara.coleman@iany.com` / asst: `asst.barbara.coleman@iany.com`
- **Voice Over:** Mickey Shera, Innovative Artists — `mickey.shera@iany.com` *(verify the assistant email — current site has a typo: "sherra" should be "shera")*
- **IMDb:** [link]
- **Actors Access:** `https://resumes.actorsaccess.com/frankieseratch`
- **Instagram:** `@frankieseratch`

---

## Hard exclusions (do not include anywhere on this site)

- The word "Storyteller"
- Tagline "Actor / Artist / Storyteller"
- Music / music library / song embeds
- Voice over as a top-level page or section
- Personal contact form
- Andy Warhol, Einstein, or any inspirational pull-quotes
- Childhood biography (Poconos, golf course, ski resort, "imagination ran wild")
- Original works (writing, directing, producing) — this is an acting site
- Wedding / restaurant / corporate template aesthetic
- Stock imagery
- Multiple social icons in repeated rows
- Footer copyright older than current year

---

## Headshot files (provided by Frankie)

Five final selects from the recent Tony Moux session, organized by casting lane:

- **231379** — [lane TBD when Frankie confirms]
- **232161** — [lane TBD]
- **232305** — [lane TBD]
- **232555** — [lane TBD]
- **231781** — [lane TBD]

Frankie will provide the high-res files and lane mapping. The site uses no more than two headshots total (one on home, one on About). The remaining three are held for press / management submissions.

---

## Required inputs still pending from Frankie

Before final build, get from Frankie:

1. **High-res headshot files** (the five listed above) and his lane mapping for each.
2. **Reel URL or file.** If current reel is pre-*RECLUSE*, plan for a v1 launch with what exists and a v2 update post-Tribeca.
3. **Final credits list.** The five proposed in the Work section above are the recommended cut — confirm or adjust.
4. **Color direction** — dark mode default vs. light. Accent color preference.
5. **About page paragraphs** — Frankie wants drafts written in chat for review before they go live. Draft three paragraphs and present them for his approval before adding to the site.
6. **Domain status** — confirm `frankieseratch.com` has been re-purchased and DNS is ready to point at Vercel.
7. **`frankie@frankieseratch.com` email** — confirm Google Workspace is set up before site goes live.

---

## Workflow with Frankie

- **He prefers drafts in chat for review before they're saved.** Especially copy (bio, tagline candidates, credit descriptions). Do not write final copy directly into HTML — draft in chat first.
- **He prefers direct, unvarnished feedback.** No softening. Push back on his ideas if they conflict with the brand brief. He responds well to specific language and exact phrasings, not general frameworks.
- **He works around a day job.** Plan build sessions in evening blocks. Stage the build so he can review pages incrementally, not all at the end.
- **Target:** functional v1 live before Tribeca premiere on **June 3, 2026.** Aim for a 5–7 day build window once headshots and reel are in hand.

---

## Deployment plan

1. Initialize git repo locally.
2. Build pages in order: Home → Work → About → Contact.
3. Local preview at every step (Frankie reviews each page before moving on).
4. Push to GitHub (private repo).
5. Connect GitHub repo to Vercel for auto-deploy on push.
6. Configure custom domain `frankieseratch.com` on Vercel; point Cloudflare DNS at Vercel.
7. Verify SSL, page speed, mobile responsiveness, all rep contact emails.
8. Go live.

After launch:
- Add Tribeca press / *RECLUSE* stills as they become available.
- Plan a v2 reel cut post-festival.
- When Frankie signs management, update Contact page immediately.

---

## What "done" looks like

A rep — Bryan Walsh, Daniel Flick, Julien Tacchini, Jessie Greene — lands on the site on their phone, watches 10 seconds of the reel, scrolls to Work, sees *RECLUSE* with the Tribeca tag, clicks through to one or two more credits, scrolls to Contact, copies the right email, and emails Frankie. Total time on site: 90 seconds. They walk away with a clear placement instinct: *I know exactly where I'd put this guy.*

That's the bar.
