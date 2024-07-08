const categories = [
 {
  categoryTitle: "Novels",
  works: [
    {
      workTitle: "Novel one",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Novel two",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Novel three",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
  ]
 },
 {
  categoryTitle: "Short Stories",
  works: [
    {
      workTitle: "Short Story 1",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Short Story 2",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Short Story 3",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
  ]
 },
 {
  categoryTitle: "Comics",
  works: [
    {
      workTitle: "Comic 1",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Comic 2",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Comic 3",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
  ]
 },
 {
  categoryTitle: "Contributions to Comics Anthologies",
  works: [
    {
      workTitle: "Comic 1",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Comic 2",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Comic 3",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
  ]
 },
 {
  categoryTitle: "Roleplaying Games Materials",
  works: [
    {
      workTitle: "Material 1",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Material 2",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Material 3",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
  ]
 },
 {
  categoryTitle: "Roleplaying Games Contributor",
  works: [
    {
      workTitle: "Game 1",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Game 2",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Game 3",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
  ]
 },
 {
  categoryTitle: "Video Games",
  works: [
    {
      workTitle: "Game 1",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Game 2",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Game 3",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
  ]
 },
 // New Categories take the outermost (purple) Object
 // Don't forget the after the previous entry!
 {
  // Categories have two parent keys: categoryTitle and works
  /* categoryTitle should be self-evident, and works takes an Array
   (in square brackets) */
  categoryTitle: "Awards and Certifications",
  works: [
    // The works Array is comprised of more Objects (curly braces)
    // Again, don't forget the commas!
    {
      // These child (yellow) Objects have four values:
      // workTitle, year, source, and link
      /* For all variables besides year, it is important to use quote marks
      so the compiler knows it's text. The year does not need quotes, and
      single/double quotes don't matter as long as they match */
      workTitle: "Award 1",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Award 2",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
    {
      workTitle: "Award 3",
      year: 2024,
      source: "Source",
      link: "https://example.com"
    },
  ]
 },
]
export default categories;