// Compare files and folders size
module.exports = {
  files: [
    '<%= config.root %>/*',
    '<%= config.build %>/*',
  ],
  // files: [
  //   "library.js",
  //   "library.min.js"
  // ],
  options: {
    expand: true,
    // Location of stored size data
    cache: ".sizecache.json"

    // Compressor label-function pairs
    // compress: {
    //   gz: function( fileContents ) {
    //     return require("gzip-js").zip( fileContents, {} ).length;
    //   },
    //   otherCompressorLabel: function( fileContents ) {
    //     return compressedSize( fileContents );
    //   }
    // }
  }
};
