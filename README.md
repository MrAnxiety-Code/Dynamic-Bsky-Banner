# Dynamic-Bsky-Banner
 A dynamically changing banner using BlueSky posts.

## The Idea
To replace the text in the background of my current profile banner with dynamically changing text based on my posts.
![My not dynamic profile banner](https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:uexvzvxiyl5ntq7h46vt5vix/bafkreiezypgg2553hgamcyhdoun7kqrq4lhluyluh4delhrmepwea5pcfu@jpeg)

When I first made my profile banner, it was as a learning exercise for HTML and CSS. I copied and pasted a couple of threads I'd written on Bluesky along with my bio into a big-ass ```<p>``` tag which took ages to do. For what I was making, and where I was at in my journey back into writing code, it was totally fine. But Now I'm at a place where I reckon I could do better. 

Inspired by the [dynamic avatar](https://dame.is/blog/how-i-made-an-automated-dynamic-avatar-for-my-bluesky-profile) of [dame.is](https://bsky.app/profile/dame.is) I thought _"What if I could dynamically update my profile banners background text with the text from my posts?"_ Or even using other text from Bluesky, like text from my following feed or from a specific feed like [My Bangers](https://bsky.app/profile/jaz.bsky.social/feed/bangers).

## Scope
Dame's avatar works, as far as I know it, because it uses an apple shortcut to update the avatar once an hour. I don't have an iPhone and while exploring cron jobs is something I would like to do one day, I'm not there yet. So for now, to update my banner, I'll need to run this repo and screenshot what appears. Maybe instead of a screenshot I could get it to make a jpeg I can download? Let's make that a stretch goal as I'm already going to have to learn some new things in order to make this work. The point is: No automatic updating every hour for me. 

I do want to host this somewhere, like maybe on the GitHub pages blog I want to make, so anyone can open it and look at it as is in that moment of time. Kind of like art that only exists in a specific moment in time. That sounds cool and tickles the part of my brain that my Uncle would call "the existential, college educated, kaftan wearing, wanker".

## Execution
So far I've two ideas for making this work:
1. Parsing an RSS feed
2. Using the [Bluesky API](https://docs.bsky.app/)

### Parsing an RSS feed
This was my original idea. Knowing that every profile is also an RSS feed if you add ```/rss``` to the end of it's URL ([like this](https://bsky.app/profile/did:plc:uexvzvxiyl5ntq7h46vt5vix/rss)) and that I'd parsed RSS feeds before I knew JS, I thought this would be easy.

**NOPE!**

I legitimately do not remember how I did this before. Ages and ages ago, during the pandemic, I made one that parsed an RSS feed for a podcast. It would select an episode at random from the feed, and then play it on a webpage showing the episode title and description. Part of it is not remembering what I did before, another part is trying to do that in JS which I did not do before (maybe? if I did, I didn't know what I was writing and did a whole lot of copy and paste code from stack overflow). I did some googling and found two sites talking about it:
- [The first one](https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/) looked good but I didn't understand some of the code. No biggie, that's part of why I'm doing this. But the code was not returning data.
- [And this one](https://dev.to/geekgalgroks/building-an-rss-reader-in-javascript-1ep0) was promising. I really like how they documented the roadblocks they ran into. But their solution was to ultimately use the code that I didn't really understand in the first one. No joke, the answer was a link to the website I'd already found, great minds huh?

I still think there's some potential here but I need to narrow down what the issue is.

#### Blockers
1. Google Chrome was blocking the ```fetch()``` method from getting the RSS feed at all. So I've been testing in Edge. Maybe I need to test in another browser?
2. BlueSky's [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) was blocking the request.
3. Changing ```fetch()``` to include ```{mode: no-cors}``` still doesn't return any data: ```fetch(feed, {mode: no-cors});```
   - instead I get a new error logged to the console:
   ```
   <parsererror style="display: block; white-space: pre; border: 2px solid #c77; padding: 0 1em 0 1em; margin: 1em; background-color: #fdd; color: black">
    <h3>This page contains the following errors:<h3>
    <div style="font-family:monospace;font-size:12px">error on line 1 at column 1: Document is empty</div>
    <h3>Below is a rendering of the page up to the first error.<h3>
   </parsererror>
   ```
   - I don't know if this means ```{mode: no-cors}``` is doing nothing and I'm still locked out, or if I'm not parsing the data correctly. Given that a lot of the code for parsing I've just copied and pasted for the sake of proof of concept, it is totally possible there's something going on there I don't understand and therefore have not configured correctly.

### Using the [Bluesky API](https://docs.bsky.app/)
#### Pros
- Theoretically can allow me to do a lot of cool, artsy stuff like using the My bangers Feed or my own follwers feed.
- I learn more about APIs which is something I want to do, and Gemini reckons I'm ready to explore.
- I learn more about the Bluesky API specifically, which I hope can deepen my understanding of the AT Protocol.
- I get to learn Typescript.
#### Cons
- I get to learn Typescript.

The con here is pretty disheartening. It's not that I don't want to learn Typescript, it's that I don't think I'm ready for it. But really it just means that I'll need to park this here for a bit while I go off and learn some more. There's other projects for me to tackle that will get me here. There's even more projects I can do that I'm not aware of because I've only just glimpsed Typescript. So far the sum total of my reading has been the first couple chapters of documentation on the [Typescript website](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html).

## TODO
- [ ] Complete the intermediate JS course on Sololearn. The last section of the course gets into ES6 which seems to have a lot of stuff that I see going on in the bluesky API documentation.
- [ ] Do some more research on Typescript. I don't think I need a [make Doom in types](https://www.youtube.com/watch?v=0mCsluv5FXA) level of knowledge to get this to work. Particularly as I only want read access and don't need write access.
- [ ] See how sites like [PDSls](https://pdsls.dev/) implement the API when doing things that are read only, like showing someones posts.
