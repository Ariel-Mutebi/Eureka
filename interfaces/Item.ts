interface Item {
  pk: string;
  name: string;
  description: string;
  emailOfPersonWhoPosted: string;
  password: string;
  isLost: boolean;
  location: {
    x: number,
    y: number
  };
  locationName?: string;
  fullLocationName?: string;
};

export default Item;