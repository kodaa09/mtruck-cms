import { CategoryType } from "@/types/CategoryType";

class CategoryService {
  static instance: CategoryService;

  private constructor() {}

  public static getInstance(): CategoryService {
    if (!CategoryService.instance) {
      CategoryService.instance = new CategoryService();
    }
    return CategoryService.instance;
  }

  async getAllCategories() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/categories?populate=*`);
    if (!res.ok) throw new Error("Failed to fetch categories data");
    const json = await res.json();
    return json.data;
  }

  async getCategoryByName(name: string) {
    let goodBanner: CategoryType | undefined = undefined;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/categories?populate=*`);
    if (!res.ok) throw new Error(`Failed to fetch categorie ${name} data`);
    const json = await res.json();
    const categories = json.data;
    categories.forEach((category: CategoryType) => {
      if (category.attributes.name === name) goodBanner = category;
    });
    return goodBanner;
  }
}
export default CategoryService.getInstance();