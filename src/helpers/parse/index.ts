import parse from "html-react-parser";

const removeHTML = (data: any) => {
  return data.replace(/<[^>]*>?/gm, "");
};

const parseHTML = (str: string) => {
  return parse(str);
};

export { removeHTML, parseHTML };
