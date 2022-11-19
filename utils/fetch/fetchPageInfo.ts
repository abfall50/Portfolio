import { PageInfo } from "../typings/sanity";

export const fetchPageInfo = async (language: string) => {
  let data: any;
  if (language === "en") {
    data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfoEn`).then(
      (res) => res.json()
    );
  } else {
    data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfoFr`).then(
      (res) => res.json()
    );
  }

  const pageInfo: PageInfo = data.pageInfo;

  //console.log("fetching PageInfos: ", pageInfo);

  return pageInfo;
};
