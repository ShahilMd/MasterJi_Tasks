# MasterJi_Tasks
# Assingment 1
# Mood Tracker Web App

A lightweight, modern web application for tracking daily moods with a clean, intuitive interface. This app allows users to record their emotional states along with notes and visualize their mood history over time.

![Mood Tracker App Screenshot]()

live Preview(https://moodifytrack.netlify.app/)

## Features

- **Daily Mood Logging**: Track your mood with 5 different emotional states
- **Notes & Context**: Add personalized notes to each mood entry
- **Persistent Storage**: All data is saved to your browser's local storage
- **Mood History**: Review your past moods in a visually appealing timeline
- **Dark/Light Mode**: Toggle between themes based on your preference
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Filter Capability**: Filter your mood history to see specific emotional patterns
- **Privacy-Focused**: All data stays on your device - no server or cloud storage

## Mood Categories

The app supports tracking five different mood states:

- 😊 **Happy**: For days when you're feeling positive and upbeat
- 😐 **Normal**: For balanced or ordinary days
- 😔 **Sad**: For tracking down days or negative emotions
- 😌 **Calm**: For peaceful, relaxed, or tranquil feelings
- ⚡ **Energetic**: For particularly active or exciting days

## Getting Started

### Installation

No installation required! This is a vanilla HTML/CSS/JavaScript application.

1. Download the HTML file
2. Open it in any modern web browser

### Usage

1. **Select the date** you want to track (defaults to today)
2. **Choose your mood** by clicking on one of the mood icons
3. **Add optional notes** about your day or feelings
4. **Click "Save Mood"** to record your entry
5. View your mood history in the section below

### Data Management

- **Automatic Saving**: All entries are automatically saved to your browser's local storage

## Technical Implementation

### Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling and animations with custom properties
- **JavaScript**: Interactivity and local data management
- **LocalStorage API**: Client-side data persistence

### Code Structure

The application is built as a single HTML file with embedded CSS and JavaScript:

- **CSS**: Uses custom properties (variables) for theming and color management
- **JavaScript**: Functions for mood selection, storage, retrieval, and UI updates
- **Data Structure**: Mood entries are stored as JSON objects with timestamps, mood types, dates, and notes


## Limitations

- Data is stored in the browser's localStorage, which has a storage limit of approximately 5MB
- Clearing browser data will delete all mood history
- No cloud synchronization across devices


Created with ❤️ by Md Shahil
