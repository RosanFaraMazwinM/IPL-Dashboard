# 🏏 IPL Dashboard

A responsive IPL Dashboard built using React.js that allows users to explore IPL teams, view their latest match details, and check recent match statistics.

## 🚀 Features

- **IPL Teams:** View a list of all IPL teams with their logos.
- **Team Details:** Select a team to view its match information.
- **Latest Match:** Display the latest match details, including opponent, date, venue, result, and player information.
- **Recent Matches:** View the team's recent match results.
- **Match Statistics:** Visualize Won, Lost, and Drawn match statistics using Recharts Pie Chart.
- **Back Navigation:** Navigate back to the Home page using the Back button.
- **Responsive Design:** Optimized layouts for desktop, tablet, and mobile devices.
- **Loading Indicator:** Display a loader while fetching API data.

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- React Router
- Recharts
- REST API

## 📊 Match Statistics

The Team Matches page includes a Pie Chart displaying:

- 🟢 Won Matches
- 🔴 Lost Matches
- 🟡 Drawn Matches

Statistics are calculated using the recent matches received from the API.

## 🔗 API

**IPL Teams API:**
```text
https://apis.ccbp.in/ipl
```

**Team Matches API:**
```text
https://apis.ccbp.in/ipl/{id}
```

## 📂 Project Structure

```text
src/
├── components/
│   ├── Home/
│   ├── TeamCard/
│   ├── TeamMatches/
│   ├── LatestMatch/
│   └── MatchCard/
├── App.js
└── index.js
```

## ⚙️ Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/RosanFaraMazwinM/IPL-Dashboard.git
```

2. Navigate to the project folder:

```bash
cd IPL-Dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

## 👩‍💻 Developer

**Rosan Fara Mazwin M**

- GitHub: [RosanFaraMazwinM](https://github.com/RosanFaraMazwinM)

## 📌 Project Status

Enhancement completed with additional match statistics, navigation, and responsive UI improvements.
