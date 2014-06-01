SRC = public/js/*.js
include node_modules/make-lint/index.mk

project:
	@npm install

.PHONY: project
