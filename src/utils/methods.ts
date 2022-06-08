class Methods {
  public getPhotoFromAssets(path: string): string {
    const images = require.context('@/assets/');
    return images(`./${path}`);
  }
}

export default new Methods();
