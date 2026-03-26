// MMMUT Student Tracker - Main Script File
// This file contains utility functions and shared functionality

// Check if user is logged in
function checkUserLogin() {
    const userData = localStorage.getItem('mmmutUserData');
    if (!userData) {
        return false;
    }
    return true;
}

// Get current user data
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('mmmutUserData')) || null;
}

// Clear all data (for debugging)
function clearAllData() {
    if (confirm('This will erase all your data! Are you sure?')) {
        localStorage.removeItem('mmmutUserData');
        localStorage.removeItem('mmmutTasks');
        localStorage.removeItem('mmmutNotes');
        alert('All data cleared!');
        window.location.href = 'index.html';
    }
}

// Export data as JSON
function exportData() {
    const userData = getCurrentUser();
    const tasks = localStorage.getItem('mmmutTasks');
    const notes = localStorage.getItem('mmmutNotes');
    
    const allData = {
        student: userData,
        tasks: JSON.parse(tasks || '{}'),
        notes: JSON.parse(notes || '{}')
    };
    
    const dataStr = JSON.stringify(allData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${userData.rollNo}_${new Date().toISOString().split('T')[0]}_data.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// Get stats for a specific date range
function getStatsForRange(startDate, endDate) {
    const tasks = JSON.parse(localStorage.getItem('mmmutTasks')) || {};
    let totalTasks = 0;
    let completedTasks = 0;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    for (let date in tasks) {
        const dateObj = new Date(date);
        if (dateObj >= start && dateObj <= end) {
            totalTasks += tasks[date].length;
            completedTasks += tasks[date].filter(t => t.completed).length;
        }
    }
    
    return {
        total: totalTasks,
        completed: completedTasks,
        pending: totalTasks - completedTasks,
        percentage: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
    };
}

// Get today's productivity stats
function getTodayStats() {
    const today = new Date().toISOString().split('T')[0];
    return getStatsForRange(today, today);
}

// Get weekly stats
function getWeeklyStats() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    return getStatsForRange(
        startOfWeek.toISOString().split('T')[0],
        endOfWeek.toISOString().split('T')[0]
    );
}

// Format date to readable format
function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-IN', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Get time of day greeting
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return '🌅 Good Morning';
    if (hour < 18) return '☀️ Good Afternoon';
    return '🌙 Good Evening';
}

// Calculate productivity score (0-100)
function calculateProductivityScore(stats) {
    const completionRate = stats.percentage;
    const taskVolume = Math.min(stats.total / 10 * 100, 50); // Cap at 50
    return Math.round(completionRate * 0.7 + (stats.total > 0 ? taskVolume : 0) * 0.3);
}

// Get focus areas based on tasks
function getFocusAreas() {
    const tasks = JSON.parse(localStorage.getItem('mmmutTasks')) || {};
    const categories = {};
    
    for (let date in tasks) {
        tasks[date].forEach(task => {
            categories[task.category] = (categories[task.category] || 0) + 1;
        });
    }
    
    return Object.entries(categories)
        .sort((a, b) => b[1] - a[1])
        .map(([category, count]) => ({
            category,
            count
        }));
}

// Get study time calculation
function getStudyTime() {
    const today = new Date().toISOString().split('T')[0];
    const tasks = JSON.parse(localStorage.getItem('mmmutTasks')) || {};
    const todayTasks = tasks[today] || [];
    
    const studyTasks = todayTasks.filter(t => t.category === 'Study');
    return studyTasks.length;
}

// Validate roll number format
function validateRollNo(rollNo) {
    return /^\d{8}$/.test(rollNo);
}

// Add reminder notifications (if browser supports it)
function initializeNotifications() {
    if ('Notification' in window && Notification.permission === 'granted') {
        // Schedule reminders for different times
        scheduleReminders();
    }
}

function scheduleReminders() {
    // Morning reminder at 6 AM
    checkAndNotify(6, 0, 'Time to start your day! 🌅');
    
    // Study reminder at 8 AM
    checkAndNotify(8, 0, 'Classes starting soon! 📚');
    
    // Afternoon reminder at 2 PM
    checkAndNotify(14, 0, 'Time for lunch and rest! 🍽️');
    
    // Evening reminder at 6 PM
    checkAndNotify(18, 0, 'Evening study session! 💻');
}

function checkAndNotify(targetHour, targetMinute, message) {
    const now = new Date();
    if (now.getHours() === targetHour && now.getMinutes() === targetMinute) {
        new Notification('MMMUT Tracker', {
            body: message,
            icon: '📚'
        });
    }
}

// Request notification permission
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('MMMUT Tracker', {
                    body: 'Notifications enabled! 🔔',
                    icon: '📚'
                });
            }
        });
    }
}

// Console welcome message
console.log(
    '%c🎓 Welcome to MMMUT Student Tracker! 🎓', 
    'color: #6366f1; font-size: 16px; font-weight: bold;'
);
console.log(
    '%cEnjoy tracking your daily routine and achieving your goals!',
    'color: #8b5cf6; font-size: 14px;'
);
