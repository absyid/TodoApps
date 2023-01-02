import latestIcon from "../assets/Images/Sort/latestIcon.png";
import longestIcon from "../assets/Images/Sort/longestIcon.png";
import sortFromA from "../assets/Images/Sort/azIcon.png";
import sortFromZ from "../assets/Images/Sort/zaIcon.png";
import notFinish from "../assets/Images/Sort/notFinish.png"

const sort = [
  {
    id: 1,
    title: "Terbaru",
    img: (latestIcon),
  },
  {
    id: 2,
    title: "Terlama",
    img: (longestIcon),
  },
  {
    id: 3,
    title: "A - Z",
    img: (sortFromA),
  },
  {
    id: 4,
    title: "Z - A",
    img: (sortFromZ)
  },
  {
    id: 5,
    title: "Belum Selesai",
    img: (notFinish),
  },
];

export default sort;
