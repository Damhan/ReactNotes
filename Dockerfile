#Stage 1: Setup
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

#Stage 2: Production
FROM nginx:alpine
#If this project needs react routes uncomment the line below and follow the instructions on: https://medium.com/greedygame-engineering/so-you-want-to-dockerize-your-react-app-64fbbb74c217
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]