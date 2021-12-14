# use base image with cypress included
FROM cypress/included:3.2.0

# set workdir
WORKDIR /tests

# copy current project dir to workdir inside the image
ADD . /tests

# to enter image in interactive mode, we must set this entrypoint
# entrypoint of base image is 'cypress run', so it runs the tests directly and exits the container
# ENTRYPOINT [ "bash" ]
