import type { HomeDevelop, HomeDevelopResponse } from "@/types/home-develop";

export function mappedHomeDevelop(
  strapiData: HomeDevelopResponse
): HomeDevelop {
  const { hero, components, seo } = strapiData.data;

  const contentAling = components.find(
    (c) => c.__component === "develop.content-aling"
  );

  const background = components.find(
    (c) => c.__component === "develop.background"
  );

  const newData: HomeDevelop = {
    hero: {
      title: hero.title,
      image: {
        url: hero.image.url,
        alt: hero.image.alternativeText || "Some alt",
      },
    },
    contentAling: {
      title: contentAling?.title || "Some title",
      description: contentAling?.description || "Some description",
      image: {
        url: contentAling?.image.url || "Some title",
        alt: contentAling?.image.alternativeText || "Some alt",
      },
    },
    background: {
      title: background?.title || "Some title",
      description: background?.description || "Some description",
      image: {
        url: background?.image.url || "Some title",
        alt: background?.image.alternativeText || "Some alt",
      },
    },
    seo: {
      metaTitle: seo.metaTitle,
      metaDescription: seo.metaDescription,
    },
  };

  return newData;
}
