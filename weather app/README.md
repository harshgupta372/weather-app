# Weather App

This project showcases a modern, responsive weather application built with Next.js, React, and Tailwind CSS. It features real-time weather data fetching, a clean user interface, and dark mode support.

![Weather App Screenshot](https://source.unsplash.com/random/800x400/?weather,app)

## Features

- Real-time weather data fetching
- Search for weather by city name
- Display of temperature, weather conditions, humidity, and wind speed
- Responsive design with mobile support
- Dark mode toggle
- Built with Next.js and Tailwind CSS
- Utilizes shadcn/ui components

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:
   ```
   cd weather-app
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Set up your OpenWeatherMap API key:
   - Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
   - Replace `YOUR_OPENWEATHERMAP_API_KEY` in `components/weather-card.tsx` with your actual API key

### Running the Development Server

Run the development server:

```
npm run dev
```
or
```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the main application pages
- `components/`: Reusable React components
- `lib/`: Utility functions and helpers
- `public/`: Static assets

## Customization

- Modify the weather data display in `components/weather-card.tsx`
- Adjust the theme in `tailwind.config.ts`
- Update the content and styling in `app/page.tsx`

## Deployment

This project is set up for easy deployment to platforms like Vercel or Netlify. Simply connect your repository to your preferred hosting platform for automatic deployments.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).