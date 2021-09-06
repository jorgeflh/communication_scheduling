FROM node:14-slim
ENV HOME=/home/app
COPY package.json yarn.lock $HOME/communication_scheduling/
WORKDIR $HOME/communication_scheduling
RUN yarn
COPY . $HOME/communication_scheduling
CMD [ "yarn", "start" ]
EXPOSE 5000