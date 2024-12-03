export interface HelpArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  lastUpdated: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SupportResource {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: string;
}