import { ImageList, ImageListItem } from '@mui/material';
import coffeAndCode from "../../../../Images/coffe&code.jpg";
import helpingEachOther from "../../../../Images/helpingEachOther.jpg";
import writingSomething from "../../../../Images/writing-something.jpg";
import workspace from "../../../../Images/workspace.jpg";
import talkingAboutSomething from "../../../../Images/talkingAboutSomething.jpeg";

const Gallery = () => {
    return (<ImageList sx={{ width: 500, height: 450 }} cols={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>);
};

const itemData = [
  {
    img: coffeAndCode,
    title: 'coffe And Code',
  },
  {
    img: helpingEachOther,
    title: 'helping Each Other',
  },
  {
    img: writingSomething,
    title: 'writingSomething',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: workspace,
    title: 'workspace',
  },
  {
    img: talkingAboutSomething,
    title: 'talking About Something',
  },
];

export default Gallery;