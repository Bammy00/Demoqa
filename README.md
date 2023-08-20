# Demo QA 

This repository contains an example Selenium WebDriver script written in JavaScript. The script navigates through the demoqa.com website, performs various actions, and showcases common WebDriver operations. The script interacts with elements, handles alerts, frames, and performs slider manipulation.

## Getting Started

To run the script locally, follow these steps:

1. Install Node.js: Make sure you have Node.js installed on your system. You can download it from https://nodejs.org/.

2. Clone this repository:
   ```sh
   git clone https://github.com/bammy00/demoqa.git
   ```

3. Navigate to the project directory:
   ```sh
   cd demoqa
   ```

4. Install dependencies:
   ```sh
   npm install
   ```

5. Replace `path_to_file.png` in the script with the actual path to the file you want to upload.

6. Run the script:
   ```sh
   node demoqa.js
   ```

## Features

The script demonstrates the following actions using Selenium WebDriver:

1. Navigate to the URL and interact with elements on the page.
2. Select "New User" and complete the registration form.
3. Perform text box interactions and submit the form.
4. Add and delete records in a web table.
5. Upload a file and download a file.
6. Handle nested frames and switch back to the default content.
7. Manipulate a slider element.

## Notes

- Make sure you have the Chrome browser installed on your system.
- You may need to download and configure the appropriate ChromeDriver executable. Update the path to ChromeDriver in the script if needed.
- Replace `path_to_file.png` with the actual path of the file you want to upload.
