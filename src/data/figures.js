import { caseImages } from './caseImages';

export const figures = {
  ...caseImages,
  wafer: {
    src: `${import.meta.env.BASE_URL}images/silicon-wafer.jpg`,
    alt: 'A circular silicon wafer covered with a grid of rectangular integrated circuits, reflecting green, blue, and gold light.',
    credit: 'Peellden',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    source: 'https://commons.wikimedia.org/wiki/File:12-inch_silicon_wafer.jpg',
  },
};
