import type { Drop } from '../data/site'

export function getDropHref(drop: Drop) {
  return drop.links.live ?? `/${drop.slug}`
}
