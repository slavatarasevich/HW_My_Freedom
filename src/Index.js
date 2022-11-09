import * as $ from "jquery";
import Post from "./Post";
import json from "./assets/json";
import WebpackLogo from "./assets/webpack-logo.png";
import "./babel.js";
import "./styles/styles.css";

const post = new Post("Webpack Post Title", WebpackLogo);

$("pre").html(post.toString());
// console.log("Post to String", post.toString());

// console.log("JSON", json);
