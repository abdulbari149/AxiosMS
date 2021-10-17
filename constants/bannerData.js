export const bannerData = [
  {
    id: 1,
    background: "gradient",
    name: "hero",
    width: 1600,
    height: 600,
    content: {
      title: {
        text: "How to enhance your\nbusiness growth?",
        tag: "h1",
        textColor: "white",
      },
      body: {
        text: "We put forward efficient services to your\nbusiness wrapped with media solutions.",
        textColor: "white",
      },
    },
    align: "flex-start",
    buttons: [
      {
        id: 1,
        content: "contact Us",
        variant: "outlined",
        size: {
          width: 18,
          height: 8,
        },
        route: {
          path: "#contactus",
          options: {
            shallow: true,
          },
        },
      },
      {
        id: 2,
        content: "Learn More",
        size: {
          width: 18,
          height: 8,
        },
        color: "white",
        variant: "contained",
        route: {
          path: "#about",
          options: {
            shallow: true,
          },
        },
      },
    ],
  },
  {
    id: 2,
    name: "marketing",
    background: "gradient",
    width: 1600,
    height: 450,
    align: "center",
    content: {
      title: {
        text: "Start Working With Us Now",
        tag: "h2",
        textColor: "blue",
      },
      body: {
        text: "We put forward efficient services to your\nbusiness wrapped with media solutions.",
        textColor: "white",
      },
    },
    buttons: [
      {
        id: 1,
        content: "hire us",
        size: {
          width: 22,
          height: 8,
        },
        variant: "outlined",
        route: {
          path: "#contactus",
          options: {
            shallow: true,
          },
        },
      },
    ],
  },
];
