 // Check if dark mode is saved in localStorage
 document.addEventListener('DOMContentLoaded', function() {
  // Load theme preference
  const savedTheme = localStorage.getItem('moodTrackerTheme');
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById('theme-icon').textContent = '☀️';
      document.getElementById('theme-text').textContent = 'Light Mode';
  }
  
  // Load mood entries from localStorage
  loadMoodEntries();
});

// Set the date input to today's date
document.getElementById('mood-date').valueAsDate = new Date();

// Selected mood
let selectedMood = null;

// Toggle between light and dark mode
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  
  if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark Mode';
      localStorage.setItem('moodTrackerTheme', 'light');
  } else {
      body.classList.add('dark-mode');
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light Mode';
      localStorage.setItem('moodTrackerTheme', 'dark');
  }
}

// Select a mood
function selectMood(mood) {
  selectedMood = mood;
  
  // Reset all mood options
  const moodOptions = document.querySelectorAll('.mood-option');
  moodOptions.forEach(option => {
      option.style.transform = 'scale(1)';
  });
  
  // Highlight selected mood
  const selectedOption = document.querySelector(`.mood-option:nth-child(${getMoodIndex(mood)})`);
  selectedOption.style.transform = 'scale(1.1)';
}

// Get mood index based on name
function getMoodIndex(mood) {
  const moods = ['happy', 'neutral', 'sad', 'calm', 'energetic'];
  return moods.indexOf(mood) + 1;
}

// Save mood entry
function saveMood() {
  if (!selectedMood) {
      alert('Please select a mood first!');
      return;
  }
  
  const date = document.getElementById('mood-date').value;
  const notes = document.querySelector('.mood-notes textarea').value;
  const formattedDate = formatDate(date);
  
  // Create mood entry object
  const moodEntry = {
      id: Date.now(), // Unique ID based on timestamp
      date: date,
      formattedDate: formattedDate,
      mood: selectedMood,
      notes: notes
  };
  
  // Save to localStorage
  saveMoodToStorage(moodEntry);
  
  // Add to UI
  addMoodEntryToUI(moodEntry);
  
  // Reset form
  document.querySelector('.mood-notes textarea').value = '';
  selectedMood = null;
  
  // Reset mood options
  const moodOptions = document.querySelectorAll('.mood-option');
  moodOptions.forEach(option => {
      option.style.transform = 'scale(1)';
  });

}

// Save mood entry to localStorage
function saveMoodToStorage(moodEntry) {
  let moodEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
  moodEntries.unshift(moodEntry); // Add to beginning of array
  localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
}

// Add mood entry to UI
function addMoodEntryToUI(moodEntry) {
  const moodEntries = document.getElementById('mood-entries');
  const newEntry = document.createElement('div');
  newEntry.className = 'mood-entry';
  newEntry.setAttribute('data-mood', moodEntry.mood);
  newEntry.setAttribute('data-id', moodEntry.id);
  
  const moodIcon = getMoodIcon(moodEntry.mood);
  
  newEntry.innerHTML = `
      <div class="entry-mood ${moodEntry.mood}">${moodIcon}</div>
      <div class="entry-details">
          <div class="entry-date">${moodEntry.formattedDate}</div>
          <div class="entry-notes">${moodEntry.notes || 'No notes added'}</div>
      </div>
  `;
  
  // Add new entry at the top
  moodEntries.insertBefore(newEntry, moodEntries.firstChild);
}

// Load mood entries from localStorage
function loadMoodEntries() {
  const moodEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
  const moodEntriesContainer = document.getElementById('mood-entries');
  
  // Clear existing entries
  moodEntriesContainer.innerHTML = '';
  
  // Add entries to UI
  moodEntries.forEach(entry => {
      addMoodEntryToUI(entry);
  });
}

// Clear all mood data
function clearMoodData() {
  if (confirm('Are you sure you want to delete all your mood data? This cannot be undone.')) {
      localStorage.removeItem('moodEntries');
      document.getElementById('mood-entries').innerHTML = '';
      alert('All mood data has been cleared.');
  }
}

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Get mood icon based on mood name
function getMoodIcon(mood) {
  const icons = {
      'happy': '😊',
      'normal': '😐',
      'sad': '😔',
      'calm': '😌',
      'energetic': '⚡'
  };
  return icons[mood] || '';
}

// Filter mood entries
function filterMoods(filter) {
  const entries = document.querySelectorAll('.mood-entry');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Update active filter button
  filterButtons.forEach(btn => {
      btn.classList.remove('active');
  });
  document.querySelector(`.filter-btn[onclick="filterMoods('${filter}')"]`).classList.add('active');
  
  // Show/hide entries based on filter
  entries.forEach(entry => {
      if (filter === 'all' || entry.getAttribute('data-mood') === filter) {
          entry.style.display = 'flex';
      } else {
          entry.style.display = 'none';
      }
  });
}