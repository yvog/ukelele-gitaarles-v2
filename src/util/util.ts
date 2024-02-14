export const transformHygraphImage = (
  src: string,
  width: number,
  height: number
): string => {
  const imageUrlParts = src.split('/');

  return `https://media.graphassets.com/resize=height:${height},width:${width}/${
    imageUrlParts[imageUrlParts.length - 1]
  }`;
};
