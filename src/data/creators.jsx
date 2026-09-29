export const creator = {
  id: 1,
  name: "PurePearl Studio",
  badge: "Creator",
  tagline: "Passionate UI/UX, Web designer",
  avatar: "/creator-p.png",
  bio: `Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!

Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.`,
  productsCount: 3,
  followersCount: 12,
};

export const creatorCourses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    thumbnail: "/thum1.png",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    thumbnail: "/thum2.png",
  },
  {
    id: 3,
    title: "The Power of Big Data",
    thumbnail: "/thum3.png",
  },
  {
    id: 4,
    title: "Balancing Productivity",
    thumbnail: "/thum4.png",
  },
  {
    id: 5,
    title: "Mastering Money Management",
    thumbnail: "/thum5.png",
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    thumbnail: "/thum6.png",
  },
].map((c) => ({
  ...c,
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  students: 26,
  rating: 4.5,
  price: 25,
}));