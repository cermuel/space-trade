# Spacetrade Technical Assessment

This project is a **Next.js web application** developed as part of the Spacetrade assessment. It implements the provided Figma design, integrates with the backend APIs, and follows clean architecture and best practices.

## 🚀 Features

- Built with **Next.js 14** and **TypeScript**
- **API integration** with Spacetrade staging backend
- Responsive UI based on the **Figma design**
- Clean and maintainable code structure
- Environment variables for easy configuration

## 📂 Project Structure

├── components/  
├── app/  
├── services/
├── constants/
├── context/
├── hooks/
├── providers/
├── utils/
├── .gitignore
└── README.md

## 🛠️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/cermuel/spacetrade.git
cd spacetrade
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Variables**
   Create a .env.local file in the root directory and add:

   NEXT_PUBLIC_BASE_URL=https://staging.getspacetrade.com

4. **Run the development serrver**

```bash
npm run dev
```
