<br>
<div align="center">
  <img align="center" width="35%" src="https://expediente-garavito.netlify.app/assets/Logo-Y0S_9xCL.webp" alt="Logo" />
  <h1 align="center">Expediente Garavito API</h1>
</div>

<p align="center">
  RESTful API backend for the **Expediente Garavito** transmedia storytelling platform.  
</p>

<br>

## 📄 Description

This backend powers the interactive features of the [Expediente Garavito](https://expediente-garavito.netlify.app) platform, including:

- Submitting and retrieving user stories.
- Storing blog entries and podcast data.
- Providing geo-located event markers for the interactive map.
  
The API is designed to be lightweight, fast, and scalable — supporting both the main platform and future integrations.

<br>

## ⛏ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/FazeElian/expediente-garavito-tnt-api.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   PORT=5000
   DATABASE_URL=postgresql://your_user:your_password@localhost:5432/your_database
   ```

4. Start server (For local development):
   ```bash
   npm run dev:api
   ```

<br>

## 🚀 Features

- 🌍 RESTful endpoints for frontend consumption
- 📬 Submit user experiences and blog entries
- 🐘 PostgreSQL database support
- 🛡️ CORS & security middleware

<br>

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **PostgreSQL** + **Sequelize**
- **dotenv** for environment variables
- **CORS** and **morgan** for middleware
- Hosted on **Render**

<br>

## 🚀 Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

<br>
