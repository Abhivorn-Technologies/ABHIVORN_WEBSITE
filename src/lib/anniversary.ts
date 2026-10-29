/** First company anniversary (29 Oct 2026). The banner and home section show until the end date, then hide on the next build. */
export const anniversary = {
  date: "2026-10-29",
  showUntil: "2026-11-30",
};

export function isAnniversaryActive(now: Date = new Date()) {
  return now <= new Date(`${anniversary.showUntil}T23:59:59+05:30`);
}
