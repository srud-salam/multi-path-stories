
const stories = require("../data/stories.json");
let newPageId = Object.keys(stories).length + 1;
let currentPageId = 1;

exports.getAll = () => stories[currentPageId];
exports.getCurrentPageId = () => currentPageId;

exports.update = (sotryId, sentence, isClicked) => {
    stories[currentPageId][sotryId] = { 'sentence': sentence, 'isClicked': isClicked, 'page': newPageId }
}

exports.updateCurrentPageId = (pageId) => {
    currentPageId = pageId;
}

exports.new = (sentence) => {
    currentPageId = Object.keys(stories).length;
    newPageId = Object.keys(stories).length + 1;

    page = { 1: { 'sentence': sentence, 'isClicked': 'false', 'page': newPageId } }
    if (currentPageId <= 0) {
        stories[newPageId] = page;
    } else {
        for (let i = 1; i <= newPageId; i++) {
            if (stories[i] !== page) {
                stories[newPageId] = page;
            }
        }
    }

    currentPageId = Object.keys(stories).length;
    newPageId = Object.keys(stories).length + 1;
}

exports.add = (storyId, sentence) => {
    if (sentence, sentence.length >= 1) {
        stories[currentPageId][storyId] = { 'sentence': sentence, 'isClicked': 'false', 'page': currentPageId };
    }
}

