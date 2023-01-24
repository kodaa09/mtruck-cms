import CategoryService from "@/services/CategoryService";
import Card from "./Card";
import { CategoryType } from "@/types/CategoryType";

export default async function CardContainer() {
  const categories = await CategoryService.getAllCategories();
  return (
    <div className="card-container">
      <div className="card-container-wrapper">
        {categories.map((categorie: CategoryType) => (
          <Card
            image={categorie.attributes.image.data.attributes.url}
            text={categorie.attributes.text}
            cta={categorie.attributes.cta}
            alt={categorie.attributes.alt}
            key={categorie.id}
          />
        ))}
      </div>
    </div>
  );
}
