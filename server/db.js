const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "data", "launches.db");

const db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    console.error("Error opening database:", error.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS launches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT,
      market TEXT,
      style TEXT,
      segment TEXT,
      launch_date TEXT,
      end_date TEXT,
      status TEXT DEFAULT 'Draft',
      creator TEXT,
      assigned_to TEXT,
      description TEXT,
      assets TEXT,
      archived INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `, (error) => {
    if (error) {
      console.error("Error creating launches table:", error.message);
    } else {
      console.log("Launches table ready.");
    }
  });
});

module.exports = db;