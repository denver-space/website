# Stage 1: Build the application
FROM node:lts AS build
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Run the application
FROM node:lts AS runtime
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=4321
ENV SUPABASE_URL=""
ENV SUPABASE_ANON_KEY=""
ENV PUBLIC_EMAIL_KEY=""

# Expose the port
EXPOSE 4321

# Command to run the application
CMD ["node", "./dist/server/entry.mjs"]
