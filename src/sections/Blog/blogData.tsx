import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Power of AI in Personalized Healthcare",
    paragraph:
      "Discover how AI is revolutionizing healthcare by providing personalized insights, symptom tracking, and tailored recommendations to improve your well-being.",
    image: "/images/blog/b1.jpg",
    author: {
      name: "Suzi Jenk",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["ai"],
    publishDate: "19 Feb 2024",
  },
  {
    id: 2,
    title: "5 Simple Steps to Improve Your Daily Wellness",
    paragraph:
      "Small changes can make a big impact on your health! From proper hydration to better sleep habits, explore five simple yet powerful steps to enhance your overall well-being.",
    image: "/images/blog/b2.jpg",
    author: {
      name: "Suzi Jenk",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["fitness"],
    publishDate: "01 Feb 2024",
  },
  {
    id: 3,
    title: "How Medication Management Can Save Lives",
    paragraph:
      "Missed medications can lead to serious health risks. Learn why effective medication tracking is crucial and how Space Center's smart reminders ensure you never miss a dose.",
    image: "/images/blog/b3.jpg",
    author: {
      name: "Suzi Jenk",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["Health"],
    publishDate: "28 Jan 2024",
  },
];
export default blogData;
