const baseCourses = [
  {
    title: "Learn Figma from Basic",
    thumbnail: "./thum1.png",
  },
  {
    title: "Build Digital Asset",
    thumbnail: "./thum2.png",
  },
  {
    title: "The Power of Big Data",
    thumbnail: "./thum3.png",
  },
  {
    title: "Balancing Productivity",
    thumbnail: "./thum4.png",
  },
  {
    title: "Mastering Money Management",
    thumbnail: "./thum5.png",
  },
  {
    title: "From Idea to Startup Success",
    thumbnail: "./thum6.png",
  },
];


export const allCourses = Array.from({ length: 18 }, (_, i) => {
  const base = baseCourses[i % baseCourses.length];

  return {
    id: i + 1,
    title: base.title,
    thumbnail: base.thumbnail,
    author: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    rating: 4.5,
    price: 25,
  };
});


export const courses = allCourses.slice(0, 6);


export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];


export const coursePageCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];


export const levelOptions = ["Beginner", "Intermediate", "Advanced"];

export const sortOptions = [
  "Most relevant",
  "Newest",
  "Top rated",
  "Price: low to high",
];

export const learningPaths = [
  { label: "Design", icon: "design" },
  { label: "Development", icon: "development" },
  { label: "IT & Software", icon: "it" },
  { label: "Business", icon: "business" },
  { label: "Marketing", icon: "marketing" },
  { label: "Photography", icon: "photography" },
];