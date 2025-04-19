### BotBattlr
BotBattlr is a React application that allows users to build their own bot army. 
Users can browse through a collection of bots, enlist them into their army, release them, or permanently discharge them from service.

## Features

- View a collection of available bots
- Enlist bots into your army
- Release bots from your army
- Permanently discharge bots from the collection

## Technologies

- React
- Tailwind CSS
- JavaScript
- JSON to hold bot data

Component Structure

- App: The main component that manages state and contains the application logic
- BotCollection: Displays all available bots that can be enlisted
- YourBotArmy: Shows the bots currently enlisted in your army
- BotCard: A reusable component that displays information about each bot

## Getting Started
Prerequisites
npm

Installation

Clone the repository:
```bash
git clone https://github.com/Duane-Njenga/BotBattlr
```
Navigate to the project directory:
```bash
cd botbattlr
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
Open your browser and visit http://localhost:5173

## Usage

- Enlist a Bot: Click the "Enlist" button on any bot card in the Bot Collection
- Release a Bot: Click the "Release" button on any bot card in Your Bot Army
- Discharge a Bot: Click the "X" button on any bot card to permanently remove it

# API
The application fetches data from a db.json file hosted on render at https://botbattlr-json.onrender.com/bots and includes functionality to:

~ GET all bots
~ DELETE a bot by ID

# Styling
The application uses Tailwind CSS for styling with responsive design elements including:

- Cards with rounded borders and shadows
- Hover effects on buttons
- Conditional rendering based on bot enlistment status

# License
This project is licensed under the MIT License