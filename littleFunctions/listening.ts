function listening(error: Error | undefined, PORT: number) {
  if(error) {
    console.error(error);
  } else {
    console.log(`App listening on port ${PORT}.`);
  };
};

export default listening;