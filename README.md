# 📊 Performance Metrics Dashboard

A comprehensive analysis of hard disk drive (HDD) performance during software build and publish operations, with interactive visualizations and practical recommendations for developers.

## 🌐 Live Demo

Visit the live dashboard: **[kusl.github.io/performancemetrics](https://kusl.github.io/performancemetrics)**

## 📖 Overview

This project analyzes real-world disk performance data collected during 21+ iterations of build/publish cycles on traditional hard disk storage. The dashboard provides insights into how HDD performance affects developer productivity and offers practical guidance for storage optimization.

### What's Inside

- **📈 Interactive Performance Trends** - Visualize queue length, throughput, and disk utilization over time
- **📊 Distribution Analysis** - Understand performance patterns across multiple test runs
- **🔍 Correlation Analysis** - Explore relationships between different performance metrics
- **📋 Summary Statistics** - Key performance indicators and trends
- **💡 Educational Content** - Friendly analysis of HDD vs SSD for development work

## 🚀 Key Findings

Our analysis reveals:
- **Average build time**: 15-17 minutes per cycle
- **Disk utilization**: 354% average (indicating severe bottlenecking)
- **Throughput**: 30.5 MB/s average, with improvement trends over time
- **Performance stabilization**: After approximately 10 iterations

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Charts**: Recharts library for interactive visualizations
- **Styling**: Tailwind CSS for responsive design
- **Build Tool**: Vite for fast development and building
- **Deployment**: GitHub Pages

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- Yarn or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kusl/performancemetrics.git
   cd performancemetrics
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
yarn build
# or
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
performancemetrics/
├── src/
│   ├── components/
│   │   ├── DiskPerformanceDashboard.tsx  # Main dashboard component
│   │   └── StorageAnalysisComponent.tsx  # Educational analysis
│   ├── App.tsx                           # Main application
│   ├── main.tsx                          # Application entry point
│   └── App.css                           # Global styles
├── public/                               # Static assets
├── .github/workflows/                    # GitHub Actions for deployment
└── README.md                             # You are here!
```

## 📊 Data Source

The performance data was collected using PowerShell scripts that monitored:
- **Average Disk Queue Length** - Number of pending I/O operations
- **Bytes Per Second** - Disk throughput measurements  
- **Percent Disk Time** - Percentage of time disk was busy
- **System Statistics** - Additional performance metrics

Data spans 21 primary test iterations plus additional validation runs, providing a comprehensive view of HDD performance patterns.

## 🎨 Features

### Interactive Dashboard
- **Multiple Visualization Types**: Line charts, bar charts, and scatter plots
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Tabbed Interface**: Organized into logical sections for easy navigation
- **Hover Tooltips**: Detailed information on data points

### Educational Content
- **Non-Technical Explanations**: Storage concepts explained in simple terms
- **Practical Recommendations**: Actionable advice for different budgets
- **Cost-Benefit Analysis**: Real-world impact calculations
- **Expandable Sections**: Progressive disclosure for different detail levels

## 🚢 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on pushes to the `main` branch
2. Installs dependencies and builds the project
3. Deploys the `dist` folder to the `gh-pages` branch
4. Makes the site available at the GitHub Pages URL

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

- 🐛 **Report bugs** or suggest improvements via issues
- 📊 **Add more data analysis** features or visualizations  
- 🎨 **Improve the UI/UX** design and accessibility
- 📝 **Enhance documentation** or add more educational content
- 🔧 **Optimize performance** or add new features

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with clear, descriptive commits
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request with a detailed description

## 🐛 Known Issues

- Large datasets may cause slight performance impact on older browsers
- Some chart animations may be reduced on mobile devices for performance

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support & Questions

- **Issues**: [GitHub Issues](https://github.com/kusl/performancemetrics/issues)
- **Discussions**: [GitHub Discussions](https://github.com/kusl/performancemetrics/discussions)

## 🎯 Future Enhancements

- [ ] Add SSD performance comparison data
- [ ] Implement data export functionality  
- [ ] Add more detailed system information display
- [ ] Create mobile-optimized chart layouts
- [ ] Add performance recommendations engine
- [ ] Implement dark mode theme

## 📚 Learn More

- [Understanding Disk Performance Metrics](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/typeperf)
- [HDD vs SSD Performance Analysis](https://www.crucial.com/articles/about-ssd/ssd-vs-hdd)
- [React Performance Best Practices](https://react.dev/learn/render-and-commit)
- [Recharts Documentation](https://recharts.org/en-US/)

---

<div align="center">

**Built with ❤️ for the developer community**

[🌐 Live Demo](https://kusl.github.io/performancemetrics) | [📊 GitHub](https://github.com/kusl/performancemetrics) | [🐛 Issues](https://github.com/kusl/performancemetrics/issues)

</div>

**⚠️ AI Disclosure**: This project includes code generated with assistance from Large Language Models (LLMs). 
