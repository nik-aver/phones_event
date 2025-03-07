/** @type {import("prettier").Config} */

export default {
    overrides: [
        {
            files: ["*.svg"],
            options: {
                parser: "html",
            },
        },
    ],
    singleAttributePerLine: true,
};
