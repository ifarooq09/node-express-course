const { writeFile, readFile } = require("fs").promises;

async function writer() {
    try {
        await writeFile("temp.txt", "This is line 1\n");
        await writeFile("temp.txt", "This is line 2\n", { flag: 'a' });
        await writeFile("temp.txt", "This is line 3\n", { flag: 'a' });
    } catch (error) {
        console.error("An error occurred while writing the file:", error);
    }
}

async function reader() {
    try {
        const data = await readFile("temp.txt", "utf8");
        console.log(data);
    } catch (error) {
        console.error("An error occurred while reading the file:", error);
    }
}

async function readWrite() {
    await writer();
    await reader();
}

readWrite();
