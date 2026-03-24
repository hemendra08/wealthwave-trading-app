# WealthWave (Zerodha Clone)

Welcome to WealthWave! This is a modern, full-stack trading and investment platform inspired by Zerodha. 

The project is divided into three main parts:
- **Frontend**: The public landing and marketing pages.
- **Dashboard**: The protected trading interface where users view charts, track their portfolio, and perform trades.
- **Backend**: The server that handles API requests, database connections, and user authentication.

---

## 🚀 Tech Stack

- **Frontend & Dashboard:** React 18, React Router DOM
- **UI & Styling:** Bootstrap (Frontend), Material UI & Emotion (Dashboard)
- **Charts:** Chart.js via `react-chartjs-2`
- **Backend:** Node.js, Express, Passport.js (Authentication)
- **Database:** MongoDB (Mongoose)

---

## 🛠️ How to Clone & Install

Follow these steps to get the project running locally on your machine.

### 1. Clone the repository
Open your terminal and run the following command to download the code:
```bash
git clone https://github.com/your-username/wealthwave.git
cd wealthwave
```

### 2. Install dependencies & run the apps
Because the project has three separate parts (Frontend, Dashboard, and Backend), you need to run them all at the same time. Open **three different terminal windows**, navigate to the main `wealthwave` folder in each, and run the following:

**Terminal 1 (Frontend):**
```bash
cd frontend
npm install
npm start
```
*Frontend runs on `http://localhost:3000`*

**Terminal 2 (Dashboard):**
```bash
cd dashboard
npm install
npm start
```
*Dashboard runs on `http://localhost:3001` (Accept the prompt to run on a different port)*

**Terminal 3 (Backend):**
```bash
cd backend
npm install
npm start
```
*Backend runs on `http://localhost:3002` (or whichever port is configured)*

---

## ⚙️ Environment Variables

To make the backend work, you need to connect it to a database. We use MongoDB.

1. Navigate to the `backend` folder.
2. Create a new file named `.env`.
3. Add the following line to your new `.env` file:

```env
MONGO_URL=mongodb+srv://<your_username>:<your_password>@<your_cluster_url>/?appName=zerodha
```

*Make sure to replace `<your_username>`, `<your_password>`, and `<your_cluster_url>` with your actual MongoDB credentials. **Do not share this file publicly or commit it to GitHub!***
