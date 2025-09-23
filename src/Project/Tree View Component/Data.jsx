const treeData = [
  {
    id: 1,
    label: "Fruit",
    children: [
      {
        id: 2,
        label: "Citrus",
        children: [
          { id: 3, label: "Orange" },
          { id: 4, label: "Lemon" }
        ]
      },
      {
        id: 5,
        label: "Berries",
        children: [
          { id: 6, label: "Strawberry" },
          { id: 7, label: "Blueberry" }
        ]
      }
    ]
  },
  {
    id: 8,
    label: "Vegetables",
    children: [
      {
        id: 9,
        label: "Leafy Greens",
        children: [
          { id: 10, label: "Spinach" },
          { id: 11, label: "Lettuce" }
        ]
      },
      {
        id: 12,
        label: "Root Vegetables",
        children: [
          { id: 13, label: "Carrot" },
          { id: 14, label: "Beetroot" }
        ]
      }
    ]
  }
];

export default treeData