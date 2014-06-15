CLIENT_TEMPLATES_SRC_DIR = ./public/templates/
CLIENT_TEMPLATES_OUTPUT_DIR = ./public/js/templates/

project: deps links
	@echo "Project built"

deps:
	@npm install

links: NODE_MODULES_VENDOR_PATH = ../../../node_modules/
links: VENDOR_JS_PATH           = public/vendor/js/
links: FLAT_UI_FONTS            = ../../node_modules/flat-ui/fonts/
links: FONTS_DIR                = public/fonts/
links:
	@mkdir -p public/vendor
	@unlink public/vendor/flat-ui
	@ln -fs ../../node_modules/flat-ui/ public/vendor/flat-ui
	@mkdir -p public/vendor/js

	@ln -fs ${NODE_MODULES_VENDOR_PATH}qwery/integration/ender.js ${VENDOR_JS_PATH}qwery.js
	@ln -fs ${NODE_MODULES_VENDOR_PATH}bonzo/integration/ender.js ${VENDOR_JS_PATH}bonzo.js
	@ln -fs ${NODE_MODULES_VENDOR_PATH}reqwest/reqwest.js ${VENDOR_JS_PATH}reqwest.js
	@ln -fs ${NODE_MODULES_VENDOR_PATH}lodash/lodash.js ${VENDOR_JS_PATH}lodash.js
	@ln -fs ${NODE_MODULES_VENDOR_PATH}page/index.js ${VENDOR_JS_PATH}page.js
	@ln -fs ${NODE_MODULES_VENDOR_PATH}bean/bean.js ${VENDOR_JS_PATH}bean.js
	@ln -fs ${NODE_MODULES_VENDOR_PATH}morpheus/integration/ender.js ${VENDOR_JS_PATH}morpheus.js
	@node_modules/ender/bin/ender build qwery bean bonzo reqwest morpheus -o ${VENDOR_JS_PATH}/ender.js
	@ln -fs ${NODE_MODULES_VENDOR_PATH}handlebars/dist/handlebars.runtime.js ${VENDOR_JS_PATH}handlebars.runtime.js

	@ln -fs ${FLAT_UI_FONTS}flat-ui-icons-regular.eot  ${FONTS_DIR}flat-ui-icons-regular.eot
	@ln -fs ${FLAT_UI_FONTS}flat-ui-icons-regular.svg  ${FONTS_DIR}flat-ui-icons-regular.svg
	@ln -fs ${FLAT_UI_FONTS}flat-ui-icons-regular.ttf  ${FONTS_DIR}flat-ui-icons-regular.ttf
	@ln -fs ${FLAT_UI_FONTS}flat-ui-icons-regular.woff ${FONTS_DIR}flat-ui-icons-regular.woff

lint: SRC         = public/js/src/**/*.js
lint: LINT_CONFIG = config/lintconfig.json
lint: include node_modules/make-lint/index.mk

templates:
	@./node_modules/handlebars/bin/handlebars ${CLIENT_TEMPLATES_SRC_DIR}*.mustache \
	 -n tas.Templates -e mustache -f ${CLIENT_TEMPLATES_OUTPUT_DIR}templates.js;
	@echo "..templates recompiled to ${CLIENT_TEMPLATES_OUTPUT_DIR}templates.js"

.PHONY: project
