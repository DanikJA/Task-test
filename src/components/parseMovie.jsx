export const parseMoviesFile = text => {
  const blocks = text.trim().split(/\n\s*\n/);
  return blocks.map(block => {
    const title = block.match(/Title:\s(.+)/)?.[1] || '';
    const year = parseInt(
      block.match(/Release Year:\s(\d{4})/)?.[1] || '0',
      10
    );
    const format = block.match(/Format:\s(.+)/)?.[1] || '';
    const stars =
      block
        .match(/Stars:\s(.+)/)?.[1]
        .split(',')
        .map(s => s.trim()) || [];
    return { title, releaseYear: year, format, stars };
  });
};
