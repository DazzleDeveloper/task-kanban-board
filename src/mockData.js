import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "IN PROGRESS",
    tasks: [
      {
        id: uuidv4(),
        title: "HTML Course",
        desc: "HTML course for beginners",
        date: "2021-05-07",
        progress: "0%",
        profile: "https://randomuser.me/api/portraits/women/23.jpg",
        name: "Luisa",
      },
      {
        id: uuidv4(),
        title: "Intensive HTML Course",
        desc: "HTML course for non-beginners",
        date: "2021-05-05",
        progress: "0%",
        profile: "https://randomuser.me/api/portraits/women/22.jpg",
        name: "Alejandra",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "IN COURSE",
    tasks: [
      {
        id: uuidv4(),
        title: "GraphQL Course",
        desc: "GraphQL course for beginners",
        date: "2021-05-08",
        progress: "75%",
        profile: "https://randomuser.me/api/portraits/women/21.jpg",
        name: "Alondra",
      },
      {
        id: uuidv4(),
        title: "Intensive GraphQL Course",
        desc: "GraphQL course for non-beginners",
        date: "2021-05-02",
        progress: "75%",
        profile: "https://randomuser.me/api/portraits/women/20.jpg",
        name: "Ana",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "COMPLETED",
    tasks: [
      {
        id: uuidv4(),
        title: "SQL Course",
        desc: "SQL course for beginners",
        date: "2021-05-01",
        progress: "100%",
        profile: "https://randomuser.me/api/portraits/women/19.jpg",
        name: "Valeria"
      },
      {
        id: uuidv4(),
        title: "Intensive SQL Course",
        desc: "SQL course for non-beginners",
        date: "2021-05-04",
        progress: "100%",
        profile: "https://randomuser.me/api/portraits/women/18.jpg",
        name: "Sofia",
      },
    ],
  },
];

export default mockData;
