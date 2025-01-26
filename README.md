# CPS498-Interventive-Learning
CMU - Senior Design Project - Inventive Learning

## Prerequisites

Make sure the following are installed on your machine:

1. **Node.js** (LTS version recommended)  
   Download and install from [Node.js official website](https://nodejs.org/).

2. **npm** (comes with Node.js)  
   Verify installation by running:
   ```bash
   node -v
   npm -v
   ```

3. **http-server** (global installation required)
   ```bash
   npm install -g http-server
   ```

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository
Clone the project repository to your local machine:
```bash
git clone https://github.com/your-username/cps498-interventive-learning.git
```

Navigate into the project directory:
```bash
cd cps498-interventive-learning
```

### 2. Install Dependencies
Install the required dependencies:
```bash
npm install
```

### 3. Running the Development Server
For active development with hot-reloading, use the Parcel dev server:
```bash
npm run dev
```

The app will be served at [http://localhost:1234](http://localhost:1234). Parcel will watch for file changes and automatically refresh the browser.

### 4. Building for Production
To build the project for production:
```bash
npm run build
```

This will generate the production-ready files in the `dist/` directory.

### 5. Serving the Production Build
To serve the production build locally:
```bash
npm run start
```

The app will be served at [http://localhost:8080](http://localhost:8080).

---

## Project Structure

```
cps498-interventive-learning/
├── frontend/
│   ├── public/
│   │   ├── index.html      # Main HTML file
│   │   ├── styles.scss     # SASS styles
│   ├── src/                
├── dist/                   # Production build output
├── .cache/                 # Parcel cache (ignored in Git)
├── package.json            # Project configuration
├── .gitignore              # Git ignore rules
```
more to follow.
---

## Scripts

The following scripts are available:

- `npm run dev` - Starts the development server with hot-reloading.
- `npm run build` - Builds the app for production.
- `npm run start` - Serves the production build locally using `http-server`.

---

## Troubleshooting

### Common Issues

1. **`http-server` not found**  
   Ensure `http-server` is globally installed:
   ```bash
   npm install -g http-server
   ```

2. **Port Already in Use**  
   If port `8080` is in use when running `npm run start`, specify a different port:
   ```bash
   http-server ./dist -p 3000
   ```

3. **Permission Errors**  
   Run commands with administrator privileges if necessary.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a descriptive commit message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).





