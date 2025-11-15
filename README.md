🍅 Pomodoro Timer — Chrome Extension

A lightweight and easy-to-use Pomodoro Timer built using HTML, CSS, and JavaScript.
This Chrome extension helps you stay focused and productive using the classic 25-minute Pomodoro technique.

🚀 Features

⏱️ 25-minute Pomodoro timer

▶️ Start, ⏸️ Pause, and 🔄 Reset

🧮 Auto-updates the time on screen

🔔 Alert when the session ends

💡 Simple, clean, and minimal interface

📦 Installation (Developer Mode)

To install the extension locally:

Download or clone this repository

git clone https://github.com/yourusername/your-repo.git


Open Google Chrome and go to:

chrome://extensions/


Enable Developer mode (top-right corner)

Click Load unpacked

Select the project folder containing:

manifest.json

popup.html

popup.js

The Pomodoro Timer will now appear in your Chrome toolbar 🎉

🗂️ Project Structure
📁 PomodoroExtension/
│── manifest.json       # Chrome extension configuration
│── popup.html          # User interface
│── popup.js            # Timer functionality
│── icon.png (optional) # Extension icon

🛠️ Tech Used

HTML5

JavaScript (Vanilla JS)

Chrome Extensions Manifest V3

💬 How It Works

Uses setInterval() to count down every second

Updates the timer display dynamically

Pauses and resets using clearInterval

Alerts the user when the timer reaches zero

🤝 Contributing

Feel free to submit pull requests or open issues for improvements, UI upgrades, or bug fixes.

📄 License

This project is open-source and available under the MIT License.
