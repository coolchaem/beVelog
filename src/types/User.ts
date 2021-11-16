export type ProfileLinks = {
  url?: string;
  email?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
};

export type UserProfile = {
  id: string;
  display_name: string;
  short_bio: string;
  thumbnail: string | null;
  about?: string;
  profile_links: ProfileLinks;
};
export type VelogConfig = {
  id: string;
  title: string | null;
  logo_image: string | null;
};
export type User = {
  id: string;
  username: string;
  email: string | null;
  is_certified: boolean;
  profile: UserProfile;
  velogConfig: VelogConfig | null;
};

export interface PartialSeries {
  id: string;
  name: string;
  description: null;
  url_slug: string;
  thumbnail: null | string;
  updated_at: string;
  posts_count: number;
}
