import {
  FilePenLine,
  GraduationCap,
  Megaphone,
  MessagesSquare,
  Palette,
  PencilLine,
  Podcast,
  Video,
} from "lucide-react";

export const allServices = [
  {
    title: "Communications Strategy",
    icon: PencilLine,
    tag: "Strategy / Connection",
    copy: "Thoughtful strategy to help your organization communicate with clarity and connect with the people who matter.",
    items: [
      "Content strategy",
      "Messaging development",
      "Comms workflow design",
    ],
  },
  {
    title: "Video production",
    icon: Video,
    tag: "Film / Storytelling",
    copy: "Bring your message into focus with video that gives people a reason to watch, connect, and act.",
    items: ["Promotional videos", "Social media videos", "Evergreen videos"],
  },
  {
    title: "Creative direction",
    icon: Palette,
    tag: "Identity / Expression",
    copy: "Give your story a clear creative point of view, from the first visual idea to the final production.",
    items: [
      "Art direction and design",
      "Video production",
      "Brand style guides",
    ],
  },
  {
    title: "Editorial services",
    icon: FilePenLine,
    tag: "Words / Ideas",
    copy: "Turn complex ideas into clear, compelling stories that sound like you and speak to your audience.",
    items: [
      "Copywriting and ghostwriting",
      "Op-eds and guest essays",
      "Earned and paid media",
    ],
  },
  {
    title: "Social media marketing",
    icon: MessagesSquare,
    tag: "Community / Connection",
    copy: "Build a consistent presence where your audience already gathers, with content that keeps the conversation going.",
    items: [
      "Account management",
      "Post writing and design",
      "Content calendars and scheduling",
    ],
  },
  {
    title: "Spokesperson training",
    icon: GraduationCap,
    tag: "Voice / Presence",
    copy: "Develop an online presence and personality that make your message recognizable and your brand more human.",
    items: [
      "Online presence development",
      "In-studio and remote recording",
      "Full post-production services",
    ],
  },
  {
    title: "Podcast production",
    icon: Podcast,
    tag: "Audio / Video",
    copy: "Make your conversations worth pressing play on, with production support that carries your voice to your listeners.",
    items: [
      "Pre-production planning",
      "Full post-production services",
      "Distribution strategy",
    ],
  },
  {
    title: "Social advertising",
    icon: Megaphone,
    tag: "Campaigns / Action",
    copy: "Put your message in motion with creative that supports your campaigns and gives people a clear next step.",
    items: [
      "Fundraising campaigns",
      "Awareness campaigns",
      "Survey and listening campaigns",
    ],
  },
];
