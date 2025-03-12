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

I legitimately do not remember how I did this before. Ages and ages ago, during the pandemic, I made one that parsed an RSS feed for a podcast. It would select an episode at random from the feed, and then play it on a webpage showing the episode title and description. Part of it is not remembering what I did before, another part is trying to do that in JS which I did not do before (maybe? if I did, I didn't know what I was writing and did a whole lot of copy and paste code from stack overflow).

### Using the [Bluesky API](https://docs.bsky.app/)
