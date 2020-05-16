import { Category } from './category.enum';

export interface Item {
  id: number;
  label: string;
  categories: Category[];
  imageUrl: string;
}
