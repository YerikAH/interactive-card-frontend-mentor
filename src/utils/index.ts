export function formatCardNumber(input: string) {
  const cleanedInput = input.replace(/\D/g, "");
  let formattedNumber = "";
  for (let i = 0; i < cleanedInput.length; i++) {
    formattedNumber += cleanedInput[i];

    if ((i + 1) % 4 === 0 && i + 1 !== cleanedInput.length) {
      formattedNumber += " ";
    }
  }

  return formattedNumber;
}

export function formatNumber(input: string) {
  const cleanedInput = input.replace(/\D/g, "");
  return cleanedInput;
}

export function formatName(input: string) {
  const cleanedInput = input.replace(/[^a-zA-Z\s]/g, '');
  const hasTrailingSpace = cleanedInput.endsWith(' ');
  const trimmedInput = cleanedInput.trim(); 

  const formattedName = trimmedInput
    .split(/\s+/) 
    .filter(word => word.length > 0) 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return hasTrailingSpace ? `${formattedName} ` : formattedName;
}