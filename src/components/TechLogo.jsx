import React from 'react'

const TechLogo = ({ name, size = 40 }) => {
  // Map technology names to their actual file names from your svc directory
  const logoMap = {
    'React': 'React.svg',
    'Next.js': 'Next.js.svg',
    'Node.js': 'Node.js.svg',
    'JavaScript': 'JavaScript.svg',
    'Nest.js': 'Nest.js.svg',
    'Vite.js': 'Vite.js.svg',
    'Python': 'Python.svg',
    'Django': 'Django.svg',
    'Laravel': 'Laravel.png',
    'Express': 'Express.svg',
    'AWS': 'AWS.png',
    'Docker': 'Docker.svg',
    'Kubernetes': 'Kubernetes.svg',
    'Azure': 'Azure.svg',
    'Terraform': 'HashiCorp Terraform.svg',
    'CircleCI': 'CircleCI.svg',
    'PostgreSQL': 'PostgresSQL.svg',
    'MongoDB': 'MongoDB.svg',
    'Redis': 'Redis.svg',
    'MySQL': 'MySQL.svg',
    'Firebase': 'Firebase.svg',
    'CodeIgniter': 'CodeIgniter.svg',
    'CakePHP': 'CakePHP.svg',
    'Ionic': 'Ionic.svg',
    'WordPress': 'WordPress.svg',
    'GitHub': 'GitHub.svg',
    'GitLab': 'GitLab.svg',
    'Google Cloud': 'Google Cloud.svg',
    'Digital Ocean': 'Digital Ocean.svg',
    'Argo CD': 'Argo CD.svg',
    'Rancher': 'Rancher.svg',
    'GitHub Actions': 'GitHub Actions.svg',
    'TypeScript': 'TypeScript.svg',
    'Tailwind CSS': 'Tailwind CSS.svg',
    'Vue.js': 'Vue.js.svg',
    'Elasticsearch': 'Elastic Search.svg',
    'Jenkins': 'Jenkins.svg',
    'Adobe Commerce': 'Adobe Commerce (Magneto).svg',
    'GitLab CI': 'GitLab.svg'
  }

  // No fallback logos needed since we now have all the actual SVG files

  const logoFile = logoMap[name]
  
  if (!logoFile) {
    // Fallback for unknown technologies
    return (
      <div style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#6b7280',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: size * 0.4,
        fontWeight: 'bold'
      }}>
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={`/svg/${logoFile}`}
      alt={name}
      width={size}
      height={size}
      style={{
        objectFit: 'contain',
        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
      }}
    />
  )
}

export default TechLogo