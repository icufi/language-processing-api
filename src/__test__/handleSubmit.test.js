import { mockHandleSubmit } from "../client/js/mockFormHandler";

describe("API functionality", () => {
    test('testing the mockHandleSubmit() apiCall', async () =>
    {
        const json = await mockHandleSubmit()
        expect(json.confidence).toBe(84);
        });
});

