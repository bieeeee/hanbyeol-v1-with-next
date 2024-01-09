module.exports = {
  apps: [{
    name: 'v1next',
    script: 'node_modules/next/dist/bin/next',
    args: "start",
    watch: true,
    exec_mode : "cluster",
    node_args: "",
    env_production: {
      NODE_ENV: "production"
    }
  }],
  deploy: {
    production: {
      key: '~/.ssh/devops-1.pem',
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
