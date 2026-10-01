const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "../gallery");
const PER_PAGE = 60;
const IMG = /\.(jpe?g|png|gif|webp|tiff?)$/i;
const read = f => (fs.existsSync(f) ? fs.readFileSync(f, "utf8").trim() : "");

module.exports = () => {
  const albums = [];
  const pages = [];

  const dirs = fs.readdirSync(ROOT, { withFileTypes: true }).filter(d => d.isDirectory());
  for (const dir of dirs) {
    const base = path.join(ROOT, dir.name);
    const slug = dir.name;
    const urlBase = `/gallery/${encodeURIComponent(dir.name)}/`;

    const photos = fs.readdirSync(base)
      .filter(f => IMG.test(f))
      .sort()
      .map(file => ({
        url: urlBase + encodeURIComponent(file),
        desc: read(path.join(base, file + ".txt")),
      }));

    const album = {
      title: dir.name,
      slug,
      desc: read(path.join(base, "description.txt")),
      cover: photos[0]?.url,
      count: photos.length,
    };
    albums.push(album);

    const total = Math.max(1, Math.ceil(photos.length / PER_PAGE));
    for (let n = 1; n <= total; n++) {
      pages.push({ ...album, n, total, photos: photos.slice((n - 1) * PER_PAGE, (n - 1) * PER_PAGE + PER_PAGE) });
    }
  }
  return { albums, pages };
};