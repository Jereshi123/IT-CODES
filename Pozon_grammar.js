let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// split the story into words
let storyWords = story.split(" ");

// Count the number of words before changes
console.log("Number of words of the story before change:", storyWords.length);

// Remove all the unnecessary word: “literally”

storyWords = storyWords.filter(word => word !== "literally");

// Correct the spelling of the word “beautifull”
storyWords = storyWords.map(word => word === "beautifull" ? "beautiful" : word);

// Find the bad word “freaking” and output its index position
let badWordIndex = storyWords.indexOf("freaking");
console.log("Bad word index is at:", badWordIndex);

// Change the bad word to the word “really”
if (badWordIndex !== -1) {
    storyWords[badWordIndex] = "really";
}

// Count the number of words after changes
console.log("Number of words of the story after change:", storyWords.length);

// Join the words back into a single string
let fixedStory = storyWords.join(" ");
console.log(fixedStory);


