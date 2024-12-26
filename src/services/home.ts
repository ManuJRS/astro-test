import { mappedHome } from "@/middlewares/mapped-home";
import type { HomeResponse } from "@/types/home";
import { fetcher } from "@/utils/fetcher";

export const getHomeData = async () => {
    const home = await fetcher <HomeResponse> ("home?populate=*");
    const data = mappedHome(home);
    return data;
}