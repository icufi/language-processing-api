import { checkForName } from "../client/js/nameChecker";

describe("checks input type", () => {
    test("it should test if input is valid URL", () =>
    {
        const input = 'http://www.hotdogs.com';
        const output = true;
        expect(checkForName(input)).toBe(output);

    });

    
});