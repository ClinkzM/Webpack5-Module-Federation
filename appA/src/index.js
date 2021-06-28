// You can write your own logic here to determine the actual url
window.appBUrl = "https://clinkzm.github.io/Webpack5-Module-Federation/appB/dist"

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
