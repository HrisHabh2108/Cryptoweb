# Coin Matrix (Cryptoweb)

Coin Matrix is a robust cryptocurrency tracking application built with **React** and **Vite**. It provides real-time data on cryptocurrencies, including current prices, market caps, and historical performance charts powered by the CoinGecko API. [web:1][web:4]

## 🚀 Features

- **Live Crypto Data**: View real-time prices, 24h changes, and market cap rankings for top cryptocurrencies.  
- **Trending Carousel**: Interactive carousel displaying the top trending coins by 24h price change.  
- **Dynamic Coin Pages**: Detailed views for individual coins featuring description, rank, current price, and market cap.  
- **Interactive Charts**: Visualise historical price data (24h, 30 Days, 3 Months, 1 Year) using Chart.js.  
- **Currency Converter**: Global context support to instantly switch prices between **USD** ($) and **INR** (₹).  
- **Search & Pagination**: Easily find specific cryptocurrencies with a search bar and navigate through the list via pagination.  
- **Responsive Design**: Built with Tailwind CSS and Material UI for a seamless experience on all devices.  

## 🛠 Tech Stack

- **Frontend Framework**: [React.js](https://react.dev/) (v19)  
- **Build Tool**: [Vite](https://vitejs.dev/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Material UI](https://mui.com/)  
- **Routing**: [React Router DOM](https://reactrouter.com/)  
- **State Management**: React Context API (for currency management)  
- **Data Fetching**: [Axios](https://axios-http.com/)  
- **Charting**: [React Chartjs 2](https://react-chartjs-2.js.org/) & Chart.js  
- **Carousel**: [React Alice Carousel](https://github.com/vZder/react-alice-carousel)  
- **API**: [CoinGecko API](https://www.coingecko.com/en/api)  

## 📂 Project Structure

```
src/
├── components/
│ ├── Banner.jsx # Hero section with title and carousel
│ ├── Carousel.jsx # Trending coins carousel
│ ├── Coinchart.jsx # Historical data line chart
│ ├── CoinPage.jsx # Individual coin detail view
│ ├── Coinstable.jsx # Main table of coins with search/pagination
│ ├── Cryptocontext.jsx # Context provider for currency state
│ ├── Header.jsx # Navigation and currency selector
│ └── ...
├── config/
│ └── api.jsx # API endpoints configuration
├── App.jsx # Main application routing
└── main.jsx # Entry point

```
## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher recommended)  
- npm or yarn  

### Installation

1. **Clone the repository**

    ```
    git clone https://github.com/hrishabh2108/cryptoweb.git
    cd cryptoweb
    ```

2. **Install dependencies**

    ```
    npm install
    ```

3. **Run the development server**

    ```
    npm run dev
    ```

4. **Open in browser**  
   Visit `http://localhost:5173` (or the port shown in your terminal) to view the app.

## 🔌 API Reference

This project uses the public **CoinGecko API**. No API key is required for the free tier, but rate limits apply. [web:4]

- **Coin List**: `/coins/markets`  
- **Single Coin**: `/coins/{id}`  
- **Historical Chart**: `/coins/{id}/market_chart`  
- **Trending**: `/coins/markets` (filtered by order)  

## 🎨 Styling

The application uses a custom dark theme (e.g., `#14161A`) defined in `App.css` and `index.css`. Tailwind classes are used for layout and utility styling, while Material UI components (such as loaders and inputs) handle specific UI elements. [web:4]

## 📄 License

This project is open source and available under the **MIT License**. You can include a `LICENSE` file in the repository with the MIT terms or link to an MIT template. [web:13]


