export default function uploadPhoto(filename) {
  return Promise((resolve, reject) => {
    if (filename) {
      resolve();
    }
    reject(Error(`${filename} cannot be processed`));
  });
}
