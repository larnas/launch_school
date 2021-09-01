function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found');
  }
}

barCodeScanner('113'); // -> Product2, Product3, Product not found!

// on case 113 initialised and execute the block
// and later on never breaks until the end