# Stage 1: Build the Jekyll site
FROM ruby:2.7-slim AS builder
RUN apt-get update && apt-get install -y build-essential
RUN gem install bundler -v 2.4.22
COPY . /site
WORKDIR /site
RUN bundle install
RUN bundle exec jekyll build
RUN ls -l /site/_site/prophecies  # Debug: List prophecies
RUN ls -l /site/_site/evidence    # Debug: List evidence
RUN cat /site/_site/prophecies/micah-5-2.html || echo "micah-5-2.html not found"  # Debug: Show content

# Stage 2: Serve with Nginx
FROM nginx:1.25
COPY --from=builder /site/_site /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
RUN ls -l /usr/share/nginx/html/prophecies  # Debug: List prophecies in Nginx
RUN ls -l /usr/share/nginx/html/evidence    # Debug: List evidence in Nginx
RUN cat /usr/share/nginx/html/prophecies/micah-5-2.html || echo "micah-5-2.html not found in Nginx"  # Debug: Show content
