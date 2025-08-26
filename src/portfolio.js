/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sugandh",
  title: "Hi all, I'm Sugandh 👋",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 with 4+ years of experience crafting scalable cloud infrastructure, automating deployments, and building robust CI/CD pipelines. I love turning complex infrastructure challenges into elegant, automated solutions! 💻☁️"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sudosugandh",
  linkedin: "https://www.linkedin.com/in/isugandhkumar",
  gmail: "ksugandh0@gmail.com",
  gitlab: "https://gitlab.com/sugandhdevops",
  facebook: "https://www.facebook.com/sugandh.kumar",
  twitter: "https://twitter.com/the__sugandh",
  instagram: "https://www.instagram.com/the_sugandh",
  stackoverflow: "https://stackoverflow.com/users/sugandh-devops"
};

// Skills Section

const skillsSection = {
  title: "What I Do 🛠️",
  subTitle: "DEVOPS ENGINEER PASSIONATE ABOUT AUTOMATION, SCALABILITY, RELIABILITY, AND AI/ML INFRASTRUCTURE",
  skills: [
    emoji(
      "⚡ Design and implement robust CI/CD pipelines for automated testing, building, and deployment across multiple environments"
    ),
    emoji("☁️ Architect and manage cloud infrastructure on AWS, Azure, and GCP using Infrastructure as Code principles"),
    emoji(
      "📊 Implement comprehensive monitoring, logging, and alerting solutions for production environments with zero downtime"
    ),
    emoji(
      "🐳 Containerize applications using Docker and orchestrate with Kubernetes for scalable microservices architecture"
    ),
    emoji(
      "🔧 Automate infrastructure provisioning using Terraform, Ansible, and CloudFormation for consistent deployments"
    ),
    emoji(
      "🛡️ Implement security best practices, compliance measures, and disaster recovery solutions"
    ),
    emoji(
      "🧠 Design and manage MLOps pipelines for AI/ML model training, deployment, and monitoring"
    ),
    emoji(
      "🤖 Implement AI infrastructure management including GPU clusters, distributed training, and model serving"
    ),
    emoji(
      "📈 Build data pipelines and feature stores for machine learning workflows and real-time inference"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-mountain"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "ansible",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "prometheus",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "grafana",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "nginx",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "fas fa-memory"
    },
    {
      skillName: "elasticsearch",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "kubeflow",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "mlflow",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "airflow",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "kafka",
      fontAwesomeClassname: "fas fa-stream"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Integral University",
      logo: require("./assets/images/Integral_University,_Lucknow_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "2017 - 2021",
      desc: "Graduated with distinction from Integral University, Lucknow. Focused on software engineering, cloud computing, and distributed systems.",
      descBullets: [
        "Specialized in Cloud Computing and Distributed Systems",
        "Completed capstone project on Microservices Architecture",
        "Active member of DevOps and Cloud Computing clubs",
        "NAAC A+ Accredited University"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Platforms (AWS/Azure/GCP)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CI/CD & Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "Containerization & Orchestration",
      progressPercentage: "80%"
    },
    {
      Stack: "Infrastructure as Code",
      progressPercentage: "75%"
    },
    {
      Stack: "Monitoring & Observability",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "Hipster PTE LTD Singapore",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2025 – Present",
      desc: "Leading DevOps initiatives for cloud-native applications, implementing blue-green deployments, and managing comprehensive AWS infrastructure with focus on high availability and zero-downtime deployments.",
      descBullets: [
        "🔄 Implemented blue-green deployment strategies using AWS CodeDeploy, reducing deployment downtime to zero",
        "☁️ Managed comprehensive AWS services including EC2, RDS, S3, CloudFront, Route53, Lambda, and ECS",
        "🚀 Designed and maintained CI/CD pipelines using AWS CodePipeline and GitHub Actions for automated deployments",
        "🛡️ Implemented security best practices with AWS IAM, Security Groups, and WAF for enhanced application security",
        "📊 Set up monitoring and alerting using AWS CloudWatch, CloudTrail, and custom dashboards for real-time insights",
        "💰 Optimized AWS costs by 25% through resource right-sizing, reserved instances, and auto-scaling policies",
        "🔧 Automated infrastructure management using AWS CloudFormation and Terraform for consistent deployments",
        "🌐 Configured and maintained load balancers, auto-scaling groups, and multi-AZ deployments for high availability"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Laitkor Consultancy Services Pvt Ltd",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2024 – June 2025",
      desc: "Leading DevOps initiatives for a team of 15+ developers, architecting cloud infrastructure and CI/CD pipelines for multiple microservices with 99.9% uptime.",
      descBullets: [
        "🚀 Implemented GitOps workflow using ArgoCD, reducing deployment time by 60% and eliminating manual errors",
        "☁️ Designed and deployed multi-region Kubernetes clusters on AWS EKS supporting 50+ microservices",
        "🏗️ Automated infrastructure provisioning using Terraform, managing 200+ resources across 3 environments",
        "📊 Set up comprehensive monitoring with Prometheus, Grafana, and ELK stack achieving 99.9% uptime",
        "💰 Reduced cloud costs by 30% through resource optimization and intelligent auto-scaling policies",
        "🛡️ Implemented security best practices and compliance measures for SOC2 and GDPR requirements"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Jamtech Technologies Pvt Ltd",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "August 2023 – May 2024",
      desc: "Managed cloud infrastructure and deployment pipelines for SaaS applications serving 100K+ users with zero-downtime deployments.",
      descBullets: [
        "🔄 Built robust CI/CD pipelines using Jenkins and GitLab CI for 10+ applications with automated testing",
        "🐳 Containerized legacy applications using Docker, improving deployment consistency by 80%",
        "🏗️ Implemented Infrastructure as Code using Terraform and Ansible, reducing provisioning time by 70%",
        "📈 Set up monitoring and alerting using Prometheus and Grafana with 5-minute MTTR",
        "☁️ Managed AWS services including EC2, RDS, S3, CloudFront, and Route53 for high availability",
        "🔒 Implemented automated backup and disaster recovery solutions with 15-minute RTO"
      ]
    },
    {
      role: "Cloud Engineer",
      company: "Cedcoos Technologies",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "April 2021 – August 2023",
      desc: "Assisted in cloud migration and infrastructure setup for early-stage startup, managing AWS infrastructure and deployment processes.",
      descBullets: [
        "☁️ Successfully migrated on-premise applications to AWS cloud infrastructure with zero data loss",
        "🔄 Set up automated backup and disaster recovery solutions with 99.5% reliability",
        "🛡️ Implemented security best practices and compliance measures for early-stage requirements",
        "📚 Created comprehensive documentation and runbooks for operational procedures",
        "🚀 Reduced infrastructure costs by 40% through cloud optimization and resource management"
      ]
    }
  ]
};

// AI/ML DevOps Section

const aiDevOpsSection = {
  title: "AI/ML DevOps & MLOps 🧠",
  subtitle: "DEVOPS ENGINEERING FOR ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING INFRASTRUCTURE",
  display: true,
  projects: [
    {
      title: "MLOps Pipeline Architecture",
      description: "Designed and implemented end-to-end MLOps pipelines for machine learning model training, deployment, and monitoring using Kubeflow, MLflow, and AWS SageMaker.",
      technologies: ["Kubeflow", "MLflow", "AWS SageMaker", "Docker", "Kubernetes"],
      achievements: [
        "🚀 Automated ML model training and deployment pipelines reducing time-to-production by 70%",
        "📊 Implemented model versioning and A/B testing frameworks for ML model evaluation",
        "🔄 Set up automated retraining pipelines with data drift detection and model performance monitoring",
        "☁️ Managed GPU clusters and distributed training infrastructure for large-scale ML workloads"
      ]
    },
    {
      title: "AI Infrastructure Management",
      description: "Managed cloud infrastructure for AI/ML workloads including GPU instances, distributed computing clusters, and real-time inference services.",
      technologies: ["AWS EC2 P3/P4", "Google Cloud TPU", "Azure ML", "TensorFlow Serving", "NVIDIA Docker"],
      achievements: [
        "⚡ Optimized GPU utilization and cost management for deep learning workloads",
        "🌐 Deployed scalable inference services with auto-scaling and load balancing",
        "📈 Implemented monitoring and alerting for AI model performance and infrastructure health",
        "🔒 Secured AI infrastructure with proper access controls and data encryption"
      ]
    },
    {
      title: "Data Pipeline & Feature Store",
      description: "Built robust data pipelines and feature stores for machine learning workflows using modern data engineering tools and practices.",
      technologies: ["Apache Airflow", "Apache Kafka", "Redis", "Apache Spark", "Feature Store"],
      achievements: [
        "🔄 Automated data ingestion, processing, and feature engineering pipelines",
        "💾 Implemented feature stores for consistent feature serving across ML models",
        "📊 Set up real-time data streaming for online ML inference and model serving",
        "🛡️ Ensured data quality, lineage tracking, and compliance for ML workflows"
      ]
    },
    {
      title: "AI Model Deployment & Serving",
      description: "Implemented blue-green deployments and canary releases for AI models with automated rollback capabilities and performance monitoring.",
      technologies: ["TensorFlow Serving", "TorchServe", "Seldon Core", "Istio", "Prometheus"],
      achievements: [
        "🎯 Deployed AI models with zero-downtime using blue-green and canary deployment strategies",
        "📊 Implemented model performance monitoring and automated rollback mechanisms",
        "⚡ Optimized model serving latency and throughput for production workloads",
        "🔄 Set up automated model updates and version management systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Infrastructure Projects 🏗️",
  subtitle: "DEVOPS AND INFRASTRUCTURE PROJECTS I'VE DESIGNED AND IMPLEMENTED",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Multi-Cloud Kubernetes Platform",
      projectDesc: "Designed and implemented a multi-cloud Kubernetes platform supporting 50+ microservices with automated scaling, comprehensive monitoring, and disaster recovery capabilities.",
      footerLink: [
        {
          name: "🏗️ View Architecture",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "GitOps CI/CD Pipeline",
      projectDesc: "Built a complete GitOps workflow using ArgoCD, Jenkins, and Terraform for automated infrastructure and application deployments with zero-downtime releases.",
      footerLink: [
        {
          name: "🔄 View Pipeline",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "Observability Stack",
      projectDesc: "Implemented comprehensive monitoring and logging solution using Prometheus, Grafana, ELK stack, and Jaeger for distributed tracing with real-time alerting.",
      footerLink: [
        {
          name: "📊 View Dashboard",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/codeInLogo.webp"),
      projectName: "Cloud Cost Optimization",
      projectDesc: "Developed automated cost optimization strategies reducing cloud spending by 40% while maintaining performance and reliability across multiple cloud providers.",
      footerLink: [
        {
          name: "💰 View Savings",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "DevOps certifications, achievements, and contributions to the community!",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle:
        "Achieved AWS Solutions Architect Associate certification demonstrating expertise in designing distributed systems on AWS with 95% score.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "AWS Certification",
      footerLink: [
        {
          name: "🏆 View Certificate",
          url: "#"
        }
      ]
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle:
        "Earned CKA certification from Cloud Native Computing Foundation, validating advanced Kubernetes administration and troubleshooting skills.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Kubernetes Certification",
      footerLink: [
        {
          name: "🐳 View Certificate",
          url: "#"
        }
      ]
    },

    {
      title: "Terraform Associate Certification",
      subtitle: "Certified in HashiCorp Terraform Associate, demonstrating Infrastructure as Code expertise and best practices implementation.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Terraform Certification",
      footerLink: [
        {name: "🏗️ View Certificate", url: "#"}
      ]
    },
    {
      title: "Open Source Contributor",
      subtitle: "Active contributor to various DevOps and cloud-native open source projects including Kubernetes, Prometheus, and Terraform with 50+ contributions.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Open Source",
      footerLink: [
        {name: "🌟 View Contributions", url: "https://github.com/sugandh"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing my DevOps journey, best practices, and lessons learned from building scalable infrastructure and AI/ML systems.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@sugandh/implementing-blue-green-deployments-with-aws-codedeploy",
      title: "Implementing Blue-Green Deployments with AWS CodeDeploy: A Complete Guide",
      description:
        "Learn how to implement zero-downtime blue-green deployments using AWS CodeDeploy, including best practices, monitoring, and rollback strategies for production environments."
    },
    {
      url: "https://medium.com/@sugandh/building-mlops-pipeline-with-kubeflow-and-mlflow",
      title: "Building End-to-End MLOps Pipeline with Kubeflow and MLflow",
      description:
        "Comprehensive guide to building production-ready MLOps pipelines using Kubeflow for orchestration and MLflow for experiment tracking and model management."
    },
    {
      url: "https://medium.com/@sugandh/kubernetes-monitoring-best-practices-prometheus-grafana",
      title: "Kubernetes Monitoring Best Practices with Prometheus and Grafana",
      description:
        "Deep dive into monitoring Kubernetes clusters with Prometheus and Grafana, including custom metrics, alerting rules, and dashboard creation for production environments."
    },
    {
      url: "https://medium.com/@sugandh/terraform-modules-best-practices-reusable-infrastructure",
      title: "Terraform Modules: Best Practices for Reusable Infrastructure as Code",
      description:
        "Learn how to create maintainable and reusable Terraform modules, including versioning strategies, testing approaches, and CI/CD integration for infrastructure deployment."
    },
    {
      url: "https://medium.com/@sugandh/ai-model-deployment-strategies-production",
      title: "AI Model Deployment Strategies for Production: From Development to Scale",
      description:
        "Explore different AI model deployment strategies including blue-green deployments, canary releases, and A/B testing for machine learning models in production."
    },
    {
      url: "https://medium.com/@sugandh/cost-optimization-aws-kubernetes-clusters",
      title: "Cost Optimization Strategies for AWS and Kubernetes Clusters",
      description:
        "Practical strategies for reducing cloud costs while maintaining performance, including resource right-sizing, auto-scaling policies, and reserved instance management."
    },
    {
      url: "https://medium.com/@sugandh/gitops-workflow-argocd-kubernetes",
      title: "GitOps Workflow with ArgoCD: Declarative Kubernetes Deployments",
      description:
        "Implement GitOps workflow using ArgoCD for Kubernetes deployments, including multi-environment management, automated sync, and rollback capabilities."
    },
    {
      url: "https://medium.com/@sugandh/security-best-practices-devops-pipeline",
      title: "Security Best Practices for DevOps Pipelines and Cloud Infrastructure",
      description:
        "Essential security practices for DevOps pipelines including secrets management, access controls, vulnerability scanning, and compliance measures for production systems."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "SHARING DEVOPS KNOWLEDGE AND EXPERIENCES WITH THE COMMUNITY 🎤"
  ),

  talks: [
    {
      title: "GitOps: The Future of DevOps",
      subtitle: "DevOps Days Conference 2023",
      slides_url: "https://slides.com/sugandh/gitops-future-devops",
      event_url: "#"
    },
    {
      title: "Kubernetes in Production: Lessons Learned",
      subtitle: "Cloud Native Meetup 2023",
      slides_url: "https://slides.com/sugandh/k8s-production-lessons",
      event_url: "#"
    },
    {
      title: "Building Observability Stack from Scratch",
      subtitle: "Monitoring Summit 2022",
      slides_url: "https://slides.com/sugandh/observability-stack",
      event_url: "#"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DEVOPS DISCUSSIONS AND INDUSTRY INSIGHTS",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/devops-talks/embed/episodes/DevOps-Journey-with-Sugandh-e1abc123"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Connect! ☎️"),
  subtitle:
    "Interested in DevOps opportunities or want to discuss infrastructure challenges? I'm always excited to connect with fellow tech enthusiasts! 🚀",
  number: "+91-914-077-4908",
  email_address: "ksugandh0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sugandh_devops", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  aiDevOpsSection,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
