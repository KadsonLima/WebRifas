
export const formatPhoneNumber = (input:string) => {
    const cleanedInput = input.replace(/\D/g, '');
    const match = cleanedInput.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return input;
  };