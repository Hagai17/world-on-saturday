# The World on Saturday — 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Hagai17/world-on-saturday/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Hagai17/world-on-saturday/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image that sums up a whole day of world news: a broadsheet front page,
"THE WORLD ON SATURDAY — 21 NOVEMBER 2026", drawn as eight vignettes.
Every story below was reported in the news of Saturday, 21 November 2026.

## The eight stories

1. **Bahrain / the Strait of Hormuz** — a port in flames with a tanker
   offshore: fire and shipping danger around the Gulf's chokepoint.
2. **COP31 climate summit, Antalya** — a melting ice globe beside a clock
   past midnight: negotiators running deep into overtime.
3. **Eastern Europe** — missiles streaking across a night sky over
   Poland and Ukraine as the war grinds on.
4. **The Baltic Sea** — a cargo ship ablaze while a lifeboat pulls away.
5. **The markets** — a stock chart in free fall next to a cracked
   microchip: a sell-off with the chip sector at its centre.
6. **Shenzhen summit** — three leaders shaking hands over a deal.
7. **Mexico** — a WANTED poster and handcuffs laid over the map: the
   capture of the cartel figure known as El Chapo Isidro.
8. **Brazil** — a green shield held over a city skyline: the dengue
   breakthrough built on Wolbachia-carrying mosquitoes.

## How it works

`entry.png` is the finished artwork (a 1024×1024 JPEG, 388,241 bytes).
`main.ts` is a small Node 22 program, standard library only, that checks
the file really is a PNG or JPEG image and no larger than 1 MiB, then
copies it to `entry.png` in the output directory (`/output`, or the
directory named by the `MAKEFUN_OUTPUT_DIR` environment variable).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes the entry image to `out/entry.png`, byte for byte identical
to the `entry.png` in this repository.

## License

MIT — see `LICENSE`.
