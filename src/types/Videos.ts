import { Category } from "./Category";
import {Genre} from "./Genres";
import {CastMember} from "./CastMembers";

export type FileObject = {
  name: string;
  file: File;
};

export interface Videos {
  current_page: number;
  per_page: number;
  total: number;
  items: Video[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  year_launched: string;
  opened: boolean;
  rating: string;
  duration: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
  categories?: Category[];
  genres?: Genre[];
  cast_members?: CastMember[];
  thumb_file_url: string;
  banner_file_url: string;
  trailer_file_url: string;
  video_file_url: string;
}

export interface VideoParams {
  page?: number;
  perPage?: number;
  search?: string;
  sort?: string;
  direction?: string;
}

export interface VideoPayload {
  id?: string;
  title: string;
  rating: string;
  opened: boolean;
  published: false;
  duration: string;
  description: string;
  genres?: string[];
  year_launched: string;
  categories?: string[];
  cast_members?: string[];
}
