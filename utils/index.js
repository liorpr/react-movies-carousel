
export function getReleaseDateString( releaseDate, asHeader ) {
  return new Date( releaseDate ) < new Date() ?
  "Now Playing" :
  asHeader ? `In Theaters ${ getFormattedDate(releaseDate) }` : getFormattedDate( releaseDate );
}

function getFormattedDate( date ) {
  return new Date( date ).toLocaleString(
    "en-us",
    {
      year  : "numeric",
      month : "long",
      day   : "numeric"
    }
  );
}
