# Brand + UI Asset Kit — Manifest

Built for henryknowsweb.pages.dev (Prompt 1 of the graphic-design audit). Tokens: ink `#0E0D0E`, paper `#F2EFEA`, red `#F2281E`, mute `#8C8782`, line `rgba(242,239,234,.12)`. Monogram variants are rounded-square tiles (rx = 14/64) so the mark works as an app-icon-style lockup at any size. All SVGs are hand-built geometry or font-outline paths (Inter Tight SemiBold via fontTools) — no embedded rasters, no viewer-font dependence.

| File | Dimensions | Bytes | Usage |
|---|---|---:|---|
| `favicon.svg` | 0 0 64 64 viewBox | 184 | Site favicon (SVG). Monogram: paper H on ink rounded tile. |
| `assets/brand/monogram-paper.svg` | 0 0 64 64 viewBox | 184 | Monogram tile — paper H on ink. Nav, preloader, dark surfaces. |
| `assets/brand/monogram-ink.svg` | 0 0 64 64 viewBox | 184 | Monogram tile — ink H on paper. Light surfaces, print. |
| `assets/brand/monogram-red.svg` | 0 0 64 64 viewBox | 184 | Monogram tile — ink H on red. Accent use only (footer, end cards). |
| `assets/brand/lockup.svg` | 0 0 215 64 viewBox | 1,815 | Horizontal lockup: monogram tile + “Henry.” wordmark as font paths (Inter Tight SemiBold, red period). Nav / footer. |
| `assets/brand/favicon-32.png` | 32×32 | 689 | Favicon PNG 32. Browser tabs. |
| `assets/brand/apple-touch-icon.png` | 180×180 | 1,236 | Apple touch icon 180. iOS home screen. |
| `assets/brand/icon-512.png` | 512×512 | 2,461 | Icon 512. PWA / Android / high-res favicon. |
| `assets/brand/og.png` | 1200×630 | 525,625 | Open Graph / Twitter card. HENRY cropped at left, tagline, red DM WEB pill, portrait right with left-edge fade. Safe area respected. |
| `assets/portrait/hero.webp` | 801×948 | 41,770 | Hero portrait cutout — TRUE transparent background (rembg/u2net segmentation of the real photo; face untouched). Beside the hero name. |
| `assets/portrait/pinned.webp` | 819×1024 | 20,674 | Pinned-section portrait, 4:5, left + bottom gradients faded into ink, face unobstructed. Superseded for the About display by about-portrait.webp (Oct 25); retained — still the schema.org Person image. |
| `assets/portrait/about-portrait.webp` | 1024×1280 | 43,740 | About (“Nice to meet you”) pinned-section portrait — Henry's black three-piece suit photo, portrait orientation, supplied by Henry Oct 25 (1024×1536 RGBA). 4:5 crop at native size, alpha composited over ink #0E0D0E with top/left/bottom edge fades in the pinned.webp treatment; no grade, face untouched. The About now uses this file. |
| `assets/portrait/avatar.webp` | 256×256 | 5,662 | Avatar, face centred. Nav / testimonial fallback / social profiles. |
| `assets/portrait/avatar@2x.webp` | 512×512 | 15,264 | Avatar 2× retina version. |
| `assets/ui/icon-store.svg` | 0 0 48 48 viewBox | 280 | Service icon — Stores & E-commerce (shopping bag). currentColor, 48 grid, 1.5px stroke language. |
| `assets/ui/icon-landing.svg` | 0 0 48 48 viewBox | 352 | Service icon — Landing Pages (page + pointer). |
| `assets/ui/icon-redesign.svg` | 0 0 48 48 viewBox | 365 | Service icon — Redesigns (circular arrows around a window). |
| `assets/ui/star.svg` | 0 0 24 24 viewBox | 189 | 4-point star separator (filled, currentColor). Marquee separator — replaces the ✦ font glyph. |
| `assets/ui/quote.svg` | 0 0 24 24 viewBox | 333 | Quote mark echoing the star's concave geometry (filled, currentColor). Testimonials. |
| `assets/ui/arrow-up-right.svg` | 0 0 24 24 viewBox | 196 | Arrow up-right (currentColor). External links, CTAs. |
| `assets/ui/arrow-right.svg` | 0 0 24 24 viewBox | 199 | Arrow right (currentColor). Buttons, links. |
| `assets/ui/play.svg` | 0 0 24 24 viewBox | 118 | Play triangle (filled, currentColor). Video previews. |
| `assets/ui/close.svg` | 0 0 24 24 viewBox | 198 | Close X (currentColor). Overlays, menus. |
| `assets/ui/frame-browser.svg` | 0 0 640 400 viewBox | 603 | Browser mockup frame, 16:10. Screen area = <g id="screen"> rect x=9, y=45, w=622, h=346 in the 640×400 viewBox — place project media there. |
| `assets/ui/frame-phone.svg` | 0 0 185 400 viewBox | 358 | Phone mockup frame, ~9:19.5. Screen area = <g id="screen"> rect x=8, y=8, w=169, h=384 in the 185×400 viewBox. |
| `assets/ui/grain.png` | 256×256 | 59,792 | Seamless monochrome grain tile. Fixed body overlay at ~5% opacity, pointer-events:none; also footer. |
| `assets/ui/h-outline.svg` | 0 0 640 640 viewBox | 177 | Outline H watermark (stroke only, paper). Footer, ~6% opacity, bottom-right, cropped by the container. |
| `assets/brand/_template.svg` | 0 0 1600 1000 viewBox | 25,073 | Project cover template 1600×1000 (16:10). Dashed = safe area (96px inset) and media placeholder zone. Labels are real font paths. PLACEHOLDER SCAFFOLD — replace with real project work. |
| `assets/social/endcard.png` | 1080×1920 | 503,711 | TikTok end-card. Headline, red DM WEB button, @henryknowsweb; all key content inside TikTok safe margins (clear of top 150px and bottom 400px). |

## Flags & honest notes

- **Source photo:** `24611262…c88c.png`, **1536×1024** landscape, RGB. All portrait derivatives come from this photo only. No generative editing, no face alteration, no skin smoothing. One mild global grade was applied to derivatives (shadows cooled slightly, skin untouched in hue) plus crops and gradient fades.
- **hero.webp — true segmentation, not the fallback.** rembg (u2net) produced a clean cut: hair and blazer edges intact at full zoom. A faint ~1px darker fringe from the original dark backdrop is visible only against bright non-ink backgrounds (e.g. pure red); on the site's ink background it is invisible. **No hero@2x:** the subject is 801px wide natively in the source, so a 2× file would be pure upscaling. At its design slot (~22% of a 1440px hero ≈ 320 CSS px) 801px is already ≈2.5× retina.
- **pinned.webp is 819×1024, not 2000×2500.** The source is a 1536×1024 landscape frame; the largest honest 4:5 crop is 819×1024. Upscaling to 2000×2500 was not done (would invent ~6× the pixels). If Henry shoots a portrait-orientation photo later, this file should be re-cut at full spec. **Done Oct 25:** Henry supplied a 1024×1536 portrait-orientation photo (black three-piece suit); `about-portrait.webp` (1024×1280, 4:5 at native size) was cut from it and is now the About portrait. The About frame also gained a one-time clip-path masked reveal (1000ms token) and a fine-pointer cursor spotlight overlay; the settle/parallax contract is unchanged.
- **_template.svg is 25 KB**, over the 4 KB icon guideline — unavoidable for a 1600×1000 scaffold whose labels are real glyph paths; it is a design tool, not a production asset.
- **grain.png** is a luminance tile (black-based noise). Use as an overlay with low opacity (4–6%) and `mix-blend-mode: overlay` or plain opacity over ink.

## CSS vignette snippet (from the audit, for Prompt 2)

```css
.hero::before, .portrait-sec::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(120% 90% at 50% 40%, transparent 55%, rgba(14,13,14,.55) 100%);
}
```
