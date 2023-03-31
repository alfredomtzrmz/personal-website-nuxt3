export interface Stack {
  id: number;
  created_at: string;
  name: string;
  slug: string;
  icon_src: string;
  screenshots_src: string[];
  description: string;
  categories: Category;
  tags: Tag;
}

export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
  color: string;
}
