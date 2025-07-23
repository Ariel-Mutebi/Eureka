function snakeCaseToCamelCase(snakeCaseString: string) {
  const splitUpString = snakeCaseString.split("_");
  // This next line shows how JavaScript is way too wild. Why can't she be clean, opinionated and civilised like Python?
  // No, I like her with her wild, dirty, naughty one-liners. 
  const splitUpCamelCase = splitUpString.map((substring, index) => index > 0 ? substring.slice(0, 1).toLocaleUpperCase() + substring.slice(1) : substring);
  const joinedCamelCase = splitUpCamelCase.join("");
  return joinedCamelCase;
};

export default snakeCaseToCamelCase;