PROGRAMS := install test

all: $(PROGRAMS)

test:
	@./node_modules/.bin/mocha -R spec -r should

install:
	@npm install

.PHONY: all install test
