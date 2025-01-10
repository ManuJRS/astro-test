import { mappedHomeDevelop } from "@/middlewares/mapped-home-develop";
import type { HomeDevelopResponse } from "@/types/home-develop";
import { fetcher } from "@/utils/fetcher";

export const getHomeDevelopData = async () => {
  const resp = await fetcher<HomeDevelopResponse>(
    "page-develop?populate[hero][populate][image][fields]=url&populate[hero][populate][image][fields]=alternativeText&populate[seo][populate][shareImage][fields]=url&populate[seo][populate][shareImage][fields]=alternativeText&populate[components][populate]=*"
  );

  const data = mappedHomeDevelop(resp);
  return data;
};
