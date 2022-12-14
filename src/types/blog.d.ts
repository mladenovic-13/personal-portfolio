type Frontmatter = {
  title: string;
  author: string;
  category: string;
  date: Date;
  bannerImage: string;
  tags: string[];
};
type Post = {
  frontmatter: Frontmatter;
  content?: string;
};

type CategorizedPosts = {
  JavaScript: Frontmatter[];
  CSS: Frontmatter[];
  "Computer Science": Frontmatter[];
};
