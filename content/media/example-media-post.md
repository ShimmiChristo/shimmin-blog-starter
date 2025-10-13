---
title: "Example Media Post: Complete Formatting Guide"
date: "2025-10-10"
category: "media"
description: "This is an example media post showcasing all available markdown formatting options and frontmatter fields."
featuredImg: "../assets/profile-pic.jpg"
active: false
published: false
author: "Chris Shimmin"
tags: ["example", "formatting", "guide"]
---

# Main Heading

This is an example media post that demonstrates all the available markdown formatting options you can use in your content.

## Subheading Level 2

### Subheading Level 3

Here's a paragraph with **bold text**, *italic text*, and ***bold italic text***. You can also use `inline code` for technical terms.

## Lists

### Unordered List
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered List
1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

## Links and Images

You can create [external links](https://www.example.com) and [internal links](/about) to other pages.

For images, you can reference them from the assets folder:
![Example Image](../assets/profile-pic.jpg)

## Code Blocks

Here's a JavaScript code block:

```javascript
const exampleFunction = () => {
  console.log("Hello, world!");
  return "This is an example";
};
```

And here's some CSS:

```css
.example-class {
  color: #333;
  font-size: 16px;
  margin: 1rem 0;
}
```

## Blockquotes

> This is a blockquote. It's great for highlighting important information or quotes from other sources.
> 
> You can have multiple paragraphs in a blockquote.

## Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Images | GatsbyImage support | ✅ Complete |
| Links | Internal and external | ✅ Complete |
| Code | Syntax highlighting | ✅ Complete |

## Horizontal Rule

---

## Special Formatting

You can use ~~strikethrough text~~ and create footnotes[^1].

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Sports-Specific Content Examples

Since this is a sports blog, here are some sports-specific formatting examples:

### Match Results
**Final Score:** Team A 3 - 1 Team B

**Goal Scorers:**
- Team A: Player 1 (15'), Player 2 (34'), Player 3 (78')
- Team B: Player 4 (56')

### Player Statistics
| Player | Goals | Assists | Minutes |
|--------|-------|---------|---------|
| Player 1 | 2 | 1 | 90 |
| Player 2 | 1 | 3 | 85 |
| Player 3 | 0 | 2 | 78 |

### Upcoming Fixtures

**Next Match:** October 15, 2025
- **Opponent:** City Rivals FC
- **Venue:** Home Stadium
- **Kick-off:** 3:00 PM

---

*This example post demonstrates the full range of markdown formatting available. The frontmatter includes all recommended fields for proper categorization and display.*

[^1]: This is a footnote example.