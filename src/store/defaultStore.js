export const defaultStore = {
  theme: {
    color: ""
  },
  notes: {
    list: [
      {
        titulo: "Coisas pra fazer",
        data: {
          time: new Date().getTime(),
          blocks: [
            {
              type: "header",
              data: {
                text: "Texto 1",
                level: 1
              }
            }
          ]
        },
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sollicitudin sem, sit amet semper neque. Aliquam mi dui, ultrices sit amet leo in, vulputate dignissim lorem",
        date: new Date(),
        id: 123123
      },
      {
        titulo: "Coisas pra fazer",
        data: {
          time: new Date().getTime() + 2,
          blocks: [
            {
              type: "header",
              data: {
                text: "Texto 2",
                level: 1
              }
            }
          ]
        },
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sollicitudin sem, sit amet semper neque. Aliquam mi dui, ultrices sit amet leo in, vulputate dignissim lorem",
        date: new Date(),
        id: 123123212
      }
    ],
    selectedId: null,
    isFetching: false,
    isSubmiting: false,
    isQuerying: false
  }
};
