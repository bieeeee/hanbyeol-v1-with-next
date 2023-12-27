module.exports = {
  apps: [{
    script: 'npm start'
  }],
  deploy: {
    production: {
      key: '~/.ssh/devops-1.pem',
      user: 'ubuntu',
      host: '13.125.97.153',
      ref: 'origin/master',
      repo: 'https://github.com/bieeeee/hanbyeol-v1-with-next',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
