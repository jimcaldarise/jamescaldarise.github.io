export function* textGenerator(sentence: string): Generator<string> {
   let text = "";

   const inputAsCharArray = input.split("");

   for (const letter of inputAsCharArray) {
      text += letter;
      yield text;
   }
}