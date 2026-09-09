/**
 * Typed response models for the Rebrickable API v3.
 *
 * The official OpenAPI spec (https://rebrickable.com/api/v3/swagger/?format=openapi)
 * does not describe any response shapes, so these are maintained by hand from the
 * documented API responses (https://rebrickable.com/api/v3/docs/). When the API
 * changes, update this file and re-run `npm run update`.
 */

export type JsonObject = Record<string, unknown>;

/** Envelope returned by every list endpoint. */
export interface Paginated<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Color {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
}

export interface PartCategory {
  id: number;
  name: string;
  part_count: number;
}

/** A LEGO part (the object embedded in most responses). */
export interface Part {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_cat_name: string;
  part_url: string | null;
  part_img_url: string | null;
  print_of: string | null;
}

export interface Element {
  part: Part;
  color: Color;
  element_id: string;
  designs: unknown[];
}

export interface Minifig {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string | null;
  set_url: string | null;
}

/** A minifig listed inside a set (adds how many are in that set). */
export interface MinifigInSet extends Minifig {
  count: number;
}

export interface Set {
  set_num: string;
  name: string;
  year: number;
  theme_id: number | null;
  num_parts: number;
  set_img_url: string | null;
  set_url: string | null;
  minifigs: Minifig[];
}

export interface SetSummary {
  set_num: string;
  name: string;
  year: number;
  theme_id: number | null;
  num_parts: number;
  set_img_url: string | null;
  set_url: string | null;
}

/** A set listed inside another set (adds the count). */
export interface SetInSet extends SetSummary {
  count: number;
}

/** A set/part/color relation with a quantity (e.g. part -> sets endpoint). */
export interface SetPartSummary extends SetSummary {
  quantity: number;
  is_spare: boolean;
}

export interface Theme {
  id: number;
  name: string;
  parent_id: number | null;
}

/** Entry from GET /lego/parts/{part_num}/colors/. */
export interface PartColor {
  color_id: number;
  color_name: string;
  color_rgb: string;
  color_is_trans: boolean;
  is_alternative: boolean | null;
  num_sets: number;
  num_parts: number;
  num_loose_parts: number | null;
  /** Present on the /colors/{color_id}/ detail responses. */
  elements?: Array<{
    element_id: string;
    part_num: string;
    qty: number;
  }>;
}

/** A part in a set inventory (also used for minifig part inventories). */
export interface SetPart {
  id: number;
  inv_part_id: number;
  part: Part;
  color: Color;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string | null;
}

export interface UserProfile {
  username: string;
  user_id: number;
  avatar_url: string | null;
  timezone: string;
}

export interface UserBadge {
  id: number;
  name: string;
  description: string | null;
  awarded_at: string;
  award_count: number;
  badge_url: string | null;
  progress: number;
}

/** Response of POST /users/_token/. */
export interface UserToken {
  token: string;
  username: string;
}

/** A part owned by a user (parts, allparts, lost parts, part list parts). */
export interface UserPart {
  part: Part;
  color: Color;
  quantity: number;
  is_spare: boolean;
  fig_ids: Array<number | string> | null;
  set_num?: string | null;
}

export interface UserMinifig {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string | null;
  set_url: string | null;
  quantity: number;
  parts: UserPart[];
}

export interface UserSet extends SetSummary {
  minifigs: MinifigInSet[];
  sets_in_set: SetInSet[];
  quantity: number;
  /** Present on the {set_num} detail responses. */
  parts?: UserPart[];
}

/** Response of GET /users/{user_token}/build/{set_num}/. */
export interface SetBuild {
  missing: SetPart[];
  already_owned: SetPart[];
}

/** A part or set list (partlists / setlists). */
export interface ListResult {
  id: number;
  name: string;
}

/** Response of POST /users/{user_token}/sets/sync/. */
export interface SetSyncResult {
  synced: UserSet[];
  unchecked: UserSet[];
}