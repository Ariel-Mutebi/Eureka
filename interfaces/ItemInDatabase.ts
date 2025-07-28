interface ItemInDatabase {
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
};

export default ItemInDatabase;