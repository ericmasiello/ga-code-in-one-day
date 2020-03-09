# Design Specification

## Common
- Headings use font: `'Oswald', sans-serif;`
- Everything else `'Nunito Sans', sans-serif;`
- All text should be color `#333`
- Make sure all images have a `max-width: 100%`

## Hero
- Padding all the way around `48px`
- Set the minimum height to `100vh`
- Background image is `img/hero.png`
- Background must cover the entire space
- Background image is centered

## Menu button
- Font `'Oswald', sans-serif;`
- Should have a `2px` solid border set to `#333`;
- Should have left and right padding of `40px` and top and bottom padding of `8px`
- Font size of `16px`
- Text color should be `#333`
- On hover, the text color should be `#fff` and the background `#333`

## Navigation
- Font `'Oswald', sans-serif;`
- Text color `#333`
- When hovering, background color `#333` and text color is `#fff`
- Each link should have left and right padding of `24px` and top and bottom of `8px`
- Each link should have `16px` of white space separating each link

## Collection
- The text "In the city that works..." should be `'Oswald', sans-serif;`
- Padding all the way around `48px`
- When the screen is at least `720px` wide, the images should be:
  - `350px` tall
  - `300px` wide
  - apply `object-fit: cover` to make them size correctly

## Our Story
- Background color of `#D2DBE0`
- Padding all the way around of `48px`
- The headings should be centered but the `Lorem ipsum...` copy should be left aligned

## Blog
- Padding all the way around `48px`
- Background image is `img/jefferson.png`
- Background must cover the entire space
- Background image is centered
- Set a minimum height of `40vh`
- The "Read the Blog" button needs to link to another page so it must be an `<a>` instead of a `<button>`
- Style the "Read the Blog" link identically to the menu button
- Only worry about centering the content horizontally (Solving vertically is listed under the bonus section)

## Contact (Footer)
- Background color of `#D2DBE0`
- Padding on the top and bottom should be `24px`
- Padding on left and right should be `48px`

## Bonus!
- Figure out how to center the "Read the Blog" button vertically _and_ horizontally
- The content within each section should not exceed `1100px` wide. However, background colors/image for each section must span the entire width of the browser
- Each section of the page has common padding of `48px` and is centered. Find a way to generalize this into a reusable style that can be applied to all sections of content