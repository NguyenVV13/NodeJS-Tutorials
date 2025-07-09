/**
 * Doing filesystem operations using the fs module
 */
const fs = require('fs');



/* Working with files */

// Creating a file, ASYNCHRONOUS
// File name, input data, callback
// fs.writeFile('example.txt', "This is input data for the file", (err) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log("File successfully created");
//         // Reading a file
//         // File name, encoding, (callback, data)
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if(err)
//                 console.log(err);
//             else {
//                 console.log(file);
//             }
//         })
//     }
// });

// Renaming a file, ASYNCHRONOUS
// Old name, new name, callback
// fs.rename('example.txt', 'example2.txt', (err) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log("File successfully renamed");
//     }
// })

// Straightforward append example
// fs.appendFile('example2.txt', "\nData being appended", (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Data successfully appended to data")
// })

// Deleting a file
// fs.unlink('example2.txt', (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Successfully deleted file")
// })



/* Working with directories */

// Make directory
// fs.mkdir('ex_dir', (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Successfully created directory")
// })

// Remove directory, directory MUST be EMPTY before deleting
// fs.rmdir('ex_dir', (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Successfully deleted directory")
// })

// More complex example, empty directory before deleting it
// fs.readdir('./ex_dir', (err, files) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log(files);
//         // for loop with basic iterable generator (of)
//         for(let file of files) {
//             fs.unlink(`./ex_dir/${file}`, (err) => {
//                 if(err)
//                     console.log(err);
//                 else
//                     console.log(`Successfully deleted file ${file}`);
//             })
//         }

//         /*
//         REMINDER; THESE CALLS ARE ASYNCHRONOUS, PROGRAMMING SEQUENTIALLY LIKE THIS
//         IS NOT GUARANTEED TO WORK, WHICH MEANS IT DOESN'T WORK
//         */
//         // fs.rmdir('./ex_dir', (err) => {
//         //     if(err)
//         //         console.log(err);
//         //     else
//         //         console.log('Directory ex_dir successfully removed');
//         // })
//     }
// })



/* Working with data streams */
/* Streams should be used over something like fs.readFile because streams save
data into a small buffer, which allow read and write chunk by chunk, while readFile
requires the entire file to be saved into a FULL buffer. */

// Without the optional enconding parameter, the data is stored as bytes
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt');

// Listens for the 'data' event from reading data in from an input stream
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// A better way than doing source (read) -> destination (write) would be to use pipe()
//readStream.pipe(writeStream);

// Transformation stream (compression)
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt.gz');
// const zlib = require('zlib');  // Data compression
// const gzip = zlib.createGzip();

// Take data from read stream, compress it, then write the gz file into example2.txt.gz
// readStream.pipe(gzip).pipe(writeStream);

// Transformation stream (unzipping)
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('./uncompressed.txt');
const zlib = require('zlib');  // Data compression
const gunzip = zlib.createGunzip();
// Read in the compressed data, unzip it, then write the contents into a text file
readStream.pipe(gunzip).pipe(writeStream);