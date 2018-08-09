FROM ubuntu:xenial

##
## Image with all you need to install the site.
## docker build -t docsbuilder . ##Build the image
## docker run --rm -it docsbuilder /bin/bash ##start the container
## >git clone https://github.com/ConstellationBrands/docs
## >cd docs ##go into the directory
## >bundle install ##install dependencies
## >git config --global user.email "you@example.com" ##set up git
## >git config --global user.name "Your Name"
## >./deploy.sh ##deploy your changes
##

RUN apt-get update
RUN apt-get install -y ruby-dev
RUN apt-get install -y gcc
RUN apt-get install -y make
RUN apt-get install -y nodejs
RUN apt-get install -y git
RUN gem install middleman
