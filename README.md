# MMMUT Student Daily Tracker 📚

A beautiful, modern web application for B.TECH students at MMMUT to track their daily routine and manage their academic activities.

## Features ✨

### 1. **User Authentication**
- Login with Roll Number
- Student profile with Branch and Semester information
- Secure local storage (data stays on your device)
- Logout functionality

### 2. **Daily Routine Tracking**
- Add activities with specific time slots
- Categorize activities (Study, Sports, Project, Lab, Food, Sleep, Other)
- Mark tasks as completed
- Delete tasks
- Date-based task management

### 3. **User Dashboard**
- Student information card
- Real-time statistics (Tasks, Completed, Pending)
- Beautiful date selector to view different days
- Visual task cards with emojis
- Daily notes section to write thoughts and progress

### 4. **Beautiful UI**
- Modern dark theme with gradient backgrounds
- Animated starfield background
- Responsive design for all devices
- Smooth animations and transitions
- Glassmorphism effects with backdrop blur

### 5. **Data Management**
- All data stored locally in browser (localStorage)
- Persistent across sessions
- Ability to export data (via console functions)
- Daily notes save feature

## Getting Started 🚀

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or internet connection required!

### How to Use

1. **First Time Login**
   - Enter your Full Name
   - Enter your 8-digit Roll Number
   - Select your Branch
   - Select your Semester
   - Click "Login & Start Tracking"

2. **Add Daily Activities**
   - Select a time slot from the dropdown
   - Enter activity description
   - Choose category (Study, Sports, etc.)
   - Click "+ Add Activity"

3. **Manage Tasks**
   - Check the checkbox to mark task as completed
   - Click trash icon to delete an activity
   - Change the date to view different days

4. **Track Progress**
   - View today's statistics on the sidebar
   - Write daily notes in the notes section
   - Click "Save Notes" to save your progress

## Project Structure 📁

```
trackyourself/
├── index.html        # Login page
├── dashboard.html    # Main tracking dashboard
├── style.css         # All styling (responsive)
├── script.js         # Utility functions and features
└── README.md         # This file
```

## File Descriptions

### index.html
- Login page with beautiful UI
- Form validation for student information
- Animated starfield background
- Smooth transitions and glassmorphism effects

### dashboard.html
- Main application interface
- Student profile card
- Task management interface
- Daily notes section
- Responsive grid layout

### style.css
- Complete styling with CSS variables
- Dark theme with gradients
- Responsive breakpoints for mobile, tablet, desktop
- Animations and transitions
- Beautiful card designs

### script.js
- Utility functions for data management
- Statistics calculations
- Data export functionality
- Notification helpers
- Validation functions

## Key Features in Detail 🎯

### Time Slots Available
- 06:00-07:00 - Morning Sports
- 07:00-08:00 - Breakfast
- 08:00-12:00 - Classes
- 12:00-13:00 - Lunch
- 13:00-15:00 - Lab/Study
- 15:00-16:00 - Break
- 16:00-18:00 - Study/Project
- 18:00-19:00 - Dinner
- 19:00-22:00 - Study
- 22:00-23:30 - Personal Time

### Categories
- 📖 Study
- ⚽ Sports
- 💻 Project
- 🔬 Lab
- 🍽️ Food
- 😴 Sleep
- 📝 Other

### Statistics Tracked
- Total tasks added
- Completed tasks
- Pending tasks
- Completion percentage

## Browser Storage 💾

All your data is stored in your browser's localStorage:
- Student information
- Daily tasks and their status
- Daily notes

**Data is NOT stored on any server** - it's completely private!

## Branches Supported 🏫

- Computer Science (CSE)
- Electronics (ECE)
- Mechanical (ME)
- Civil (CE)
- Electrical (EEE)
- Information Technology (IT)

## Responsive Design 📱

The website is fully responsive and works on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops & Large screens

## Advanced Features (via Console) 🔧

You can use browser developer console for additional functions:

```javascript
// Export your data as JSON
exportData()

// Get today's statistics
getTodayStats()

// Get weekly statistics
getWeeklyStats()

// Calculate productivity score
calculateProductivityScore(stats)

// Get focus areas
getFocusAreas()
```

## Customization Potential 🎨

Future additions can include:
- Weekly/Monthly reports
- Achievement badges
- Study streaks
- Notification reminders
- Cloud backup
- Shared calendars with classmates
- Performance analytics
- Subject-wise tracking
- Exam schedule integration
- Group study sessions

## Browser Compatibility 🌐

- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

## Tips for Best Experience 💡

1. **Bookmark the page** for quick access
2. **Use consistent time slots** for better tracking
3. **Write daily notes** to track progress and lessons
4. **Check statistics regularly** to stay motivated
5. **Clear old tasks** if data gets too large

## Technical Stack 🛠️

- **HTML5** - Structure
- **CSS3** - Styling with variables and gradients
- **Vanilla JavaScript** - No frameworks, pure JS
- **localStorage API** - Data persistence
- **CSS Grid & Flexbox** - Responsive layouts

## Privacy & Data 🔒

- ✅ No data sent to any server
- ✅ Completely offline capable
- ✅ Data only stored on your device
- ✅ You have complete control
- ✅ Can clear all data anytime

## Troubleshooting 🐛

**Q: I lost my data after clearing browser cache?**
A: Clear browser data also clears localStorage. Use export function to backup!

**Q: Can I use this on multiple devices?**
A: Each device has its own storage. Manually export/import to transfer data.

**Q: How do I delete all data?**
A: Open console and run: `clearAllData()`

## Future Enhancements 🚀

- REST API backend integration
- Cloud synchronization
- Mobile app
- Study partner matching
- Event calendar integration
- Exam countdown
- CGPA tracker
- Attendance tracker
- Timetable management
- Notes attachment

## Support & Feedback 📧

For suggestions or issues, feel free to ask!

---

**Made with ❤️ for MMMUT Students**

Happy tracking! 🎓📚✨
