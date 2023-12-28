module.exports = {
  apps: [{
    script: 'npm start',
    env_production: {
      NODE_ENV: process.env,
    }
  }],
  deploy: {
    production: {
      key: 'devops-1.pem',
      user: 'ubuntu',
      host: '3.35.9.182',
      ref: 'origin/master',
      repo: 'git@github.com:bieeeee/hanbyeol-v1-with-next.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
