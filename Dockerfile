# Build a Directus image with the Schema Sync extension preinstalled
FROM directus/directus:latest

# Install the extension (npm works fine in the official image)
RUN npm install directus-extension-schema-sync

# Optional: include schema files at build-time too (runtime volume will override)
COPY ./schema-sync /directus/schema-sync
