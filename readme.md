# Server commands
# Run/start server from public folder -> live-server public = yarn run serve
# Port output of specific script to src/app.js -> babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
# Run jest tests in watch mode: yarn test -o --watch

# Build
# Build for pod: yarn run build:prod

# Run prod server with node
# node server/server.js

# Heroku
# push app to heroku: git push heroku master
# Start app: heroku open
# Logs: heroku logs

# SSH
# CHECK: ls -a ~/.ssh
# CREATE: ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
# RUNNING: eval $(ssh-agent -s)
# SETUP: ssh-add ~/.ssh/id_rsa
