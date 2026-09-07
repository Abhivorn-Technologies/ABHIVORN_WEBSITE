const fs = require('fs');
const path = require('path');

const options = {
  'CustomSoftware.tsx': `  },
  {
    id: "api-integration",
    title: "API & Cloud Integration",
    description: "Seamlessly connect your disparate systems, legacy software, and third-party services. We build secure and scalable APIs to ensure smooth data flow and enhanced operational efficiency.",
    features: ["Third-party APIs", "Cloud Migration", "Microservices", "Data Synchronization"]
  }
];`,
  'HRMSSoftware.tsx': `  },
  {
    id: "time-attendance",
    title: "Time & Attendance",
    description: "Accurately track employee hours, manage shifts, and streamline leave requests with our advanced attendance modules, fully integrated with your payroll system.",
    features: ["Biometric Integration", "Shift Planning", "Leave Management", "Real-time Tracking"]
  }
];`,
  'AIDevelopment.tsx': `  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "Harness the power of historical data to forecast future trends, customer behaviors, and market shifts. Make proactive, data-driven decisions that keep you ahead of the curve.",
    features: ["Trend Forecasting", "Risk Assessment", "Customer Churn Prediction", "Demand Planning"]
  }
];`,
  'WebDevelopmentHyderabad.tsx': `  },
  {
    id: "custom-web-apps",
    title: "Custom Web Apps",
    description: "Bespoke web applications built from scratch to solve your specific business challenges. Enjoy tailored features, high performance, and complete ownership of your digital product.",
    features: ["Tailored Features", "Progressive Web Apps", "Admin Dashboards", "Third-party APIs"]
  }
];`,
  'MobileAppDevelopment.tsx': `  },
  {
    id: "app-maintenance",
    title: "App Maintenance & Support",
    description: "Ensure your mobile application remains functional, secure, and up-to-date with the latest OS versions. We provide proactive monitoring, bug fixes, and feature enhancements.",
    features: ["Performance Monitoring", "OS Updates", "Bug Fixing", "Feature Enhancements"]
  }
];`,
  'HealthcareSoftware.tsx': `  },
  {
    id: "electronic-health-records",
    title: "Electronic Health Records",
    description: "Secure, compliant, and intuitive EHR systems that provide a holistic view of patient history, streamlining clinical workflows and improving the overall quality of care.",
    features: ["Patient History", "Secure Data Sharing", "Prescription Tracking", "Clinical Workflows"]
  }
];`
};

Object.keys(options).forEach(file => {
  const filePath = path.join(__dirname, 'src/pages', file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace the end of the deliverables array
  const searchPattern = /  \}\n\];/;
  if (content.match(searchPattern)) {
    content = content.replace(searchPattern, options[file]);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added 4th option to ${file}`);
  } else {
    console.log(`Could not find the insertion point in ${file}`);
  }
});
