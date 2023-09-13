export const BabelRCTemplate = () => {
    return `
    {
        "presets": [
            [
            "@babel/preset-env"
            ],
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        "plugins": []
    }
    `;
}